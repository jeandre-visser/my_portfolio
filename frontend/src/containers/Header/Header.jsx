import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrapper } from '../../wrapper';
import { BsCodeSquare } from 'react-icons/bs';
import { FaLeaf } from 'react-icons/fa';

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
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 25}}>
              <p className="p-text">Welcome! My name is</p>
              <h1 className="head-text" style={{ textAlign: 'right'}} >Jeandre</h1>
            </div>
          </div>
          <div className="tag-cmp">
            <p className="p-text">Web Developer <BsCodeSquare /> </p>
            <p className="p-text">Environmentalist <FaLeaf /></p>
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
        {[ images.redux, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div> 
        ))}
      </motion.div>

    </div>  
  )
};

export default AppWrapper(Header, 'home');