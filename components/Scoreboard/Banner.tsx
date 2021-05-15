import React, {FC} from "react";
import {Text, View} from "../Themed";
import {StyleSheet} from "react-native";
import {useAppContext} from "../../context";

const Banner: FC = () => {
    const {state} = useAppContext();

    return (
        <View>
            <Text style={styles.banner}>
                {state.isGameInProgress ? `${state.activePlayer === "X" ? "Player" : "Opponent"}'s Turn` : ""}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    banner: {
        fontSize: 22,
    }
});

export default Banner;
