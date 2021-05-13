import React from "react";
import { Link } from "react-router-dom";

//import "./styles/Home.css";
import logo from "../images/camote-logo.png";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home__info">
          <img class="logo" src={logo} alt="Logo de conferencia" />
          <h1>Unete a Camote Sports</h1>
          <p>The easiest way to manage your conference</p>
          <Link to="/CamoteBadges-React/badges" className="btn btn-primary">
            Start Now
          </Link>
        </div>
        <iframe
         src="https://discord.com/widget?id=746387208306556938&theme=dark" 
         width="350" 
         height="500" 
         allowtransparency="true" 
         frameborder="0"
         sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    );
  }
}

export default Home;