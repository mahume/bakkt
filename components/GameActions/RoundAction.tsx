import React, {FC} from "react";
import {View} from "../Themed";
import {Button} from "react-native";
import {useAppContext} from "../../context";

const RoundAction: FC = () => {
    const {state, dispatch} = useAppContext();

    const buttonText = state.isGameInProgress ? "Restart Round" : "Start Round";

    const handleRoundOnPress = () => {
        if (state.isGameInProgress) {
            dispatch({
                type: "RESET_ROUND"
            })
        }
        dispatch({
            type: "SET_GAME_PLAY",
            payload: {
                inProgress: !state.isGameInProgress,
            }
        })
    }

    return (
        <View>
            <Button onPress={handleRoundOnPress} title={buttonText}/>
        </View>
    )
};

export default RoundAction;
