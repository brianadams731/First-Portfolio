import {motion, AnimatePresence} from "framer-motion";
import {useRef, useState} from "react";
import "../styles/main.css";


import HoverMod from "./HoverMod";
import ClickMod from "./ClickMod";
import ContactForm from "./ContactForm";

import useScreenSize from "../hooks/useScreenSize";
import Contact from "./Contact";

function App() {
  const pathDuration = useRef(5);
  const dotDelay = useRef(5);

  const [showMod,setShowMod] = useState(false);
  const [modXY, setModXY] = useState([0,0]);

  const [modType,setModType] = useState();
  const [modKey,setModKey] = useState();

  const [displayProject,setDisplayProject] = useState(false);
  const [displayContact,setDisplayContact] = useState(false);

  const narrowScreen = useScreenSize();

  const mountPrep = (e,type,key,setShow) =>{
    unMountAllMod();
    e.stopPropagation()
    modSetUp(e,type,key)
    setShow(true)
  }

  const unMountAllMod=()=>{
    setDisplayContact(false);
    setDisplayProject(false);
  }

  const clickModSetUp = (e,type,key) =>{
    mountPrep(e,type,key,setDisplayProject)
  }

  const contactModSetUp = (e,type,key) =>{
    mountPrep(e,type,key,setDisplayContact)
  }

  const modSetUp = (e,type,key) =>{
    if(displayProject){
      return;
    }
    let pos = e.target.getBoundingClientRect();
    setModXY([pos.x,pos.y])
    setModType(type);
    setModKey(key);
  }

  const hoverModSetUp = (e,type,key) =>{
    if(displayContact||displayProject){
      return
    }
      modSetUp(e,type,key)
      setShowMod(true);
  }

  const unMountHoverMod = () =>{
    setShowMod(false);
  }

  const hoverVer = {
    active:{
      scale:1.2,
      transition:{
        duration:.1,
        delay:.02 // delay so bounding box is computed before scale, this is hacky refactor!
      }
    },
    popIn:{
      opacity:1,
      x:0,
      y:0,
      transition:{
        delay: dotDelay.current,
        duration:.5,
      },

    },
    click:{
      scale:1,
      transition:{
        duration:.05,
        delay:0
      }
    },
    hovInitial:{
      opacity:0,
    }
  }

  const pathVer = {
    pathInitial : {
      pathLength:0,
    },
    animPath:{
      pathLength:1,
      transition:{
        duration:pathDuration.current,
      }
    },
  }

  return (
    <div className="app-wrap" onClick={unMountAllMod}>
      <AnimatePresence>
        {showMod&&!displayProject?<HoverMod pos={modXY} typeKey={modKey} type={modType} />:null}
        {displayProject?<ClickMod exit={unMountAllMod} typeKey={modKey} type={modType} />:null}
        {displayContact?modKey==="form"?<ContactForm key="contact-form"/>:<Contact key="contact"/>:null}
      </AnimatePresence>

      <div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:dotDelay.current}} className="nameBox noselect">
        <h1>Brian Adams</h1>
        <h3>Frontend Developer</h3>
      </div>

      <motion.div className="legend noselect" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:dotDelay.current + .1, duration:1}}>
        <div className="legBox">
          <div className="colorBox red"></div><h3>Projects</h3>
        </div>
        <div className="legBox">
          <div className="colorBox green"></div><h3>About Me</h3>
        </div>
        <div className="legBox">
          <div className="colorBox blue"></div><h3>Contact</h3>
        </div>
      </motion.div>

      <svg width="856" height="675" viewBox="0 0 856 675" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/*CONTACT */}
        <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M449 306V386L583 520V656" stroke="#89ddf1" strokeWidth="10"/>
        
        <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","form")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","form")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="583" cy="656" r="19" fill="#ffb487"/>
        <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","connect")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","connect")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="580" cy="520" r="19" fill="#ffb487"/>

        {/*ABOUT ME*/}
        <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M449 305.5L522 232.5V93.5L596.5 19H739" stroke="#b9e871" strokeWidth="10"/>
        
        <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="519" cy="233" r="19" fill="#ffb487"/>
        <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="739" cy="19" r="19" fill="#ffb487"/>
        
        {/*ABOUT ME*/}
        <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M449 306L407 348L358 397V498L310.1 545.5H19" stroke="#b9e871" strokeWidth="10"/>
        
        <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="360" cy="395" r="19" fill="#ffb487"/>
        <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="313" cy="546" r="19" fill="#ffb487"/>
        <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="19" cy="546" r="19" fill="#ffb487"/>

        {/*PROJECTS RIGHT*/}
        <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M449 306L500 357L551 306H683L715 274H837" stroke="#f07178" strokeWidth="10"/>
        
        <motion.circle initial={"hovInitial"}  onClick={(e)=>{clickModSetUp(e,"projects","soulShine")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","soulShine")}} onMouseLeave={unMountHoverMod} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="837" cy="274" r="19" fill="#ffb487"/>
        <motion.circle initial={"hovInitial"} onClick={(e)=>{clickModSetUp(e,"projects","sideScroller")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","sideScroller")}} onMouseLeave={unMountHoverMod} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="553" cy="307" r="19" fill="#ffb487"/>

        {/*PROJECTS LEFT*/}
        <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M449 306H335L215 186V94L139 18" stroke="#f07178" strokeWidth="10"/>
        
        <motion.circle initial={"hovInitial"} onClick={(e)=>{clickModSetUp(e,"projects","recypher")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","recypher")}} onMouseLeave={unMountHoverMod} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="139" cy="19" r="19" fill="#ffb487"/>
        <motion.circle initial={"hovInitial"} onClick={(e)=>{clickModSetUp(e,"projects","elderLawForm")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","elderLawForm")}} onMouseLeave={unMountHoverMod} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="215" cy="182" r="19" fill="#ffb487"/>

        <circle cx="449" cy="305" r="19" fill="#ffb487"/>

      </svg>
    </div>
  );
}

export default App;
