import React, {FC} from "react";
import {Text, View} from "../Themed";
import {Column, Row} from "../../typescript/types/board";
import {Pressable, StyleSheet} from "react-native";
import {useAppContext} from "../../context";

interface Props {
    row: Row;
    column: Column;
}

const GridSpace: FC<Props> = ({row, column}) => {
    const {state} = useAppContext();
    const isSpaceDisabled = !state.isGameInProgress

    const handleOnPress = (row: string, column: string) => alert(row + column);

    return (
        <View style={styles.space}>
            <Pressable style={styles.button} disabled={isSpaceDisabled}
                       onPress={() => handleOnPress(row, column)}>
                <Text style={styles.mark}>{row + column}</Text>
            </Pressable>
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
    button: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    mark: {
        fontSize: 28,
        fontWeight: "600",
    }
});

export default GridSpace;
