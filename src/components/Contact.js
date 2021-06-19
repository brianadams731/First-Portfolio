import React from "react";
import {motion} from "framer-motion";

import ContactForm from "./ContactForm.js";
import ContactSocial from "./ContactSocial";

import "../styles/contact.css"


const Contact = (props) =>{
    return (
        <motion.div onClick={(e)=>{e.stopPropagation()}} initial={{x:"-150vw", y:"-50%"}} animate={{x:"-50%", y:"-50%"}} exit={{x:"75vw", y:"-50%"}} transition={{duration:.6}} className="contact-wrap">
            {props.typeKey==="form"?<ContactForm exit={props.exit}/>:<ContactSocial />}
        </motion.div>
    )
}

export default Contact;