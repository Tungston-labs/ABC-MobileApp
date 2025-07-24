import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Keyboard,
  Alert,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { sendOtp } from '../../services/forgotPasswordService';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = async () => {
    if (!email.trim()) {
      Alert.alert('Missing Email', 'Please enter your email address.');
      return;
    }

    try {
      Keyboard.dismiss();
      await sendOtp(email.trim());
      navigation.navigate('VerificationScreen', { email: email.trim() });
    } catch (error) {
      console.error('OTP Send Failed:', error.response?.data || error.message);
      Alert.alert(
        'Error',
        error.response?.data?.detail || 'Failed to send OTP. Please check your email and try again.'
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Forgot password?</Text>
        <Text style={styles.subtitle}>
          No worries! We’ll send you{'\n'}reset instructions.
        </Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.floatingLabel}>Your Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email Address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
