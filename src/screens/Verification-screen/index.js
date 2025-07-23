import React, { useRef, useState } from 'react';
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

const VerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputs = useRef([]);
  const navigation = useNavigation();

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleContinue = () => {
    // Add validation here if needed
    navigation.navigate('SetNewPasswordScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backArrow}>{'←'}</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>We sent a code to Dummy@gmail.com</Text>

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
