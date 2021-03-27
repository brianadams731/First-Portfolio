import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";

import "../styles/contactForm.css"

const ContactForm = ({exit}) =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState(false);
    const [submitted,setSubmitted] = useState(false)
    const handelSubmit = (e) =>{
        e.preventDefault();
        if(!email || email.length===0){
            setError(true);
        }else{
            setError(false);
            setSubmitted(true);
            console.log(name,email,message)
        }
    }
    useEffect(()=>{
        if(email || email.length>0){
            setError(false)
        }
    },[email])

    useEffect(()=>{
        if(submitted){
            exit();
        }
    },[submitted,exit])

    return (
        <motion.div onClick={(e)=>{e.stopPropagation()}} className="contact-form-wrap glass">
            <form onSubmit={(e)=>handelSubmit(e)}>
                <div>Name<input type="text" name="name" className="name" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}/></div>
                <motion.div initial={{x:error?-20:0}} animate={{x:error?[0,-7,7,-7,7,0]:0}} transition={{duration:.7}} style={{color:error?"#F0717B":"white"}}>Email<input type="text" className="email" value={email} name="email" onChange={(e)=>{
                    setEmail(e.target.value);
                }}/></motion.div>
                <div>Message<textarea value={message} name="message" className="message" rows="5" cols="50" onChange={(e)=>{
                    setMessage(e.target.value);
                }}/></div>

                <button style={{backgroundColor:email.length>0?"white":"rgb(132, 132, 132)"}} type="submit" className="form-btn">Submit</button>
            </form>
        </motion.div>
    )
}


export default ContactForm;