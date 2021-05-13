import React from 'react';

function TextDisplay() {
    const [text, setText] = React.useState('text here');

    const updateText = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <h1>Show Text: {text}</h1>
            <input type="text" onChange={updateText} />
        </div>
    );
}

export default TextDisplay;