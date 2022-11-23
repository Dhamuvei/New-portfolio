import React from "react";
import "./Experience.css";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiInsomnia } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have </h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h4>Frontend Development</h4>
          <div className="experience_content">
            <article className="experience_detials">
              <div>
              <h1>
                <ImHtmlFive />
              </h1>
              <small className="text-light">HTML</small>
              </div>
            </article>
            <article className="experience_detials">
              <div>
              <h1>
                <SiCss3 />
              </h1>
              <small className="text-light"> CSS</small>
              </div>
            </article>
            <article className="experience_detials">
            <div>
            <h1>
                <IoLogoJavascript />
              </h1>
              <small className="text-light">JavaScript</small>
            </div>
            </article>
            <article className="experience_detials">
             <div>
             <h1>
                <SiTailwindcss />
              </h1>
              <small className="text-light">Tailwind</small>
             </div>
            </article>
            <article className="experience_detials">
            <div>
            <h1>
                <RiReactjsLine />
              </h1>
              <small className="text-light">React JS</small>
            </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h4>Backend Development</h4>
          <div className="experience_content">
            <article className="experience_detials">
             <div>
             <h1>
                <ImHtmlFive />
              </h1>
              <small className="text-light">Node JS</small>
             </div>
            </article>
            <article className="experience_detials">
             <div>
             <h1>
                < SiMongodb />
              </h1>
              <small className="text-light">Mongo DB</small>
             </div>
            </article>
            
            <article className="experience_detials">
             <div>
             <h1>
                <SiExpress />
              </h1>
              <small className="text-light">Express JS</small>
             </div>
            </article>
            <article className="experience_detials">
            <div>
            <h1>
                <FaAws />
              </h1>
              <small className="text-light">AWS</small>
            </div>
            </article>
            <article className="experience_detials">
           <div>
           <h1>
                <BsGithub />
              </h1>
              <small className="text-light">Git</small>
           </div>
            </article>
            <article className="experience_detials">
             <div>
             <h1>
                <SiInsomnia />
              </h1>
              <small className="text-light">Insomnia</small>
             </div>
            </article>
            <article className="experience_detials">
            <div>
            <h1>
                <GrMysql />
              </h1>
              <small className="text-light">MySQL</small>
            </div>
            </article>
         
            <article className="experience_detials">
             <div>
             <h1>
                <SiNetlify />
              </h1>
              <small className="text-light">Netlify</small>
             </div>
            </article>
           
            <article className="experience_detials">
             <div>
             <h1>
                <SiHeroku />
              </h1>
              <small className="text-light">Heroku</small>
             </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
