import React from 'react';
import './Education.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrapper } from '../../wrapper';

const school = [
  { institution: 'Lighthouse Labs', program: 'Diploma of Full-Stack Web Development', year: '2022', location: 'Calgary, Alberta, Canada', imgUrl: images.terra },
  { institution: 'University of Alberta', program: 'BSc. of ENvironmental Sciences', year: '2020', location: 'Edmonton, Alberta, Canada', imgUrl: images.terra},
]

const Education = () => {
  return (
    <>
      <h2 className="head-text"><span>Employment  </span>History</h2>
      <div className="app__employment app__flex">
        {jobs.map((job, index) => (
          <motion.div
            className="app__employment-item"
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transitions={{ duration: 2, type: 'tween' }}
            key={job.title + index}
          >
            <p className="p-text">{job.year}</p>
            <img src={job.imgUrl} alt={job.title} />
            <div className="app__employment-desc">
              <h2 className="bold-text">{job.title}</h2>
              <p className="p-text">{job.company}</p>
              <p className="p-text">{job.industry}</p>
              <p className="p-text">{job.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Education