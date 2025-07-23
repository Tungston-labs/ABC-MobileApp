import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import ProfileHeader from '../../components/UserHeader';

const UserGeneral = ({ navigation, route }) => {
  const { user } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <ProfileHeader user={user} onBack={() => navigation.goBack()} />
      </View>

      {/* Scrollable content with paddingTop to avoid hiding under header */}
      <ScrollView
        style={styles.scrollContent}
        contentContainerStyle={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        {[ 
          { label: 'Full Name', value: user?.name || '' },
          { label: 'Phone number', value: user?.phone || '' },
          { label: 'E-mail ID', value: 'Ajaydummy@gmail.com' },
          { label: 'LCO Ref', value: '125425' },
          { label: 'Last Updated', value: '12-12-2025' },
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
            value={`Lorem ipsum dolor sit amet consectetur. Sed id pharetra et quis nullam. Cursus condimentum blandit sit leo in. Luctus morbi diam dui diam enim libero malesuada cursus mauris. Bibendum dui consectetur scelerisque malesuada mauris.`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserGeneral;
