import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrapper } from '../../wrapper';
import { BsCodeSquare } from 'react-icons/bs';
import { FaLeaf } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1, 
      ease: 'easeInOut'
    }
  }
}; 

const Header = () => {

  return (
    <div className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-200, 0], opacity: [0, 1]}}
        transitions={{ duration: 4, ease: 'easeInOut' }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex" id="welcome-badge">
            <h1 className="head-text" id="welcome">Welcome!</h1>
          </div>
          <div className="badge-cmp app__flex" id="middle-badge">
            <div>
              <p className="p-text" id="name-badge-large">My name is</p>
              <p className="p-text" id="name-badge-small">Welcome! My name is</p>
              <h1 className="head-text" style={{ textAlign: 'right'}}>Jeandre</h1>
            </div>
          </div>
          <div className="tag-cmp">
            <p className="p-text">Full Stack Developer <BsCodeSquare /> </p>
            <p className="p-text">Environmental Consultant <FaLeaf /></p>
            <p className="p-text">Coffee Connoisseur <FiCoffee /></p>
          </div>
        </div>
      </motion.div>
    
      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1]}}
        transitions={{ duration: 4, delayChildren: 2 }}      
      >
        <img src={images.profile} alt="profile_logo" />
        <motion.img
         className="profile_ring"
         whileInView={{ scale: [0, 1]}}
         transitions={{ duration: 4, ease: 'easeInOut' }}
         src={images.ring}
         alt="profile_ring"     
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[ images.react, images.vscode, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div> 
        ))}
      </motion.div>

    </div>  
  )
};

export default AppWrapper(Header, 'home');