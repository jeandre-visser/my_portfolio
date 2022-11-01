import React, { useState } from 'react'
import { images } from '../../constants';
import './Navbar.scss'
import { motion } from 'framer-motion';
import  Hamburger from 'hamburger-react';


const variants = {
  open: { opacity: [0, 1], transition: {duration: 0.7, ease: 'easeOut'}, x: [-300, 0] },
  closed: { opacity: [1, 0], x: [0, -300], transition: { duration: 0.7}, ease: 'easeOut'}
}


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo" >
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'skills', 'projects', 'education', 'employment', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>


      <div>
        <Hamburger
          rounded
          toggled={open} 
          toggle={setOpen} 
          easing="ease-in"
        />
        <div className="app__navbar-menu" >
            <motion.div
            animate={open ? variants.open : variants.closed}
            variants={variants}
            >
              <ul>
                {['home', 'about', 'skills', 'projects', 'education', 'employment', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={toggleMenu}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;