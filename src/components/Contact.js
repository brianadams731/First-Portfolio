import React from "react";
import {motion} from "framer-motion";

import "../styles/contact.css";

const Contact = () =>{
    return (
        <motion.div onClick={(e)=>{e.stopPropagation()}}className="contact-wrap glass">
            contact
        </motion.div>
    )
}

export default Contact;