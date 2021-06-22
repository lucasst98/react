import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';


const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={({navigation}) => ({
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#1877F2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen options={{ headerLeft: null }} name="Home" component={Home} />
  </Stack.Navigator>
);

export const MainNavigator = () => (
  <NavigationContainer>
    {StackNavigation()} 
  </NavigationContainer>
);
