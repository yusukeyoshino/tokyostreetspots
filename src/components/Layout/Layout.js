import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import classes from "./Layout.module.css";
import logo from "../../assets/logo.png";
import SideDrawer from "../SideDrawer/SideDrawer";

const Layout = (props) => {
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [toggleSideDrawer, setToggleSideDrawer] = useState(false);

  const clickHandler = () => {
    setIsLinkClicked(!isLinkClicked);
  };

  let navAboutClass = isLinkClicked
    ? [`${classes.nav_about} ${classes.nav_about_active}`]
    : [`${classes.nav_about}`];

  let navHomeClass = isLinkClicked
    ? [`${classes.nav_home} ${classes.nav_home_active}`]
    : [`${classes.nav_home}`];

  return (
    <>
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <nav className={navAboutClass}>
        <span onClick={clickHandler}>
          <Link to="/about">ABOUT</Link>
        </span>
      </nav>
      <nav onClick={clickHandler} className={navHomeClass}>
        <span onClick={clickHandler}>
          <Link to="/">HOME</Link>
        </span>
      </nav>
      <nav className={classes.addspot}>
        <span onClick={clickHandler}>
          <Link to="/addspot">ADD SPOT</Link>
        </span>
      </nav>
      <div
        onClick={() => setToggleSideDrawer(!toggleSideDrawer)}
        className={classes.hamberger_icon}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <SideDrawer
        remove={() => setToggleSideDrawer(false)}
        isOpened={toggleSideDrawer}
      />
      <div className={classes.background}></div>
      {/* MAIN */}
      <div className={classes.wrapper}>
        <div className={classes.container}>{props.children}</div>
      </div>
      {/* icon attribute */}
      <div className={classes.attribute}>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div className={classes.copyright}>© 2020 POTY</div>
      </div>
    </>
  );
};

export default Layout;