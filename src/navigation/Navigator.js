import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import RegistrationPage from '../screens/RegistrationPage';
import PasswordRecoveryPage from '../screens/PasswordRecoveryPage';


const Stack = createNativeStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="STEAM" component={LoginPage} />
      <Stack.Screen name="Signup" component={RegistrationPage} />
      <Stack.Screen name="Recover Account" component={PasswordRecoveryPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
