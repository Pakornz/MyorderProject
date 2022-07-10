/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {goBack} from '../navigation/RootNavigation';
import {useAppContext} from '../contexts/AppContext';

const Home = () => {
  const [{}, dispatch] = useAppContext();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '5%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={async () => {
            await dispatch({apiKey: ''});
            goBack();
          }}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <Image source={require('../assets/home.png')} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
