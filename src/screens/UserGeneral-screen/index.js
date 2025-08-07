import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './styles';
import ProfileHeader from '../../components/UserHeader';
import { useCustomer } from '../../components/context/CustomerContext';

const UserProfileScreen = ({ navigation }) => {
  const user = useCustomer();
  const [activeTab, setActiveTab] = useState('General');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleBack = () => {
    navigation.navigate('HomeScreen');
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save logic (replace this with API call)
      console.log('Saving data:', formData);
      Alert.alert('Success', 'Changes saved successfully.');
    }
    setIsEditing((prev) => !prev);
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'General':
        return (
          <>
            {[
              { label: 'Full Name', key: 'full_name' },
              { label: 'Phone number', key: 'phone' },
              { label: 'E-mail ID', key: 'email' },
              { label: 'LCO Ref', key: 'lco_ref' },
              { label: 'Last Updated', key: 'last_updated' },
            ].map((item, index) => (
              <View key={index} style={styles.inputGroup}>
                <Text style={styles.label}>{item.label}</Text>
                <TextInput
                  value={formData?.[item.key] || ''}
                  editable={isEditing && item.key !== 'last_updated'}
                  style={styles.input}
                  onChangeText={(text) => handleChange(item.key, text)}
                />
              </View>
            ))}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                multiline
                editable={isEditing}
                style={[styles.input, styles.addressInput]}
                value={formData?.address || ''}
                onChangeText={(text) => handleChange('address', text)}
              />
            </View>
          </>
        );
      case 'ISP':
        return (
          <>
            {[
              { label: 'MAC ID', key: 'mac_id' },
              { label: 'ISP', key: 'isp_name' },
              { label: 'Plan', key: 'plan' },
              { label: 'EXP date', key: 'expiry_date' },
              { label: 'V LAN', key: 'v_lan' },
            ].map((item, index) => (
              <View key={index} style={styles.inputGroup}>
                <Text style={styles.label}>{item.label}</Text>
                <TextInput
                  style={styles.input}
                  value={formData?.[item.key] || ''}
                  editable={isEditing}
                  onChangeText={(text) => handleChange(item.key, text)}
                />
              </View>
            ))}
          </>
        );
      case 'Network':
        return (
          <>
            {[
              { label: 'ONT Number', key: 'ont_number' },
              { label: 'MAC ID', key: 'mac_id' },
              { label: 'OLT', key: 'olt_name' },
              { label: 'Port', key: 'port' },
              { label: 'Signal', key: 'signal' },
              { label: 'KSEB Post', key: 'kseb_post' },
              { label: 'Distance', key: 'distance' },
            ].map((item, index) => (
              <View key={index} style={styles.inputGroup}>
                <Text style={styles.label}>{item.label}</Text>
                <TextInput
                  style={[styles.input, item.key === 'distance' && styles.multilineInput]}
                  value={`${formData?.[item.key] || ''}`}
                  editable={isEditing}
                  multiline={item.key === 'distance'}
                  onChangeText={(text) => handleChange(item.key, text)}
                />
              </View>
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ProfileHeader
        user={formData}
        onBack={handleBack}
        onEdit={handleEditToggle}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isEditing={isEditing}
      />


      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={[styles.formContainer, { paddingTop: 380 }]}
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
