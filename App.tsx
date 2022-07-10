/**
 * Sample React Native ProviderApp
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {AppProvider, useAppContext} from './src/contexts/AppContext';
import {navigationRef} from './src/navigation/RootNavigation';
import Login from './src/screen/Login';
import Home from './src/screen/Home';

const Stack = createStackNavigator();

const ProviderApp = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

const App = () => {
  const [{apiKey}] = useAppContext();

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <NavigationContainer ref={navigationRef}>
        {!apiKey ? (
          // Authentication Stack
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        ) : (
          // App Stack
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
};

export default ProviderApp;
