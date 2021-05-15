import React, {FC} from "react";
import {Text, View} from "../Themed";
import {StyleSheet} from "react-native";
import Scorecard from "./Scorecard";

const Scoreboard: FC = () => {
    return (
        <View style={styles.container}>
            <View>
                <Scorecard/>
                <Scorecard/>
            </View>
            <View>
                <Text>Banner</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
});

export default Scoreboard;
