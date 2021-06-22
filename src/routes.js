import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';

const iconCarrinho = require('./assets/img/iconCarrinho.png');


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
    <Stack.Screen options={({ navigation }) => ({ 
      headerLeft: null,
      headerRight: () => {
        return (
          <TouchableOpacity
            style={{padding: 16}}
            onPress={() => navigation.navigate('Carrinho')}>
            <Image
              source={iconCarrinho}
              resizeMode="contain"
              style={{
                height: 22,
                width: 22,
              }}
            />
          </TouchableOpacity>
        );
      }
     })} name="Home" component={Home} />
    <Stack.Screen name="Carrinho" component={Carrinho} />
  </Stack.Navigator>
);

export const MainNavigator = () => (
  <NavigationContainer>
    {StackNavigation()} 
  </NavigationContainer>
);
