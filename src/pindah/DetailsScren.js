import React from 'react';
import { 
    ScrollView , 
    Text , 
    StyleSheet,
    View ,
    image, 
    ImageBackground,
    StatusBar,TouchableOpacity,} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../conts/colors';

const DetailsScreen = ({navigation,route}) => {
    const item = route.params;
    console.log(item)
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            backgroundColor: COLORS.white,
            paddingBottom: 20, 
        }}>
            <StatusBar 
                barStyle='light-content'
                translucent
                backgroundColor='rgba(0,0,0,0)'
            />
            <ImageBackground 
                style={styles.headerImage}
                source={item.image} >
                    <View style={styles.header}>
                        <Icon 
                            name='arrow-back-ios'
                            size={28}
                            color={COLORS.white}
                            onPress={navigation.goBack}
                        />
                        <Icon 
                            name='bookmark-border'
                            size={28}
                            color={COLORS.white}
                        /> 
                    </View>
            </ImageBackground>
            <View>
                <View style={styles.iconContainer}>
                    <Icon name='place' size={28} color={COLORS.white} />
                </View>
                <View style={{marginTop:20, paddingHorizontal:20}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{
                        fontSize:10,
                        fontWeight:'400',
                        color: COLORS.grey,
                        marginTop:5,
                    }}>
                        {item.location}
                    </Text>
                    <View style={{
                        marginTop:10,
                        flexDirection:'row',
                        justifyContent:'space-between'
                        }}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.orange} />
                                <Icon name="star" size={20} color={COLORS.grey} />
                            </View>
                            <Text style={{fontSize:18, fontWeight:'bold', marginLeft:5 }} >4.0</Text>
                        </View>
                        <Text style={{fontSize:13  , color:COLORS.grey}}>365 Reviews</Text>
                    </View>
                    <View style={{marginTop:20}} >
                        <Text style={{lineHeight:20,color:COLORS.grey}}>
                            {item.details}
                        </Text>
                    </View>
                </View>
                <View style={{
                        marginTop:20,
                        paddingLeft:20,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center'}}
                    >
                    <Text style={{fontSize:20 ,fontWeight:'bold'}}>Price per night</Text>
                    <View style={styles.priceTag}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: COLORS.grey,
                            marginLeft: 5}}
                        >
                            $ {item.price}
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: COLORS.grey,
                            marginLeft: 5}}
                        >
                            + breakfast
                        </Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('BookingScreen')}>
                    <View style={styles.btn}>
                        <Text style={{color:COLORS.white, fontSize:18}}>Book Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    
    iconContainer:{
        position:'absolute',
        height:60,
        width:60,
        backgroundColor:COLORS.primary,
        top:-30,
        right:20,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    headerImage:{
        height:400,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        overflow:'hidden',
    },
    header:{
        marginTop:60,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        justifyContent:'space-between',
    },
    priceTag:{
        height:40,
        alignItems:'center',
        marginLeft:40,
        paddingLeft:20,
        flex:1,
        backgroundColor:COLORS.secondary,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        flexDirection:'row'
    },
})


export default DetailsScreen; 