import React from "react";
import "./skill.css";
import react from "../../assets/svg/react.svg";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import bootstrap from "../../assets/svg/bootstrap.svg";
import javaScript from "../../assets/svg/javascript.svg";
import jQuery from "../../assets/svg/jQuery.svg";
import php from "../../assets/svg/php.svg";
import mySql from "../../assets/svg/mySql.svg";

const Skill = () => {
  // const [show, setShow] = React.useState(false);
  // setTimeout(() => {
  //   setShow(true);
  // }, 2000);
  return (
    <section>
      <div className="skill-parent">
        <div className="skill">
          <h1>Languages</h1>
          <h5>(Hover to see the level)</h5>
          <div className="skill-body">
            <div className="each-skill">
              <img src={html} alt="HTML" width={100} height={100} />
              <h3>HTML</h3>
              <div className="html"></div>
              <h4>80%</h4>
            </div>
            <div className="each-skill">
              <img src={css} alt="css" width={100} height={100} />
              <h3>CSS</h3>
              <div className="css"></div>
              <h4>80%</h4>
            </div>
            <div className="each-skill">
              <img src={bootstrap} alt="Bootstrap" width={100} height={100} />
              <h3>Bootstrap</h3>
              <div className="bootstrap"></div>
              <h4>80%</h4>
            </div>
            <div className="each-skill">
              <img src={javaScript} alt="javaScript" width={100} height={100} />
              <h3>JavaScript</h3>
              <div className="js"></div>
              <h4>50%</h4>
            </div>
            <div className="each-skill">
              <img src={jQuery} alt="jQuery" width={100} height={100} />
              <h3>jQuery</h3>
              <div className="jQuery"></div>
              <h4>30%</h4>
            </div>
            <div className="each-skill">
              <img src={react} alt="react" width={100} height={100} />
              <h3>ReactJS</h3>
              <div className="react"></div>
              <h4>45%</h4>
            </div>
            <div className="each-skill">
              <img src={php} alt="php" width={100} height={100} />
              <h3>PHP</h3>
              <div className="php"></div>
              <h4>30%</h4>
            </div>
            <div className="each-skill">
              <img src={mySql} alt="mySql" width={100} height={100} />
              <h3>mySql</h3>
              <div className="mysql"></div>
              <h4>30%</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
