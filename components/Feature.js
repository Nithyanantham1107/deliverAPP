import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {t} from 'react-native-tailwindcss'
import Featuredisplay from './Featuredisplay';

const Feature = ({Food,title}) => {
  
  return (
    <View  style={[t.mT3,]}>
     <View style={[t.wFull, t.flexRow,t.bgGray300,t.justifyBetween,t.itemsCenter,t.h20]}>
       
      <View>
        <Text style={[t.fontBold,t.text2xl]}> {title} </Text>
        <Text  style={[t.fontBold,t.textxl]}>Check it out Here!! </Text>
        </View>
        <TouchableOpacity style={[t.mR3]}>
        <AntDesign name="arrowright" size={40} color="black" /></TouchableOpacity>
        </View>
        <View  style={[t.flexRow,]}>
        <ScrollView  horizontal   showsHorizontalScrollIndicator={false}contentContainerStyle={{paddingTop:10,gap:10}}>
          
         
              
      
        { Food.map(hi=>(<Featuredisplay item={hi}/> ))}
        
        
       
        </ScrollView>
      </View>
     </View>
  
  );
}

export default Feature;