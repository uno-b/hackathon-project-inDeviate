import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

import './styles.css';

const Button = () => {
  return (
    <Link to="message-list" spy={true} smooth={true} offset={-70} duration={500}>
      <motion.button
        aria-label="Go to About section"
        animate={{ scale: 1.2, transition: { yoyo: Infinity } }}
        className="main-button"
      >
        <FaArrowDown />
      </motion.button>
    </Link>
  );
};

export default Button;
