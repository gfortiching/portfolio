import React, { useRef, useState } from "react";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import About from "./Components/About";
// import Contact from "./Components/Contact";
import Email from "./Components/Email";
import Footer from "./Components/Footer";
import Scroll from "./Functions/Scroll";
// import Switch from "./Functions/Switch";
// import Logo from "./Images/logo.png";
import "./CSS/App.css";
import "./CSS/Navigation.css"

function App() {

  const home = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
//   const email = useRef(null);
  
  function Navbar () {

    const MenuItems = [
  
      {
          title: <p className="primary">Gab.Fabileña</p>,
          ref: home,
          cName: 'nav-links'
      },
      {
          title: "Home",
          ref: home,
          cName: 'nav-links'
      },
      {
          title: "Projects",
          ref: projects,
          cName: 'nav-links'
      },
      {
          title: "About",
          ref: about,
          cName: 'nav-links'
      },
      {
          title: "Contact",
          ref: contact,
          cName: 'nav-links'
      },
  ]
  
      const [clicked, setClicked] = useState(false);
  
      const handleClick = () => {
        setClicked(!clicked);
      }

      const handleLinkClick = (ref) => {
        setClicked(false);
        Scroll(ref);
      };
  
          return (
              <nav className='navbar-items secondary'>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                  </div>
                  <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                      {MenuItems.map(({title, ref, cName}, index) => {
                          return (
                              <li 
                                  key={index}
                                  className={cName}
                                  onClick={() => handleLinkClick(ref)}>
                                  {title}
                              </li>
                          )
                      })}
                  </ul>
              </nav>
          )
      }

  return (
    <>
      <div ref={home}><Intro /></div>
        <Navbar />
        <section ref={projects}><Projects /></section>
        <section ref={about}><About /></section>
        {/* <section ref={contact}><Contact /></section> */}
        <section ref={contact}><Email /></section>
        <section><Footer /></section>
    </>
  )
}

export default App;