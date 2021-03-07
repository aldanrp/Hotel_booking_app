import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={ styles.container}>
            <Text>Login Screen</Text>
            <Button 
                title="click here"
                onPress={() => navigation.navigate("Home")}
            ></Button>
        </View>
    );
};

export default LoginScreen ;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0000'

    },
});