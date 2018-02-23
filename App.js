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
import ZiggyASS from './app/components/ZiggyASS';
import ZiggyASH from './app/components/ZiggyASH';
import ZiggyASSH from './app/components/ZiggyASSH';
import ZiggyASSHRS from './app/components/ZiggyASSHRS';
import ZiggyASSHRSDA from './app/components/ZiggyASSHRSDA';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard.jpg')}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard2.jpg')}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard3.jpg')}
      />
    );
  }
}

class LogoTitle4 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard4.jpg')}
      />
    );
  }
}

class LogoTitle5 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard5.jpg')}
      />
    );
  }
}

class LogoTitle6 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/bard6.jpg')}
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
      <View style={styles.container}>
        <ScrollView style={styles.homeContainer}>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Ziggy')}><LogoTitle1 />Arcane Strike{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('ZiggyASS')}><LogoTitle2 />{"\n"}Arcane Strike{"\n"}Song{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('ZiggyASH')}><LogoTitle3 />{"\n"}Arcane Strike{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('ZiggyASSH')}><LogoTitle4 />{"\n"}Arcane Strike{"\n"}Song{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('ZiggyASSHRS')}><LogoTitle5 />{"\n"}Arcane Strike{"\n"}Song{"\n"}Haste{"\n"}Rapid Shot{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('ZiggyASSHRSDA')}><LogoTitle6 />{"\n"}Arcane Strike{"\n"}Song{"\n"}Haste{"\n"}Rapid Shot{"\n"}Deadly Aim{"\n"}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Ziggy: { screen: Ziggy },
  ZiggyASS: { screen: ZiggyASS },
  ZiggyASH: { screen: ZiggyASH },
  ZiggyASSH: { screen: ZiggyASSH },
  ZiggyASSHRS: { screen: ZiggyASSHRS },
  ZiggyASSHRSDA: { screen: ZiggyASSHRSDA },
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
          <ZiggyASS />;
          <ZiggyASH />;
          <ZiggyASSH />;
          <ZiggyASSHRS />;
          <ZiggyASSHRSDA />;
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#4B0082',
      alignContent: 'center',
      padding: 5,
    },
    homeContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#4B0082',
      alignContent: 'center',
      alignSelf: 'center',
      padding: 5,
    },
    textStyle: {
      color: 'white',
    },
    logo: {
      marginTop: 5,
      width: 350,
      height: 500,
    }
});
