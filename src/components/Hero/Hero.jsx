import React from 'react'
import './Hero.css'
import gudi from '../../assets/gudii.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={gudi} alt="" />
      <h1><span>I'm Neha Swain,</span>  A Web Developer & Tech Enthusiast</h1>
      <p>    A passionate full-stack web developer and final-year MCA student with expertise in modern web technologies. I thrive on creating efficient, user-friendly solutions while blending my love for coding.</p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className="anchor-link" offset={50} href='#contact' >Connect with me</AnchorLink>
                 
                 </div>
        <div className="hero-resume">My resume</div>
              </div>
    </div>
  )
}

export default Hero
