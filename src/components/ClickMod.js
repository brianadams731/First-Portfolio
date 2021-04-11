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
                x
            </div>
            <div className="info-wrap">
                <div className="title-wrap">
                    <h1 className="num" >0{project?.tech.length}</h1>
                    <h1 className="title">{project?.name}</h1>
                </div>
                <div className="content-wrap">
                    <div className="carousel-img-wrap">
                        <ImageCarousel images={project?.img} />
                    </div>
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