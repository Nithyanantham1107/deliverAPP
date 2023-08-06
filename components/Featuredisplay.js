import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import {t} from 'react-native-tailwindcss'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { getdish ,urlfor} from '../sanity';


import { useNavigation } from '@react-navigation/native';


const Featuredisplay = ({item}) => {


 const navigation=useNavigation();
{/* navigation.navigate("dish",{name:item.name,feed:item.feedback,id:item._id,image:urlfor(item.image).url()})} */}
  return (
<TouchableOpacity onPress={()=>{}}style={[t.bgGreen200,t.w60,t.roundedSm,]}>
  <Image source={{uri: urlfor(item.image).url()}} style={[t.h32,t.w64]}/>
  <Text style={[t.fontBold,t.text2xl]}> {item.name}</Text>
  <View style={[t.flexRow,]}>
  <AntDesign name="star" size={24} color="black" />
  <Text style={[t.textGray600,t.mX2]}>4.8</Text>
    <Text style={[t.mX2]}>{item.feedback}</Text>
    
  </View>
  <View style={[t.flexRow,t.itemsCenter]}>
  <Entypo name="location-pin" size={24} color="black" />
    <Text style={[t.mX1]}>Nearby:</Text>
    <Text>Address</Text>
  </View>
</TouchableOpacity>
  );
}

export default Featuredisplay;