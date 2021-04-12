import React from "react";
import "../styles/tech.css";

import JsSVG from "../assets/jsSVG";
import FlaskSVG from "../assets/flaskSVG";
import HtmlSVG from "../assets/htmlSVG";
import CssSVG from "../assets/cssSVG";
import PythonSVG from "../assets/pythonSVG";
import NextSVG from "../assets/nextSVG";
import ReactSVG from "../assets/reactSVG";

const Tech = (props) =>{
    const showItem = (item,array, toShow) =>{
        return array?.includes(item)?toShow:null
    }

    return(
        <div className="tech-wrap">
            <h3>Technology Used</h3>
            <div className="logo-wrap">
                {/*js*/}
                {showItem("js", props.techUsed,
                    <div className="tech-item">
                        <JsSVG />
                        <p>JavaScript</p>
                    </div>
                )}
                {/*react*/}
                {showItem("react", props.techUsed,
                    <div className="tech-item">
                        <ReactSVG />
                        <p>React</p>
                    </div>
                )}
                {/*next*/}
                {showItem("next",props.techUsed,
                <div className="tech-item">
                    <NextSVG />
                <p>Next</p>
                </div>
                
                )}
                {/*python*/}
                {showItem("python", props.techUsed,
                    <div className="tech-item">
                        <PythonSVG />
                        <p>Python</p>
                    </div>
                )}
                {/*flask*/}
                {showItem("flask", props.techUsed,
                <div className="tech-item">
                    <FlaskSVG />
                    <p>Flask</p>
                </div>)}

                {/*css*/}
                {showItem("css", props.techUsed,
                <div className="tech-item">
                    <CssSVG />
                    <p>CSS3</p>
                </div>
                )}
                {/*html*/}
                {showItem("html", props.techUsed,
                <div className="tech-item">
                    <HtmlSVG />
                    <p>HTML5</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default Tech;