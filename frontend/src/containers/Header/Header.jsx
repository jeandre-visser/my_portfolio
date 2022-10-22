import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrapper } from '../../wrapper';

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
              <p className="p-text">Welcome, my name is</p>
              <h1 className="head-text" >Jeandre</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Environmentalist</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1]}}
        transitions={{ duration: 4, delayChildren: 2 }}      
      >
        <motion.img
         className="profile_badge"
         whileInView={{ scale: [0, 1]}}
         transitions={{ duration: 4, ease: 'easeInOut' }}
         src={images.profile}
         alt="profile_badge"     
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