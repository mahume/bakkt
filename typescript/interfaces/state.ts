import {Marker, Player} from "../types/board";

export type Grid = {
    [key: string]: Marker;
}

export interface AppState {
    grid: Grid;
    isGameInProgress: boolean;
    activePlayer: Player;
    playerScore: number;
    opponentScore: number;
}
