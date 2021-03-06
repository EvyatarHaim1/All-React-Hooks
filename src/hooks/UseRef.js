import React, { useRef, useState } from 'react';
// useRef is the easiest way to access and manipulate dom element
const UseRef = () => {
    const [name, setName] = useState("Evyatar");
    const inputRef = useRef();

    const onFocus = () => {
        inputRef.current.focus();
    };

    const onChangeName = () => {
        setName(inputRef.current.value);
        inputRef.current.value = "";
    };

    return (
        <div className="hook">
            <h2>UseRef examples:</h2>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onFocus}>Focus input field</button>
            <button onClick={onChangeName}>Change Name</button>
            <h5>My name is: {name}</h5>
        </div>
    );
}

export default UseRef;
