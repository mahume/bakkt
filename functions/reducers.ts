import {AppState} from "../typescript/interfaces/state";
import {AppAction} from "../typescript/interfaces/actions";
import {INITIAL_APP_STATE, INITIAL_GRID} from "../constants/state";

export const reduceAppContext = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "INITIALIZE_GAME":
            return INITIAL_APP_STATE;
        case "RESET_ROUND":
            return {
                ...state,
                grid: INITIAL_GRID,
                isGameInProgress: false,
            }
        case "SET_GAME_PLAY":
            return {
                ...state,
                isGameInProgress: action.payload.inProgress
            }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
