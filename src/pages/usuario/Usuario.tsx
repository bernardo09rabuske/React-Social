import { useParams } from "react-router-dom"
import { Feed } from "../../components/feed/Feed"
import { Header } from "../../components/header/Header"
import style from "./style.module.css" 
import { Iconify } from "../../components/iconify/Iconify"

export const Usuario=()=>{
    const params = useParams()
    const user = {url:"",id:""}


    return <>
    <Header hidden="user"/>
    
    <main className={style.main}>
        <section className={style.profile}>
            {user.url && <img src={user.url} alt="" className={style.imgs}/>}
            {!user.url && 
                <div className={style.img}>
                    <Iconify icon= "line-md:account-small"/>
                </div>
            }
        <Feed idUsuario={params.id}/>
        </section>

        <section className={style.posts}>
            <h1>Sobre</h1>
        </section>

        <section className={style.feedReal}>
            <h1>Agora...</h1>
        </section>
    </main>
    </>
}