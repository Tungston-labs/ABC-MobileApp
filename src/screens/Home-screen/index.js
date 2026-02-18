import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import {
  View,
  Text,
  TextInput,
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

const PAGE_SIZE = 20;

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [lcoName, setLcoName] = useState('');

  useEffect(() => {
    loadUserInfo();
    fetchUsers(1);
  }, []);

  const loadUserInfo = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setLcoName(user.lco_name || user.username || user.email || 'LCO');
      }
    } catch (err) {
      console.error('Failed to load user info', err);
    }
  };

  const fetchUsers = async (pageNumber) => {
    if (!hasMore && pageNumber !== 1) return;

    try {
      if (pageNumber === 1) setLoading(true);
      else setLoadingMore(true);

      const response = await searchCustomers(searchText, pageNumber, PAGE_SIZE);

      if (Array.isArray(response)) {
        if (pageNumber === 1) setUsers(response);
        else setUsers((prev) => [...prev, ...response]);

        if (response.length < PAGE_SIZE) setHasMore(false);
        else setHasMore(true);

        setPage(pageNumber + 1);
      } else {
        if (pageNumber === 1) setUsers([]);
        setHasMore(false);
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      if (pageNumber === 1) setUsers([]);
      setHasMore(false);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleSearch = async (text) => {
    setSearchText(text);
    setPage(1);
    setHasMore(true);
    fetchUsers(1);
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size="small" color="#007bff" />
      </View>
    );
  };

  const renderContent = () => {
    if (loading && page === 1) {
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

    if (Array.isArray(users) && users.length > 0) {
      return (
        <FlatList
          data={users}
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.userItem}
              onPress={() => navigation.navigate('UserTabs', { user: item })}
            >
              <Text style={styles.userItemName}>{item.full_name || item.name}</Text>
              <Text style={styles.userItemPhone}>Ph: {item.phone}</Text>
            </TouchableOpacity>
          )}
          onEndReached={() => fetchUsers(page)}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      );
    }

    return (
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/search-no-data.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.placeholderText}>Data Not Found</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
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

      {/* Search */}
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
    </View>
  );
};



const DrawerContent = ({ navigation }) => {
  const [lcoName, setLcoName] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          setUser(parsed);
          setLcoName(parsed.lco_name || parsed.username || 'LCO');
        }
      } catch (err) {
        console.log("User loading error:", err);
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    } catch (err) {
      alert('Logout failed. Please try again.');
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: handleLogout },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerProfile}>
        <Text style={styles.drawerName}>{lcoName}</Text>
        <Text style={styles.drawerRole}>L.C.O</Text>
        <Text style={styles.drawerEmail}>
          {user?.username || user?.email || ''}
        </Text>
        <TouchableOpacity onPress={confirmLogout} style={styles.logoutContainer}>
          <Ionicons name="log-out-outline" size={20} color="#f00" />
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.imagefooter}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.imagedash}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.footerNote}>
          Powered by Aluva Broadband Communications
        </Text>
      </View>

    </View>
  );
};

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="UserGeneral" component={UserGeneral} />
  </Stack.Navigator>
);

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
