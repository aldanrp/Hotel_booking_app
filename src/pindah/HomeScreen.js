import React from 'react';
import { SafeAreaView , Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../conts/colors';
import hotels from '../conts/hotels';

const HomeScreen = ({navigation}) => {
    const categories = ['All', 'Popular', 'Top Rated', 'Featured']

    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen ; 