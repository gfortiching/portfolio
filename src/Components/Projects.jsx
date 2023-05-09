import {React, useRef } from 'react';
import "../CSS/Projects.css";
import RootsAndTools from "../Images/MP1.png"
import LittleWizards from "../Images/MP2.png"
import Portfolio from "../Images/Portfolio.png"
import Capstone from "../Images/Capstone.png"
import Arrow from "../Images/arrow.png";
import Scroll from '../Functions/Scroll';
import AnimateOnScroll from "../Functions/AnimateOnScroll";
import Section from './Props/Section';
import AOS from "aos";        

function Projects() {

  AnimateOnScroll();
  AOS.init();
  const mp1 = useRef(null);

  function Project(props) {
    return (
        <div className="project">
            <div className="project-img">
              <img src={props.image} alt="" loading="lazy"/>
            </div>

            <div className="project-text">
              <h4 className='m-0 primary'>{props.name}</h4>
            </div>

            <div className='project-link'>
              <a href={props.anchor} target="blank">View Website &#187;</a>
            </div>
        </div>
    )
  };

    return (
    <>
    <div className="portfolio-bg main">
      <div className="check-out">
          <div className='waviy' data-aos="zoom-in">
            <h1 className='primary'>CHECK OUT SOME OF MY PROJECTS</h1>
          </div>
      </div>
      <div className="keepScrolling" onClick={() => Scroll(mp1)}>
          <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </div>

    <div className="main" ref={mp1}>
      <Section section="Projects"/>
        <div className='mt-5 mb-5 p-0 px-sm-5' data-aos="fade-right">
          <h3 className='primary text-center text-sm-start'>KodeGo Projects</h3>
        </div>

        <div className='project-container'>
          <Project 
            image={RootsAndTools}
            title="Mini Project 1"
            name="Roots and Tools"
            description="" 
            anchor="https://rootsandtools.netlify.app/index.html"/>

          <Project
            image={LittleWizards}
            title="Mini Project 2"
            name="Little Wizards"
            description=""
            anchor="https://little-wizards.netlify.app/index.html" />

          <Project 
            image={Capstone}
            title="Capstone"
            name="GoToda"
            description=""
            anchor="'/'" />

          <Project 
            image={Portfolio}
            title="Portfolio"
            name="Gabriel"
            description=""
            anchor="https://gfortiching.github.io/React-Portfolio/" />
        </div>
        <h3 className='primary mt-5' data-aos="fade-right">More Projects Soon...</h3>
    </div>
    
    {/* <Extras /> */}
    </>
)
}

export default Projects;