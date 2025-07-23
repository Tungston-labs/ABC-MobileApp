// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import styles from './styles';
// import UserGeneral from '../UserGeneral-screen';

// // Sample user data
// const allUsers = [
//   { name: 'Corey Kenter', phone: '6235689451' },
//   { name: 'Corey Siphron', phone: '6235689451' },
//   { name: 'Angel Lipshutz', phone: '6235689451' },
//   { name: 'Emerson Ekstrom Bothman', phone: '6235689451' },
// ];

// const HomeScreen = ({ navigation }) => {
//   const [searchText, setSearchText] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   const handleSearch = (text) => {
//     setSearchText(text);
//     if (text.trim() === '') {
//       setFilteredUsers([]);
//       return;
//     }

//     const filtered = allUsers.filter((user) =>
//       user.name.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   };

//   const renderContent = () => {
//     if (searchText === '') {
//       // Case 1: Default state
//       return (
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('../../assets/search-default.png')} // your first image
//             style={styles.image}
//             resizeMode="contain"
//           />
//           <Text style={styles.placeholderText}>Search for Data</Text>
//         </View>
//       );
//     }

//     if (filteredUsers.length === 0) {
//       // Case 3: No results
//       return (
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('../../assets/search-no-data.png')} // your third image
//             style={styles.image}
//             resizeMode="contain"
//           />
//           <Text style={styles.placeholderText}>Data not found</Text>
//         </View>
//       );
//     }

//     // Case 2: Results found
//     return (
//       <View style={styles.listContainer}>
//         {filteredUsers.map((user, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.userItem}
//             onPress={() => navigation.navigate('UserGeneral')}
//           >
//             <Text style={styles.userItemName}>{user.name}</Text>
//             <Text style={styles.userItemPhone}>Ph: {user.phone}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   return (
   
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Home</Text>
//           <TouchableOpacity
//             style={styles.menuIcon}
//             onPress={() => navigation.openDrawer()}
//           >
//             <Ionicons name="menu" size={28} color="white" />
//           </TouchableOpacity>
//           <View style={styles.userCard}>
//             <Text style={styles.userName}>Ajay kumar</Text>
//             <Text style={styles.userRole}>L.C.O</Text>
//           </View>
//         </View>

//         {/* Search bar */}
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
//           <TextInput
//             placeholder="Search"
//             placeholderTextColor="#888"
//             style={styles.searchInput}
//             value={searchText}
//             onChangeText={handleSearch}
//           />
//         </View>

//         {/* Render dynamic content */}
//         {renderContent()}
//       </ScrollView>
    
//   );
// };

// export default HomeScreen;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import styles from './styles';
// import UserGeneral from '../UserGeneral-screen';

// const allUsers = [
//   { name: 'Corey Kenter', phone: '6235689451' },
//   { name: 'Corey Siphron', phone: '6235689451' },
//   { name: 'Angel Lipshutz', phone: '6235689451' },
//   { name: 'Emerson Ekstrom Bothman', phone: '6235689451' },
// ];

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// // ✅ Home Screen
// const HomeScreen = ({ navigation }) => {
//   const [searchText, setSearchText] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   const handleSearch = (text) => {
//     setSearchText(text);
//     if (text.trim() === '') {
//       setFilteredUsers([]);
//       return;
//     }

//     const filtered = allUsers.filter((user) =>
//       user.name.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredUsers(filtered);
//   };

//   const renderContent = () => {
//     if (searchText === '') {
//       return (
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('../../assets/search-default.png')}
//             style={styles.image}
//             resizeMode="contain"
//           />
//           <Text style={styles.placeholderText}>Search for Data</Text>
//         </View>
//       );
//     }

//     if (filteredUsers.length === 0) {
//       return (
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('../../assets/search-no-data.png')}
//             style={styles.image}
//             resizeMode="contain"
//           />
//           <Text style={styles.placeholderText}>Data not found</Text>
//         </View>
//       );
//     }

//     return (
//       <View style={styles.listContainer}>
//         {filteredUsers.map((user, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.userItem}
//             onPress={() => navigation.navigate('UserGeneral')}
//           >
//             <Text style={styles.userItemName}>{user.name}</Text>
//             <Text style={styles.userItemPhone}>Ph: {user.phone}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.menuIcon}
//           onPress={() => {
//             const parentNav = navigation.getParent();
//             if (parentNav) parentNav.openDrawer();
//           }}
//         >
//           <Ionicons name="menu" size={28} color="#83B1C9" />
//         </TouchableOpacity>
//         <View style={styles.userCard}>
//           <Text style={styles.userName}>Ajay kumar</Text>
//           <Text style={styles.userRole}>L.C.O</Text>
//         </View>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons
//           name="search"
//           size={18}
//           color="#888"
//           style={styles.searchIcon}
//         />
//         <TextInput
//           placeholder="Search"
//           placeholderTextColor="#888"
//           style={styles.searchInput}
//           value={searchText}
//           onChangeText={handleSearch}
//         />
//       </View>

//       {/* Dynamic Search Content */}
//       {renderContent()}
//     </ScrollView>
//   );
// };

// // ✅ Placeholder UserGeneral screen
// const UserGeneral = ({ navigation }) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//       }}
//     >
//       <Text style={{ fontSize: 22, fontWeight: 'bold' }}>UserGeneral Screen</Text>
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={{
//           marginTop: 20,
//           padding: 10,
//           backgroundColor: '#83B1C9',
//           borderRadius: 5,
//         }}
//       >
//         <Text style={{ color: '#fff' }}>Go Back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // ✅ Drawer content (logout section)
// const DrawerContent = ({ navigation }) => {
//   return (
//     <View style={styles.drawerContainer}>
//       <View style={styles.drawerProfile}>
//         <Text style={styles.drawerName}>Ajay kumar</Text>
//         <Text style={styles.drawerRole}>L.C.O</Text>
//       </View>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('LoginScreen')}
//         style={styles.logoutContainer}
//       >
//         <Ionicons name="log-out-outline" size={20} color="#f00" />
//         <Text style={styles.logoutText}>Log out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // ✅ Stack containing Home and UserGeneral
// const MainStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="UserGeneral" component={UserGeneral} />
//   </Stack.Navigator>
// );

// // ✅ Drawer wraps the MainStack
// const RootNavigator = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{ headerShown: false }}
//       drawerContent={(props) => <DrawerContent {...props} />}
//     >
//       <Drawer.Screen name="MainStack" component={MainStack} />
//     </Drawer.Navigator>
//   );
// };

// export default RootNavigator;



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
