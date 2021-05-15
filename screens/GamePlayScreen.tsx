import * as React from 'react';
import {StyleSheet} from 'react-native';

import {View} from '../components/Themed';
import Scoreboard from "../components/Scoreboard/Scoreboard";
import GameBoardGrid from "../components/GameBoard/GameBoardGrid";
import GameActions from "../components/GameActions/GameActions";

export default function GamePlayScreen() {
    return (
        <View style={styles.container}>
            <Scoreboard/>
            <GameBoardGrid/>
            <GameActions/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
