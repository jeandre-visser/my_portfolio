import React from 'react'
import { About, Contact, Header, Projects, Skills, Education, Employment } from './containers/index';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app" >
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Employment />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App