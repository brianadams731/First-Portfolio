import React from "react";
import {motion} from "framer-motion";

import ContactForm from "./ContactForm.js";
import ContactSocial from "./ContactSocial";

import "../styles/contact.css"


const Contact = (props) =>{
    return (
        <motion.div onClick={(e)=>{e.stopPropagation()}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="contact-wrap">
            {props.typeKey==="form"?<ContactForm />:<ContactSocial />}
        </motion.div>
    )
}

export default Contact;