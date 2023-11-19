import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={handleRegister} />
    </View>
  );
};

export default HomeScreen;