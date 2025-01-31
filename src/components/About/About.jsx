import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import gudi from '../../assets/gudi.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern } alt="" />
      </div>
      <div className="about-sction">
        <div className="about-left">
            <img src={gudi} alt="" />
        </div>
        <div className="about-right">
       <div className="about-para">
        <p><div>Hi, I’m Neha Swain, a full-stack web developer with a passion for crafting dynamic, responsive, and user-centric web applications. My expertise lies in creating seamless digital experiences by leveraging a blend of front-end and back-end technologies. On the front end, I work with HTML, CSS, JavaScript, and frameworks like React to design intuitive interfaces. On the back end, I specialize in Node.js, Express, and databases like MongoDB and SQL to ensure robust and scalable functionality.</div>
  
  <div>I thrive in the ever-evolving tech landscape, constantly upgrading my skills to stay ahead of the curve. Currently, I’m honing my abilities as a Software Developer at Dream Adoration, where I collaborate on innovative projects that challenge me to grow both technically and creatively.</div>

<div>My work reflects a commitment to combining technical proficiency with problem-solving, ensuring every solution is impactful and efficient. Explore my portfolio to see how I turn ideas into reality and bring value to the world of web development.</div>


</p>
<h1 id="skills" className="para2">Skills</h1>

        <img src={theme_pattern} alt="" />
       </div>
       <div className="about-skill">

        <div className="about-skills"> <p>HTML & CSS</p><hr style={{width:"80%"}}/></div>   
        <div className="about-skills"> <p>JavaScript</p><hr style={{width:"70%"}}/></div> 
        <div className="about-skills"> <p>React JS</p><hr style={{width:"60%"}}/></div> 
        <div className="about-skills"> <p>Node Js</p><hr style={{width:"70%"}}/></div>  
        <div className="about-skills"> <p>Express JS</p><hr style={{width:"50%"}}/></div> 
        <div className="about-skills"> <p>Mongo DB</p><hr style={{width:"60%"}}/></div> 
        <div className="about-skills"> <p>SQL</p><hr style={{width:"70%"}}/></div> 
 </div>
 </div>
      </div>
      <div className="about-achivement">
        <div className="about-achivement">
            <h1>2+</h1>
            <p>years of experience</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>10</h1>
            <p>project completed</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>10+</h1>
            <p>CERTIFICATIONS & WORKSHOPS</p>
        </div>
         </div>
        </div>
    
  )
}

export default About
