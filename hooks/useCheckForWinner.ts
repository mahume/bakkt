import {useAppContext} from "../context";
import {useEffect} from "react";
import {Column, Player, Row} from "../typescript/types/board";
import {COLUMNS, ROWS} from "../constants/state";


const useCheckForWinner = () => {
    const {state, dispatch} = useAppContext();

    function checkWinFor(player: Player) {
        ROWS.forEach(row => checkRowsForWin(row, player));
        COLUMNS.forEach(column => checkColumnsForWin(column, player));
        checkDiagonalsForWin(player);
    }

    // TODO: DRY up row/column functions
    function checkRowsForWin(row: Row, player: Player) {
        const gridRow = Object.keys(state.grid).filter(key => key.startsWith(row));
        const isWinner = gridRow.every(column => state.grid[column] === player);

        decideWinner(isWinner, player);
    }

    // TODO: DRY up row/column functions
    function checkColumnsForWin(column: Column, player: Player) {
        const gridColumn = Object.keys(state.grid).filter(key => key.endsWith(column));
        const isWinner = gridColumn.every(row => state.grid[row] === player);

        decideWinner(isWinner, player);
    }

    function checkDiagonalsForWin(player: Player) {
        // TODO: Enhance logic
        const isTopLeftBottomRightWin = ["C1", "B2", "A3"].every(space => state.grid[space] === player);
        const isBottomLeftTopRightWin = ["A1", "B2", "C3"].every(space => state.grid[space] === player);

        decideWinner(isTopLeftBottomRightWin, player);
        decideWinner(isBottomLeftTopRightWin, player);
    }

    // TODO: Check for draw

    function decideWinner(isWinner: boolean, player: Player) {
        if (isWinner && player === "X") {
            dispatch({
                type: "SET_SCORE",
                payload: {
                    player: "X",
                    score: state.playerScore + 1
                }
            })
            alert("Player Wins!");
            endRound();
        }
        if (isWinner && player === "O") {
            dispatch({
                type: "SET_SCORE",
                payload: {
                    player: "O",
                    score: state.opponentScore + 1
                }
            })
            alert("Opponent Wins!");
            endRound();
        }
    }

    // TODO: End round fn
    function endRound() {
        // Reset gameplay
        dispatch({
            type: "SET_GAME_PLAY",
            payload: {
                inProgress: false,
            }
        })
        // Reset round
        dispatch({
            type: "RESET_ROUND"
        })
    }


    useEffect(() => {
        checkWinFor("X");
        checkWinFor("O");
    }, [state.grid])
}

export default useCheckForWinner;
