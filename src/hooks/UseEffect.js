import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* useEffect is a function that will be called whenever the page rerenders,
you can specify when you want to detect and dependencies.
useEffect is called after everything is render into the page and shown to the user */

const getRandomIndex = (min, max) => {
    const floatNumber = Math.random() * (max - min) + min;
    return Math.trunc(floatNumber);
}

const UseEffect = () => {
    const [email, setEmail] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        try {
            axios.get("https://jsonplaceholder.typicode.com/comments")
                .then((response) => {
                    let randomIndex = getRandomIndex(0, 500);
                    console.log(randomIndex);
                    setEmail(response.data[randomIndex].email);
                })
        } catch (error) {
            console.log(error);
        }
    }, [counter])

    return (
        <div className="hook">
            <h2>useEffect examples:</h2>
            {email}
            number of changing the email: {counter}
            <button onClick={() => setCounter(counter + 1)}>Change random email </button>
        </div>
    );
}

export default UseEffect;
