import './Skills.scss';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

const Skills = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"] | order(_createdAt desc)';

    client.fetch(query)
    .then(data => {
      setSkills(data);
    })
  }, [])


  return (
    <>
      <h2 className="head-text app__top">
        <span style={{ color: "var(--orange-color"}}>Discover</span> My Skills & Tools
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              className="app__skills-item app__flex"
              transition={{ duration: 0.25}}
              whileInView={{ opacity: [0, 1]}}
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrapper(Skills, 'skills');