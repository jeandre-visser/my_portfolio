import './Skills.scss';
import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { AppWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query)
    .then(data => {
      setSkills(data);
    })
  }, [])


  return (
    <>
      <h2 className="head-text">
        <span>Discover</span> My Skills 
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {Skills.map((skill) => (
            <motion.div
              className="app__skills-item app__flex"
              transition={{ duration: 0.25}}
              whileInView={{ opacity: [0, 1]}}
              key={skill.name}
            >
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills