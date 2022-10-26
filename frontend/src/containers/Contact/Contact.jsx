import { AppWrapper } from '../../wrapper';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Contact.scss';

const contacts = [
  {title: 'LinkedIn', url: 'http://www.linkedin.com/in/jeandre-visser', img: images.linkedin},
  {title: "GitHub", url: 'https://www.github.com/jeandre-visser', img: images.github},
  {title: 'jeandrev1414@gmail.com', url: '', img: images.email},
  {title: 'Resume', url: 'https://resume.creddle.io/resume/9fih5w59z8y', img: images.resume},
  {title: '639-840-1087', url: '', img: images.phone},
]

const Contact = () => {
  return (
    <>
      <h2 className="head-text" id="heading">Get in <span style={{ color: 'var(--orange-color'}}>touch</span></h2>
      <div className="app__contacts">
        {contacts.map((contact, index) => (
          <motion.div 
          className="app__contact-card" 
          transition={{ duration: 1, ease: 'easeInOut' }}
          whileInView={{ opacity: [0, 1] }}
          key={contact + index}
          >
            <a href={contact.url}>
              <img src={contact.img} alt="contact-img"></img>
            </a>
            <h3>{contact.title}</h3>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="app__footer"
        transition={{ duration: 1, ease: 'easeInOut'}}
        whileInView={{ opacity: [0, 1] }}
      >
        <img src={images.footer} alt='logo'/>
        <p className="p-text">Jeandre Visser<br/>2022</p>
      </motion.div>

    </>
  )
}

export default AppWrapper(Contact, 'contact');