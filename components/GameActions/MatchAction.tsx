import React, {FC} from "react";
import {Button} from "react-native";
import {View} from "../Themed";

const MatchAction: FC = () => {
    const handleGameResetOnPress = () => alert("Reset");

    return (
        <View>
            <Button onPress={handleGameResetOnPress} title="Restart Game"/>
        </View>
    )
};

export default MatchAction;
