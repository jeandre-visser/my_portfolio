import React from 'react'
import { About, Footer, Header, Projects, Skills, Education, Experience, Testimonial } from './containers/index';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app" >
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App