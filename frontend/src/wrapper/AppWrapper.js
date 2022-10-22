import React from 'react';
import { NavDots } from '../components';

const AppWrapper = (Component, idName, classNames) => function HOC() {
  return (
    <div className={`app__container ${classNames}`} id={idName}>
      <div className="app__wrapper app__flex">
        <Component />
      </div>
      <NavDots active={idName} />
    </div>
  )
}

export default AppWrapper