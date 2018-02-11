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
import { Button } from './app/components/Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/archer.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/archer2.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/archer3.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'LAYLA',
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text
          onPress= { ()=> navigate('LaylaDARSH')}> {"\n"}DARSH{"\n"}{"\n"}{"\n"} <LogoTitle1 />
        </Text>
        <Text
          onPress= { ()=> navigate('LaylaDARSHPBS')}> {"\n"}DARSH {"\n"} PBS {"\n"}{"\n"} <LogoTitle2 />
        </Text>
        <Text
          onPress= { ()=> navigate('LaylaDARSHPBSMITE')}> {"\n"}DARSH{"\n"}PBS{"\n"}SMITE{"\n"} <LogoTitle3 />
        </Text>
      </View>
    )
  }
}

class LaylaDARSH extends React.Component {
  static navigationOptions = {
    title: 'DARSH',
  };
  constructor(props) {
    super(props);
  imgClick = () => {
    Alert.alert(
  'Column 1 Base D20 roll \n\nColumn 2 D20 \n + 13|13|13|11 \n Deadly Aim/Rapid Shot/Haste \n\n Column 3 \n Arrow Damge + 14',
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
    let D8S1 = Math.floor(Math.random()  * 8) +15;
    let D8S2 = Math.floor(Math.random()  * 8) +15;
    let D8S3 = Math.floor(Math.random()  * 8) +15;
    let D8S4 = Math.floor(Math.random()  * 8) +15;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD20S4 : D20S4,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderTotalD20S4 : D20TotalS4,
    NumberHolderD8S1 : D8S1,
    NumberHolderD8S2 : D8S2,
    NumberHolderD8S3 : D8S3,
    NumberHolderD8S4 : D8S4,
    })
  }

  render (){
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S4Style = this.state.NumberHolderD20S4 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    return (
       <View style={styles.archer1}>
          <View style={styles.top1}>
            <TouchableOpacity onPress={imgClick} style={styles.profileimage}>
              <Image
                style={styles.image}
                source={require('./app/images/archer.jpg')}
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S1}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S2}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S3}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S4}</Text>
            </Animatable.View>
          </View>
      </View>
    );
  }
}

class LaylaDARSHPBS extends React.Component {
  static navigationOptions = {
    title: 'DARSHPBS',
  };
  constructor(props) {
    super(props);
  imgClick = () => {
    Alert.alert(
  'Column 1 Base D20 roll \n \nColumn 2 D20 \n + 14|14|14|12 \n Deadly Aim/Rapid Shot/Haste/Point Blank Shot \n\n Column 3 \nArrow Damge + 14',
  'Enjoy!',
  [
    {text: 'T20 = Total D20 Roll includes DARSHPBS', onPress: () => console.log('D20 Roll Total')},
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
    let D20TotalS1 = D20S1 + 14 ;
    let D20TotalS2 = D20S2 + 14 ;
    let D20TotalS3 = D20S3 + 14 ;
    let D20TotalS4 = D20S4 + 12 ;
    let D8S1 = Math.floor(Math.random()  * 8) +16;
    let D8S2 = Math.floor(Math.random()  * 8) +16;
    let D8S3 = Math.floor(Math.random()  * 8) +16;
    let D8S4 = Math.floor(Math.random()  * 8) +16;


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
  render (){
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S4Style = this.state.NumberHolderD20S4 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    return (
       <View style={styles.archer2}>
          <View style={styles.top2}>
            <TouchableOpacity onPress={imgClick} style={styles.profileimage}>
              <Image
                style={styles.image}
                source={require('./app/images/archer2.jpg')}
              />
            </TouchableOpacity>
          </View>

          <Animatable.View ref="view"
            style={styles.center2} >
            <Button style={styles.button} text="Attack!"
              onPress={() => this.handleButtonPress()}/>
          </Animatable.View>

            <View style={styles.bottom2}>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S1}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S2}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S3}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S4}</Text>
            </Animatable.View>
          </View>
      </View>
    );
  }
}

class LaylaDARSHPBSMITE extends React.Component {
  static navigationOptions = {
    title: 'DARSHPBSMITE',
  };
  constructor(props) {
    super(props);
  imgClick = () => {
    Alert.alert(
  'Column 1 Base D20 roll \n \nColumn 2 D20 \n + 17|17|17|15 \n Deadly Aim/Rapid Shot/Haste/Point Blank Shot \n Smite \n\n Column 3 \nArrow Damge + 23',
  'Enjoy!',
  [
    {text: 'T20 = Total D20 Roll includes DARSHPBSSMITE', onPress: () => console.log('D20 Roll Total')},
    {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel'}
  ],
  { cancelable: false }
)
  }

    this.state={

      // This is our Display, number value, prior to button press
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
    let D20TotalS1 = D20S1 + 17 ;
    let D20TotalS2 = D20S2 + 17 ;
    let D20TotalS3 = D20S3 + 17 ;
    let D20TotalS4 = D20S4 + 15 ;
    let D8S1 = Math.floor(Math.random()  * 8) +24;
    let D8S2 = Math.floor(Math.random()  * 8) +24;
    let D8S3 = Math.floor(Math.random()  * 8) +24;
    let D8S4 = Math.floor(Math.random()  * 8) +24;


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

  render (){
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S4Style = this.state.NumberHolderD20S4 === 20 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    return (
       <View style={styles.archer3}>
          <View style={styles.top3}>
            <TouchableOpacity onPress={imgClick} style={styles.profileimage}>
              <Image
                style={styles.image}
                source={require('./app/images/archer3.jpg')}
              />
            </TouchableOpacity>
          </View>

          <Animatable.View ref="view"
            style={styles.center3} >
            <Button style={styles.button} text="Attack!"
              onPress={() => this.handleButtonPress()}/>
          </Animatable.View>

            <View style={styles.bottom3}>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S1}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S2}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S3}</Text>
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
              <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD8S4}</Text>
            </Animatable.View>
          </View>
      </View>
    );
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  LaylaDARSH: { screen: LaylaDARSH },
  LaylaDARSHPBS: { screen: LaylaDARSHPBS },
  LaylaDARSHPBSMITE: { screen: LaylaDARSHPBSMITE },
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
  }
}


const styles = StyleSheet.create({
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
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#F65BE3',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    archer1: {
      flex: 1,
      backgroundColor: '#065143',
    },
    archer2: {
      flex: 1,
      backgroundColor: '#D8FFDD',
    },
    archer3: {
      flex: 1,
      backgroundColor: '#F0C808',
    },
    top1: {
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#065143',
    },
    top2: {
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D8FFDD',
    },
    top3: {
      height: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F0C808',
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
    center1: {
      height: '10%',
      backgroundColor: '#065143',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    center2: {
      height: '10%',
      backgroundColor: '#D8FFDD',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    center3: {
      height: '10%',
      backgroundColor: '#F0C808',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottom1: {
      height: '33%',
      backgroundColor: '#065143',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
      // borderBottomWidth: 2,
    },
    bottom2: {
      height: '33%',
      backgroundColor: '#D8FFDD',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
      // borderBottomWidth: 2,
    },
    bottom3: {
      height: '33%',
      backgroundColor: '#F0C808',
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
