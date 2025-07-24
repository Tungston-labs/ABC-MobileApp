import React, { useState } from 'react';
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
import styles from './styles';
import { searchCustomers } from '../../services/customerService';
import UserGeneral from '../UserGeneral-screen';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// ✅ Home Screen
const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = async (text) => {
    setSearchText(text);
    setErrorMsg('');

    const trimmedText = text.trim();
    if (!trimmedText) {
      setFilteredUsers([]);
      return;
    }

    try {
      setLoading(true);
      const users = await searchCustomers(trimmedText);

      // Ensure users is always an array
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
          <Text style={styles.placeholderText}>Searching...</Text>
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

    if (searchText === '') {
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
    }

    if (!Array.isArray(filteredUsers) || filteredUsers.length === 0) {
      return (
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/search-no-data.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.placeholderText}>No results found</Text>
        </View>
      );
    }

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
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <View style={styles.userCard}>
          <Text style={styles.userName}>Ajay Kumar</Text>
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

// ✅ Drawer content (logout section)
const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerProfile}>
        <Text style={styles.drawerName}>Ajay kumar</Text>
        <Text style={styles.drawerRole}>L.C.O</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.logoutContainer}
      >
        <Ionicons name="log-out-outline" size={20} color="#f00" />
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

// ✅ Stack containing Home and UserGeneral
const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="UserTabs" component={UserGeneral} />
    </Stack.Navigator>
);

// ✅ Drawer wraps the MainStack
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
