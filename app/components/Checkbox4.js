import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Checkbox4 extends React.Component {

constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  toggle = () => {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <View style={styles.checkbox}>
        <Checkbox4 title='Wrath' onChange={this.toggle}
        />
      </View>
    )}
}

const styles = StyleSheet.create({
    checkbox: {
      backgroundColor: 'blue',
    },
});