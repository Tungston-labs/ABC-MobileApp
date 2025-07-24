// services/authService.js
import api from './axios'; // Make sure your axios base instance is configured here

export const sendOtp = async (email) => {
  return api.post('auth/forgot-password/send-otp/', { email });
};

export const verifyOtp = async (email, otp) => {
  return api.post('auth/forgot-password/verify-otp/', { email, otp });
};

export const resetPassword = async (email, newPassword, confirmPassword) => {
  return api.post('auth/forgot-password/reset-password/', {
    email,
    new_password: newPassword,
    confirm_password: confirmPassword,
  });
};
