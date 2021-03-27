import React from "react";
import {motion} from "framer-motion";

import ContactForm from "./ContactForm.js";
import ContactSocial from "./ContactSocial";

import "../styles/contact.css"


const Contact = (props) =>{
    return (
        <motion.div onClick={(e)=>{e.stopPropagation()}} initial={{x:"-100vw"}} animate={{x:0}} exit={{x:"100vw"}} transition={{duration:.6}} className="contact-wrap">
            {props.typeKey==="form"?<ContactForm exit={props.exit}/>:<ContactSocial />}
        </motion.div>
    )
}

export default Contact;