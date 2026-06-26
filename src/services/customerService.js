// services/customerService.js
import api from './axios';

export const searchCustomers = async (searchText = '', page = 1, pageSize = 20) => {
  try {
    const params = {
      page,          // current page
      page_size: pageSize, // number of results per page
    };

    if (searchText) params.search = searchText;

    const response = await api.get('client/my-customers/search/', { params });
    return response.data.results; // array of users
  } catch (error) {
    console.error('Error fetching customers:', error.response?.data || error.message);
    return [];
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



export const getAllCustomers = async (
  search = "",
  page = 1,
  limit = 10
) => {
  let url = `/client/customer/?page=${page}&page_size=${limit}`;

  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await api.get(url);
  return response.data;
};


export const getExpiringCustomers = async (search, page, lco) => {
  const params = {
    search,
    page,
  };

  if (lco) params.lco = lco;

  const response = await api.get('/client/expiring-soon/', { params });
  return response.data;
};
