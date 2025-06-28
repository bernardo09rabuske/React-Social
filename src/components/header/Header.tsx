
import { Link } from "react-router-dom"
import { Iconify } from "../iconify/Iconify"
import style from "./style.module.css"

interface HeaderProps{
    hidden?:"config"|"home"|"mensage"|"user"
}

export const Header =({hidden}:HeaderProps)=>{
    let user = null
    if(localStorage.getItem("user")){

        user = JSON.parse(localStorage.getItem("user")!)
    }
    return <header className={style.header}>
<div className={style.TituloDiv}>
         <h1 className={style.Titulo}>The Script</h1>
         <fieldset className={style.fieldset}>
            <Iconify icon="iconamoon:search-duotone" className={style.icon} />
            <input className={style.input} type="text" placeholder="Procurar..." />
        </fieldset>
</div>
        <nav className={style.nav}>
             {hidden != "home" && <Link to="/"> 
             <Iconify icon="bi:houses-fill"/>
             </Link> }

            {hidden != "config" && <Link to="/configuracao">
            <Iconify icon="fa6-solid:user-gear"/>
            </Link>}

         {hidden != "mensage" && <Link to="/mensagens">
         <Iconify icon="streamline-pixel:email-mail-chat"/>
         </Link>}
            
            {hidden != "user" && user && <Link to={`/usuario/${user.id}`}>
            <Iconify icon="ion:people-circle-outline"/>
            </Link>}

        </nav>
    </header>
}