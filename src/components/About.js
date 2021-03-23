import React from "react";
import Skills from "./Skills.js"
import Interests from "./Interests.js"

import {motion} from "framer-motion";


const About = (props) =>{
    
    return (
        <motion.div onClick={(e)=>e.stopPropagation()} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute-center">
            {props.typeKey==="skills"?<Skills />:<Interests />}
        </motion.div>
    )
}

export default About;