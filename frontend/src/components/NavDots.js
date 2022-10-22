import React from 'react'

const NavDots = ( { active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
        <a href={`#${item}`} 
          className="app__navigation-dot"
          key={item + index}
          style={active === item ? {backgroundCOlor: '#000'} : '' }
        >
          {item}
        </a>
      ))}
    </div>
  )
}

export default NavDots