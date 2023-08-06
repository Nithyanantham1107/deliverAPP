import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {t} from 'react-native-tailwindcss'
import {color} from 'react-native-tailwindcss'
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Category from '../components/Category';
import Feature from '../components/Feature';
import { getcategory, getdish,getrestaurant} from '../sanity';





function  Homescreen() {
  const[Food,setfood]=useState([]);
  const[rest,setrest]=useState([]);
  const[value,setvalue]=useState(null);

 
  useEffect(() =>{
    getdish().then((item)=>{setfood(item);}).catch((err)=>alert(err));
    getrestaurant().then((item)=>{setrest(item);}).catch((err)=>alert(err));

    
    
},[]);

  return (
    <View style={[t.flex1] }>
<View style={[t.flexRow,t.mT6,t.bgBlue300,t.wFull,t.rounded,]}>
   <TouchableOpacity onPress={()=>{}}><FontAwesome name="shopping-bag" size={30} color="black" />  
</TouchableOpacity>
 <View style={[t.flexCol,]}>

 <Text style={[t.textWhite,t.textSm]}> Deliver Now</Text>
 <View style={[t.flexRow]}>
 <Text style={[t.textLg,t.textWhite,t.fontBold]}> Current Location</Text>
 <AntDesign name="down" size={20} color="black" /></View>
</View>
<View  style={[t.flex1,t.itemsEnd,t.justifyCenter]}>
<TouchableOpacity onPress={()=>{}}><Octicons name="person" size={40} color="black" />
</TouchableOpacity>
</View>

 </View>  
 <View style={[t.flexRow,t.justifyBetween,t.bgWhite,t.alignCenter]}>
    <View style={[t.flexRow,t.flex1,t.bgGray100,t.h15,]}>
    <Ionicons name="search-outline" size={30} color="black" />
    <TextInput style={[ ]}  placeholder='Type your favourites'/>
     </View>
     <Ionicons name="filter" size={30} color="black" />
</View>
<View style={[t.flexRow]}>
<Category item={value}/>
 </View>
 <View style={[t.flex1,t.bgWhite]}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop:15,gap:10  }}>
 <Feature Food={Food} title="Dishes" />
 <Feature Food={rest} title="Restaurant" />
 
</ScrollView>
 </View>
 <View style={[t.flexRow,t.bottom0]}>
  <TouchableOpacity >
   <Text></Text>
  </TouchableOpacity>

 </View>

  </View>
  );
}

export default Homescreen;