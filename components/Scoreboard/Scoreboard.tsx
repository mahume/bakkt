import React, {FC} from "react";
import {Text, View} from "../Themed";
import {StyleSheet} from "react-native";
import Scorecard from "./Scorecard";

const Scoreboard: FC = () => {
    return (
        <View style={styles.scoreboard}>
            <View style={styles.scorecards}>
                <Scorecard/>
                <Scorecard/>
            </View>
            <View>
                <Text style={styles.banner}>Banner</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    scoreboard: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    scorecards: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    banner: {
        fontSize: 22,
    }
});

export default Scoreboard;
