import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
// ✅ Correct way:
import UserGeneral from '../UserGeneral-screen';

 // Make sure this is NOT './index'


const users = [
  { name: 'Corey Kenter', phone: '6235689451' },
  { name: 'Corey Siphron', phone: '6235689451' },
  { name: 'Angel Lipshutz', phone: '6235689451' },
  { name: 'Emerson Ekstrom Bothman', phone: '6235689451' },
];

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// ✅ Home Screen
const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
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
         
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={18}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* User List */}
      <View style={styles.listContainer}>
        {users.map((user, index) => (
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
    <Stack.Screen name="UserGeneral" component={UserGeneral} />
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
