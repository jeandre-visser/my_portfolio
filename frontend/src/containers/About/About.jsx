import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrapper } from '../../wrapper';
import { GoLocation } from 'react-icons/go';


const hobbies = [
  {title: 'hitting the gym', imgUrl: images.gym}, {title: 'enjoying outdoors', imgUrl: images.outdoors}, {title: 'drinking coffee', imgUrl: images.coffee},
];


const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"] | order(_createdAt desc)';
    client.fetch(query).then((data) => setAbouts(data))
  }, [])

  return (
    <>
    <h2 className="head-text app__top">
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
        <h2>Hello <span><img id="wave" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt='wave'/></span></h2>
        <p className='app__flex'><GoLocation />Calgary, Alberta</p>
        
      </div>

      <p className='p-text'>My name is <strong>Jeandre Visser</strong>, currently a Full Stack Developer at <a href="https://nutrimeals.ca/">Nutrimeals</a> and a 2022 graduate of the web development program at <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a> that involved a fast-paced learning environment comprised of small to large projects using popular front and back-end languages. I also transitioned from the oil and gas industry as a former project manager at an environmental engineering consulting company with transferable skills in problem-solving and project management that serve me well in my tech career!</p>
    </motion.div>
    
    <motion.div
          whileInView={{ opacity: [0, 1] }}
          transitions={{ duration: 2 }}
          className="app__profile-language"
        >
          <div>
            <img src={images.canada} alt="canada" />
            <h4>English</h4>
          </div>

          <div>
            <img src={images.africa} alt="africa" />
            <h4>Afrikaans</h4>
          </div>
          
        </motion.div>

    <h1 className='app__hobby-title' style={{ margin: '4rem 0 1rem', textAlign: 'center'}}>When I am not <span style={{color: 'var(--secondary-color)'}}>coding</span>, I am ...</h1>
    <div className="app__hobbies app__flex">
      
      {hobbies.map((hobby, index) => (
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transitions={{ duration: 2, type: 'tween' }}
          key={hobby.title + index}
          whileHover={{ scale: 1.05 }}
          className="app__profile-item"
          style={{ margin: '1rem 3rem'}}
        >
          <img src={hobby.imgUrl} alt={hobby.title} />
          <h2 className="bold-text" style={{ marginTop: 8, textTransform: 'capitalize'}}>{hobby.title}</h2>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrapper(About, 'about');