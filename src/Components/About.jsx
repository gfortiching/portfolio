import { useRef } from 'react';
import React from "react";
import Portrait from "../Images/meBlack.jpg";
import "../Functions/AnimateOnScroll";
import "../CSS/About.css";
import Section from './Props/Section';
import GoogleUX from '../Images/Google-UX.png';
import GooglePM from '../Images/Google-Project-Management.png';
import FullStack from '../Images/Full-Stack.png';
import RedHatLinux from '../Images/Red-Hat-Linux.png';
import Scrum from '../Images/Introduction-to-Scrum-Master-Training.png';
import Duda from '../Images/Duda-Web-Design.png';
import ResponsiveWebDesign from '../Images/Responsive-Web-Design.png';
import DudaIcon from '../Images/duda.png';
import Chime from '../Images/chime.png';

function AboutMe() {

    const waveIcon = 'https://cdn-icons-png.flaticon.com/512/2121/2121101.png';
    const personIcon = 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png';
    const overviewIcon = 'https://cdn-icons-png.flaticon.com/512/7756/7756168.png';
    const developerIcon = 'https://cdn-icons-png.flaticon.com/512/3242/3242313.png';
    const softwareIcon = 'https://cdn-icons-png.flaticon.com/512/9307/9307617.png';
    const teamIcon = 'https://cdn-icons-png.flaticon.com/512/8955/8955033.png';
    const journeyIcon = 'https://cdn-icons-png.flaticon.com/512/3059/3059997.png';
    const codingIcon = 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png';

    const html = 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png';
    const css = 'https://cdn-icons-png.flaticon.com/512/732/732190.png';
    const bootstrap = 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png';
    const javascript = 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png';
    const reactjs = 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png';
    const php = 'https://www.php.net//images/logos/new-php-logo.svg';

    const details = useRef(null);

    function Title(props) {
      return (
        <h1 className="primary title" data-aos="fade-right">{props.header}</h1>
      )
    }

    function Details(props) {
      return (
            <div className="summary" data-aos="fade-up">
                <h3 className="secondary"><b>{props.level}</b></h3>
                <h4 className="secondary"><em>{props.company}</em></h4>
                <p className="secondary">{props.date}</p>
            </div>
      )
    }

    function Skill(props) {
        return (
            <span data-aos="fade-up">
                <img loading="lazy" src={props.image} alt="HTML Logo" />
                <p>{props.tech_stack}</p>
            </span> 
        )
    }

    function Soft(props) {
        return (
            <span data-aos="fade-up">
                <p>{props.soft_skills}</p>
            </span> 
        )
    }

    function Certificate(props) {
      return (
          <div className="certificate" data-aos="fade-up">
              <img src={props.image} loading="lazy" alt="" />
          </div>
      )
    }

    return (
    <>
    <main className="about-container main">
      <section className="header">
        <Section section="About"/>
          <div className="good-day primary p-1 px-sm-5" data-aos="fade-up">  
            <h2>Hey there!<img loading="lazy" src={waveIcon} alt="Code" className='icons' /></h2>
            <h2>I'm Jose Gabriel F. Fabileña. <img loading="lazy" src={personIcon} alt="Code" className='icons' /></h2>
          </div>
      </section>
      
    <img loading="lazy" className='black-portrait' src={Portrait} alt='' data-aos="zoom-in" />

    <section className="about-container">
      <article className='about-text-container'>
        <h1 className='mb-5 primary' data-aos="fade-right">Overview <img loading="lazy" src={overviewIcon} alt="Code" className='icons' /></h1>
        <p className='about-text secondary' data-aos="fade-right">
            Pursuing Web Development as a career shifter,
            <br />my next goal is <em >to obtain a Junior Web Developer <img loading="lazy" src={developerIcon} alt="Code" className='icons' /> position</em> that assists in building websites, apps or softwares. <img loading="lazy" src={softwareIcon} alt="Code" className='icons' />
            <br />
            <br /> 
            My daily target to develop my skills and discover my potential while working with a team of experts and professionals <img loading="lazy" src={teamIcon} alt="Code" className='icons' />.
        </p>
      </article>

      <article className='about-text-container'>
        <h1 className='mt-5 mb-5 primary' data-aos="fade-right">Web Development Journey <img loading="lazy" src={journeyIcon} alt="Code" className='icons' /></h1>
        <p className='about-text secondary' data-aos="fade-right">
            I started learning Web Development last August 2022. I first practiced at FreeCodeCamp.org where I started learning how to code using HTML <img loading="lazy" src={html} alt="Code" className='icons' /> and CSS <img loading="lazy" src={css} alt="Code" className='icons' />.
            <br />
            <br />
            My interests in Cryptocurrencies, NFTs, Trading and Financial Technology led me to start learning how to code.
            As I was practicing coding everyday, I decided to pursue a career in coding <img loading="lazy" src={codingIcon} alt="Code" className='icons' />.
            <br />
            <br />
            After two weeks of self-studying and researching, I enrolled in KodeGo's Full-Stack Web Development course and joined my first online coding class last September 30, 2022. 
        </p>
      </article>
    </section>
    </main>

    <main ref={details} className="main">
      
      <article className="education">
        <Title header="Education" />

        <Details 
          level="Bachelor of Science in Mathematics"
          company="Silliman University, Dumaguete"
          date="June 2015 - March 2020"/>

        <Details 
          level="High School"
          company="Sibulan Science High School"
          date="June 2011 - March 2015"/>

        <Details 
          level="Kinder and Elementary"
          company="St. Paul University Dumaguete"
          date="June 2003 - March 2011"/>

      </article>      
      
      <article className="experience">
        <Title header="Experiences" />

        <Details 
          level="Junior Web Developer"
          company="Bullsai"
          date="May 2023 - Present" />

        <Details
          level="Freelance Tutor"
          company="Course Hero"
          date="June 2022 - Present" />

        <Details
          level="Financial Advisor"
          company="The Insular Life Assurance Co Ltd."
          date="August 2020 - December 2022" />

        <Details 
          level="ESL Teacher"
          company="Inspiro, Relia Inc. Dumaguete"
          date="April 2019 - June 2019, June 2020 - March 2021" />

      </article>

      <article className="bootcamp">
        <Title header="Bootcamps" />
        <Details 
          level="Full-Stack Web Development"
          company="KodeGo"
          date="September 30, 2022 - January 2023"/>
      </article>

      <article className="certificates">
        <Title header="Certificates" />
        <div className="summary">
            <Certificate 
                image={FullStack} />

            <Certificate
                image={RedHatLinux} />

            <Certificate 
                image={GoogleUX} />

            <Certificate 
                image={GooglePM} />

            <Certificate
                image={Scrum} />

            <Certificate
                image={Duda} />

            <Certificate
                image={ResponsiveWebDesign} />
        </div>
      </article>

      <article className="tech-skills">
        <Title header="Tech Skills" />
        <div className="summary">
          <div className="skill">

            <Skill 
                image={html}
                tech_stack="HTML" />

            <Skill 
                image={css}
                tech_stack="CSS" />

            <Skill 
                image={bootstrap}
                tech_stack="Bootstrap" />

            <Skill 
                image={javascript}
                tech_stack="JavaScript" />

            <Skill 
                image={reactjs}
                tech_stack="React JS" />

            <Skill 
                image={php}
                tech_stack="PHP" />

            <Skill 
                image={DudaIcon}
                tech_stack="Duda" />

            <Skill 
                image={Chime}
                tech_stack="Chime IDX" />

          </div>
        </div>
      </article>

      <article className="soft-skills">
        <Title header="Soft Skills" />
        <div className="summary">
          <div className="skill">
            <Soft
                soft_skills="Communication" />

            <Soft
                soft_skills="Problem Solving" />

            <Soft
                soft_skills="Flexibility" />

            <Soft
                soft_skills="Attention-To-Detail" />

            <Soft
                soft_skills="Collaboration" />
          </div>
        </div>
      </article>
    </main>
    </>
)
}

export default AboutMe;