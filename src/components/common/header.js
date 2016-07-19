"use strict";

import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import LoadingDots from "./LoadingDots";


const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
      /*
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="courses" activeClassName="active">Courses</Link></li>
            <li><Link to="about" activeClassName="active">About</Link></li>
            {loading && <li><LoadingDots interval={100} dots={20} /></li>}
          </ul>
        </div>
      </nav>
      */
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
