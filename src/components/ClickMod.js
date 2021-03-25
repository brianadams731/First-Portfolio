import React from "react";
import Tech from "../components/Tech";
import ImageCarousel from "../components/ImageCarousel.js";

import "../styles/clickMod.css";

import useProjects from "../hooks/useProjects.js";

import {motion} from "framer-motion"

const ClickMod = (props) =>{
    const project = useProjects(props.type,props.typeKey);
    const colorVer = {
        color:{
            fill:"#F07178",
            transition:{
                duration:.5
            }
        },
        none:{
        }
    }
    return(
        <motion.div onClick={(e)=>e.stopPropagation()} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  transition={{duration:.3}} className="click-mod-wrapper">
            <div className="exit" onClick={props.exit}>
                <svg width="273" height="110" viewBox="0 0 273 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M272.408 19.9881C272.408 9.21605 262.757 0.456055 250.902 0.456055H21.506C9.649 0.456055 0 9.21605 0 19.9881V90.4191C0 101.19 9.649 109.951 21.506 109.951H250.902C262.756 109.951 272.408 101.19 272.408 90.4191V19.9881ZM258.071 90.4191C258.071 93.2331 254.785 95.6131 250.902 95.6131H21.506C17.621 95.6131 14.337 93.2331 14.337 90.4191V19.9881C14.337 17.1741 17.621 14.7931 21.506 14.7931H250.902C254.785 14.7931 258.071 17.1731 258.071 19.9881V90.4191V90.4191Z" fill="#B9E871"/>
                    <path d="M106.441 58.65H131.391V49.729H106.441V38.822H133.624V29.729H95.949V81.09H134.875V71.854H106.441V58.65Z" fill="#B9E871"/>
                    <path d="M183.576 29.729H171.168L161.752 46.455L152.596 29.729H139.775L155.487 54.921L138.973 81.09H151.445L161.762 63.574L171.516 81.09H184.549L167.862 54.501L183.576 29.729Z" fill="#B9E871"/>
                    <path d="M200.632 29.729H189.97V81.094H200.632V29.729Z" fill="#B9E871"/>
                    <path d="M206.381 38.822H221.825V81.09H232.625V38.822H247.994V29.729H206.381V38.822Z" fill="#B9E871"/>
                    <path d="M45.197 24.987C47.18 23.003 49.29 22 51.465 22C54.904 22 58.367 24.611 58.367 30.45V36.153H74.856C81.399 36.153 86.719 41.476 86.719 48.019V62.205C86.719 68.748 81.399 74.069 74.856 74.069H58.367V79.772C58.367 85.61 54.9 88.219 51.465 88.219C49.29 88.219 47.186 87.215 45.197 85.228L23.481 63.507C21.231 61.262 20 58.284 20 55.111C20 51.938 21.231 48.96 23.481 46.715L45.197 24.987ZM30.229 56.749L48.809 75.338V64.515H74.856C76.134 64.515 77.162 63.479 77.162 62.204V48.023C77.162 46.747 76.126 45.715 74.856 45.715H48.809V34.894L30.229 53.48C29.636 54.073 29.548 54.759 29.548 55.119C29.549 55.47 29.637 56.151 30.229 56.749Z" fill="#B9E871"/>
                </svg>
            </div>
            
            <div className="title-wrap">
                <h1>{project?.name}</h1>
            </div>
            <div className="content-wrap">
            <ImageCarousel images={project?.img} />
                <div className="description-wrap">
                    <div className="app-desc">
                        <p>{project?.desc}</p>
                    </div>
                </div>
            </div>
            <div className="tech">
                <Tech techUsed={project?.tech}/>
            </div>
            <div className="link-wrap">
                <a target="_blank" rel="noopener noreferrer" href={project?.link}>See Project</a>
            </div>
        </motion.div>
    )
}

export default ClickMod;