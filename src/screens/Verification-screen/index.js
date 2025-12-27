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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { verifyOtp } from '../../services/forgotPasswordService';
import { Ionicons } from '@expo/vector-icons'; 

const VerificationScreen = ({ route }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const navigation = useNavigation();
  const email = route?.params?.email;

  const handleChange = (text, index) => {
    
    if (text.length > 1) {
      const newOtp = text.split('').slice(0, 6);
      while (newOtp.length < 6) newOtp.push('');
      setOtp(newOtp);
      
      newOtp.forEach((digit, idx) => {
        if (inputs.current[idx]) {
          inputs.current[idx].setNativeProps({ text: digit });
        }
      });
     
      const nextIndex = newOtp.findIndex((val) => val === '');
      if (nextIndex !== -1) {
        inputs.current[nextIndex].focus();
      } else {
        inputs.current[5].focus();
      }
      return;
    }

    
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    
    if (text && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <View style={{ flex: 1 }}>
          {/* Back Arrow */}
          <TouchableOpacity
            style={{ position: 'absolute', top: 40, left: 15, zIndex: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={28} color="#83B1C9" />
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
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  returnKeyType="next"
                  autoFocus={index === 0}
                />
              ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerificationScreen;
                                                             