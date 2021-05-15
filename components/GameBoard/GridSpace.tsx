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
        <View>
            <Text>{row + column}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default GridSpace;
