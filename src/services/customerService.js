// services/customerService.js
import api from './axios';


export const searchCustomers = async (searchText = '') => {
  try {
    const params = {};
    if (searchText) params.search = searchText;

    const response = await api.get('client/my-customers/search/', { params });

    console.log('Customer search response:', response.data);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching customers:', error.response?.data || error.message);
    throw error;
  }
};


// Update a customer by ID
export const updateCustomer = async (customerId, updatedData) => {
  try {
    const response = await api.put(`client/customer/${customerId}/`, updatedData);
    console.log('Customer update response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating customer:', error.response?.data || error.message);
    throw error;
  }
};
