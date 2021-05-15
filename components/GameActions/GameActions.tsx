import React, {FC} from "react";
import {StyleSheet} from "react-native";
import {View} from "../Themed";
import MatchAction from "./MatchAction";
import RoundAction from "./RoundAction";

const GameActions: FC = () => {
    return (
        <View>
            <MatchAction />
            <RoundAction />
        </View>
    )
};

const styles = StyleSheet.create({});

export default GameActions;
