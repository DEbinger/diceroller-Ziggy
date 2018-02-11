import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  roll20S1, roll20S2, roll20S3,
  roll8S1, roll8S2, roll8S3,
  roll4S1, roll4S2, roll4S3
} from '../helper/diceRoll';

export default class D20 extends React.Component {
  render() {
    return (
      <View style={styles.dice20}>
        <Text style={styles.diceText20}>20</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    dice20: {
      // backgroundColor: 'blue',
    },
    diceText20: {
      color: '#292929',
      fontWeight: '900',
      fontSize: 30,
    },
});