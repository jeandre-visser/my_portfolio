import React from 'react'
import { About, Footer, Header, Projects, Skills, Education, Employment, Testimonial } from './containers/index';
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
      <Employment />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App