import {useState,useEffect} from "react"

const useScreenSize = () =>{
    const [narrowScreen,setNarrowScreen] = useState(window.innerWidth<900);

    const updateWindowWidth = () =>{
        if(window.innerWidth < 900){
            setNarrowScreen(true);
        }else if(window.innerWidth >= 900){
            setNarrowScreen(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("resize",updateWindowWidth);
        return ()=> window.removeEventListener("resize",updateWindowWidth)
    },[])

    return narrowScreen;
}

export default useScreenSize;