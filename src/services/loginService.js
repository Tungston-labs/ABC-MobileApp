// loginService.js
import api from './axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (email, password) => {
  try {
    const res = await api.post('auth/login/', { email, password });
    const { access, refresh, user } = res.data;

    await AsyncStorage.setItem('accessToken', access);
    await AsyncStorage.setItem('refreshToken', refresh);
    await AsyncStorage.setItem('user', JSON.stringify(user));

    return { access, refresh, user };
  } catch (err) {
    // console.error('Login failed:', err.response?.data || err.message);
    throw err; // ✅ Throw error so login screen can catch it
  }
};
