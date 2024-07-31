import React, {useReducer} from "react";
import { listReducer, initialListState } from "./reducer";

export const ListContext = React.createContext();

export const ListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listReducer, initialListState);

    return (
        <ListContext.Provider value={{state, dispatch}} >
            {children}
        </ListContext.Provider>
    );
};