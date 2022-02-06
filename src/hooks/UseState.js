import React, { useState } from 'react';
// useState it's a variable in React that can be set and render

const UseState = () => {
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
        <div className="hook">
            <h2>useState examples:</h2>
            <div>counter - {counter} <button onClick={increment}>Increment</button></div>
            <input placeholder="Write your name" onChange={handleChange} />
            Your name is {name}
        </div>);
}

export default UseState;
