import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
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
      Aspiring <span>web developer</span> with a <span style={{color: 'var(--orange-color'}}>focus</span> on:
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
    <motion.div className="app__flex app__about-desc"
      whileInView={{ x: [300, 0], opacity: [0, 1] }}
      transitions={{ duration: 2, type: 'tween' }}
    >
      <div className="app__about-portrait">
        <img src={images.portrait} alt='portrait' id="portrait"/>
        <h2 id="heading">Hello <span><img id="wave" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt='wave'/></span></h2>
      </div>

      <p className='p-text'>My name is <strong>Jeandre Visser</strong>, I am in search of a career in full-stack or front-end development. I am eager to continue learning and collaborate with other developers of various experience levels. I am a graduate from <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>, a program that involved a fast-paced learning environment comprised of small to large projects using popular front and back-end languages. I am also a former project manager at an environmental engineering consulting company with transferable skills in problem-solving and project management that will help to kickstart a new career in programming!</p>
    </motion.div>
    </>
  )
}

export default AppWrapper(About, 'about');