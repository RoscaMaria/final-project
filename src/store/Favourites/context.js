import React, {useReducer} from "react";
import { dashboardReducer, initialDashboardState } from "./reducer";

export const DashboardContext = React.createContext();

export const DashboardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dashboardReducer, initialDashboardState);

    return (
        <DashboardContext.Provider value={{state, dispatch}} >
            {children}
        </DashboardContext.Provider>
    );
};