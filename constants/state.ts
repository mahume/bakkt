import {AppState, Grid} from "../typescript/interfaces/state";

export const INITIAL_GRID: Grid = {
    "A1": "",
    "A2": "",
    "A3": "",
    "B1": "",
    "B2": "",
    "B3": "",
    "C1": "",
    "C2": "",
    "C3": "",
}

export const INITIAL_APP_STATE: AppState = {
    grid: INITIAL_GRID,
    isGameInProgress: false,
    playerScore: 0,
    opponentScore: 0,
};
