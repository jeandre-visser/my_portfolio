import React, { useState } from 'react'
import { images } from '../../constants';
import './Navbar.scss'
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import {Spiral as Hamburger} from 'hamburger-react'

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

      <Hamburger
        rounded
        toggled={open} 
        toggle={setOpen} 
        easing="ease-in"
      />

      <div className="app__navbar-menu" onClick={toggleMenu}>
          {open && (
          <motion.div
            whileInView={{ x: [-300, 0] }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;