import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './axios';
import axios from 'axios';

export const logoutUser = async () => {
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  const accessToken = await AsyncStorage.getItem('token');
// console.log(refreshToken,accessToken);

  if (!refreshToken || !accessToken) {
    throw new Error('Missing tokens');
  }
  try {

    const response = await axios.post(
  'http://10.0.2.2:8000/api/auth/logout/',
      { refresh: refreshToken },{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // await AsyncStorage.multiRemove(['token', 'refreshToken', 'user']);

    // return { success: true };
  } catch (error) {
    const msg = error.response?.data?.error || error.message || 'Logout failed';
    console.log('Logout failed:', error);
    console.log('Logout :', error?.response?.data,error?.status);
    // return { success: false, message: msg };
  }
};
