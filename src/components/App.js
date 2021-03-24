import {motion, AnimatePresence} from "framer-motion";
import {useRef, useState} from "react";
import "../styles/main.css";


import HoverMod from "./HoverMod";
import ClickMod from "./ClickMod";
import Contact from "./Contact";
import About from "./About";

import useScreenSize from "../hooks/useScreenSize";


function App() {
  const pathDuration = useRef(6);
  const dotDelay = useRef(6);

  const [showMod,setShowMod] = useState(false);
  const [modXY, setModXY] = useState([0,0]);

  const [modType,setModType] = useState();
  const [modKey,setModKey] = useState();

  const [displayProject,setDisplayProject] = useState(false);
  const [displayContact,setDisplayContact] = useState(false);
  const [displayAbout,setDisplayAbout] = useState(false);

  // eslint-disable-next-line
  const narrowScreen = useScreenSize();

  const mountPrep = (e,type,key,setShow) =>{
    e.stopPropagation()
    unMountAllMod(); // is behaving asyncronusly
    modSetUp(e,type,key)
    setShowMod(false);
    setShow(true)
  }

  const unMountAllMod=()=>{
    setDisplayContact(false);
    setDisplayProject(false);
    setDisplayAbout(false);
  }

  const clickModSetUp = (e,type,key) =>{
    mountPrep(e,type,key,setDisplayProject)
  }

  const contactModSetUp = (e,type,key) =>{
    mountPrep(e,type,key,setDisplayContact)
  }

  const aboutModSetUp=(e,type,key) =>{
    mountPrep(e,type,key,setDisplayAbout)
  }

  const modSetUp = (e,type,key) =>{
    if(displayProject||displayAbout||displayContact){
      return;
    }
    let pos = e.target.getBoundingClientRect();
    setModXY([pos.x,pos.y])
    setModType(type);
    setModKey(key);
  }

  const hoverModSetUp = (e,type,key) =>{
    if(!displayContact&&!displayProject&&!displayAbout){
      if(type!==modType||key!==modKey){
        modSetUp(e,type,key)
      }
      setShowMod(true);
    }
  }

  const unMountHoverMod = () =>{
    setShowMod(false);
  }

  const hoverVer = {
    active:{
      scale:1.2,
      transition:{
        duration:.1,
      }
    },
    popIn:{
      opacity:1,
      x:0,
      y:0,
      transition:{
        delay: narrowScreen?dotDelay.current/1.3:dotDelay.current,
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
    },
  }

  return (
    <div className="app-wrap" onClick={unMountAllMod}>
      <div className="header">
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
      </div>

      <div style={{display:narrowScreen?"none":"block"}}className="wide-svg-wrap">
        <svg viewBox="0 0 1440 378" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M0 19.5H561L724 182.5L791.5 250H1440" transition={{delay:.6, duration:pathDuration.current}} stroke="#B9E871" strokeWidth="7"/>
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M0 103H290L545.5 358.5H1440" transition={{delay:.3, duration:pathDuration.current}} stroke="#89DDF1" strokeWidth="7"/>
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M0 179.5H724.5L819 85H1440" transition={{delay:0, duration:pathDuration.current}} stroke="#F07178" strokeWidth="7"/>

          {/*Red*/}
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","recypher")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","recypher")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="194" cy="179" r="19" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","elderLawForm")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","elderLawForm")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="720" cy="179" r="19" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","sideScroller")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","sideScroller")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="526" cy="179" r="19" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","soulShine")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","soulShine")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="823" cy="85" r="19" fill="#ffb487"/>
          <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="1259" cy="85" r="19" fill="#ffb487"/>

          {/*Blue*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","connect")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","connect")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="289" cy="103" r="19" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","form")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","form")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="1149" cy="359" r="19" fill="#ffb487"/>

          {/*Green*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","skills")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","skills")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="555" cy="19" r="19" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","interests")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","interests")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="789" cy="246" r="19" fill="#ffb487"/>
          <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="1048" cy="250" r="19" fill="#ffb487"/>
        </svg>
      </div>
      
      <div style={{display:narrowScreen?"block":"none"}} className="narrow-svg-wrap">
        <svg viewBox="0 0 378 1440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M198.5 0L198.5 724.5L293 819L293 1440" transition={{delay:.0, duration:pathDuration.current}} stroke="#F07178" strokeWidth="10"/>
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M275 0V290L19.5 545.5L19.5 1440" transition={{delay:.3, duration:pathDuration.current}} stroke="#89DDF1" strokeWidth="10"/>
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M358.5 0L358.5 561L195.5 724L128 791.5L128 1440" transition={{delay:.6, duration:pathDuration.current}}stroke="#B9E871" strokeWidth="10"/>
          
          {/*Projects*/}          
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","recypher")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","recypher")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="199" cy="194" r="19" transform="rotate(90 199 194)" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","elderLawForm")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","elderLawForm")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="199" cy="526" r="19" transform="rotate(90 199 526)" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","sideScroller")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","sideScroller")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="199" cy="720" r="19" transform="rotate(90 199 720)" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","soulShine")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","soulShine")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="293" cy="823" r="19" transform="rotate(90 293 823)" fill="#ffb487"/>
          <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="293" cy="1259" r="19" transform="rotate(90 293 1259)" fill="#ffb487"/>

          {/*Contact*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","connect")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","connect")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="275" cy="289" r="19" transform="rotate(90 275 289)" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","form")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","form")}initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="19" cy="1149" r="19" transform="rotate(90 19 1149)" fill="#ffb487"/>


          {/*About*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","skills")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","skills")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="359" cy="555" r="19" transform="rotate(90 359 555)" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","interests")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","interests")}initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="132" cy="789" r="19" transform="rotate(90 132 789)" fill="#ffb487"/>
          <motion.circle initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} cx="128" cy="1048" r="19" transform="rotate(90 128 1048)" fill="#ffb487"/>
        </svg>
      </div>

      <AnimatePresence>
        {showMod&&!displayProject?<HoverMod pos={modXY} typeKey={modKey} type={modType} key="hoverMod"/>:null}
        {displayProject?<ClickMod exit={unMountAllMod} typeKey={modKey} type={modType} key="clickMod"/>:null}
        {displayContact?<Contact typeKey={modKey} key="contact"/>:null}
        {displayAbout?<About typeKey={modKey} key="about"/>:null}
      </AnimatePresence>
    </div>
  );
}

export default App;


