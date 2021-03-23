import React, {useState} from "react";
import {motion} from "framer-motion";

import "../styles/contactForm.css"

const ContactForm = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState(false);

    const handelSubmit = (e) =>{
        e.preventDefault();
        if(!email || email.length===0){
            setError(true);
            console.log(error)
        }else{
            setError(false);
            console.log(name,email,message)
        }
    }

    return (
        <motion.div onClick={(e)=>{e.stopPropagation()}} className="contact-form-wrap glass">
            <form onSubmit={(e)=>handelSubmit(e)}>
                <div>Name<input type="text" name="name" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}/></div>
                <div style={{color:error?"red":"black"}}>Email<input type="text" value={email} name="email" onChange={(e)=>{
                    setEmail(e.target.value);
                }}/></div>
                <div>Message<textarea value={message} name="message" rows="5" cols="50" onChange={(e)=>{
                    setMessage(e.target.value);
                }}/></div>

                <button type="submit" className="form-btn">Submit</button>
            </form>
        </motion.div>
    )
}


export default ContactForm;