// import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import ProfileHeader from '../../components/UserHeader';
import { useCustomer } from '../../components/context/CustomerContext';

const UserGeneral = ({ navigation }) => {
  const user = useCustomer();

  return (
    <View style={styles.container}>
      <View style={styles.fixedHeader}>
        <ProfileHeader user={user} onBack={() => navigation.goBack()} />
      </View>

      <ScrollView
        style={styles.scrollContent}
        contentContainerStyle={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        {[
          { label: 'Full Name', value: user?.full_name || '' },
          { label: 'Phone number', value: user?.phone || '' },
          { label: 'E-mail ID', value: user?.email || '' },
          { label: 'LCO Ref', value: user?.lco_ref || '' },
          { label: 'Last Updated', value: user?.last_updated?.split('T')[0] || '' },
        ].map((item, index) => (
          <View key={index} style={styles.inputGroup}>
            <Text style={styles.label}>{item.label}</Text>
            <TextInput
              value={item.value}
              editable={false}
              style={styles.input}
            />
          </View>
        ))}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            multiline
            editable={false}
            style={[styles.input, styles.addressInput]}
            value={user?.address || ''}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserGeneral;
