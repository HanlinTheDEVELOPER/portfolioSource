import React from "react";
import "./about.css";
import logo from "../../assets/img/logo192.png";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  // const [show, setShow] = React.useState(false);
  // setTimeout(() => {
  //   setShow(true);
  // }, 2000);
  return (
    <section>
      <div className="about-parent">
        <div className="about">
          <img src={logo} alt="logo-png" className="logo logo-left" />
          <img src={logo} alt="logo-png" className="logo logo-right" />
          <h1>ABOUT</h1>
          <div className="about-body">
            <h3>
              I love to learn new things and dive into the details of projects.
              My goal is to create best quality website for our users, who are
              eager to learn new things too! I'm comfortable with clean code and
              logical thinking, which results in easy to maintain code base.
            </h3>
          </div>
          <div className="about-footer">
            <h4>Want to know more about me?</h4>
            <h5>Explore below!</h5>
            <h2>
              <a
                href="https://github.com/HanlinTheDEVELOPER"
                target="_blank"
                className="socials-logo"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100020091776930"
                target="_blank"
                className="socials-logo"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/han-lin-07b52023a"
                target="_blank"
                className="socials-logo"
              >
                <FaLinkedin />
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
