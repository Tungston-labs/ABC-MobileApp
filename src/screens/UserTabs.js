// screens/UserTabs.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CustomerProvider } from '../components/context/CustomerContext';
import UserGeneral from './UserGeneral-screen';
// import UserNetwork from './User-Network-screen';
// import UserISP from './User-ISP-screen';

const Tab = createMaterialTopTabNavigator();

const UserTabs = ({ route }) => {
  const { user } = route.params;

  return (
    <CustomerProvider customer={user}>
      <Tab.Navigator screenOptions={{ tabBarStyle: { display: 'none' } }}>
        <Tab.Screen name="UserGeneral" component={UserGeneral} />
        {/* <Tab.Screen name="UserNetwork" component={UserNetwork} />
        <Tab.Screen name="UserISP" component={UserISP} /> */}
      </Tab.Navigator>
    </CustomerProvider>
  );
};

export default UserTabs;
