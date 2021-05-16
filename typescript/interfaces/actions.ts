import {Player, Space} from "../types/board";

export type AppAction = InitializeGame | ResetRound | SetGamePlay | SetActivePlayer | MarkSpace | SetScore;

export interface InitializeGame {
    readonly type: "INITIALIZE_GAME";
}

export interface ResetRound {
    readonly type: "RESET_ROUND";
}

export interface SetGamePlay {
    readonly type: "SET_GAME_PLAY";
    readonly payload: {
        inProgress: boolean;
    }
}

export interface SetActivePlayer {
    readonly type: "SET_ACTIVE_PLAYER";
    readonly payload: {
        activePlayer: Player;
    }
}

export interface MarkSpace {
    readonly type: "MARK_SPACE";
    readonly payload: {
        space: Space;
        player: Player;
    };
}

export interface SetScore {
    readonly type: "SET_SCORE";
    readonly payload: {
        player: Player;
        score: number;
    }
}
