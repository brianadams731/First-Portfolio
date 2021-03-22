import React from "react";
import Tech from "../components/Tech";
import ImageCarousel from "../components/ImageCarousel.js";

import "../styles/clickMod.css";

import useProjects from "../hooks/useProjects.js";

import {motion} from "framer-motion"

const ClickMod = (props) =>{
    const projects = useProjects();

    return(
        <motion.div onMouseDown={(e)=>e.stopPropagation()}initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  transition={{duration:.3}} className="click-mod-wrapper glass">
            <div className="exit" onClick={props.exit}>x</div>
            <div className="title-wrap">
                <h1>{projects.current[props.type][props.typeKey]?.name}</h1>
            </div>
            <div className="content-wrap">
            <ImageCarousel images={projects.current[props.type][props.typeKey]?.img} />
                <div className="description-wrap">
                    <div className="app-desc">
                        <p>{projects.current[props.type][props.typeKey]?.desc}</p>
                    </div>
                </div>
            </div>
            <div className="tech">
                <Tech techUsed={projects.current[props.type][props.typeKey]?.tech}/>
            </div>
            <div className="link-wrap">
                <a target="_blank" rel="noopener noreferrer" href={projects?.current[props.type][props.typeKey]?.link}>See Project</a>
            </div>
        </motion.div>
    )
}

export default ClickMod;