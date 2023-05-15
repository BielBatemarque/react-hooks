import React, { useState } from "react";

const initialState = {
    number: 1234,
    text: 'Context API + hook'
}

export const AppContext = React.createContext(initialState);

export const Store = ({ children }) => {
    const[state, setState] = useState(initialState);

    const updateState = (key, value) => {
        setState({
            ...state,
            [key]: value,
        });
    }

    return(
      <AppContext.Provider value={{
        number: state.number,
        text: state.text,
        setNuber: (n) => updateState('number', n),
        setText: (t) => updateState('text', t),
      }}>
          {children}
      </AppContext.Provider>  
    );
}