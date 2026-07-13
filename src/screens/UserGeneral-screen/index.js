import React, { useState, useEffect } from 'react';
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
import { updateCustomer } from '../../services/customerService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const UserGeneral = ({ navigation, route }) => {
  const contextUser = useCustomer();
  const user = route?.params?.user || contextUser;
  const [activeTab, setActiveTab] = useState('General');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(
    route?.params?.user || { ...contextUser }
  );
  const SIGNAL_API = 'http://103.104.45.59:8000';
  const [liveLastUpdated, setLiveLastUpdated] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const fetchLiveSignal = async () => {
    try {
      const serialNumber = formData?.ont_number?.trim();

      if (!serialNumber) return;

      const response = await fetch(
        `${SIGNAL_API}/signal/${serialNumber}`
      );

      if (!response.ok) return;

      const signalData = await response.json();

      setFormData(prev => ({
        ...prev,
        signal: signalData.rx_power?.toString() ?? '',
        olt_name: signalData.olt_ip ?? '',
        port: signalData.port ?? '',
      }));

      setLiveLastUpdated(
        signalData.updated_at
          ? new Date(signalData.updated_at).toLocaleString('en-IN')
          : ''
      );
    } catch (error) {
      console.log('Signal API Error:', error);
    }
  };
  useEffect(() => {
    if (!formData?.ont_number) return;

    fetchLiveSignal();

    const interval = setInterval(() => {
      fetchLiveSignal();
    }, 15000);

    return () => clearInterval(interval);
  }, [formData?.ont_number]);

  const handleEditToggle = async () => {
    if (isEditing) {
      try {
        const updatedUser = await updateCustomer(user.id, formData);
        setFormData(updatedUser);
        setIsEditing(false);
        Alert.alert('Success', 'Changes saved successfully.');
      } catch (error) {
        console.error('Error updating customer:', error.response?.data || error.message);
        Alert.alert('Error', 'Failed to save changes.');
      }
    } else {
      setIsEditing(true);
    }
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
              { label: 'Username', key: 'username' },
              { label: 'LCO Ref', key: 'lco_ref' },
              { label: 'Last Updated', key: 'last_updated' },
            ].map((item, index) => (
              <View key={index} style={styles.inputGroup}>
                <Text style={styles.label}>{item.label}</Text>
                <TextInput
                  value={
                    item.key === 'last_updated'
                      ? liveLastUpdated
                      : formData?.[item.key] || ''
                  }
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
      <KeyboardAwareScrollView
        contentContainerStyle={styles.formContainer}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={20}
      >

        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={[styles.formContainer, { paddingTop: 350, paddingBottom: 120 }]}
          showsVerticalScrollIndicator={false}
        >
          {renderContent()}
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UserGeneral;
