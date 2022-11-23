import React from "react";
import "./Portfolio.css";
import IMG from '../../Assets/project3.png'

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Project</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container justify-content-center">
          <article className="portfolio_item">
            <div className="portfolio_
            item-image">
            <img src={IMG} alt="img" /></div><br/>
            <div><p>You can Buy or Sell Your bike with mail integrated and track with google map</p></div>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Dhamuvei?tab=repositories" className="btn" target="_blank">Github</a>
            <a href="https://bikebazzzar.ml/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

          </article>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
