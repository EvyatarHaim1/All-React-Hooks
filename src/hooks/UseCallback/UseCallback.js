import { useCallback, useState } from "react";
import Child from "./Child";
/* useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
This is useful when passing callbacks to optimized child components 
that rely on reference equality to prevent unnecessary renders*/

const UseCallback = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Yo, pls sub to the channel!");

    const returnComment = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    );

    return (
        <div className="hook">
            <h2>UseCallback example: </h2>
            <Child returnComment={returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h5> toggle </h5>}
        </div>
    );
}
export default UseCallback;