import React, { useState } from 'react';

function UseState() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");

    const increment = () => {
        setCounter(counter + 1);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    return (
        <div>
            <div>useState examples:</div>
            <div>counter - {counter} <button onClick={increment}>Increment</button></div>
            <input placeholder="Write your name" onChange={handleChange} />
            Your name is {name}
        </div>);
}

export default UseState;
