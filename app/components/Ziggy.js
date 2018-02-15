import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  Dimensions,
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

export default class Ziggy extends React.Component {
  static navigationOptions = {
    title: 'Ziggy',
  };
  constructor(props) {
    super(props);
  imgClick = () => {
    Alert.alert(
  'Column 1 Base D20 roll\nColumn 2 D20\n+13|13|13|11\nDeadly Aim/Rapid Shot/Haste\n\n Column 3\nArrow Damge + 14',
  'Enjoy!',
  [
    {text: 'T20 = Total D20 Roll includes Normal Shots', onPress: () => console.log('D20 Roll Total')},
    {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel'}
  ],
  { cancelable: false }
)
  }

    this.state={

      // This is our Display number value, prior to button press
      NumberHolderD20S1 : 'B20',
      NumberHolderD20S2 : 'B20',
      NumberHolderD20S3 : 'B20',
      NumberHolderD20S4 : 'B20',
      NumberHolderD6S1 : 'D6',
      NumberHolderD6S2 : 'D6',
      NumberHolderD6S3 : 'D6',
      NumberHolderD6S4 : 'D6',
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
      NumberHolderTotalD20S4 : 'T20',
    }
  }

  rollA20 = () => {
    return Math.floor(Math.random() * 20) + 1;
  }

  handleButtonPress=()=> {
    let D20S1 = this.rollA20();
    let D20S2 = this.rollA20();
    let D20S3 = this.rollA20();
    let D20S4 = this.rollA20();
    let D20TotalS1 = D20S1 + 13 ;
    let D20TotalS2 = D20S2 + 13 ;
    let D20TotalS3 = D20S3 + 13 ;
    let D20TotalS4 = D20S4 + 11 ;
    let D6S1 = Math.floor(Math.random()  * 6) +15;
    let D6S2 = Math.floor(Math.random()  * 6) +15;
    let D6S3 = Math.floor(Math.random()  * 6) +15;
    let D6S4 = Math.floor(Math.random()  * 6) +15;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD20S4 : D20S4,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderTotalD20S4 : D20TotalS4,
    NumberHolderD6S1 : D6S1,
    NumberHolderD6S2 : D6S2,
    NumberHolderD6S3 : D6S3,
    NumberHolderD6S4 : D6S4,
    })
  }

  render (){
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 | this.state.NumberHolderD20S1 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 | this.state.NumberHolderD20S2 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 | this.state.NumberHolderD20S3 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S4Style = this.state.NumberHolderD20S4 === 20 | this.state.NumberHolderD20S4 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    return (
       <ScrollView style={styles.bard1}>
          <View style={styles.top1}>
            <TouchableOpacity onPress={imgClick} style={styles.profileimage}>
              <Image
                style={styles.image}
                source={require('../images/bard.jpg')}
              />
            </TouchableOpacity>
          </View>

          <Animatable.View ref="view"
            style={styles.center1} >
            <Button style={styles.button} text="Attack!"
              onPress={() => this.handleButtonPress()}/>
          </Animatable.View>

            <View style={styles.bottom1}>
              <Animatable.View
                animation="bounce"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={D20S1Style} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD20S1}</Text>
              </Animatable.View>

            <Animatable.View
              animation="tada"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItemTotal}>
                <Animatable.Text
                  animation="zoomInUp"
                  style={styles.bottomItemInnerTotalD20}
                  adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderTotalD20S1}
                </Animatable.Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-out"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner6} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD6S1}</Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={D20S2Style} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD20S2}</Text>
            </Animatable.View>

            <Animatable.View
              animation="tada"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItemTotal}>
                <Animatable.Text
                  animation="zoomInUp"
                  style={styles.bottomItemInnerTotalD20}
                  adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderTotalD20S2}
                </Animatable.Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-out"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner6} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD6S2}</Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={D20S3Style} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD20S3}</Text>
            </Animatable.View>

            <Animatable.View
              animation="tada"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItemTotal}>
              <Animatable.Text
                animation="zoomInUp"
                style={styles.bottomItemInnerTotalD20}
                adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderTotalD20S3}</Animatable.Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-out"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner6} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD6S3}</Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={D20S4Style} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD20S4}</Text>
            </Animatable.View>

            <Animatable.View
              animation="tada"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItemTotal}>
              <Animatable.Text
                animation="zoomInUp"
                style={styles.bottomItemInnerTotalD20}
                adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderTotalD20S4}</Animatable.Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-out"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner6} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD6S4}</Text>
            </Animatable.View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'goldenrod',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bard1: {
      flex: 1,
      backgroundColor: '#085143',
    },
    top1: {
      height: '33%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#085143',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    profileimage: {
      width: 140,
      height: 200,
      borderWidth: 4,
      borderColor: '#fff',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      maxHeight: '100%',
      maxWidth: '100%',
    },
    center1: {
      height: '10%',
      backgroundColor: '#085143',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottom1: {
      height: '57%',
      backgroundColor: '#085143',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottomItem: {
      width: Dimensions.get('window').width / 3 -6,
      height: 100,
      padding: 5,
    },
    bottomItemTotal: {
      width: Dimensions.get('window').width / 3 -6,
      height: 100,
      padding: 5,
    },
    bottomItemInner20: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 60,
      fontWeight: '900',
      color: '#129490',
    },
    bottomItemInner20picked: {
      flex: 1,
      backgroundColor: 'red',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 60,
      fontWeight: '900',
      color: 'white',
    },
    bottomItemInner6: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 50,
      fontWeight: '900',
      color: '#6a2be2',
    },
    bottomItemInner4: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 50,
      fontWeight: '900',
      color: '#085143',
    },
      bottomItemInnerTotalD20: {
      flex: 1,
      backgroundColor: '#CE1463',
      borderColor: '#70B77E',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 50,
      fontWeight: '900',
      color: '#fff6dc',
    },
});
