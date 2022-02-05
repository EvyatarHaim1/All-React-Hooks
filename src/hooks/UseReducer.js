import React, { useReducer } from 'react';
// useReducer using mostly in case you have a very complex state, works similar to Redux
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "TOGGLE_SHOW_TEXT":
            return { count: state.count, showText: !state.showText }
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer,
        { count: 0, showText: true })

    return (
        <div>
            <h2>useReducer examples:</h2>
            <div>counter - {state.count}
                <button
                    onClick={() => {
                        dispatch({ type: "INCREMENT" });
                        dispatch({ type: "TOGGLE_SHOW_TEXT" });
                    }}>Increment
                </button>
            </div>
            {state.showText && <p>This is a text</p>}
        </div>);
}

export default UseReducer;
