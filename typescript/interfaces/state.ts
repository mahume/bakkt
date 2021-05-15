import {Marker} from "../types/board";

export type Grid = {
    [key: string]: Marker;
}

export interface AppState {
    grid: Grid;
    playerScore: number;
    opponentScore: number;
}
