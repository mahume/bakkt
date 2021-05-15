import React, {FC} from "react";
import {StyleSheet} from "react-native";
import {Text, View} from "../Themed";

const Scorecard: FC = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.player}>Player</Text>
            <Text style={styles.score}>Score</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    player: {
        fontSize: 18,
    },
    score: {
        fontSize: 18,
    }
});

export default Scorecard;
