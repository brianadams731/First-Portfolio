import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";

import "../styles/contactForm.css"

const ContactForm = ({exit}) =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState(true);
    const [submitted,setSubmitted] = useState(false);
    const [trySubmit,setTrySubmit] = useState(false);
    const handelSubmit = (e) =>{
        e.preventDefault();
        setTrySubmit(true);
        if(!error){
            setSubmitted(true);
            const jsonBody = JSON.stringify({name, email, message});
            console.log(jsonBody)
            postMsg(jsonBody)
        }
    }

    const postMsg = async (obj) =>{
        const data = await fetch("https://thoughtgrove.herokuapp.com/portfolio",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:obj
        })
        const parsed = await data.json();
        console.log(parsed);
    }

    useEffect(()=>{
        if(/^\S+@\S+\.\S+$/.test(email)){
            setError(false);
        }else{
            setError(true);
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
                <div><label htmlFor="name">Name</label><input type="text" name="name" className="name" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}/></div>
                <motion.div initial={{x:error?-20:0}} animate={{x:error&&trySubmit?[0,-7,7,-7,7,0]:0}} transition={{duration:.7}} style={{color:error&&trySubmit?"#F0717B":"white"}}><label htmlFor="email">Email</label><input type="text" className="email" value={email} name="email" onChange={(e)=>{
                    setEmail(e.target.value);
                }}/></motion.div>
                <div><label htmlFor="message">Message</label><textarea value={message} name="message" className="message" rows="5" cols="50" onChange={(e)=>{
                    setMessage(e.target.value);
                }}/></div>

                <button style={{backgroundColor:error?"rgb(132, 132, 132)":"white"}} type="submit" className="form-btn">Submit</button>
            </form>
        </motion.div>
    )
}


export default ContactForm;