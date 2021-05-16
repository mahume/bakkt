import React, {FC} from "react";
import {View} from "../Themed";
import {Button} from "react-native";
import {useAppContext} from "../../context";

const RoundAction: FC = () => {
    const {state, dispatch} = useAppContext();
    const {isGameInProgress} = state;

    const handleRoundOnPress = () => {
        if (isGameInProgress) {
            dispatch({
                type: "RESET_ROUND"
            })
        }
        dispatch({
            type: "SET_GAME_PLAY",
            payload: {
                inProgress: !isGameInProgress,
            }
        })
    }

    return (
        <View>
            <Button onPress={handleRoundOnPress} title={isGameInProgress ? "Restart Round" : "Start Round"}/>
        </View>
    )
};

export default RoundAction;
