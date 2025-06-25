
import { Link } from "react-router-dom"
import { Iconify } from "../iconify/Iconify"
import style from "./style.module.css"

interface HeaderProps{
    hidden?:"config"|"home"|"mensage"
}

export const Header =({hidden}:HeaderProps)=>{
    return <header className={style.header}>
<div className={style.TituloDiv}>
         <h1 className={style.Titulo}>The Script</h1>
         <fieldset className={style.fieldset}>
            <Iconify icon="iconamoon:search-duotone" className={style.icon} />
            <input className={style.input} type="text" placeholder="Procurar..." />
        </fieldset>
</div>
        <nav className={style.nav}>
             <Link to="/"> 
             <Iconify icon="bi:houses-fill"/>
             </Link> 

            {hidden != "config" && <Link to="/configuracao">
            <Iconify icon="line-md:cog-loop"/>
            </Link>}

         <Link to="/mensagens">
         <Iconify icon="streamline-pixel:email-mail-chat"/>
         </Link>
            
        </nav>
    </header>
}