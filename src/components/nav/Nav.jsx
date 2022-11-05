import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

import Home from "../home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skill from "../Skill/Skill";
// import Loading from "../Loading/Loading";
import "./nav.css";

const nav = () => {
  // const [isLoading, setIsLoading] = React.useState(true);

   const [active, setActive] = React.useState("home");
  // React.useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, [active]);
  return (
    <div>
      {/* <Loading isLoading={isLoading} /> */}
      <div className="left-nav">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <Link to="/">
          <span
            onClick={() => setActive("home")}
            className={active === "home" ? "active first" : "first"}
          >
            <AiOutlineHome className="nav-logo" />
          </span>
        </Link>
        <Link to="/about">
          <span
            onClick={() => setActive("user")}
            className={active === "user" ? "active" : ""}
          >
            <AiOutlineUser className="nav-logo" />
          </span>
        </Link>
        <Link to="/skill">
          <span
            onClick={() => setActive("skill")}
            className={active === "skill" ? "active" : ""}
          >
            <GiSkills className="nav-logo" />
          </span>
        </Link>
        <Link to="/portfolio">
          <span
            onClick={() => setActive("portfolio")}
            className={active === "portfolio" ? "active" : ""}
          >
            <VscFolderLibrary className="nav-logo" />
          </span>
        </Link>
        <Link to="/contact">
          <span
            onClick={() => setActive("contact")}
            className={active === "contact" ? "active last" : "last"}
          >
            <BiMessageDots className="nav-logo" />
          </span>
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home active={setActive} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default nav;
