import api from './axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (email, password) => {
  const res = await api.post('auth/login/', { email, password });

  const { access, refresh } = res.data;

  // Save tokens to AsyncStorage
  await AsyncStorage.setItem('token', access);
  await AsyncStorage.setItem('refreshToken', refresh);

  return res.data;
};
