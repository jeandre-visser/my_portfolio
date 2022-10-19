import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const aboutMe = [
  { title: 'Full-Stack Development', imgUrl: images.aboutMe01 },
  { title: 'Front-End Development', imgUrl: images.aboutMe02 },
  { title: 'UI/UX Design', imgUrl: images.aboutMe03 },
  { title: 'Web Animations', imgUrl: images.aboutMe04 }
];

const About = () => {
  return (
    <>
    <h2 className="head-text" style={{marginTop: 100}}>
      Aspiring Web Developer
    </h2>
    <div className="app__profiles">
      {aboutMe.map((item, index) => (
        <motion.div
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transitions={{ duration: 2, type: 'tween' }}
          key={aboutMe.title + index}
          whileHover={{ scale: 1.05 }}
          className="app__profile-item"
        >
          <img src={item.imgUrl} alt={item.title} />
          <h2 className="bold-text" style={{ marginTop: 18}}>{item.title}</h2>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About