import {useEffect,useState} from "react";
import {motion} from "framer-motion";

const useImageFetch = (imgArray) =>{
    const [images,setImages] = useState([]);
    useEffect(()=>{
        setImages([]);
        imgArray?.forEach((item)=>{
            setImages(prevState =>([...prevState,<motion.img initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} key={item} src={`${process.env.PUBLIC_URL}/assets/${item}`} loading="lazy" alt="porfolioImg"/>]))
        })
    },[imgArray])
    return images;
}

export default useImageFetch;