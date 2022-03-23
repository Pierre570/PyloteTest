import React, {useEffect, useState} from "react";
import './exercice.css'
import Editor from './editor/Editor'

export default function () {
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

    async function correction() {
        console.log(count);
        var counter = 0;
        const parameter = [
            [2, 4, -10, 0, 100],
            [2, 3, 0, -2, Math.floor(Math.random() * 1000000)*2],
            ['blatherskite.png', 'perfectlylegal.torrent', 'spaces are fine in file names.txt', 'this does not have one', '.htaccess'],
            [['a', 'ab', 'abc'], ['big',[0,1,2,3,4],'tiny'], ['Hi','World','你好'], [true,false,'lol'], [{object: true,mainly: 'to confuse you'},'x']],
            [[1,2,3,4,5], [[1,2,3],4,5], [[1,2,false],4,5], [3, 2, [5, [6, 9, 10, [56, 90]]]]]
        ]
        const solution = [
            [4, 8, -20, 0, 200],
            [true ,false, true, true, true],
            ['png', 'torrent', 'txt', false, 'htaccess'],
            ['abc', 'tiny', 'World', 'lol', 'x'],
            [15, 15, 12, 181]
        ]
        var funct = eval(
            `(${code})`
        )
        for (var x in parameter[count]) {
            const valeur = parameter[count][x];
            setResult(result => [...result, <Log value={valeur}></Log>])
            try {
                if (funct(parameter[count][x]) !== solution[count][x]){
                    const soluce = solution[count][x]
                    const resultat = funct(parameter[count][x]);
                    setResult(result => [...result, <BadLog valueResult={resultat} valueExpected={soluce}></BadLog>])
                }
                else {
                    setResult(result => [...result, <GoodLog value={valeur}></GoodLog>])
                    counter += 1;
                }
            } catch (error) {
                setResult(result => [...result, <div className="log-bad">Error syntaxe in code</div>])
            }
        }
        if (counter === solution[count].length) {
            setResult([])
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
                    {count}
                </div>
            </div>
            <div className="editor-container">
                <Editor
                    value={code}
                    onChange={setCode}
                />
            </div>
            <div className="result-container">
                <button className="button-submit" onClick={() => {correction()}}>Go</button>
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

function GoodLog(props) {
    const {
        value,
    } = props
    return (
        <div className="log-good">
            RIGHT: {value} is the right answer.
        </div>
    )
}

function BadLog(props) {
    const {
        valueResult,
        valueExpected,
    } = props
    return (
        <div className="log-bad">
            WRONG: Got {valueResult} but expected {valueExpected}. Try again !
        </div>)
}