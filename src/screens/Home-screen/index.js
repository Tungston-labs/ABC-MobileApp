import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { searchCustomers } from '../../services/customerService';
import UserGeneral from '../UserGeneral-screen';
import { logoutUser } from '../../services/logoutService';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// ✅ Home Screen
const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [lcoName, setLcoName] = useState('');

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const user = JSON.parse(userData);
          setLcoName(user.lco_name || user.username || user.email || 'LCO');
  
          setLoading(true);
          const allCustomers = await searchCustomers('');
          if (Array.isArray(allCustomers)) {
            setFilteredUsers(allCustomers);
          }
                    setFilteredUsers(allCustomers);
        }
      } catch (error) {
        console.error('Error loading customers:', error);
        setErrorMsg('Failed to load customers');
      } finally {
        setLoading(false);
      }
    };
  
    loadInitialData();
  }, []);
  

  const handleSearch = async (text) => {
    setSearchText(text);
    setErrorMsg('');
  
    const trimmedText = text.trim();
  
    try {
      setLoading(true);
      const users = await searchCustomers(trimmedText);
      if (Array.isArray(users)) {
        setFilteredUsers(users);
      } else {
        setFilteredUsers([]);
        setErrorMsg('Invalid data received from server');
      }
    } catch (error) {
      console.error('Search Error:', error.response?.data || error.message);
      setFilteredUsers([]);
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.imageContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.placeholderText}>Loading...</Text>
        </View>
      );
    }
  
    if (errorMsg) {
      return (
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/search-no-data.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.placeholderText}>{errorMsg}</Text>
        </View>
      );
    }
  
    // ✅ Show customers if loaded
    if (Array.isArray(filteredUsers) && filteredUsers.length > 0) {
      return (
        <View style={styles.listContainer}>
          {filteredUsers.map((user, index) => (
            <TouchableOpacity
              key={index}
              style={styles.userItem}
              onPress={() => navigation.navigate('UserTabs', { user })}
            >
              <Text style={styles.userItemName}>{user.full_name || user.name}</Text>
              <Text style={styles.userItemPhone}>Ph: {user.phone}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  
    // 🔻 Only show this when no customers at all
    return (
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/search-default.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.placeholderText}>Search for a customer</Text>
      </View>
    );
  };
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={28} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.userCard}>
          <Text style={styles.userName}>{lcoName}</Text>
          <Text style={styles.userRole}>L.C.O</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.searchInput}
          value={searchText}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {renderContent()}
    </ScrollView>
  );
};

// ✅ Drawer content with Logout
const DrawerContent = ({ navigation }) => {
  const [lcoName, setLcoName] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        setLcoName(user.lco_name || user.username || user.email || 'LCO');
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    // const result = await logoutUser();
    // if (result.success) {
    try{
      await AsyncStorage.clear(); // Just to be safe
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    } catch(err) {
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerProfile}>
        <Text style={styles.drawerName}>{lcoName}</Text>
        <Text style={styles.drawerRole}>L.C.O</Text>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutContainer}>
        <Ionicons name="log-out-outline" size={20} color="#f00" />
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

// ✅ Stack
const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="UserGeneral" component={UserGeneral} />
  </Stack.Navigator>
);

// ✅ Drawer + Stack combo
const RootNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
