import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthScreen} from '../Auth/AuthScreen';
import {HomeScreen} from '../Home/HomeScreen';

const AuthStack = createNativeStackNavigator();
const ProtectedStack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name="Auth" component={AuthScreen} />
      {/* Other authenticated screens */}
    </AuthStack.Navigator>
  );
}

function ProtectedNavigator() {
  return (
    <ProtectedStack.Navigator screenOptions={screenOptions}>
      <ProtectedStack.Screen name="Home" component={HomeScreen} />
      {/* Other protected screens */}
    </ProtectedStack.Navigator>
  );
}

export {AuthNavigator, ProtectedNavigator};
