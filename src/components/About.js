import React from "react";
import Skills from "./Skills.js"
import Interests from "./Interests.js"

import {motion} from "framer-motion";

import "../styles/about.css"

const About = (props) =>{
    
    return (
        <motion.div onClick={(e)=>e.stopPropagation()} initial={{x:"-130vw", y:"-50%"}} animate={{x:"-50%", y:"-50%"}} exit={{x:"100vw", y:"-50%"}} transition={{duration:.7}} className="about-wrap">
            {props.typeKey==="skills"?<Skills />:<Interests />}
        </motion.div>
    )
}

export default About;