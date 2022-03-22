import React, {useEffect, useState} from "react";
import './exercice.css'
import Editor from './editor/Editor'

export default function () {
    const [js, setJs] = useState('function(i)')
    var [result, setResult] = useState([])

    return (
        <div>
            <div className="topbar">
                <div className="title-exercice">
                    You can't javascript under pressure
                </div>
                <div className="timer">
                    0:00
                </div>
            </div>
            <div className="editor-container">
                <Editor
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div className="result-container">
                <button className="button-submit">Go</button>
                <div className="console">
                    {result}
                </div>
            </div>
        </div>
    )
}