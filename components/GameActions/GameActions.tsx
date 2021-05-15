import React, {FC} from "react";
import {StyleSheet} from "react-native";
import {View} from "../Themed";
import MatchAction from "./MatchAction";
import RoundAction from "./RoundAction";

const GameActions: FC = () => {
    return (
        <View style={styles.actions}>
            <MatchAction />
            <RoundAction />
        </View>
    )
};

const styles = StyleSheet.create({
    actions: {
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default GameActions;
