import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pages = [
    { name:'home',link:'/'},
    { name:"about",link:'/about'},
    {name:'work',link:'/work'},
    {name:'skill',link:'/link'},
    {name:'contact',link:'/contact'},
    {name:'payment',link:'/payment'},


  ]
  // 'home', 'about', 'work', 'skills', 'contact','payment'
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {pages.map(({name,link}) => (
          <li className="app__flex p-text" key={`link-${link}`}>
            <div />
            <a href={`${link}`}>{name}</a>
          </li>
        ))}
        
      </ul>


      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
