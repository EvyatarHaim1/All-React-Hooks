import React, { useLayoutEffect, useEffect, useRef } from 'react';
/* useLayoutEffect called earlier stage of the page rendering than the useEffect.
it's great when you want to do something before it's print to the user.
useLayoutEffect is called before everything is render into the page and shown to the user */

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div className="hook">
            <h2>UseLayoutEffect example:</h2>
            <input ref={inputRef} value="PEDRO" style={{ width: 200, height: 20 }} />
        </div>
    );
}

export default UseLayoutEffect;
