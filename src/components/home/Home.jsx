import React from "react";
import {Link} from 'react-router-dom';
import './home.css'

export default function () {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/exercice">
                <button>Start</button>
            </Link>
        </div>
    )
}