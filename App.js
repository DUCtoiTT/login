// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from './Sign';
import LoginScreen from './LoginScreen';
import SelectLocationScreen from './SelectLocationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SelectLocation">
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign" component={Sign} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
