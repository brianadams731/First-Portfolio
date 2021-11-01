import React, {useState, useEffect, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import "../styles/imageCarousel.css";

import useInterval from "../hooks/useInterval.js"
import useImageFetch from "../hooks/useImageFetch.js";

const ImageCarousel = (props) =>{
    const images = useImageFetch(props.images);
    const [imgIndex, setImgIndex] = useState(0);
    let timer = useRef(false);

    const [modelEnter,setModelEnter] = useState(false);
    const [showControls, setShowControls] = useState(false);

    useEffect(()=>{
        return ()=>{
            if(timer.current){
                clearTimeout(timer)
            }
        }
    },[])

    // Auto Rotates image carousel
    useInterval(()=>{
        if(modelEnter){
            return;
        }
        if(imgIndex < images.length - 1){
            setImgIndex((ind)=>ind+1);
        }else if(imgIndex === images.length - 1){
            setImgIndex(0);
        } 
    },5000)

    
    const blurControls = () =>{
        if(!modelEnter && !timer.current){
            setShowControls(true);
            timer.current = setTimeout(()=>{
                setShowControls?.(false)
                timer.current = false;
            },2000)
        }
    }

    const refreshTimer = () =>{
        if(timer.current){
            clearTimeout(timer.current);
            timer.current = setTimeout(()=>{
                setShowControls?.(false)
                timer.current = false;
            },2000)
        }
    }
    
    const hoverImage = () =>{
        if(/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            return;
        }
        setShowControls(true);
        setModelEnter(true);
    }
    
    const exitHover = () =>{
        setShowControls(false);
        setModelEnter(false)
    }

    return (
        <div onMouseEnter={hoverImage} onMouseLeave={exitHover} onClick={blurControls} className="carousel-wrap noselect">
            <AnimatePresence>
                {images[imgIndex]}
                {showControls&&<motion.div key="left" initial={{opacity:0,y:"-50%"}} animate={{opacity:1,y:"-50%"}} exit={{opacity:0,y:"-50%"}} whileTap={{scale:1}} whileHover={{scale:1.2}} className="imgLeft" onClick={()=>{
                    refreshTimer();
                    if(imgIndex>0){
                        setImgIndex(prev => (prev-1));
                    }else{
                        setImgIndex(images.length-1)
                    }
                }}><h3>&#8249;</h3></motion.div>}
                {showControls&&<motion.div key="right" initial={{opacity:0,y:"-50%"}} animate={{opacity:1,y:"-50%"}} exit={{opacity:0,y:"-50%"}} whileTap={{scale:1}} whileHover={{scale:1.2}} className="imgRight" onClick={()=>{
                    refreshTimer();
                    if(imgIndex<images.length-1){
                        setImgIndex(prev => (prev+1));
                    }else{
                        setImgIndex(0)
                    }
                }}><h3>&#8250;</h3></motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default ImageCarousel;