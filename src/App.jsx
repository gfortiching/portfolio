import React, { useRef, useState } from "react";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import About from "./Components/About";
// import Contact from "./Components/Contact";
// import ContactUs from "./Components/Email";
// import Footer from "./Components/Footer";
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import Scroll from "./Functions/Scroll";
// import Switch from "./Functions/Switch";
import Logo from "./Images/logo.png";
import "./CSS/App.css";
import "./CSS/Navigation.css"

function App() {

  const home = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  
  function Navbar () {

    const MenuItems = [
  
      {
          title: <img className="nav-logo" src={Logo} />,
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
      <main>
        <Navbar />
        <div ref={projects}><Projects /></div>
        <div ref={about}><About /></div>
      </main> 
    </>
  )
}

export default App;