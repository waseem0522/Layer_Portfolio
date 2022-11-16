import React, { useState} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap} from '../../wrapper';
import './Work.scss'

const abouts = [
  {title: 'CRIMINAL LAW', Description: "Corporate law involves general rules and regulations associated with corporate affairs, such as the incorporation of companies or corporations, directors' and shareholders' rights, memorandum & articles of association.", imgUrl: images.about01},
  {title: 'BUSINESS LAW', Description: "Business law, also known as trade or mercantile law, is the body of law that applies to the rights, relations, and conduct of persons and businesses engaged in buying, selling, trade, and commerce.", imgUrl:images.about02},
  {title: 'CORPORATE LAW', Description: "Corporate law involves general rules and regulations associated with corporate affairs, such as the incorporation of companies or corporations, directors' and shareholders' rights, memorandum & articles of association.", imgUrl:images.about03},
  {title: 'BANKING & FINANCE', Description: 'I am a good web developer.', imgUrl:images.about03}
]

const Work = () => {
  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1});
  const handleworkFilter = () => {

  }
  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio </span>Section </h2>
      <div className='app_-work-filter'>
        {['CRIMINAL LAW','BUSINESS LAW', 'CORPORATE LAW', 'BANKING & FINANCE','All'].map((item, index) => (
          <div 
           key={index}
           onClick={() => handleworkFilter(item)}
           className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
       animate={animateCard}
       transition={{duration: 0.5, delayChildren:0.5}}
       className="app__work-portfolio"
      >
        {abouts.map((about, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
                <img src={about.imgUrl} alt={about.title}/>
                <motion.div
                  whileHover={{opacity: [0,1]}}
                  transition={{duration: 0.25, ease:'easeInOut',staggerChildren:0.5}}
                  className="app__work-hover app__flex"
                >
                  <a href="#">
                    <motion.div
                      whileInView={{scale: [0,1]}}
                      whileHover={{scale:[1, 0.9]}}
                      transition={{duration: 0.25}}
                      className="app__flex"
                    >
                      <AiFillEye/>

                    </motion.div>
                  </a>
                  <a href="#">
                    <motion.div
                      whileInView={{scale: [0,1]}}
                      whileHover={{scale:[1, 0.9]}}
                      transition={{duration: 0.25}}
                      className="app__flex"
                    >
                      <AiFillGithub/>

                    </motion.div>
                  </a>

                </motion.div>
            </div>
            <div className="app__work-content app__flex" >
              <h4 className="bold-text">{about.title}</h4>
              <p className="p-text" style={{marginTop:10}}>{about.Description}</p>

            </div>

          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work,'work')
