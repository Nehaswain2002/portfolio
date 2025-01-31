import React, { useState } from 'react';
import './Navbar.css';  
import Neha from '../../assets/Neha.jpg';  
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // If using the react-anchor-link-smooth-scroll package


function Navbar() {
  const [menu, setMenu] = useState("home");  // Track the active menu item

  // Function to handle menu item click
  const handleMenuClick = (item) => {
    setMenu(item);  // Update the active menu item
  };

  return (
    <div className='navbar'>
      <img src={Neha} alt="Logo" className="logo"/> 
      <ul className="nav-menu">
        <li><AnchorLink className="anchor-link"  href='#home' ><p onClick={() => setMenu("home")}>Home</p></AnchorLink>
          {menu === "home" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li><AnchorLink className="anchor-link" offset={50} href='#about' ><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>  {/* Fixed key name */}
          {menu === "about" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li ><AnchorLink className="anchor-link" offset={50} href="#skills">
  <p onClick={() => setMenu("skills")}>Skills</p>
</AnchorLink>

        </li>
        
        <li>
  <AnchorLink 
    className="anchor-link" 
    offset={50} 
    href='#projects'  
  >
    <p onClick={() => setMenu("projects")}>Projects</p>  
  </AnchorLink>
  {menu === "projects" ? <img src={underline} alt="underline" /> : null}
</li>

        <li > <AnchorLink className="anchor-link" offset={50} href='#work' ><p onClick={() => setMenu("work")}>Work</p></AnchorLink>
          {menu === "work" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li><AnchorLink className="anchor-link" offset={50} href='#contact' ><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>
          {menu === "contact" ? <img src={underline} alt="underline" /> : <></>}
        </li> 
      </ul>
      <li>
      

        <AnchorLink className="anchor-link" offset={50} href='#connect with me' ><p onClick={() => setMenu("connect")}></p></AnchorLink>
          {menu === "connect with me" ? <img src={underline} alt="underline" /> : <></>}
        </li> 
    </div>
  );
}

export default Navbar;
