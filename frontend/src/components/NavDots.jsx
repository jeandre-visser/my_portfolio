import React from 'react';

const NavDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        'home',
        'about',
        'skills',
        'employment',
        'education',
        'certifications',
        'projects',
        'contact',
      ].map((item, index) => (
        <a
          href={`#${item}`}
          className="app__navigation-dot"
          key={item + index}
          style={active === item ? { backgroundColor: '#000' } : {}}
        ></a>
      ))}
    </div>
  );
};

export default NavDots;
