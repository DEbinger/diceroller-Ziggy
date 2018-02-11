import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class D4 extends React.Component {
  render() {
    return (
      <View style={styles.dice4}>
        <Text style={styles.diceText4}>4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    dice4: {
      // backgroundColor: 'blue',
    },
    diceText4: {
      color: 'midnightblue',
      fontWeight: '900',
      fontSize: 30,
    },
});