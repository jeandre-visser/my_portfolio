import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { motion } from 'framer-motion';
import { BsFillEyeFill, BsGithub } from 'react-icons/bs';
import { AppWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

const Projects = () => {

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
    .then(data => {
      setWorks(data);
    })
  }, [])

  return (
    <>
    <h2 className="head-text">
      My <span>Projects</span> 
    </h2>

    <motion.div
      className="app__project-portfolio"
      animate={animateCard}
      transition={{ duration: 1, delayChildren: 1}}
    >
      {works.map((work, index) => (
        <div className="app__project-item app__flex" key={index}>
          <div className="app__project-img app__flex">
            <img src={urlFor(work.imgUrl)} alt={work.name} />
          </div>    
        </div>
      ))}
    </motion.div>

    </>
  )
} 

export default Projects