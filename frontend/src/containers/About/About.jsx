import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';

const aboutMe = [
  { title: 'Full-Stack', description: 'I like to build things from front to back.', imgUrl: ''},
  { title: 'Front-End', description: 'I like to make web pages look good', imgUrl: '' },
  { title: 'Back-End', description: 'I like to build things', imgUrl: '' }
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
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, type: 'tween' }}
          key={aboutMe.title + index}
          whileHover={{ scale: 1.05 }}
          className="app__profile-item"
        >
          <img src={item.imgUrl} alt={item.title} />
          <h2 className="bold-text" style={{ marginTop: 18}}>{item.title}</h2>
          <p className="p-text" style={{ marginTop: 12}}>{item.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About