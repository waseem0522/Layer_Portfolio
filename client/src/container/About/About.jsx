import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './About.scss'

const abouts = [
  {title: 'Early life and education', Description: 'Born Willie Edward Gary on July 12, 1947, in Eastman, GA he is the son of Turner (a sharecropper) and Mary Gary.[2] He attended Shaw University on a football scholarship graduating in 1971.[3] He earned his Juris Doctor degree from North Carolina Central University School of Law', imgUrl: images.about01},
  {title: 'Career', Description: "In 1995, Gary filed a lawsuit on behalf of Mississippi funeral home operator Jeremiah Joseph O'Keefe against Canadian businessman Raymond Loewen after Loewen reneged on a contractual agreement with O'Keefe. Gary won the case, with a jury awarding O'Keefe $500 million in punitive damages.", imgUrl:images.about02},
  {title: 'Memberships', Description: 'Gary is a member of the American Bar Association, National Bar Association, and NAACP', imgUrl:images.about03},
  {title: 'Awards and honors', Description: "General Assembly of the State of South Carolina recognized him as one of the United States most respected and accomplished lawyers.", imgUrl:images.about03}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that 
        <span>Good Design</span>
        <br/>
        means
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
             whileInView={{opacity: 1}}
             whileHover={{scale:1.1}}
             transition={{duration:0.5, type: 'tween'}}
             className="app__profile-item"
             key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{margin:20}}>{about.title}</h2>
              <p className="p-text" style={{margin:10}}>{about.Description}</p>

            </motion.div>
          ))}
      </div>
    </>
  )
}

export default AppWrap(About,'about')
