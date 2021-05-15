import React, {FC} from "react";
import {View} from "../Themed";
import GridSpace from "./GridSpace";
import {StyleSheet} from "react-native";
import {Row} from "../../typescript/types/board";

interface Props {
    row: Row;
}

const GridRow: FC<Props> = ({ row }) => {
    return (
        <View style={styles.row}>
            <GridSpace row={row} column="1" />
            <GridSpace row={row} column="2" />
            <GridSpace row={row} column="3" />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default GridRow;
