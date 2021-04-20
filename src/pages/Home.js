import React from "react";
import { Link } from "react-router-dom";

//import "./styles/Home.css";
import confLogo from "../images/logo.svg";
import astronauts from "../images/stars.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__info">
          <img src={confLogo} alt="Logo de conferencia" />
          <h1>PRINT YOUR BADGES</h1>
          <p>The easiest way to manage your conference</p>
          <Link to="/badges" className="btn btn-primary">
            Start Now
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;