import React from 'react';
import { View, TouchableHighlight, TouchableNativeFeedback, Text, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';

const styles = EStyleSheet.create({
  $buttonColor: '#CE1483',
  $buttonTextColor: '#ffffff',
  $buttonUnderlayColor: '#7BAAF9',
  button: {
    backgroundColor: '$buttonColor',
    paddingVertical: 20,
    paddingHorizontal: 35,
    '@media ios': {
      borderRadius: 300,
      width: '35%'
    },
    '@media android': {
      borderRadius: 1,
      elevation: 4,
    },
  },
  text: {
    color: '$buttonTextColor',
    fontSize: 15,
    textAlign: 'center',
  },
});

export const Button = ({ text, onPress }) => {
  {
    return (
      <TouchableHighlight
        onPress={onPress}
        style={styles.button}
        underlayColor={styles.$buttonUnderlayColor}
      >
        <Animatable.Text
        animation="flash"
        iterationCount="infinite"
        direction="alternate"
        style={styles.text}>{text}</Animatable.Text>

      </TouchableHighlight>
    );
  }

  return (

    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(styles.$buttonUnderlayColor)}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

