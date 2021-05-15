import React, {FC} from "react";
import {Text, View} from "../Themed";
import {StyleSheet} from "react-native";
import Scorecard from "./Scorecard";
import {useAppContext} from "../../context";

const Scoreboard: FC = () => {
    const { state } = useAppContext();

    return (
        <View style={styles.scoreboard}>
            <View style={styles.scorecards}>
                <Scorecard player="Player" score={state.playerScore}/>
                <Scorecard player="Opponent" score={state.opponentScore}/>
            </View>
            <View>
                <Text style={styles.banner}>Banner</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    scoreboard: {
        flex: 2,
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
