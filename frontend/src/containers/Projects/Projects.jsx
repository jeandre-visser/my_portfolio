import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { AppWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query)
    .then(data => {
      setProjects(data);
    })
  }, [])

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

  return (
    <>
    <h2 className="head-text">
      <span>Explore </span>My Projects 
    </h2>

    <motion.div
      className="app__project-portfolio"
      transition={{ duration: 1, ease: 'easeInOut', delayChildren: 1}}
      whileInView={{ y: [200, 0], opacity: [0, 1] }}
    >
      {projects.map((project, index) => (
        <div 
          className="app__project-item app__flex" 
          key={index} 
          style={{ boxShadow: isHovering ? project.shadow : '' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="app__project-img app__flex">
            <img src={urlFor(project.imgUrl)} alt={project.name} />
          </div>
          <div className="app__flex app__project-content">
            <h4 className="bold-text">{project.title}</h4>
            <p className="p-text" style={{ marginTop: 12, fontSize: '0.9rem' }}>{project.description}</p>
          <div
              className="app__project-hover app__flex"
            >
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <motion.div
                  className="app__flex"
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.1}}                
                >
                  <BiLink />
                </motion.div>
              </a>
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  className="app__flex"
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.1}}             
                >
                  <BsGithub />
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
    </>
  )
} 

export default AppWrapper(Projects, 'projects');