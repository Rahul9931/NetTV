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
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
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
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#000"
      />
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
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeStack') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'SearchStack') {
          iconName = focused ? 'search' : 'search';
        }

        return <FontAwesome5 name={iconName} size={24} color={color} />;
      },
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'white',
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor:Color.primary,
      },
    })}
  >
    <Tab.Screen name="HomeStack" component={HomeStack}/>
    <Tab.Screen name="SearchStack" component={SearchStack} />
  </Tab.Navigator>
);