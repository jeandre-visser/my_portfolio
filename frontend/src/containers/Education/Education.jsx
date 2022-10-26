import React from 'react';
import './Education.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrapper } from '../../wrapper';

const schools = [
  { institution: 'Lighthouse Labs', program: 'Diploma of Full-Stack Web Development', year: '2022', location: 'Calgary, Alberta, Canada', imgUrl: images.lhl },
  { institution: 'University of Alberta', program: 'B.Sc of Environmental Sciences', year: '2020', location: 'Edmonton, Alberta, Canada', imgUrl: images.uofa},
]

const Education = () => {
  return (
    <>
      <h2 className="head-text" id="heading">My <span style={{ color: 'var(--orange-color'}}>Education</span></h2>
      <div className="app__education app__flex">
        {schools.map((school, index) => (
          <motion.div
            className="app__education-item"
            whileInView={{ x: [-300, 0], opacity: [0, 1] }}
            transitions={{ duration: 2, type: 'tween' }}
            key={school + index}
          >
            <p className="p-text">{school.year}</p>
            <img src={school.imgUrl} alt={school.institution} />
            <div className="app__education-desc">
              <h2 className="bold-text">{school.institution}</h2>
              <p className="p-text">{school.program}</p>
              <p className="p-text">{school.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrapper(Education, 'education');