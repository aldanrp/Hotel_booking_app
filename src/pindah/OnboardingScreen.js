import React from 'react';
import { Text, View, Button, Image , StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';



const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
        onSkip={()=> navigation.replace('Home')}
        onDone={()=> navigation.navigate('Home')}
        pages={[
            {
                backgroundColor: '#a6e4d8',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Onboarding 1',
                subtitle:'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Onboarding 3',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
        ]}
    />
    );
};

export default OnboardingScreen ;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color: '#0000',
        marginBottom: 12,
        
    }
});