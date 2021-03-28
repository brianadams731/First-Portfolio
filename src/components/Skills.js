import React from "react";

import "../styles/skills.css";

const Skills = () =>{
    return(
        <div className="skills-wrap glass">
            <h1>Skills</h1>
            <div className="skills-box">
                <div className="language-box">
                    <h3>JavaScript ES6</h3>
                    <h3>Python</h3>
                    <h3>Java</h3>
                    <h3>HTML</h3>
                    <h3>CSS</h3>
                </div>
                <div className="lib-box">
                    <h3>React</h3>
                    <h3>Redux</h3>
                    <h3>Next</h3>
                    <h3>Flask</h3>
                </div>
                <div className="other-box">
                    <h3>Figma</h3>
                    <h3>Photoshop</h3>
                    <h3>Lightroom</h3>
                </div>
            </div>
        </div>
    )
}

export default Skills;