import { useState } from "react"
import { toast } from "react-toastify"
import { Header } from "../../components/header/Header"
import { apiController } from "../../controller/api.controller"
import style from "./style.module.css"
import { Link, useNavigate } from "react-router-dom"

export const Configuracao=()=>{
    const navigate = useNavigate()
    const logout=()=>{
        localStorage.removeItem("token")
            localStorage.removeItem("user")
            navigate("/")
    }
    
    return <>   
    <Header hidden="config"/>
    
    <main>
      <form action="">
       <h1 className={style.h1}>Configurações</h1>

      </form>
      
      <button onClick={logout}>Sair da Conta</button>
    </main>
    </>
}