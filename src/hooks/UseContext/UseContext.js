import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

/* first createContext - creates a collection of states which also has export,
then the parent should be wrapped by the context.Provider and has the value,
in the childs components we access the context with useContext hook and 
distructure the specific piece of state we need locally */

export const AppContext = createContext(null); // context is a collection of states

const UseContext = () => {
    const [username, setUsername] = useState("");
    return (
        <div className="hook">
            <h2>UseContext example: </h2>
            <AppContext.Provider className="hook" value={{ username, setUsername }}>
                <Login />
                <User />
            </AppContext.Provider>
        </div>
    );
}

export default UseContext;
