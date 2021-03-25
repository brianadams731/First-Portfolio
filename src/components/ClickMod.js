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
            <svg className="back-svg" viewBox="0 0 218 661" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0V158.5L109 248.5V356L199 446V661" stroke="rgba(255,255,255,.26)" strokeWidth="5"/>
                <path d="M109 0V159.5L199 249.5V357L109 447V661" stroke="rgba(255,255,255,.26)" strokeWidth="5"/>
                <path d="M199 0V160.5L19 340.5V661" stroke="rgba(255,255,255,.26)" strokeWidth="5"/>
            </svg>

            <div className="exit" onClick={props.exit}>
                x
            </div>
            
            <div className="title-wrap">
                <h1>{project?.name}</h1>
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