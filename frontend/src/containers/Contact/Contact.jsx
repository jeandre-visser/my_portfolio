import { AppWrapper } from '../../wrapper';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Contact.scss';

const contacts = [
  {title: 'Resume', url: 'https://resume.creddle.io/resume/9fih5w59z8y', img: images.resume},
  {title: "GitHub", url: 'https://www.github.com/jeandre-visser', img: images.github},
  {title: 'Email', url: 'mailto:jeandrev1414@gmail.com', img: images.email},
  {title: 'LinkedIn', url: 'http://www.linkedin.com/in/jeandre-visser', img: images.linkedin},
  {title: '+1 639-840-1087', img: images.phone},
]

const Contact = () => {
  return (
    <>
      <h2 className="head-text" id="heading">Get in <span style={{ color: 'var(--orange-color'}}>touch</span></h2>
      <motion.div className="app__contacts" 
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
      >
        {contacts.map((contact, index) => (
          <motion.div 
            className="app__contact-card" 
            key={contact + index}
            whileHover={{ scale: [1, 1.05] }}
            transition={{ duration: 0.1 }}
          >
            <a href={contact.url}>
              <img src={contact.img} alt="contact-img"></img>
            </a>
            <h3>{contact.title}</h3>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="app__footer"
        transition={{ duration: 2, ease: 'easeInOut'}}
        whileInView={{ opacity: [0, 1] }}
      >
        <img src={images.footer} alt='logo'/>
        <p className="p-text">Jeandre Visser<br/>2022</p>
      </motion.div>

    </>
  )
}

export default AppWrapper(Contact, 'contact');