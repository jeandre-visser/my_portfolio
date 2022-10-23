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
      transition={{ duration: 1, delayChildren: 1}}
    >
      {projects.map((project, index) => (
        <div className="app__project-item app__flex" key={index}>
          <div className="app__project-img app__flex">
            <img src={urlFor(project.imgUrl)} alt={project.name} />
            <motion.div
              className="app__project-hover app__flex"
              whileHover={{ opacity: [0, 1]}}
              transition={{ duration: 0.1, ease: 'easeInOut', staggerChildren: 1}}
            >
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <motion.div
                  className="app__flex"
                  whileInView={{ scale: [0, 1]}}
                  whileHover={{ opacity: [1, 0.9]}}
                  transition={{ duration: 0.25}}                
                >
                  <BsFillEyeFill />
                </motion.div>
              </a>
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  className="app__flex"
                  whileInView={{ scale: [0, 1]}}
                  whileHover={{ opacity: [1, 0.9]}}
                  transition={{ duration: 0.25}}                
                >
                  <BsGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className="app__flex app__project-content">
            <h4 className="bold-text">{project.title}</h4>
            <p className="p-text" style={{ marginTop: 12 }}>{project.description}</p>
          </div>
        </div>
      ))}
    </motion.div>

    </>
  )
} 

export default AppWrapper(Projects, 'projects');