import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { resetPassword } from '../../services/forgotPasswordService';

const SetNewPasswordScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const email = route?.params?.email;

  const handleReset = async () => {
    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Both fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      await resetPassword(email, password, confirmPassword);
      Alert.alert('Success', 'Password reset successful. Please login.');
      navigation.navigate('LoginScreen'); // change 'Login' to your login screen route name
    } catch (error) {
      console.error('Reset failed:', error.response?.data || error.message);
      Alert.alert('Reset Failed', error.response?.data?.error || 'Something went wrong.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#83B1C9" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Set new password</Text>
        <Text style={styles.subtitle}>Enter new password</Text>

        {/* Password Field */}
        <View style={styles.inputContainer}>
          <View style={styles.floatingLabelContainer}>
            <Text style={styles.floatingLabel}>Password</Text>
          </View>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons
                name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                size={22}
                color="#999"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password Field */}
        <View style={styles.inputContainer}>
          <View style={styles.floatingLabelContainer}>
            <Text style={styles.floatingLabel}>Confirm Password</Text>
          </View>
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={!confirmVisible}
              placeholderTextColor="#999"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setConfirmVisible(!confirmVisible)}>
              <Ionicons
                name={confirmVisible ? 'eye-off-outline' : 'eye-outline'}
                size={22}
                color="#999"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SetNewPasswordScreen;
