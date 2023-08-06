import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Homescreen from './screens/Homescreen';
import 'react-native-url-polyfill/auto';
import { Provider } from 'react-redux';
import { store } from './store';
import Dishlistscreen from './screens/Dishlistscreen';


export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
    

    <Stack.Navigator>
<Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}} />

</Stack.Navigator>
   
    

    </NavigationContainer>
  );
};

