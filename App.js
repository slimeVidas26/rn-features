import React from 'react';
import {View , Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = ()=>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{fontSize : 30}}>Home!</Text>
    </View>
  )
}

const SettingScreen = ()=>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{fontSize : 30}}>Setting!</Text>
    </View>
  )
}

const ContactScreen = ()=>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{fontSize : 30}}>Contact!</Text>
    </View>
  )
}


const Tab = createBottomTabNavigator();


const App = ()=>{
  return (
    <NavigationContainer>
      <Tab.Navigator  
      >
         <Tab.Screen name = 'Home' component = {HomeScreen}/>
         <Tab.Screen name = 'Setting' component = {SettingScreen}/>
         <Tab.Screen name = 'Contact' component = {ContactScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
   
  )
}

export default App;