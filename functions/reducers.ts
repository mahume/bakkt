import {AppState} from "../typescript/interfaces/state";
import {AppAction} from "../typescript/interfaces/actions";
import {INITIAL_APP_STATE} from "../constants/state";

export const reduceAppContext = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "INITIALIZE_GAME":
            return INITIAL_APP_STATE;
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
