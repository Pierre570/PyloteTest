import React, { useEffect, useState } from "react";
import './exercice.css'
import Editor from './editor/Editor'

export default function (props) {
    const exercice = [
        'function doubleInteger(i) { \n\n\t// i will be an integer. Double it and return it.\n\n\n\treturn i;\n\n}',
        'function isNumberEven(i) {\n\n\t// i will be an integer. Return true if its even, and false if it isnt.\n\n\n}',
        'function getFileExtension(i) {\n\n\t// i will be a string, but it may not have a file extension.\n\t// return the file extension (with no period) if it has one, otherwise false\n\n\n}',
        'function longestString(i) { \n\n\t// i will be an array\n\t // return the longest string in the array\n\n\n}',
        'function arraySum(i) {\n\n\t // i will be an array, containing integers, strings and/or arrays like itself.\n\t // Sum all the integers you find, anywhere in the nest of arrays.\n\n\n}'
    ]
    const [code, setCode] = useState(exercice[0]);
    const [result, setResult] = useState([]);
    const [count, setCount] = useState(0);
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0 })
    const [interv, setInterv] = useState(0);


    function start() {
        run();
        setInterv(setInterval(run, 10));
    };
    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m;

    const run = () => {
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM});
    };
    useEffect(() => {
        console.log('oueeee')
        start();
      }, []);
    function correction() {
        var counter = 0;
        const parameter = [
            [2, 4, -10, 0, 100],
            [2, 3, 0, -2, Math.floor(Math.random() * 1000000) * 2],
            ['blatherskite.png', 'perfectlylegal.torrent', 'spaces are fine in file names.txt', 'this does not have one', '.htaccess'],
            [['a', 'ab', 'abc'], ['big', [0, 1, 2, 3, 4], 'tiny'], ['Hi', 'World', '你好'], [true, false, 'lol'], [{ object: true, mainly: 'to confuse you' }, 'x']],
            [[1, 2, 3, 4, 5], [[1, 2, 3], 4, 5], [[1, 2, false], 4, 5], [3, 2, [5, [6, 9, 10, [56, 90]]]]]
        ]
        const solution = [
            [4, 8, -20, 0, 200],
            [true, false, true, true, true],
            ['png', 'torrent', 'txt', false, 'htaccess'],
            ['abc', 'tiny', 'World', 'lol', 'x'],
            [15, 15, 12, 181]
        ]
        var funct = eval(
            `(${code})`
        )
        setResult(result => [...result, '------------------------------------'])
        for (var x in parameter[count]) {
            const valeur = parameter[count][x];
            setResult(result => [...result, <Log value={valeur}></Log>])
            try {
                if (funct(parameter[count][x]) !== solution[count][x]) {
                    const soluce = solution[count][x]
                    setResult(result => [...result, <div className="log-bad">WRONG Anwser. Try again ! </div>])
                }
                else {
                    setResult(result => [...result, <div className="log-good">Good Answer Congratulations</div>])
                    counter += 1;
                }
            } catch (error) {
                setResult(result => [...result, <div className="log-bad">Error syntaxe in code</div>])
            }
        }
        if (counter === solution[count].length) {
            setResult([<div className="log-good">Congratulations you passed the exercice {count + 1}</div>])
            setCode(exercice[count + 1]);
            setCount(count + 1)
        }
    }
    return (
        <div>
            <div className="topbar">
                <div className="title-exercice">
                    You can't javascript under pressure
                </div>
                <div className="timer">
                    {time.m}:{time.s > 10 ? time.s : "0" + time.s}
                </div>
            </div>
            <div className="exercice-count">
                Exercice {count + 1}
            </div>
            <div className="editor-container">
                <Editor
                    value={code}
                    onChange={setCode}
                />
            </div>
            <div className="result-container">
                <button className="button-submit" onClick={() => { correction() }}>Go</button>
                <div className="console">
                    {result}
                </div>
            </div>
        </div>
    )
}

function Log(props) {
    const {
        value,
    } = props
    return (
        <div className="log">
            Testing function with parameter: {value} ...
        </div>
    )
}