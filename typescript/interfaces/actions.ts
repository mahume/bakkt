export type AppAction = InitializeGame | ResetRound | SetGamePlay;

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
