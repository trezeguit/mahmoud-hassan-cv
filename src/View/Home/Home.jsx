import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = () => {};
  return (
    <div className="mainContainer">
      <div className="header">
        <h1 className="headerText">Feel Free To Create Your CV</h1>
      </div>
      <div className="homeBody">
        <h2 className="bodyText">
          This WebSite help you to create amazing profile as CV
        </h2>
        <h3 className="bodyText">
          Register with us with your Information and enjoy
        </h3>
        <span className="homeBtn" onClick={handleClick}>
          <Link to="/Register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
