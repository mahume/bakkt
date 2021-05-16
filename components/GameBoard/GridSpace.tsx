import React, {FC} from "react";
import {Text, View} from "../Themed";
import {Column, Row, Space} from "../../typescript/types/board";
import {Pressable, StyleSheet} from "react-native";
import {useAppContext} from "../../context";

interface Props {
    row: Row;
    column: Column;
}

const GridSpace: FC<Props> = ({row, column}) => {
    const {state, dispatch} = useAppContext();
    const isSpaceDisabled = !state.isGameInProgress

    const handleOnPress = (row: string, column: string) => {
        if (state.activePlayer === "X") {
            dispatch({
                type: "MARK_SPACE",
                payload: {
                    space: (row + column) as Space,
                    player: "X",
                },
            });
            dispatch({
                type: "SET_ACTIVE_PLAYER",
                payload: {
                    activePlayer: "O",
                },
            });
        } else {
            dispatch({
                type: "MARK_SPACE",
                payload: {
                    space: (row + column) as Space,
                    player: "O",
                },
            });
            dispatch({
                type: "SET_ACTIVE_PLAYER",
                payload: {
                    activePlayer: "X",
                },
            });
        }
    };

    return (
        <View style={styles.space}>
            <Pressable style={styles.button} disabled={isSpaceDisabled}
                       onPress={() => handleOnPress(row, column)}>
                <Text style={styles.mark}>{state.grid[row + column]}</Text>
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
