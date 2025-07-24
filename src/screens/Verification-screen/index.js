import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  Keyboard,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { verifyOtp } from '../../services/forgotPasswordService';

const VerificationScreen = ({ route }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const navigation = useNavigation();
  const email = route?.params?.email;

  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleContinue = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter all 6 digits of the OTP.');
      return;
    }

    try {
      Keyboard.dismiss();
      await verifyOtp(email, enteredOtp);
      navigation.navigate('SetNewPasswordScreen', { email });
    } catch (error) {
      console.error('OTP Verification Failed:', error.response?.data || error.message);
      Alert.alert('Verification Failed', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>{'←'}</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>
          We sent a code to {email || 'your email'}
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(text) => handleChange(text, index)}
              value={digit}
              returnKeyType="next"
              autoFocus={index === 0}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;
