import React from "react";
import CV from "../../assets/cv/hanlinaungCV.pdf";

import "./home.css";
import Hero from "../../assets/img/hero.jpg";

const Home = () => {
  // const [show, setShow] = React.useState(false);
  // setTimeout(() => {
  //   setShow(true);
  // }, 2000);
  return (
    <section>
      <div className="home-parent">
        <div className="home-photo-parent">
          <div>
            <img src={Hero} alt="" className="home-photo" />
          </div>
        </div>
        <div className="home-text-parent">
          <div>
            <h1 className="home-text-header">HanLinTheDEVELOPER</h1>
            <h3 className="home-text-body">Junior Fullstack Web Developer</h3>
            <a href={CV} className="btn" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
