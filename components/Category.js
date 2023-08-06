import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {t} from 'react-native-tailwindcss'
import Categorydisplay from './Categorydisplay';
import { getcategory } from '../sanity';

const Category = ({item}) => {
  const[cat,setcat]=useState([]);
  useEffect(()=>{
    getcategory().then((item)=>setcat(item)).catch((err)=>alert(err));
    
  },[]);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={{paddingHorizontal:4,paddingTop:10}}>
     { cat.map( dummy=><Categorydisplay item={dummy} food={item}/>)}
  
     </ScrollView>

  );
};

export default Category;