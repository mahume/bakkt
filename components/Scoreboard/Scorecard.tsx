import React, {FC} from "react";
import {StyleSheet} from "react-native";
import {Text, View} from "../Themed";

interface Props {
    player: string;
    score: number;
}

const Scorecard: FC<Props> = ({player, score}) => (
    <View style={styles.card}>
        <Text style={styles.player}>{player}</Text>
        <Text style={styles.score}>{score}</Text>
    </View>
)


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
