import React from 'react'
import {
    View ,
    Text, 
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
    Dimensions,
    Image,
    } from 'react-native'


import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../conts/colors';
import hotels from '../conts/hotels';
const width = Dimensions.get('window').width/2- 10;

const Showall= ({navigation}) => {

    const Card = ({hotel}) =>{
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details' , hotel)}
            >
                <View style={styles.card}>
                    <View style={{
                        position:'absolute',
                        top:5,
                        right:6,
                        zIndex:1,
                        flexDirection:'row'

                    }}>
                        <Icon name='star' size={20} color={COLORS.orange} />
                        <Text style={{color:COLORS.white, fontWeight:'bold',fontSize:13}}>5.0</Text>
                    </View>
                    <View
                        style={{
                            height:100,
                            alignItems:'center'
                        }}>
                            <Image source={hotel.image} style={styles.cardImage}/>
                    </View>
                    <Text style={{fontWeight:'bold', fontSize:16,marginTop:55}}>
                        {hotel.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{flex:1 , backgroundColor:COLORS.white}}>
            <View style={styles.Header}>
                <View style={{paddingBottom:10}}>
                    <Text style={{fontSize:30, fontWeight:'bold',  }}>
                        Finding
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:30, paddingLeft:30 ,fontWeight:'bold'}} >
                            Your
                        </Text>
                        <Text style={{fontSize:30,paddingLeft:10,fontWeight:'bold', color:COLORS.primary}}>
                            Hotel
                        </Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('PersonScreen')}>
                    <Icon name="person-outline" size={40} color={COLORS.grey}/>
                </TouchableOpacity>
            </View>
            <View style={styles.searchInputContainer}>
                    <Icon name="search" size={30} style={{marginLeft:20}} />
                    <TextInput 
                        placeholder="search"
                        style={{fontSize:20 , paddingLeft:10}}
                    />
            </View>
            <FlatList
                columnWrapperStyle={{justifyContent:'space-between'}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop:10,
                    paddingBottom:50,
                }}
                numColumns={2}
                data={hotels}
                renderItem={({item})=> <Card hotel={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Header :{
        marginTop:30,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:10,
    },
    searchInputContainer:{
        height:50,
        backgroundColor:COLORS.light,
        marginTop: 10,
        marginBottom:20,
        marginLeft: 20,
        marginRight:10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection:'row',
        alignItems:'center',
    },
    card :{
        height:225,
        backgroundColor:COLORS.light,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginLeft:5,
        marginBottom:20,
    },
    cardImage:{
        height:150,
        width:'100%',
        borderRadius:10,
    }
})


export default Showall ; 