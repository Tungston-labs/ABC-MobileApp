// loginService.js
import api from './axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (email, password, rememberMe = true) => {
  const res = await api.post('auth/login/', { email, password });
  const { access, refresh, user } = res.data;
  console.log(res.data);

  if (rememberMe) {
    // Save tokens only if Remember Me is enabled
    await AsyncStorage.setItem('accessToken', access);
    await AsyncStorage.setItem('refreshToken', refresh);
    await AsyncStorage.setItem('user', JSON.stringify(user));
  }

  return res.data;
};
