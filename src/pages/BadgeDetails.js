import React from 'react';
import {Link} from 'react-router-dom';


import './styles/BadgeDetails.css'
import Badge from '../components/Badge';
import Logo from '../images/camote-logo.png';
import DelteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails(props){
    const badge = props.badge;

    return(
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img class="logo" src={Logo} alt="logo"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={badge.firstName} 
                                lastName={badge.lastName}
                                email={badge.email}
                                twitter={badge.twitter}
                                jobTitle={badge.jobTitle}
                            />
                        </div>

                        <div className="col">
                            <h2>Actions</h2>
                            
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/CamoteBadges-React/badges/${badge.id}/edit`}>
                                    Editar
                                    </Link>
                                </div>
                                <div>
                                    <button onClick={props.onOpenModal} className="btn btn-danger">Delte</button>
                                    <DelteBadgeModal 
                                        isOpen={props.modalIsOpen} 
                                        onClose={props.onCloseModal}
                                        onDeleteBadge={props.onDeleteBadge}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BadgeDetails