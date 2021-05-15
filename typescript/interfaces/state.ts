import {Marker} from "../types/board";

export type Grid = {
    [key: string]: Marker;
}

export interface AppState {
    grid: Grid;
    isGameInProgress: boolean;
    playerScore: number;
    opponentScore: number;
}
