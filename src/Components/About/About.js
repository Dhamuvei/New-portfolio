import React from "react";
import "./About.css";
import ME from "../../Assets/me2.png";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
          <a href="#experience">
            <article className="about_card">
           <GiSkills className="about_icon" />
              <h5>Skills</h5>
              <small></small>
            </article></a>
            <a href="#portfolio"><article className="about_card">
              <FaAward className="about_icon" />
              <h5>Project</h5>
              <small></small>
            </article></a>
            <a href="#service"><article className="about_card">
              <FaAward className="about_icon" />
              <h5>Education</h5>
              <small></small>
            </article></a>
          </div>
          <p>
            {" "}
              Having keep interest in MERN Stack Developer and wish to secure an
            entry level role with organization where I can utilize and further
            develop my skills. Being punctual and honest I will try to finish
            the given work on time. Try to fulfill all expectations of the
            company from me.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
