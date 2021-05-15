import React, {FC} from "react";
import {View} from "../Themed";
import {StyleSheet} from "react-native";
import GridRow from "./GridRow";

const GameBoardGrid: FC = () => {
    return (
        <View style={styles.grid}>
            <GridRow row="C" />
            <GridRow row="B" />
            <GridRow row="A" />
        </View>
    )
};

const styles = StyleSheet.create({
    grid: {
        borderWidth: 2,
        borderColor: "#CDCDCD",
        borderStyle: "solid",
        flex: 4,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    }
});

export default GameBoardGrid;
