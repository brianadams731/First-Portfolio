import React from "react";
import Skills from "./Skills.js"
import Interests from "./Interests.js"

import {motion} from "framer-motion";

import "../styles/about.css"

const About = (props) =>{
    
    return (
        <motion.div onClick={(e)=>e.stopPropagation()} initial={{x:"-100vw"}} animate={{x:0}} exit={{x:"100vw"}} transition={{duration:.6}} className="about-wrap">
            {props.typeKey==="skills"?<Skills />:<Interests />}
        </motion.div>
    )
}

export default About;