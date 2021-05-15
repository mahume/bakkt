import React, {FC} from "react";
import {View} from "../Themed";
import GridSpace from "./GridSpace";
import {StyleSheet} from "react-native";

const GridRow: FC = () => {
    return (
        <View>
            <GridSpace />
            <GridSpace />
            <GridSpace />
        </View>
    )
};

const styles = StyleSheet.create({});

export default GridRow;
