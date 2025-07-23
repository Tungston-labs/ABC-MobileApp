import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import UserGeneral from '../UserGeneral-screen';

// Sample user data
const allUsers = [
  { name: 'Corey Kenter', phone: '6235689451' },
  { name: 'Corey Siphron', phone: '6235689451' },
  { name: 'Angel Lipshutz', phone: '6235689451' },
  { name: 'Emerson Ekstrom Bothman', phone: '6235689451' },
];

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.trim() === '') {
      setFilteredUsers([]);
      return;
    }

    const filtered = allUsers.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const renderContent = () => {
    if (searchText === '') {
      // Case 1: Default state
      return (
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/search-default.png')} // your first image
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.placeholderText}>Search for Data</Text>
        </View>
      );
    }

    if (filteredUsers.length === 0) {
      // Case 3: No results
      return (
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/search-no-data.png')} // your third image
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.placeholderText}>Data not found</Text>
        </View>
      );
    }

    // Case 2: Results found
    return (
      <View style={styles.listContainer}>
        {filteredUsers.map((user, index) => (
          <TouchableOpacity
            key={index}
            style={styles.userItem}
            onPress={() => navigation.navigate('UserGeneral')}
          >
            <Text style={styles.userItemName}>{user.name}</Text>
            <Text style={styles.userItemPhone}>Ph: {user.phone}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    // <ImageBackground
    //   source={require('../../assets/your-background.png')} // Replace with your background
    //   style={styles.container}
    //   resizeMode="cover"
    // >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>
          <View style={styles.userCard}>
            <Text style={styles.userName}>Ajay kumar</Text>
            <Text style={styles.userRole}>L.C.O</Text>
          </View>
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#888"
            style={styles.searchInput}
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>

        {/* Render dynamic content */}
        {renderContent()}
      </ScrollView>
    // </ImageBackground>
  );
};

export default HomeScreen;
