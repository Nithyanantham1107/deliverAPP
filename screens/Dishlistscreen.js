import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import {t} from 'react-native-tailwindcss'
import Featuredisplay from '../components/Featuredisplay';

const Dishlistscreen = ({route}) => {
  const[value,setvalue]=useState([]);
  const{name,feed,id,image}=route.params;
  useEffect(() =>{
    getdish().then((item)=>{setfood(item);}).catch((err)=>alert(err));
    getrestaurant().then((item)=>{setvalue(item);}).catch((err)=>alert(err));

    
    
},[]);

  return (
    <View style={[t.flex1]}>
  
     <Image style={[t.h40,t.roundedDir]} source={{uri:image}} />
     <View>
<Text style={[t.text3xl,t.fontExtrabold]}>{name}</Text>
<Text style={[t.textxl,t.fontExtrabold]}>{feed}</Text>

     </View>
  
  

    </View>
   
  );
}

export default Dishlistscreen;