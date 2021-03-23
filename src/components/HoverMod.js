import React from "react";

import "../styles/hoverMod.css";
import useProjects from "../hooks/useProjects.js"
import {motion} from "framer-motion";

const HoverMod = (props) =>{
    const project = useProjects(props.type,props.typeKey);

    

    return (
        <motion.div style={{left:`${props.pos[0]+19}px`, top:`${props.pos[1]-5}px`}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:.2}}} className="project-mod-wrap" key="hover">
            <div className="header-box"><h3 className="mod-hover">{project.name}</h3></div>
        </motion.div>
    )
}

export default HoverMod;