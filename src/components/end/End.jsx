import React from "react";
import {Link} from 'react-router-dom';
import './end.css'

export default function () {
    return (
        <div>
            <div className="title">
                You can't javascript under pressure
            </div>
            <div className="body">
                Congratulations you finish the challenge.
            </div>
            <Link to="/exercice">
                <div className="button-container">
                    <button className="button">Retry</button>
                </div>
            </Link>
        </div>
    )
}