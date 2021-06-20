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
    e.stopPropagation();
    unMountAllMod();
    modSetUp(e,type,key)
    setShowMod(false);
    setShow(true);
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
    setModXY([pos.x + pos.width/2,pos.y - pos.height/2])
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
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","elderLawForm")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","elderLawForm")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="194" cy="179" r="20" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","sideScroller")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","sideScroller")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="526" cy="179" r="20" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","recypher")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","recypher")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="823" cy="85" r="20" fill="#ffb487"/>
          <motion.circle onClick={(e)=>{clickModSetUp(e,"projects","soulShine")}} onMouseEnter={(e)=>{hoverModSetUp(e,"projects","soulShine")}} onMouseLeave={unMountHoverMod} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="1259" cy="85" r="20" fill="#ffb487"/>

          {/*Blue*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","connect")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","connect")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="289" cy="103" r="20" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"contact","form")}} onMouseLeave={unMountHoverMod} onClick={(e)=>contactModSetUp(e,"contact","form")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="1149" cy="359" r="20" fill="#ffb487"/>

          {/*Green*/}
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","skills")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","skills")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="555" cy="19" r="20" fill="#ffb487"/>
          <motion.circle onMouseEnter={(e)=>{hoverModSetUp(e,"about","interests")}} onMouseLeave={unMountHoverMod} onClick={(e)=>aboutModSetUp(e,"about","interests")} initial={"hovInitial"} variants={hoverVer} whileTap={"click"} whileHover={"active"} animate={"popIn"} className="circle" cx="789" cy="246" r="20" fill="#ffb487"/>
        </svg>
      </motion.div>
      :
      <motion.div key="narrowSvg" className="narrow-svg-wrap">
        <svg viewBox="0 0 218 604" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path initial={"pathInitial"} variants={narrowPathVer} animate={"animPath"} transition={{delay:.6, duration:pathDuration}} d="M199 0V160.5L19 340.5V661" stroke="#B9E871" strokeWidth="5"/>
          <motion.path initial={"pathInitial"} variants={narrowPathVer} animate={"animPath"} transition={{delay:.3, duration:pathDuration}} d="M109 0V159.5L199 249.5V357L109 447V661" stroke="#89DDF1" strokeWidth="5"/>
          <motion.path initial={"pathInitial"} variants={narrowPathVer} animate={"animPath"} transition={{delay:.0, duration:pathDuration}} d="M19 0V158.5L109 248.5V356L199 446V661" stroke="#F07178" strokeWidth="5"/>          
          
          {/* PROJECTS */}
          <motion.g onClick={(e)=>{clickModSetUp(e,"projects","elderLawForm")}} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} className="hovPoint">
            <circle cx="19" cy="123" className="mobCircle"/>
            <path d="M29 113H9V133H29V113Z" stroke="black"/>
            <path d="M27 115H11V131H27V115Z" fill="black"/>
            <path d="M19 117V121H18.4551L15.6645 118.017V121H15V117H15.5449L18.3355 119.983V117H19Z" fill="#FFDAC1"/>
            <path d="M22.4468 125C22.1489 125 21.8723 124.939 21.617 124.816C21.3617 124.689 21.156 124.513 21 124.287L21.4113 123.806C21.6856 124.197 22.0307 124.393 22.4468 124.393C22.7258 124.393 22.9362 124.308 23.078 124.138C23.2246 123.969 23.2979 123.719 23.2979 123.39V120.614H21.5035V120H24V123.355C24 123.901 23.8676 124.313 23.6028 124.59C23.3428 124.863 22.9574 125 22.4468 125Z" fill="#FFDAC1"/>
            <path d="M18.3665 126.978H18.9627V128.503C18.7474 128.663 18.4969 128.786 18.2112 128.872C17.9255 128.957 17.6273 129 17.3168 129C16.8779 129 16.4824 128.914 16.1304 128.743C15.7785 128.568 15.501 128.33 15.2981 128.028C15.0994 127.723 15 127.38 15 127C15 126.62 15.0994 126.277 15.2981 125.972C15.501 125.667 15.7785 125.428 16.1304 125.257C16.4865 125.086 16.8861 125 17.3292 125C17.677 125 17.9917 125.052 18.2733 125.156C18.559 125.257 18.8012 125.406 19 125.603L18.6149 125.95C18.2671 125.648 17.8468 125.497 17.354 125.497C17.0228 125.497 16.7246 125.562 16.4596 125.693C16.1988 125.819 15.9938 125.998 15.8447 126.229C15.6957 126.456 15.6211 126.713 15.6211 127C15.6211 127.283 15.6957 127.54 15.8447 127.771C15.9938 127.998 16.1988 128.177 16.4596 128.307C16.7246 128.438 17.0207 128.503 17.3478 128.503C17.7371 128.503 18.0766 128.419 18.3665 128.251V126.978Z" fill="#FFDAC1"/>
          </motion.g>
          
          <motion.g onClick={(e)=>{clickModSetUp(e,"projects","sideScroller")}} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} className="hovPoint">
            <circle cx="109" cy="358" className="mobCircle"/>
            <path d="M119.08 350H111.693V351.506H105.308V350H97.9184C96.3075 350 95 351.309 95 352.919V357.753C95 359.366 95.5478 361.835 96.2247 363.267L97.4488 365.863C98.136 367.321 99.5378 367.505 100.577 366.274L103.424 362.903C104.465 361.672 105.308 360.336 105.308 359.92V359.168H111.694C111.694 359.168 111.694 359.506 111.694 359.92C111.694 360.336 112.537 361.671 113.576 362.903L116.422 366.274C117.463 367.505 118.863 367.321 119.552 365.863C119.552 365.863 120.098 364.701 120.777 363.267C121.453 361.834 122 359.366 122 357.753V352.919C121.999 351.309 120.693 350 119.08 350ZM100.261 358.104C98.6484 358.104 97.3414 356.797 97.3414 355.185C97.3414 353.574 98.6484 352.267 100.261 352.267C101.872 352.267 103.179 353.574 103.179 355.185C103.179 356.797 101.872 358.104 100.261 358.104ZM115.625 356.847C115.33 357.335 114.696 357.493 114.206 357.198C113.718 356.902 113.56 356.266 113.855 355.778C114.151 355.29 114.785 355.132 115.274 355.428C115.763 355.723 115.921 356.358 115.625 356.847ZM115.894 354.401C115.406 354.105 115.249 353.47 115.544 352.98C115.84 352.491 116.476 352.335 116.963 352.629C117.452 352.925 117.61 353.56 117.313 354.049C117.02 354.538 116.384 354.696 115.894 354.401ZM118.514 358.592C118.219 359.08 117.583 359.237 117.095 358.942C116.607 358.646 116.449 358.011 116.746 357.523C117.041 357.034 117.675 356.878 118.165 357.172C118.652 357.466 118.809 358.103 118.514 358.592ZM120.204 355.794C119.908 356.283 119.272 356.439 118.784 356.144C118.296 355.848 118.138 355.213 118.433 354.725C118.73 354.235 119.364 354.079 119.854 354.374C120.341 354.669 120.499 355.304 120.204 355.794Z" fill="black"/>
          </motion.g>

          <motion.g onClick={(e)=>{clickModSetUp(e,"projects","soulShine")}} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} className="hovPoint">
            <circle  cx="199" cy="447" className="mobCircle"/>
            <path d="M208.385 441.854L193.369 440.453C193.287 440.444 193.209 440.444 193.132 440.449L192.531 437.541C192.516 437.483 192.502 437.425 192.478 437.377C192.386 437.144 192.192 436.955 191.935 436.878L189.071 436.035C188.631 435.904 188.165 436.156 188.035 436.601C187.904 437.042 188.156 437.508 188.601 437.638L190.99 438.341L193.863 452.189C193.917 452.596 194.266 452.911 194.692 452.911L207.047 452.906C207.508 452.906 207.881 452.533 207.881 452.072C207.881 451.612 207.508 451.239 207.047 451.239L195.375 451.244L194.978 449.33H207.265C207.91 449.33 208.467 448.904 208.583 448.317L209.577 443.312C209.707 442.595 209.165 441.926 208.385 441.854Z" fill="black"/>
            <path d="M197.066 457C197.987 457 198.733 456.254 198.733 455.333C198.733 454.413 197.987 453.666 197.066 453.666C196.146 453.666 195.399 454.413 195.399 455.333C195.399 456.254 196.146 457 197.066 457Z" fill="black"/>
            <path d="M205.032 457C205.952 457 206.698 456.254 206.698 455.333C206.698 454.413 205.952 453.666 205.032 453.666C204.111 453.666 203.365 454.413 203.365 455.333C203.365 456.254 204.111 457 205.032 457Z" fill="black"/>
          </motion.g>
          
          <motion.g onClick={(e)=>{clickModSetUp(e,"projects","recypher")}} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} className="hovPoint">
            <circle cx="199" cy="539" className="mobCircle"/>
            <path d="M192 550V527L197.913 550H192Z" fill="black"/>
            <path d="M202.717 550L192.924 527.181L209 532.886L200.5 539.677L208.815 550H202.717Z" fill="black"/>
            <path d="M199.333 536L197 531L204 533.054L199.333 536Z" stroke="#FFDAC1" strokeWidth="0.5"/>
          </motion.g>


          {/* ABOUT */}
          <motion.g onClick={(e)=>{aboutModSetUp(e,"about","skills")}} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} className="hovPoint">
            <circle cx="199" cy="161" className="mobCircle"/>
            <path d="M209.344 168.284V163.268C209.297 163.273 209.249 163.276 209.201 163.276H205.921V163.891C205.921 164.213 205.816 164.521 205.626 164.759C205.408 165.029 205.096 165.184 204.769 165.184H203.425C203.098 165.184 202.786 165.029 202.569 164.759C202.378 164.521 202.273 164.213 202.273 163.891V163.276H195.644V163.891C195.644 164.213 195.539 164.521 195.348 164.759C195.131 165.029 194.818 165.184 194.491 165.184H193.148C192.821 165.184 192.508 165.029 192.291 164.759C192.1 164.521 191.995 164.213 191.995 163.891V163.276H188.716C188.668 163.276 188.62 163.273 188.573 163.268V168.284C188.573 168.679 188.893 169 189.289 169H208.628C209.023 169 209.344 168.679 209.344 168.284Z" fill="black"/>
            <path d="M188.573 162.685C188.619 162.695 188.667 162.699 188.716 162.699H191.996V161.508C191.996 161.186 192.101 160.878 192.291 160.64C192.509 160.37 192.821 160.215 193.148 160.215H194.491C194.819 160.215 195.131 160.37 195.348 160.64C195.539 160.878 195.644 161.186 195.644 161.508V162.7H202.273V161.508C202.273 161.186 202.378 160.878 202.569 160.64C202.786 160.37 203.098 160.215 203.426 160.215H204.769C205.096 160.215 205.409 160.37 205.626 160.64C205.817 160.878 205.922 161.186 205.922 161.508V162.7H209.201C209.25 162.7 209.298 162.695 209.344 162.685C209.671 162.619 209.917 162.33 209.917 161.983V157.54C209.917 157.144 209.597 156.824 209.201 156.824H204.689V156.535V156.247V154.224C204.689 153.549 204.14 153 203.466 153H194.452C193.777 153 193.228 153.549 193.228 154.224V156.247V156.535V156.824H188.716C188.321 156.824 188 157.144 188 157.54V161.983C188 162.33 188.246 162.619 188.573 162.685ZM194.381 156.535V156.247V154.721C194.635 155.082 195.141 155.333 195.712 155.333C195.958 155.333 196.191 155.286 196.398 155.204C196.652 155.104 196.936 155.104 197.19 155.204C197.397 155.286 197.631 155.333 197.876 155.333C198.122 155.333 198.356 155.286 198.562 155.204C198.816 155.104 199.101 155.104 199.355 155.204C199.561 155.286 199.795 155.333 200.041 155.333C200.287 155.333 200.52 155.286 200.727 155.204C200.981 155.104 201.265 155.104 201.519 155.204C201.726 155.286 201.959 155.333 202.205 155.333C202.777 155.333 203.282 155.082 203.536 154.721V156.247V156.535V156.824H194.381V156.535Z" fill="black"/>
            <path d="M204.769 164.607C205.087 164.607 205.344 164.286 205.344 163.891V163.276V162.988V162.699V161.508C205.344 161.113 205.087 160.792 204.769 160.792H203.425C203.107 160.792 202.85 161.113 202.85 161.508V162.699V162.988V163.276V163.891C202.85 164.286 203.107 164.607 203.425 164.607H204.769Z" fill="black"/>
            <path d="M194.492 164.607C194.81 164.607 195.068 164.286 195.068 163.891V163.276V162.988V162.699V161.508C195.068 161.113 194.81 160.792 194.492 160.792H193.149C192.831 160.792 192.573 161.113 192.573 161.508V162.699V162.988V163.276V163.891C192.573 164.286 192.831 164.607 193.149 164.607H194.492Z" fill="black"/>
          </motion.g>

          <motion.g onClick={(e)=>{aboutModSetUp(e,"about","interests")}} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} className="hovPoint">
            <circle cx="19" cy="338" className="mobCircle"/>
            <path d="M19 337C19.7911 337 20.5645 336.765 21.2223 336.326C21.8801 335.886 22.3928 335.262 22.6955 334.531C22.9983 333.8 23.0775 332.996 22.9231 332.22C22.7688 331.444 22.3878 330.731 21.8284 330.172C21.269 329.612 20.5563 329.231 19.7804 329.077C19.0044 328.923 18.2002 329.002 17.4693 329.304C16.7384 329.607 16.1136 330.12 15.6741 330.778C15.2346 331.436 15 332.209 15 333C15 334.061 15.4214 335.078 16.1716 335.828C16.9217 336.579 17.9391 337 19 337Z" fill="black"/>
            <path d="M25 347C25.2652 347 25.5196 346.895 25.7071 346.707C25.8946 346.52 26 346.265 26 346C26 344.143 25.2625 342.363 23.9497 341.05C22.637 339.737 20.8565 339 19 339C17.1435 339 15.363 339.737 14.0503 341.05C12.7375 342.363 12 344.143 12 346C12 346.265 12.1054 346.52 12.2929 346.707C12.4804 346.895 12.7348 347 13 347H25Z" fill="black"/>
          </motion.g>


          {/* CONTACT */}
          <motion.g onClick={(e)=>{contactModSetUp(e,"contact","connect")}} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} className="hovPoint">
            <circle cx="109" cy="85" className="mobCircle"/>
            <path d="M97 78V78.7492L108.5 86.7603L120 78.7492V78H97Z" fill="#010002"/>
            <path d="M108.5 88.3573L101.726 83.5925L97 80.3002V92.9967H120V80.3002L115.274 83.5925L108.5 88.3573Z" fill="#010002"/>
          </motion.g>

          <motion.g onClick={(e)=>{contactModSetUp(e,"contact","form")}} initial={"hovInitial"} variants={hoverVer} animate={"popIn"} className="hovPoint">
            <circle cx="109" cy="493" className="mobCircle"/>
            <path d="M115.917 486H101.083C99.9321 486 99 486.9 99 488.01V497.117C99 498.227 99.9321 499.126 101.083 499.126H101.89L100.242 502.315C100.124 502.493 100.152 502.726 100.309 502.873C100.398 502.958 100.515 503 100.632 503C100.72 503 100.81 502.975 100.889 502.925L107.752 499.126H115.917C117.068 499.126 118 498.227 118 497.117V488.01C118 486.9 117.068 486 115.917 486ZM104.217 493.876C103.452 493.876 102.832 493.277 102.832 492.539C102.832 491.801 103.452 491.203 104.217 491.203C104.982 491.203 105.602 491.801 105.602 492.539C105.602 493.277 104.982 493.876 104.217 493.876ZM108.5 493.876C107.735 493.876 107.115 493.277 107.115 492.539C107.115 491.801 107.735 491.203 108.5 491.203C109.265 491.203 109.885 491.801 109.885 492.539C109.885 493.277 109.265 493.876 108.5 493.876ZM112.783 493.876C112.018 493.876 111.398 493.277 111.398 492.539C111.398 491.801 112.018 491.203 112.783 491.203C113.548 491.203 114.168 491.801 114.168 492.539C114.168 493.277 113.548 493.876 112.783 493.876Z" fill="black"/>
          </motion.g>
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


