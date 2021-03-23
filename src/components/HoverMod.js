import React, {useRef, useEffect, useState} from "react";

import "../styles/hoverMod.css";
import useProjects from "../hooks/useProjects.js"
import {motion} from "framer-motion";

const HoverMod = (props) =>{
    const project = useProjects(props.type,props.typeKey);
    const self = useRef();
    const [width, setWidth] = useState();
    const [height,setHeight] = useState();

    useEffect(()=>{
        setWidth(self.current.getBoundingClientRect().width)
        setHeight(self.current.getBoundingClientRect().height)
    },[props.typeKey])

    return (
        <motion.div ref={self} style={{height:"40px", left:`${props.pos[0]- width/2 + 19}px`, top:`${props.pos[1]-height-5}px`}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:.2}}} className="project-mod-wrap" key="hover">
            <div className="header-box"><h3 className="mod-hover">{project.name}</h3></div>
        </motion.div>
    )
}

export default HoverMod;