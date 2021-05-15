import React, {FC} from "react";
import {AppProvider, useAppContext} from "./AppContext";

const Context: FC = ({children}) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    );
}

export {Context, useAppContext};
