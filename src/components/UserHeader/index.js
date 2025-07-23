import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';

const tabs = ['General', 'Network', 'ISP'];
const { width } = Dimensions.get('window');

const UserHeader = ({ user }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const activeTab = route.name.replace('User', '');

  const handleTabChange = (tab) => {
    navigation.navigate(`User${tab}`);
  };

  return (
    <View style={{ position: 'absolute', top: 0, width: width, zIndex: 1000, backgroundColor: '#F3F3F3' }}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.profileCard}>
          <Text style={styles.profileName}>{user?.name || 'N/A'}</Text>
          <Text style={styles.profilePhone}>Ph: {user?.phone || 'N/A'}</Text>
          <View style={styles.updatedWrapper}>
            <Text style={styles.updatedLabel}>Last Updated</Text>
            <Text style={styles.updatedDate}>12-12-2025</Text>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={isActive ? styles.activeTab : styles.inactiveTab}
                onPress={() => handleTabChange(tab)}
              >
                <Text style={isActive ? styles.activeTabText : styles.inactiveTabText}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default UserHeader;
