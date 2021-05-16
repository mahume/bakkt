import React, {FC} from "react";
import {Button} from "react-native";
import {View} from "../Themed";
import {useAppContext} from "../../context";

const MatchAction: FC = () => {
    const {dispatch} = useAppContext();

    const handleGameResetOnPress = () => {
        dispatch({
            type: "INITIALIZE_GAME",
        })
    }

    return (
        <View>
            <Button onPress={handleGameResetOnPress} title="Restart Game"/>
        </View>
    )
};

export default MatchAction;
