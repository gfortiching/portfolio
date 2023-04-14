import {React, useRef } from 'react';
import "../CSS/Projects.css";
import RootsAndTools from "../Images/MP1.png"
import LittleWizards from "../Images/MP2.png"
import Portfolio from "../Images/Portfolio.png"
import Capstone from "../Images/Capstone.png"
import Kodego from "../Images/KodeGo.png"
import Arrow from "../Images/arrow.png";
// import Extras from './Extras';
import Scroll from '../Functions/Scroll';
import AnimateOnScroll from "../Functions/AnimateOnScroll";
import Header from './Props/Header';
import AOS from "aos";        

function Projects() {

  AnimateOnScroll();
  AOS.init();
  const mp1 = useRef(null);

  function Project(props) {
    return (
      <article className="project" data-aos="zoom-in">
        <h3 className='mb-5 primary'>{props.title}</h3>

        <div className="project-img">
          <img src={props.image} alt="" loading="lazy"/>
        </div>

        <div className="project-text">
          <h4 className='my-4 primary'>{props.name}</h4>
          <h5>{props.description}</h5>
        </div>

        <a href={props.anchor} target="blank">View Website &#187;</a>
    </article>
    )
  };

    return (
    <>
    <section className="portfolio-bg main">
      <article className="check-out">
          <div className='waviy' data-aos="zoom-in">
            <h1 className='primary'>CHECK OUT SOME OF MY PROJECTS</h1>
          </div>
      </article>
      <div className="keepScrolling" onClick={() => Scroll(mp1)}>
          <img src={Arrow} alt="" className='arrowScrolling'/>
      </div>
    </section>

    <section className="main" ref={mp1}>
      <Header header="Projects"/>
      <div className='portfolioContainer'>
        <div className='mt-5 mb-5 p-0 px-sm-5' data-aos="fade-right">
          <h2 className='primary text-center text-sm-start'>KodeGo Projects</h2>
        </div>

        <div className='grid'>
          <Project 
            image={RootsAndTools}
            title="Mini Project 1"
            name="Roots and Tools"
            description="This project was built using HTML, CSS and Bootstrap. Our goal was to build an e-commerce website, and my inspiration for this project is one my hobbies, succulents and plants." 
            anchor="https://rootsandtools.netlify.app/index.html"/>

          <Project
            image={LittleWizards}
            title="Mini Project 2"
            name="Little Wizards"
            description="This project was built using HTML, CSS, JavaScript and Bootstrap. This mini project was a group activity and we were tasked to build an e-learning website. Some highlights of this project were JavaScript Chatbot and Login and Register Forms."
            anchor="https://little-wizards.netlify.app/index.html" />

          <Project 
            image={Capstone}
            title="Capstone"
            name="GoTODA"
            description="For our Capstone Project, our goal was to build a website that uses PHP for back-end web development. We used HTML, CSS and JavaScript to design the front-end."
            anchor="'/'" />

          <Project 
            image={Portfolio}
            title="Portfolio"
            name="Gabriel"
            description="This website you are currently viewing is my Personal Portfolio. I built this website using React.js and is currently hosted through Github Pages."
            anchor="https://gfortiching.github.io/React-Portfolio/" />
        </div>
        <h3 className='primary mt-5' data-aos="fade-right">More Projects Soon...</h3>
      </div>
    </section>
    
    {/* <Extras /> */}
    </>
)
}

export default Projects;