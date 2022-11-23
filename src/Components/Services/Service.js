import React from "react";
import "./Service.css";
import { BsShieldFillCheck } from "react-icons/bs";
import { GiTargetPrize } from "react-icons/gi";
import {BsBookHalf} from 'react-icons/bs'

const Service = () => {
  return (
    <section id="service">
      <h5>About My</h5>
      <h2><BsBookHalf/>{" "}Education</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>SSLC/HSC</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsShieldFillCheck className="service_icon" />
              <p>
                Bharathiyar Matriculation HSC Chennai [2012] [SSLC]{" "}
                <strong>74%</strong>{" "}
              </p>
            </li>
            <li>
              <BsShieldFillCheck className="service_icon" />
              <p>
                Bharathiyar Matriculation HSC Chennai [2014] [HSC]{" "}
                <strong>64%</strong>
              </p>
            </li>
          </ul>
        </article>
        {/* End of School */}
        <article className="service">
          <div className="service_head">
            <h3>D[EEE]</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsShieldFillCheck className="service_icon" />
              <p>
                Valliammai Polytechnic College SRM Chennai [2016]{" "}
                <strong>88%</strong>{" "}
              </p>
            </li>
        
          <li>Achievement</li>
          <li>
            <GiTargetPrize color="gold" className="service_icon" />
            State Leval Kabbadi. 
          </li>
          <li>
              <GiTargetPrize color="gold" className="service_icon" />
              State level project contest for polytechnic students “project
              expo 2016”.
            </li>
          </ul>
          
        </article>
        {/* End of Diplomo */}
        <article className="service">
          <div className="service_head">
            <h3>BE [EEE]</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsShieldFillCheck className="service_icon" />
              <p>
                Sri Venkateswara College Of Engineering Chennai [2021]{" "}
                <strong>7.8 CGPA</strong>{" "}
              </p>
            </li>
            <li>Achievement</li>{" "}
            <li>
              <GiTargetPrize color="gold" className="service_icon" />
              NAKSHTRA’20 National Level Technical Symposium.
            </li>
            <li>
              <GiTargetPrize color="gold" className="service_icon" />
              24 Hour Makeathon Organised By AEEE.{" "}
            </li>
            <li>
              <GiTargetPrize color="gold" className="service_icon" />
              Paper Presentation In National Level Technical Symposium-Pulse
              2K19.{" "}
            </li>
           
            <li>
              <GiTargetPrize color="gold" className="service_icon" />
              Smart-Micro-Nano grid and Emerging Technology organised by IEI
              SVCE.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
