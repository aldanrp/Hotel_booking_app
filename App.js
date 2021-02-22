import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Image, StyleSheet, Text, View , StatusBar} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";


import HomeScreen from './src/pindah/HomeScreen';
import DetailsScreen from './src/pindah/DetailsScren';
import LoginScreen from './src/pindah/LoginScreen';
import COLORS from './src/conts/colors';

const AppStack = createStackNavigator();


const slides = [
  {
      key: "one",
      title: "JUST TRAVEL",
      text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
      image: require("./src/assets/onboarding-img1.png"),
      backgroundColor: "#a6e4d8"
  },
  {
      key: "two",
      title: "TAKE A BREAK",
      text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
      image: require("./src/assets/onboarding-img2.png"),
      backgroundColor:'#febe29',
  },
  {
      key: "three",
      title: "ENJOY YOUR JOURNEY",
      text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
      image: require("./src/assets/onboarding-img3.png"),
      backgroundColor : '#e9bcbe',
  },
];

export default class App extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
      return (
      <View style={{
        flex: 1,
        backgroundColor: item.backgroundColor,
        justifyContent:'center',
        alignItems:'center',
      }}
      >
        <Image
        source={item.image}
        style={{
            resizeMode: "cover",
        }}
        />
        <Text
        style={{
            paddingTop: 45,
            paddingBottom: 20,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center",
        }}
        >
        {item.title}
        </Text>

        <Text style={{
            textAlign:"center",
            color:COLORS.grey,
            fontSize:15,
            paddingHorizontal:30
        }}>
        {item.text}
        </Text>
      </View>
      );
  };

  _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.setState({  showHomePage: true });
  }

  render() {
      if (this.state.showHomePage){
        return (
          <NavigationContainer>
            <StatusBar backgroundColor={COLORS.white} barStyle='dark-content'></StatusBar>
            <AppStack.Navigator
              screenOptions = {{headerShown: false}}
            >
              <AppStack.Screen name="Home" component={HomeScreen} />
              <AppStack.Screen name="Details" component={DetailsScreen} />
            </AppStack.Navigator>
          </NavigationContainer>
        );
      } 
      else {
          return (
              <AppIntroSlider
              renderItem={this._renderItem} 
              data={slides} 
              activeDotStyle={{
                  backgroundColor:"#21465b",
                  width:30
              }}
              onDone={this._onDone}
              />
          );
      }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});

