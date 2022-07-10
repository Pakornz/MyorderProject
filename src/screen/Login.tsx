/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Alert, SafeAreaView, StatusBar, View} from 'react-native';
import LoginScreen from 'react-native-login-screen';
import {navigate} from '../navigation/RootNavigation';
import {useAppContext} from '../contexts/AppContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  // const [email, setEmall] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  let email = '';
  let password = '';
  const [{}, dispatch] = useAppContext();

  const onChangeEmail = (text: string) => {
    // setEmall(text);
    email = text;
  };

  const onChangePassword = (text: string) => {
    // setPassword(text);
    password = text;
  };

  const loginPress = async () => {
    const checkEmail = ['test@test.com'];
    const checkPassword = ['12345678'];
    if (
      email &&
      checkEmail.indexOf(email) !== -1 &&
      password &&
      checkPassword.indexOf(password) !== -1
    ) {
      await dispatch({apiKey: Math.random().toString()});
      navigate('Home');
    } else {
      Alert.alert('Login failed');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <LoginScreen
            style={{backgroundColor: 'white'}}
            logoImageSource={require('../assets/logo.png')}
            logoImageStyle={{width: '100%', height: '20%', marginVertical: 30}}
            onLoginPress={() => {
              loginPress();
            }}
            onSignupPress={() => {}}
            onEmailChange={e => onChangeEmail(e)}
            onPasswordChange={p => onChangePassword(p)}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
