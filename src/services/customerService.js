// services/customerService.js
import api from './axios';

export const searchCustomers = async (searchText = '') => {
  try {
    const params = {};
    if (searchText) params.search = searchText;

    // ✅ token will be attached automatically from AsyncStorage
    const response = await api.get('client/my-customers/search/', { params });

    // console.log('Customer search response:', response.data);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching customers:', error.response?.data || error.message);
    throw error;
  }
};




export const updateCustomer = async (customerId, data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (value === undefined || value === null) return;

    // Only append file object if user selected a new image
    if (key === 'profile_pic' && value?.uri) {
      let uri = value.uri;
      if (Platform.OS === 'android' && !uri.startsWith('file://')) {
        uri = 'file://' + uri;
      }

      formData.append('profile_pic', {
        uri,
        name: value.name || 'profile.jpg',
        type: value.type || 'image/jpeg',
      });
    } else if (key !== 'profile_pic') {
      // Append all other fields as strings
      formData.append(key, String(value));
    }
    // Do NOT append profile_pic if it’s just a URL
  });

  const response = await api.patch(`client/customer/${customerId}/`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data || {};
};


