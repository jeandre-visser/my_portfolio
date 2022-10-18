import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const Header = () => {
  return (
    <div className="app_header app_flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transitions={{ duration: 4 }}
      >
        <div className="app_header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 25}}>
              <p className="p-text">Welcome, my name is</p>
              <h1 className="head-text">Jeandre</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Environmentalist</p>
            </div>
        </div>
      </motion.div>
    </div>  
  )
}

export default Header