import React, {createContext, ReactNode, Reducer, useContext, useReducer} from "react";
import {AppState} from "../typescript/interfaces/state";
import {AppAction} from "../typescript/interfaces/actions";
import {INITIAL_APP_STATE} from "../constants/state";
import {reduceAppContext} from "../functions/reducers";

interface AppContextReducer {
    state: AppState;
    dispatch: (action: AppAction) => void;
}

const AppContext = createContext<AppContextReducer | null>(null);

const AppProvider = ({children}: { children: ReactNode }): JSX.Element => {
    const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(reduceAppContext, INITIAL_APP_STATE);
    const value = {state, dispatch};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

function useAppContext(): AppContextReducer {
    const context = useContext(AppContext);
    if (context === null) {
        throw new Error("useAppContext() must be used within a AppProvider.");
    }
    return context;
}

export {AppProvider, useAppContext};
