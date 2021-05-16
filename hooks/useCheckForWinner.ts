import {useAppContext} from "../context";
import {useEffect} from "react";
import {Player, Row} from "../typescript/types/board";


const useCheckForWinner = () => {
    const { state, dispatch } = useAppContext();

    // TODO:
    function checkWinFor(player: Player) {
        checkHorizontalRows("A", player);
        checkHorizontalRows("B", player);
        checkHorizontalRows("C", player);
    }

    function checkHorizontalRows(row: Row, player: Player) {
        const gridRow = Object.keys(state.grid).filter(key => key.startsWith(row));
        const isWinner = gridRow.every(column => state.grid[column] === player);

        decideWinner(isWinner, player);
    }

    // TODO: Check for vertical win

    // TODO: Check for diagonal win

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
