import { useRef, useState } from 'react'
import "../CSS/Intro.css"
import Me from '../Images/meTransparent.png'
import Scroll from "../Functions/Scroll";

function Intro() {

    const next = useRef(null);


    function GetToKnow() {

        const [headText, setHeadText] = useState("Get to know me!");
    
        return (
            <button className="getToKnow secondary" onClick={() => Scroll(next)} onMouseOver={() => setHeadText("Start")} onMouseLeave={() => setHeadText("Get to know me!")}>
            {headText}
        </button>
        )
    }

    function Skills() {

        return (
        <>
        <div className="animation secondary">
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>BOOTSTRAP</h1>
            <h1>JavaScript</h1>
            <h1>Git</h1>
            <h1>Github</h1>
            <h1>REACT JS</h1>
        </div>
        </>
    )
    }

    return (
    <>
    <header className="intro-main">
    <Skills />
    <div className="intro">
        <div className="left">
            <div className="left-wrapper">
                <h1 className="greet primary">Hey! &#128075;</h1>
                <span><h1 className="greet primary">Nice to meet you!</h1></span>
                <span><h1 className="name primary">I'm Gabriel and I'm a Full-Stack Web Developer.</h1></span>
            </div>
        </div>
        <div className="right">
            <img src={Me} alt="" className="myImg" />
        </div>
        <GetToKnow />
    </div>
    </header>
    <div ref={next}></div>
    </>

)};

export default Intro;