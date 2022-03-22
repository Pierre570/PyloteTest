import React from "react";
import {Link} from 'react-router-dom';
import './home.css'

export default function () {
    return (
        <div>
            <div className="title">
                You can't javascript under pressure
            </div>
            <div className="body">
                Five functions to fill. One ticking clock.
            </div>
            <div className="body-question">
                How fast can you code ?
            </div>
            <Link to="/exercice">
                <div className="button-container">
                    <button className="button">Start</button>
                </div>
            </Link>
        </div>
    )
}