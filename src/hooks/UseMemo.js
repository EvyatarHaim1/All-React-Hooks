import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
/* useMemo will only recompute the memoized value when one of the dependencies has changed. 
This optimization helps to avoid expensive calculations on every render. */
const UseMemo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("http://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("This was computed");
        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), [data]);


    return (
        <div className="hook">
            <h2>UseMemo example: </h2>
            <div>{getLongestName}</div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <h5> toggle </h5>}
        </div>
    );
}

export default UseMemo;
