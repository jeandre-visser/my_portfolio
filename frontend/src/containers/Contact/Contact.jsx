import React, { useState } from 'react';
import { AppWrapper } from '../../wrapper';
import { images } from '../../constants';
import './Contact.scss';

const Contact = () => {
  return (
    <>
      <h2 className="head-text" id="heading">Get in touch</h2>
    </>
  )
}

export default AppWrapper(Contact, 'contact');