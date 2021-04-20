import React from 'react';
import {Link} from 'react-router-dom';

import "./styles/BadgesList.css";
import Gravatar from './Gravatar';

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No se encontro ninguna informacion</h3>
                    <Link className="btn btn-primary" to="/badges/new">Crear nuevo Badge</Link>
                </div>
            )
        }
        return(
            <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
                return(
                        <li className="BadgesListItem" key={badge.id}>
                            <Gravatar className="BadgesListItem__avatar" email={badge.email}/>
                            <ul>
                                <li className="BadgesListItem__name">
                                {badge.firstName} {badge.lastName}  
                                </li>
                                <li>
                                @{badge.twitter}
                                </li>
                                <li>
                                {badge.jobTitle}
                                </li>
                            </ul>                              
                        </li>
                )
            })}
            </ul>
        );
    }
}


export default BadgesList;