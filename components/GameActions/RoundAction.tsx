import React, {FC} from "react";
import {View} from "../Themed";
import {Button, StyleSheet} from "react-native";
import {useAppContext} from "../../context";

const RoundAction: FC = () => {
    const { state } = useAppContext();

    const buttonText = state.isGameInProgress ? "Restart Round" : "Start Round";

    const handleRoundOnPress = () => alert("play round");

    return (
        <View>
            <Button onPress={handleRoundOnPress} title={buttonText}/>
        </View>
    )
};

export default RoundAction;
