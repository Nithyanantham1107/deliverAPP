import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {t} from 'react-native-tailwindcss'
import { urlfor } from '../sanity';

const Categorydisplay = ({item,food}) => {
  return (
    <TouchableOpacity  onPress={()=>{console.log(food);
   
    }}style={[t.roundedFull,t.m1,t.itemsCenter]}>
      <Image source={{uri:urlfor(item.image).url()}} style={[t.h20,t.w20,t.roundedLg]}/>
        <Text style={[t.absolute,t.bottom0,t.textWhite,t.fontBold]}>{item.name}</Text>
    </TouchableOpacity>
    
  );
}

export default Categorydisplay;