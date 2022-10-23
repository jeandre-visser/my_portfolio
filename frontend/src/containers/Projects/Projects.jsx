import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { motion } from 'framer-motion';
import { BsFillEyeFill, BsGithub } from 'react-icons/bs';
import { AppWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

const Projects = () => {

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query)
    .then(data => {
      setProjects(data);
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
      {projects.map((project, index) => (
        <div className="app__project-item app__flex" key={index}>
          <div className="app__project-img app__flex">
            <img src={urlFor(project.imgUrl)} alt={project.name} />
          </div>    
        </div>
      ))}
    </motion.div>

    </>
  )
} 

export default Projects