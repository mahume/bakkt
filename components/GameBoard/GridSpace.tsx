import React, {FC} from "react";
import {Text, View} from "../Themed";
import {Column, Row} from "../../typescript/types/board";
import {StyleSheet} from "react-native";

interface Props {
    row: Row;
    column: Column;
}

const GridSpace: FC<Props> = ({ row , column}) => {
    return (
        <View style={styles.space}>
            <Text style={styles.mark}>{row + column}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    space: {
        borderWidth: 2,
        borderColor: "#CDCDCD",
        borderStyle: "solid",

        flex: 1,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    mark: {
        fontSize: 28,
        fontWeight: "600",
    }
});

export default GridSpace;
