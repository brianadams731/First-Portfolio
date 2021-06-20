import React from "react";
import Tech from "../components/Tech";
import ImageCarousel from "../components/ImageCarousel.js";


import "../styles/clickMod.css";

import useProjects from "../hooks/useProjects.js";

import {motion} from "framer-motion"

const ClickMod = (props) =>{
    const project = useProjects(props.type,props.typeKey);

    return(
        <motion.div onClick={(e)=>e.stopPropagation()} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  transition={{duration:.3}} className="click-mod-wrapper">
            <div className="exit" onClick={props.exit}>
                <motion.svg whileHover={{stroke:"#F0717B", scale:1.2}} whileTap={{scale:1}} strokeWidth="5" stroke="#FFFFFF" width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 32L32 2M32 32L2 2" />
                </motion.svg>
            </div>
            <div className="info-wrap">
                <div className="title-wrap">
                    <h1 className="num" >0{project?.tech.length}</h1>
                    <h1 className="title">{project?.name}</h1>
                </div>
                <div className="content-wrap">
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.2}} className="carousel-img-wrap">
                        <ImageCarousel images={project?.img} />
                    </motion.div>
                    <div className="description-wrap">
                        <div className="app-desc">
                            <p>{project?.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tech">
                <Tech techUsed={project?.tech}/>
            </div>
            <div className="link-wrap">
                <a target="_blank" rel="noopener noreferrer" href={project?.link}>See Project</a>
            </div>
        </motion.div>
    )
}

export default ClickMod;

/*useEffect(()=>{
    history.
    history.listen((a,action)=>{
        if(action==="POP"){
            history.location.pathname("/")
            props.exit();
        }
    })
    return ()=>{
        console.log(history)
    }
},[])*/