import React from 'react';
import {Link} from 'react-router-dom'; 

import './styles/Navbar.css';
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/CamoteBadges-React">
                        <span className="font-weight-light">Camote</span>
                        <span className="font-weight-bold">Sports</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;