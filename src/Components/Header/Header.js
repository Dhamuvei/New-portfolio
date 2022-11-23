import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../Assets/me.png"
import HeaderSocial from "./HeaderSocial";

const Header = () =>{
    return(
       
  <header>
   
            <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Dhamodharan c</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocial/>
      
    <div className="me">
        <img src={ME} alt="me"/>
    </div>
    <a href="#contact" className="scroll_down">scroll Down</a>
    </div>
    
            
   
  </header>
    )
}

export default Header;