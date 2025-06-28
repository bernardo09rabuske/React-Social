import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { useNavigate } from "react-router-dom"
import type {iPosts, Post} from "../../schemas/posts.schemas"

interface FeedProps {
    idUsuario?: string
}

export const Feed=({idUsuario}:FeedProps)=>{
    const navigate = useNavigate()
    const [posts,setPosts] = useState([] as iPosts)
    const [loading,setLoading] = useState(true)
    const goToPerfil = (post:Post) => {
        console.log(post,"post")
        navigate(`/usuario/${post.usuario.id}`)
    }
    const getPosts = async()=>{
        setLoading(true)
        const res = await apiController.get("/posts")
        console.log(res.data,"res")
        const posts : iPosts = res.data
        if(posts){
            setTimeout(() => {
                if(idUsuario){
                    const filterPosts = posts.filter((post)=>String(post.usuario.id) != idUsuario)
                    setPosts(filterPosts)
                }else{

                    setPosts(posts)
                }
                setLoading(false)
            }, 2000);
        }else {
            setLoading(false)
        }
    }
    useEffect( ()=>{
        getPosts()
    },[])
    return <section className={style.feed}>
        <div className={style.divPai}>
        <div className={style.div1}>
          <p>0</p>
          <p>Posts</p>
        </div>
        <div className={style.div}>
          <p>0</p>
          <p >seguidores</p>
        </div>
        <div className={style.div}>
          <p>0</p>
          <p>seguindo</p>
        </div>
        </div>
        <div className={style.h1}>
            <h1>Bernardo Rabuske</h1>
            <h2 className={style.h2}>@rabuskebernardo</h2>
        </div>
        <div className={style.p}>
            <p className={style.p1}>C</p>
            <p className={style.p2}>P</p>
            <p className={style.p3}>H</p>
            <p className={style.mais}>+</p>
        </div>
        {
            loading && <p>Carregando</p>
        }
        {
        posts.length === 0 && !loading ?
            <p></p>
        : <ul className={style.ul}>
           {
             posts.map((post)=>{
                return <li className={style.li} key={post.id} onClick={()=>goToPerfil(post)}>
                    <p>{post.usuario.id}</p>
                    <p>{post.content}</p>
                    </li>
            })
           }

        </ul>
        }
       
    </section>
}