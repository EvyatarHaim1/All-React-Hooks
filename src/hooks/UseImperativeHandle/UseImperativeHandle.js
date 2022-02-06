import React, { useRef } from 'react';
import Button from './Button';
/* useImperativeHandle is pretty handy when you have to alter a child's state from the parent. 
customizes the instance value that is exposed to parent components when using ref.
in the parent I pass a ref to the child component, the onClick event can access the child imperative child's function 
which alter the child state. 
*/
const UseImperativeHandle = () => {
    const buttonRef = useRef(null);
    return (
        <div className="hook">
            <h2>UseImperativeHandle example:</h2>
            <button onClick={() => { buttonRef.current.alterToggle() }}>Button from parent :</button>
            <Button ref={buttonRef} />
        </div >
    );
}

export default UseImperativeHandle;
