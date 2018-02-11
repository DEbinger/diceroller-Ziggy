import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CheckBox } from 'react-native-elements'
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';
// import D20 from './app/components/D20';
// import D8 from './app/components/D8';
// import D4 from './app/components/D4';
// import {
//   roll20S1, roll20S2, roll20S3,
//   roll8S1, roll8S2, roll8S3,
//   roll4S1, roll4S2, roll4S3
// } from './app/helper/diceRoll'

EStyleSheet.build();


export default class LaylaDARSH extends React.Component {
  constructor(props) {
    super(props);

  // this.state = {
  //     check: false
  //   }
  // }

 imgClick = () => {
    Alert.alert(
  'Column 1 Base D20 roll \n Column 2 D20 \n + 13|13|13|11 \n Deadly Aim/Rapid Shot/Haste \n Column 3 Arrow Damge + 14',
  'Enjoy!',
  [
    {text: 'T20 = Total D20 Roll includes DARSH', onPress: () => console.log('D20 Roll Total')},
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
      NumberHolderD8S1 : 'D8',
      NumberHolderD8S2 : 'D8',
      NumberHolderD8S3 : 'D8',
      NumberHolderD8S4 : 'D8',
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
      NumberHolderTotalD20S4 : 'T20',
    }
  }

  handleButtonPress=()=> {
    let D20S1 = Math.floor(Math.random() * 20) + 1;
    let D20S2 = Math.floor(Math.random() * 20) + 1;
    let D20S3 = Math.floor(Math.random() * 20) + 1;
    let D20S4 = Math.floor(Math.random() * 20) + 1;
    let D20TotalS1 = D20S1 + 13 ;
    let D20TotalS2 = D20S2 + 13 ;
    let D20TotalS3 = D20S3 + 13 ;
    let D20TotalS4 = D20S4 + 11 ;
    let D8S1 = Math.floor(Math.random()  * 8) +15;
    let D8S2 = Math.floor(Math.random()  * 8) +15;
    let D8S3 = Math.floor(Math.random()  * 8) +15;
    let D8S4 = Math.floor(Math.random()  * 8) +15;


  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD20S4 : D20S4,
    NumberHolderD8S1 : D8S1,
    NumberHolderD8S2 : D8S2,
    NumberHolderD8S3 : D8S3,
    NumberHolderD8S4 : D8S4,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderTotalD20S4 : D20TotalS4,
    })
  }
            //   <View style={styles.checkboxParent}>

            //     <CheckBox
            //     title='Haste'
            //     iconRight
            //     center
            //     containerStyle={{backgroundColor: '#98d2c1', borderColor: '#98d2c1'}}
            //     uncheckedColor='black'
            //     checkedColor='red'
            //     onPress={() => this.setState({
            //       checked: !this.state.checked})}
            //     checked={this.state.checked}
            //     />

            //     <CheckBox
            //     title='Song'
            //     iconRight
            //     containerStyle={{backgroundColor: '#98d2c1', borderColor: '#98d2c1'}}
            //     uncheckedColor='black'
            //     checkedColor='red'
            //     onPress={() => this.setState({
            //       checked: !this.state.checked})}
            //     checked={this.state.checked}
            //     />

            //     <CheckBox
            //     title='Prayer'
            //     iconRight
            //     containerStyle={{backgroundColor: '#98d2c1', borderColor: '#98d2c1'}}
            //     uncheckedColor='black'
            //     checkedColor='red'
            //     onPress={() => this.setState({
            //       checked: !this.state.checked})}
            //     checked={this.state.checked}
            //     />

            //     <CheckBox
            //     title='Wrath'
            //     iconRight
            //     containerStyle={{backgroundColor: '#98d2c1', borderColor: '#98d2c1'}}
            //     uncheckedColor='black'
            //     checkedColor='red'
            //     onPress={() => this.setState({
            //       checked: !this.state.checked})}
            //     checked={this.state.checked}
            //     />
            // </View>

  render() {

    return (
      <View style={styles.container}>

          <View style={styles.top}>
            <TouchableOpacity onPress={imgClick} style={styles.profileimage}>
              <Image
                style={styles.image}
                source={require('../images/archer.jpg')}
              />
            </TouchableOpacity>
          </View>

          <Animatable.View ref="view"
            style={styles.center} >
            <Button style={styles.button} text="Attack!"
              onPress={() => this.handleButtonPress()}/>
          </Animatable.View>

            <View style={styles.bottom}>
              <Animatable.View
                animation="bounce"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={styles.bottomItemInner20} adjustsFontSizeToFit
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S1}</Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner20} adjustsFontSizeToFit
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S2}</Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner20} adjustsFontSizeToFit
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S3}</Text>
            </Animatable.View>

            <Animatable.View
              animation="bounce"
              easing="ease-in"
              iterationCount={5}
              style={styles.bottomItem}>
              <Text style={styles.bottomItemInner20} adjustsFontSizeToFit
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S4}</Text>
            </Animatable.View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#065143'
    },
    top: {
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#065143',
    },
    checkboxParent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    profileimage: {
      width: 140,
      height: 200,
      // borderRadius: 100,
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
    center: {
      height: '10%',
      backgroundColor: '#065143',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',

    },
    bottom: {
      height: '33%',
      backgroundColor: '#065143',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
      // borderBottomWidth: 2,
    },
    bottomItem: {
      width: '33%',
      height: '33%',
      padding: 5,
    },
    bottomItemTotal: {
      width: '33%',
      height: '33%',
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
    bottomItemInner8: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 50,
      fontWeight: '900',
      color: '#8a2be2',
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
      color: '#065143',
    },
      bottomItemInnerTotalD20: {
      flex: 1,
      backgroundColor: '#CE1483',
      borderColor: '#70B77E',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 50,
      fontWeight: '900',
      color: '#fff8dc',
    },
    statusBar: {
      backgroundColor: '#065143',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
      padding: 5,
    },
});
