import React from "react";
import "./Portfolio.css";
import hanlify from "../../assets/img/hanlify.png";
import rpg from "../../assets/img/rpg.png";
import musicPlayer from "../../assets/img/musicPlayer.png";
import quiz from "../../assets/img/quiz.png";

const Portfolio = () => {
  // const [show, setShow] = React.useState(false);
  // setTimeout(() => {
  //   setShow(true);
  // }, 2000);
  return (
    <section>
      <div className="portfolio-parent">
        <div>
          <h1>Sample Projects</h1>
          <div className="portfolio">
            <div className="card">
              <div className="card-header">
                <h5>Music Player</h5>
                <p>React Project</p>
              </div>
              <div className="card-body">
                <img src={musicPlayer} alt="project-sample" />
                <div className="image-hover">
                  <a
                    href="https://hanlinthedeveloper.github.io/musicPlayer/"
                    target="_blank"
                    className="project-btn"
                  >
                    Demo
                  </a>
                  <a
                    className="project-btn"
                    target="_blank"
                    href="https://github.com/HanlinTheDEVELOPER/MusicPlayerSourceCode"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Quiz</h5>
                <p>React Project</p>
              </div>
              <div className="card-body">
                <img src={quiz} alt="project-sample" />
                <div className="image-hover">
                  <a
                    href="https://quizzical-fxybpxl51-hanlinthedeveloper.vercel.app/"
                    target="_blank"
                    className="project-btn"
                  >
                    Demo
                  </a>
                  <a
                    className="project-btn"
                    target="_blank"
                    href="https://github.com/HanlinTheDEVELOPER/Quizzical"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Online Store</h5>
                <p>PureJS Project</p>
              </div>
              <div className="card-body">
                <img src={hanlify} alt="project-sample" />
                <div className="image-hover">
                  <a
                    href="https://hanlinthedeveloper.github.io/hanlinianStore/"
                    target="_blank"
                    className="project-btn"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/HanlinTheDEVELOPER/hanlinianStore"
                    target="_blank"
                    className="project-btn"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Role Playing Game</h5>
                <p>PureJS Project</p>
              </div>
              <div className="card-body">
                <img src={rpg} alt="project-sample" />
                <div className="image-hover">
                  <a
                    target="_blank"
                    className="project-btn"
                    href="https://hanlinthedeveloper.github.io/rolePlayingGame/"
                  >
                    Demo
                  </a>
                  <a
                    className="project-btn"
                    target="_blank"
                    href="https://github.com/HanlinTheDEVELOPER/rolePlayingGame"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
