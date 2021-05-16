import {useAppContext} from "../context";
import {useEffect} from "react";


const useCheckForWinner = () => {
    const { state, dispatch } = useAppContext();

    // TODO:
    // Watch Grid changes
    // Check for horizontal win
    // Check for vertical win
    // Check for diagonal win
    // Check for draw
    // If there is a winner, take appropriate actions


    useEffect(() => {
    }, [state.grid])
}

export default useCheckForWinner;
