import React, { useState } from 'react'
import { images } from '../../constants';
import './Navbar.scss'
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Navbar = () => {

  const [toggle, setToggle] = useState(true);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo" >
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className="app__navbar-links">
        {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
          <HiOutlineMenu onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.8, ease: 'ease-in-out'}}
              >
                <HiX onClick={() => setToggle(false)} />
                {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
                  <li className="app__flex p-text" key={item}>
                    <a href={`#${item}`}>{item} onClick={() => setToggle(false)}</a>
                  </li>
                ))}
              </motion.div>
            )}
      </div>
    </nav>
  )
}

export default Navbar