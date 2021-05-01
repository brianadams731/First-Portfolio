import React from "react";

import JsSVG from "../assets/jsSVG";
import FlaskSVG from "../assets/flaskSVG";
import HtmlSVG from "../assets/htmlSVG";
import CssSVG from "../assets/cssSVG";
import PythonSVG from "../assets/pythonSVG";
import NextSVG from "../assets/nextSVG";
import ReactSVG from "../assets/reactSVG";
import JavaSVG from "../assets/JavaSVG";
import ReduxSVG from "../assets/ReduxSVG";
import RecoilSVG from "../assets/RecoilSVG";
import FigmaSVG from "../assets/FigmaSVG";
import PhotoshopSVG from "../assets/PhotoshopSVG";
import LightroomSVG from "../assets/LightroomSVG";

import "../styles/skills.css";

const Skills = () =>{
    return(
        <div className="skills-wrap glass">
            <h1>Skills</h1>
            <div className="skills-box">
                <div className="language-box">
                    <div className="skill-item"><JsSVG /><h3>JavaScript</h3></div>
                    <div className="skill-item"><PythonSVG/><h3>Python</h3></div>
                    <div className="skill-item"><JavaSVG /><h3>Java</h3></div>
                    <div className="skill-item"><HtmlSVG /><h3>HTML</h3></div>
                    <div className="skill-item"><CssSVG /><h3>CSS</h3></div>
                </div>
                <div className="lib-box">
                    <div className="skill-item"><ReactSVG /><h3>React</h3></div>
                    <div className="skill-item"><ReduxSVG /><h3>Redux</h3></div>
                    <div className="skill-item"><NextSVG /><h3>Next</h3></div>
                    <div className="skill-item"><RecoilSVG /><h3>Recoil</h3></div>
                    <div className="skill-item"><FlaskSVG /><h3>Flask</h3></div>
                </div>
                <div className="other-box">
                    <div className="skill-item"><FigmaSVG /><h3>Figma</h3></div>
                    <div className="skill-item"><PhotoshopSVG /><h3>Photoshop</h3></div>
                    <div className="skill-item"><LightroomSVG /><h3>Lightroom</h3></div>
                </div>
            </div>
        </div>
    )
}

export default Skills;