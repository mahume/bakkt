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
        <View>
            <GridSpace row={row} column="1" />
            <GridSpace row={row} column="2" />
            <GridSpace row={row} column="3" />
        </View>
    )
};

const styles = StyleSheet.create({});

export default GridRow;
