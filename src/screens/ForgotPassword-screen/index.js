import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = () => {
    // You can optionally validate email here
    navigation.navigate('VerificationScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Forgot password ?</Text>
        <Text style={styles.subtitle}>
          No worries we will sent you{'\n'}reset instructions
        </Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.floatingLabel}>Your Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email Address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
