import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './src/screens/SplashScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import Entypo from '@expo/vector-icons/Entypo';
import Color from './src/shared/Color';
import { Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainTabNavigator = () => (
  <Tab.Navigator 
    screenOptions={({route})=>({
      headerShown:false,
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'white',
      tabBarStyle:{
        backgroundColor:Color.primary,
      }
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} options={()=>({
      tabBarIcon:()=><Entypo name="home" size={24} color="white" />,
      tabBarLabel:()=><Text></Text>
    })}/>
    <Tab.Screen name="Search" component={SearchStack} options={()=>({
      tabBarIcon:()=><FontAwesome5 name="search" size={24} color="white" />,
      tabBarLabel:()=><Text></Text>
    })}/>
  </Tab.Navigator>
);