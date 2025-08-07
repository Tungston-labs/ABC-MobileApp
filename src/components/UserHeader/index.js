// components/UserHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { IoMdSave } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5"; // or your existing pencil/edit icon

const tabs = ['General', 'Network', 'ISP'];
const { width } = Dimensions.get('window');

const UserHeader = ({
  user,
  onBack,
  activeTab,
  onTabChange,
  onEdit,
  isEditing,
}) => {
  return (
    <View style={{ position: 'absolute', top: 0, width: width, zIndex: 1000, backgroundColor: '#F3F3F3' }}>
      <View style={styles.headerWrapper}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Profile Info */}
        <View style={styles.profileCard}>
           {/* Edit / Save Icon */}
           <TouchableOpacity onPress={onEdit} style={styles.editIcon}>
          <Ionicons
            name={isEditing ? 'save' : 'create-outline'}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
          <Text style={styles.profileName}>{user?.full_name || 'N/A'}</Text>
          <Text style={styles.profilePhone}>Ph: {user?.phone || 'N/A'}</Text>
          <View style={styles.updatedWrapper}>
            <Text style={styles.updatedLabel}>Last Updated</Text>
            <Text style={styles.updatedDate}>{user?.last_updated?.split('T')[0] || 'N/A'}</Text>
          </View>
        </View>

       

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={isActive ? styles.activeTab : styles.inactiveTab}
                onPress={() => onTabChange(tab)}
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
