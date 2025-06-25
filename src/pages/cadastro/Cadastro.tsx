import { useState } from "react"
import { toast } from "react-toastify"
import { Header } from "../../components/header/Header"
import { apiController } from "../../controller/api.controller"
import Lstyle from "../login/Lstyle.module.css"
import style from "../cadastro/style.module.css"
import { Link, useNavigate } from "react-router-dom"

export const Cadastro=()=>{
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [name,setName] = useState("")
    const fazerCadastro = async (e:React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        const body = {
            password:pass,
            email:email,
            name
        }
      try {
         const res = await apiController.post("/usuarios",body)
            console.log(res,"res do axios")
       if(res.data){
            toast.success("Cadastrado com sucesso")
           
            setTimeout(() => {
                navigate("/login")
            }, 3000);
       }
       } catch (error:any) {
        console.log(error,"error")
        toast.error(error.response.data.message)
      }
        console.log("fazer cadastro", email)
        console.log("fazer cadastro",pass)
    }

    return <>
    <Header/>
    <main className={Lstyle.main}>
        <form className={Lstyle.form} onSubmit={(event)=>fazerCadastro(event)}>
            <fieldset>
                <label htmlFor="name">Nome</label>
                <input  id="name" type="text" placeholder="escreva seu nome"
                 onChange={(e)=>setName(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input  id="email" type="text" placeholder="escreva seu e-mail"
                 onChange={(e)=>setEmail(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" placeholder="*****"
                 onChange={(e)=>setPass(e.target.value)}
                />

            </fieldset>
            <button type="submit">Cadastro</button>
               <Link className={style.login} to={"/login"}>Já tenho cadastro</Link>
        </form>
    </main>
    </>
}
