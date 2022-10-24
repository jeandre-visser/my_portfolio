import './Employment.scss';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

const Employment = () => {
  return (
    <>
      <h2 className="head-text"><span>Employment  </span>History</h2>
      <div className="app__employment-container">
        <motion.div 
          className="app__experience-list"
        >

        </motion.div>
      </div>
    </>
  )
}

export default Employment