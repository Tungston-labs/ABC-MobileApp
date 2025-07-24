import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login-screen';
import HomeScreen from '../screens/Home-screen';
import ForgotPasswordScreen from '../screens/ForgotPassword-screen';
import VerificationScreen from '../screens/Verification-screen';
import SetNewPasswordScreen from '../screens/SetNewPassword-screen';
import UserTabs from '../screens/UserTabs'; // ✅ New wrapper screen

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />

        {/* ✅ Combine UserGeneral, Network, ISP via UserTabs */}
        <Stack.Screen name="UserTabs" component={UserTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
