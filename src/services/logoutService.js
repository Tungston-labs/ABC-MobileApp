import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './axios';

export const logoutUser = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const accessToken = await AsyncStorage.getItem('token');

    if (!refreshToken || !accessToken) {
      throw new Error('Missing tokens');
    }

    const response = await api.post(
      'auth/logout/',
      { refresh: refreshToken },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    await AsyncStorage.multiRemove(['token', 'refreshToken', 'user']);

    return { success: true };
  } catch (error) {
    const msg = error.response?.data?.error || error.message || 'Logout failed';
    console.error('Logout failed:', msg);
    return { success: false, message: msg };
  }
};
