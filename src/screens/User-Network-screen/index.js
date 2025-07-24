import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import ProfileHeader from '../../components/UserHeader';
import { useCustomer } from '../../components/context/CustomerContext';

const UserNetwork = ({ navigation }) => {
  const user = useCustomer();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ProfileHeader user={user} onBack={() => navigation.goBack()} />

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={[styles.formContainer, { paddingTop: 380 }]} // Adjust if your header height is different
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputGroup}>
          <Text style={styles.label}>ONT Number</Text>
          <TextInput style={styles.input} value={user?.ont_number || ''} editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>MAC ID</Text>
          <TextInput style={styles.input} value={user?.mac_id || ''} editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>OLT</Text>
          <TextInput style={styles.input} value={user?.olt_name || ''} editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Port</Text>
          <TextInput style={styles.input} value={user?.port || ''} editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Signal</Text>
          <TextInput style={styles.input} value={user?.signal || ''} editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>KSEB Post</Text>
          <TextInput style={styles.input} value={user?.kseb_post || ''} editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Distance</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={`${user?.distance || ''}`}
            editable={false}
            multiline
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserNetwork;
