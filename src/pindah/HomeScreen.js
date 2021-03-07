import React from 'react';
import { 
    SafeAreaView , 
    Text, 
    View,
    StyleSheet, 
    ScrollView, 
    ColorPropType, 
    TextInput, 
    Touchable, 
    TouchableOpacity, 
    FlatList, 
    Dimensions,
    Image,
    Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../conts/colors';
import hotels from '../conts/hotels';
const {width} = Dimensions.get('screen');
const cardWidth = width /1.8 ;

const HomeScreen = ({navigation}) => {
    const categories = ['Popular', 'Top Rated', 'Featured','Luxury'];
    const [selectCategoriesIndex , setselectCategoriesIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [activeCardIndex , setActiveCardIndex] = React.useState(0);

    const CategoriesList = (navigation) => {
        return (
            <View style={styles.categoriescontainer} >
                {categories.map((item , index) => (
                    <TouchableOpacity 
                        key={index} 
                        activeOpacity={0.8}
                        onPress={()=>setselectCategoriesIndex(index)}>
                        <View>
                            <Text style={{
                                ...styles.CategoriesListText , 
                                color:selectCategoriesIndex == index ? COLORS.primary : COLORS.grey}} 
                            >{item}</Text>
                            {selectCategoriesIndex == index && (
                                <View style={{
                                    height:3,
                                    width:40 , 
                                    backgroundColor:COLORS.primary ,
                                    marginTop:2 }}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                )) }
            </View>
        );
    };
    const Card = ({hotel , index}) => {
        const inputRange = [
            (index-1)*cardWidth,
            index*cardWidth,
            (index+1)*cardWidth,
        ]
        const opacity = scrollX.interpolate ({
            inputRange,
            outputRange : [0.7 , 0 , 0.7],
        })
        const scale = scrollX.interpolate ({
            inputRange,
            outputRange : [0.8 , 1 , 0.8],
        })
        return (
            <TouchableOpacity
                disabled={activeCardIndex != index}
                activeOpacity={1} 
                onPress={()=> navigation.navigate('Details', hotel)}
            >
                <Animated.View style={{...styles.card , transform:[{scale}]}}>
                <Animated.View style={{...styles.cardOverlay, opacity}}/>
                    <View style={styles.pricetag}>
                        <Text style={{
                            color:COLORS.white, 
                            fontSize:20, 
                            fontWeight:'bold'
                            }}>
                                ${hotel.price}
                        </Text>
                    </View>
                    <Image source={hotel.image} style={styles.cardimage}/>
                    <View style={styles.cardDetails}>
                        <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                            <View>
                            <Text style={{fontSize: 17, fontWeight:'bold'}}>
                                {hotel.name}
                            </Text>
                            <Text style={{fontSize: 12, color:COLORS.grey}}>
                                {hotel.location}
                            </Text>
                            </View>
                            <Icon name='bookmark-border' size={26} color={COLORS.primary} />
                        </View>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                            marginTop:10,
                        }}>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="star" size={15} color={COLORS.orange} />
                                <Icon name="star" size={15} color={COLORS.orange} />
                                <Icon name="star" size={15} color={COLORS.orange} />
                                <Icon name="star" size={15} color={COLORS.orange} />
                                <Icon name="star" size={15} color={COLORS.grey} />
                            </View>
                            <Text style={{fontSize:10  , color:COLORS.grey}}>365Reviews</Text>
                        </View>
                    </View>
                </Animated.View>
            </TouchableOpacity>
            
        )
    }

    const Tophotelcard = ({hotel}) => {
        return (
            <View style={styles.topHotelcard}>
                <View style={{
                    position:'absolute',
                    top:5,
                    right:5,
                    zIndex:1,
                    flexDirection:'row'

                }}>
                    <Icon name='star' size={15} color={COLORS.orange} />
                    <Text style={{color:COLORS.white, fontWeight:'bold',fontSize:10}}>5.0</Text>
                </View>
                <Image style={styles.topHotelcardImage} source={hotel.image} />
                <View style={{paddingHorizontal:10 , paddingVertical:5}}>
                    <Text style={{fontSize:10,fontWeight:'bold'}}>{hotel.name}</Text>
                    <Text style={{fontSize:7,fontWeight:'normal',color:COLORS.gre}}>{hotel.location}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style = {{flex:1 ,  backgroundColor:COLORS.white}}>
            <View style={styles.header}>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontSize:30 , fontWeight:'bold'}}>
                        Find your hotel
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:30, fontWeight:'bold', }}>In </Text>
                        <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.primary }}>
                            Paris
                        </Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('PersonScreen')}>
                <Icon name="person-outline" size={38} color={COLORS.grey}/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchInputContainer}>
                <Icon name="search" size={30} style={{marginLeft:20}} />
                <TextInput 
                    placeholder="search"
                    style={{fontSize:20 , paddingLeft:10}}
                />
                </View>
                <CategoriesList />
                <View>
                    <Animated.FlatList
                        onMomentumScrollEnd={(e)=>{
                            setActiveCardIndex(Math.round(e.nativeEvent.contentOffset.x/cardWidth))
                        }}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {x: scrollX}}}],
                            {useNativeDriver: true}
                        )}
                        horizontal
                        data={hotels}
                        contentContainerStyle={{
                            paddingVertical: 30, 
                            paddingLeft:20, 
                            paddingRight:cardWidth/ 2 - 20 
                        }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item,index}) => <Card hotel={item} index={index} />} 
                        snapToInterval={cardWidth}
                    />
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginHorizontal: 20}}
                >
                    <Text style={{fontWeight:'bold', color:COLORS.grey}}>Top hotels</Text>
                    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('showall')}>
                    <Text style={{color:COLORS.grey}}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    data={hotels}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 20,
                        paddingBottom:30 , 
                        marginTop: 20,
                    }}
                    renderItem={({item,index}) => <Tophotelcard hotel={item}  />} 
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header :{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 20
        
    },
    searchInputContainer:{
        height:50,
        backgroundColor:COLORS.light,
        marginTop: 15,
        marginLeft: 20,
        marginRight:10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection:'row',
        alignItems:'center',
    },
    categoriescontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 30,
        marginTop: 30,
    },
    CategoriesListText: {
        fontSize:15,
        fontWeight:'bold',
    },
    card :{
        height:280,
        width:cardWidth,
        elevation:15,
        marginRight:20,
        borderRadius:15,
        backgroundColor:COLORS.white
    },
    cardimage:{
        height:200,
        width:"100%",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    pricetag:{
        height: 60,
        width: 80,
        backgroundColor:COLORS.primary,
        position:'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
    cardDetails:{
        height: 100,
        width:'100%',
        borderRadius: 15,
        backgroundColor:COLORS.white,
        position: 'absolute',
        bottom: 0 ,
        marginBottom:10,
        padding: 20,
    },
    cardOverlay: {
        height: 280,
        backgroundColor: COLORS.light,
        position:'absolute',
        zIndex: 100,
        width: cardWidth,
        borderRadius: 15,
    },
    topHotelcard: {
        height: 120,
        width: 120,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        
    },
    topHotelcardImage:{
        height: 80,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        
    }

})

export default HomeScreen ; 