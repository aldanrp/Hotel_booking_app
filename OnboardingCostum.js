import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

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

export default class OnboardingCostum extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "73%",
            width: "100%",
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
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
          color:"#b5b5b5",
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
      
    }else {
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});