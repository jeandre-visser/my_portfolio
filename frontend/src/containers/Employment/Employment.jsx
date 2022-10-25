import './Employment.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrapper } from '../../wrapper';


const jobs = [
  { title: 'Junior Project Manager', company: 'Terralogix Solutions Inc.', industry: 'Environmental Services', year: '2020 - 2021', location: 'Edmonton, Alberta, Canada', imgUrl: images.terra},
  { title: 'Junior Operator - Summer Terms', company: 'Cenovus Energy', industry: 'Oil and Gas', year: '2017 - 2019', location: 'Alberta, Canada', imgUrl: images.cenovus},
]

const Employment = () => {

  return (
    <>
      <h2 className="head-text"><span>Employment  </span>History</h2>
      <div className="app__employment app__flex">
        {jobs.map((job, index) => (
          <motion.div
            className="app__employment-item"
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transitions={{ duration: 2, type: 'tween' }}
            key={job + index}
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

export default AppWrapper(Employment, 'employment');