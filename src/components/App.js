import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

import {useHistory} from "react-router-dom";

import "../styles/main.css";


import HoverMod from "./HoverMod";
import ClickMod from "./ClickMod";
import Contact from "./Contact";
import About from "./About";

import useScreenSize from "../hooks/useScreenSize";


function App() {
  const history = useHistory()
  const pathDuration = 6;
  const dotDelay = 6;

  const [showMod,setShowMod] = useState(false);
  const [modXY, setModXY] = useState([0,0]);

  const [modType,setModType] = useState();
  const [modKey,setModKey] = useState();

  const [displayProject,setDisplayProject] = useState(false);
  const [displayContact,setDisplayContact] = useState(false);
  const [displayAbout,setDisplayAbout] = useState(false);

  const narrowScreen = useScreenSize();

  const mountPrep = (e,type,key,setShow) =>{
    e.stopPropagation()
    unMountAllMod();
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
    popIn:{
      opacity:1,
      display:"inline",
      transition:{
        delay: narrowScreen?dotDelay/1.5:dotDelay,
        duration:.5,
      },
    },
    hovInitial:{
      opacity:0,
      display:"none"
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

  const narrowPathVer = {
    pathInitial : {
      pathLength:0,
    },
    animPath:{
      pathLength:1,
    },
  }

  useEffect(()=>{
    history.push(" ")
    //eslint-disable-next-line
  },[])

  useEffect(()=>{
    let hist = history.listen((a,action)=>{
        if(action==="POP"){
          if(displayProject||displayAbout||displayContact){
            console.log(displayProject)
            history.push(" ")
            unMountAllMod();
          }else{
            history.goBack();
          }
        }
    })
    return hist
    //eslint-disable-next-line
  },[displayProject,displayAbout,displayContact])

  return (
    <div className="app-wrap" onClick={unMountAllMod}>
      <div className="header">
        <div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:narrowScreen?dotDelay/1.5:dotDelay}} className="nameBox noselect">
          <h1>Brian Adams</h1>
          <h3>Frontend Developer</h3>
        </div>

        <motion.div className="legend noselect" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:narrowScreen?dotDelay/1.5 + .8 :dotDelay +.2, duration:1}}>
          <div className="legBox">
            <div className="colorBox red"></div><h3>Projects</h3>
          </div>
          <div className="legBox">
            <div className="colorBox blue"></div><h3>Contact</h3>
          </div>
          <div className="legBox">
            <div className="colorBox green"></div><h3>About Me</h3>
          </div>
        </motion.div>
      </div>

      {!narrowScreen?
      <motion.div key="wideSvg" className="wide-svg-wrap">
        <svg viewBox="0 0 1440 378" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M0 19.5H561L724 182.5L791.5 250H1440" transition={{delay:.6, duration:pathDuration}} stroke="#B9E871" strokeWidth="7"/>
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M0 103H290L545.5 358.5H1440" transition={{delay:.3, duration:pathDuration}} stroke="#89DDF1" strokeWidth="7"/>
          <motion.path initial={"pathInitial"} variants={pathVer} animate={"animPath"} d="M0 179.5H724.5L819 85H1440" transition={{delay:0, duration:pathDuration}} stroke="#F07178" strokeWidth="7"/>

          {/*Red*/}
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","recypher")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","recypher")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="194" cy="179" r="19" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","sideScroller")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","sideScroller")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="526" cy="179" r="19" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","soulShine")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","soulShine")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="823" cy="85" r="19" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","elderLawForm")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","elderLawForm")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="1259" cy="85" r="19" fill="#ffb487"/>

          {/*Blue*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","connect")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","connect")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="289" cy="103" r="19" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","form")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","form")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="1149" cy="359" r="19" fill="#ffb487"/>

          {/*Green*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","skills")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","skills")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="555" cy="19" r="19" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","interests")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","interests")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="789" cy="246" r="19" fill="#ffb487"/>
        </svg>
      </motion.div>
      :
      <motion.div key="narrowSvg" className="narrow-svg-wrap">
        <svg viewBox="0 0 218 661" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path initial={"pathInitial"} variants={narrowPathVer} animate={"animPath"} transition={{delay:.0, duration:pathDuration}} d="M19 0V158.5L109 248.5V356L199 446V661" stroke="#F07178" strokeWidth="5"/>
          <motion.path initial={"pathInitial"} variants={narrowPathVer} animate={"animPath"} transition={{delay:.3, duration:pathDuration}} d="M109 0V159.5L199 249.5V357L109 447V661" stroke="#89DDF1" strokeWidth="5"/>
          <motion.path initial={"pathInitial"} variants={narrowPathVer} animate={"animPath"} transition={{delay:.6, duration:pathDuration}} d="M199 0V160.5L19 340.5V661" stroke="#B9E871" strokeWidth="5"/>
          
          {/*Project*/}
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","recypher")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","recypher")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} cx="19" cy="123" r="17" className="circle" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","sideScroller")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","sideScroller")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} cx="109" cy="358" r="17" className="circle" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","soulShine")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","soulShine")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} cx="199" cy="447" r="17" className="circle" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","elderLawForm")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","elderLawForm")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} circle cx="199" cy="577" r="17" className="circle" fill="#ffb487"/>
          
          {/*Contact*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","connect")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","connect")} initial={"hovInitial"}  variants={hoverVer} animate={"popIn"} cx="109" cy="85" r="17" className="circle" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","form")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","form")} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} cx="109" cy="493" r="17" className="circle" fill="#ffb487"/>

          {/*About*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","skills")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","skills")} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} cx="199" cy="161" r="17" className="circle" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","interests")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","interests")} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} cx="19" cy="338" r="17" className="circle" fill="#ffb487"/>
          </svg>
      </motion.div>}

      <AnimatePresence>
        {showMod?<HoverMod pos={modXY} typeKey={modKey} type={modType} key="hoverMod"/>:null}
        {displayProject?<ClickMod exit={unMountAllMod} typeKey={modKey} type={modType} key="clickMod"/>:null}
        {displayContact?<Contact exit={unMountAllMod} typeKey={modKey} key="contact"/>:null}
        {displayAbout?<About typeKey={modKey} key="about"/>:null}
      </AnimatePresence>
    </div>
  );
}

export default App;


