import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, } from 'react-native';
import LocalImage from "./LocalImage";

export default class Images extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
        style={styles.image}
        source= {require('./Laylo.jpg')}
        orignalWidth={736}
        orignalHeight={952}
        />
        <Text style={styles.nameText}>Laylo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },  nameText:{
    textAlign: 'center'
    // backgroundColor: '#F5FCFF',
  },
  image: {
    flex: 1,
    maxHeight: 400,
    maxWidth: 400,
  }
});

// export default Images