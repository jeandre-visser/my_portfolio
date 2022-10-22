import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
// import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrapper } from '../../wrapper';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data))
  }, [])

  return (
    <>
    <h2 className="head-text">
      Aspiring Web Developer with a Focus On:
    </h2>
    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ x: [-300, 0], opacity: [0, 1] }}
          transitions={{ duration: 2, type: 'tween' }}
          key={about.title + index}
          whileHover={{ scale: 1.05 }}
          className="app__profile-item"
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 18}}>{about.title}</h2>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrapper(About, 'about');