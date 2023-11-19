import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../constants';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Login(props) {
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [email, setEmail] = useState('baluu8njdf@gmail.com');
  const [password, setPassword] = useState('123456Abc');
    const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Register');
  };
  useEffect(() => {
    //componentDidMount
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShown(false);
    });
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('URL_API_LOGIN', {
        email: email,
        password: password,
      });

      if (response.data.success) {
        Alert.alert('Success', 'Login successful');
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'An error occurred during login');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginLeft: 20,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h1,
            fontWeight: 'bold',
            width: '50%',
            marginLeft: 20,
          }}>
          Already have an Account?
        </Text>
        <Image
          source={images.login}
          style={{
            width: 200,
            height: 200,
            margin: 30,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 30,
        }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.textColor,
              fontWeight: 'bold',
            }}>
            Email:
          </Text>
          <TextInput
            style={{
              color: 'black',
            }}
            placeholder="example@gmail.com"
            value={email}
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.textColor,
              width: '100%',
              marginHorizontal: 15,
              marginBottom: 5,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: 'red',
              fontSize: fontSizes.h6,
              marginBottom: 15,
            }}>
            {errorEmail}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.textColor,
              fontWeight: 'bold',
            }}>
            Password:
          </Text>
          <TextInput
            style={{
              color: 'black',
            }}
            secureTextEntry={true}
            placeholder="Enter your password"
            value={password}
            placeholderTextColor={colors.placeholder}
          />
          <View
            style={{
              height: 1,
              backgroundColor: colors.textColor,
              width: '100%',
              marginBottom: 15,
              marginHorizontal: 15,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: 'red',
              fontSize: fontSizes.h6,
              marginBottom: 15,
            }}>
            {errorPassword}
          </Text>
        </View>
      </View>
      <View style={{flex: 15}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            alignSelf: 'center',
            borderRadius: 18,
            backgroundColor: colors.textColor,
          }}>
          <Text
            onPress={handleLogin}
            style={{
              padding: 8,
              fontSize: fontSizes.h5,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 5}}>
          <Text
            onPress={handleRegister}
            style={{
              padding: 8,
              fontSize: fontSizes.h5,
              color: colors.textColor,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            New user? Register now
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 25}}>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View style={{height: 1, backgroundColor: 'black', flex: 1}} />
          <Text
            style={{
              padding: 8,
              fontSize: fontSizes.h6,
              color: 'black',
              alignSelf: 'center',
              marginHorizontal: 5,
            }}>
            Use other methods ?
          </Text>
          <View style={{height: 1, backgroundColor: 'black', flex: 1}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={images.google}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Image
            source={images.facebook}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Login;
