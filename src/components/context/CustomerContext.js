// context/CustomerContext.js
import React, { createContext, useContext } from 'react';

const CustomerContext = createContext(null);

export const useCustomer = () => useContext(CustomerContext);

export const CustomerProvider = ({ children, customer }) => (
  <CustomerContext.Provider value={customer}>
    {children}
  </CustomerContext.Provider>
);
