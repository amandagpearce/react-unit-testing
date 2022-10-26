import React, { useState } from 'react';

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

    return (
        <div>
            <h1>Hello</h1>
            {!changedText && <h2>I'm the same :)</h2>}
            {changedText && <h2>I changed :(</h2>}
            <button onClick={changeTextHandler}>Change</button>
        </div>
    );
};

export default Greeting;