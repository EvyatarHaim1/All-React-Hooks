import { useCallback, useState } from "react";
import Child from "./Child";

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