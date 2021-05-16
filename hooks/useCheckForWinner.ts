import {useAppContext} from "../context";
import {useEffect} from "react";
import {Player, Row} from "../typescript/types/board";


const useCheckForWinner = () => {
    const { state } = useAppContext();

    // TODO:
    // 2. Quarterback fn
    function checkWinFor(player: Player) {
        checkHorizontalRows("A", player);
        checkHorizontalRows("B", player);
        checkHorizontalRows("C", player);
    }

    // Check for horizontal win
    function checkHorizontalRows(row: Row, player: Player) {
        const gridRow = Object.keys(state.grid).filter(key => key.startsWith(row));
        const isWinner = gridRow.every(column => state.grid[column] === player);
        console.log(isWinner);
    }
    // Check for vertical win
    // Check for diagonal win
    // Check for draw
    // If there is a winner, take appropriate actions


    // 1. Watch Grid changes
    useEffect(() => {
        checkWinFor("X");
        checkWinFor("O");
    }, [state.grid])
}

export default useCheckForWinner;
