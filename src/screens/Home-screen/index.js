// HomeScreen.js
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
import styles from './styles';
import { searchCustomers } from '../../services/customerService';

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
            onPress={() => navigation.navigate('UserGeneral', { user })}
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

export default HomeScreen;
