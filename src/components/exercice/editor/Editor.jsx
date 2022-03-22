import React from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
    const {
        value,
        onChange,
    } = props
    function handleChange(editor, data, value) {
        onChange(value);
    }

    return(
        <div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: 'javascript',
                    lineNumbers: true,
                    theme: 'dracula',
                }}
            />
        </div>
    )
}