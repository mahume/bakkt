import React, {FC} from "react";
import {Text, View} from "../Themed";
import {StyleSheet} from "react-native";
import Scorecard from "./Scorecard";

const Scoreboard: FC = () => {
    return (
        <View>
            <Scorecard />
            <Scorecard />
        </View>
    )
};

const styles = StyleSheet.create({});

export default Scoreboard;
