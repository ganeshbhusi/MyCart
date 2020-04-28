import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import RatingScreen from './components/RatingScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreenStack} />
        <Drawer.Screen name="Rating" component={RatingScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const HomeScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{title: 'MyCart'}}
    />
  </Stack.Navigator>
);

const RatingScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="RatingScreen"
      component={RatingScreen}
      options={{title: 'Rating'}}
    />
  </Stack.Navigator>
);
