import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CheckBox } from 'react-native-elements';
import { Button } from './app/components/Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';
import Ziggy from './app/components/Ziggy';
import ZiggyASH from './app/components/ZiggyASH';
import ZiggyASHS from './app/components/ZiggyASHS';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard.jpg')}
        style={{ width: 275, height: 400 }}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard2.jpg')}
        style={{ width: 275, height: 400 }}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard3.jpg')}
        style={{ width: 275, height: 400 }}
      />
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Ziggy',
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.homeContainer}>
        <Text
          onPress= { ()=> navigate('Ziggy')}><LogoTitle1 />{"\n"}Normal{"\n"}
        </Text>
        <Text
          onPress= { ()=> navigate('ZiggyASH')}><LogoTitle2 />{"\n"}Arcane Strike{"\n"}Song{"\n"}
        </Text>
        <Text
          onPress= { ()=> navigate('ZiggyASHS')}><LogoTitle3 />{"\n"}Arcane Strike{"\n"}Haste{"\n"}Song{"\n"}
        </Text>
      </ScrollView>
    )
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Ziggy: { screen: Ziggy },
  ZiggyASH: { screen: ZiggyASH },
  ZiggyASHS: { screen: ZiggyASHS },
  }, {
    navigationOptions: {
      headeStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  })

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
          <Ziggy />;
          <ZiggyASH />;
          <ZiggyASHS />;
  }
}

const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      backgroundColor: 'goldenrod',
      alignContent: 'space-between',
    },
});
