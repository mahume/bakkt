import React, {FC} from "react";
import {StyleSheet} from "react-native";
import {Text, View} from "../Themed";

const Scorecard: FC = () => {
    return (
        <View>
            <Text>Player</Text>
            <Text>Score</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default Scorecard;
