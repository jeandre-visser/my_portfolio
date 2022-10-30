import React, { useState } from 'react'
import { images } from '../../constants';
import './Navbar.scss'
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import Hamburger from 'hamburger-react';

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

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

      <div className="app__navbar-menu">
          <Hamburger onClick={toggleMenu} />
            {isOpen && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <HiX onClick={() => setOpen(false)} />
            <ul>
              {['home', 'about', 'skills', 'projects', 'education', 'employment', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setOpen(false)}>
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