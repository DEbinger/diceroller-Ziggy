import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class D8 extends React.Component {
  render() {
    return (
      <View style={styles.dice8}>
        <Text style={styles.diceText8}>8</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    dice8: {
      // backgroundColor: 'blue',
    },
    diceText8: {
      color: 'red',
      fontWeight: '900',
      fontSize: 30,
    },
});