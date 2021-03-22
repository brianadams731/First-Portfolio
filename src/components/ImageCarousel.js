import React, {useState} from "react";
import {AnimatePresence} from "framer-motion";
import "../styles/imageCarousel.css";


import useImageFetch from "../hooks/useImageFetch.js";

const ImageCarousel = (props) =>{
    const images = useImageFetch(props.images)
    const [imgIndex, setImgIndex] = useState(0);

    return (
        <div className="carousel-wrap">
            <div className="imgLeft" onMouseDown={()=>{
                if(imgIndex>0){
                    setImgIndex(prev => (prev-1));
                }else{
                    setImgIndex(images.length-1)
                }
            }}></div>
            <AnimatePresence>
                {images[imgIndex]}
            </AnimatePresence>
            <div className="imgRight" onMouseDown={()=>{
                if(imgIndex<images.length-1){
                    setImgIndex(prev => (prev+1));
                }else{
                    setImgIndex(0)
                }
            }}></div>
        </div>
    )
}

export default ImageCarousel;