import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import ProfileHeader from '../../components/UserHeader';

const UserNetwork = () => {
  const user = {
    name: 'Corey Kenter',
    phone: '6235689451',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileHeader user={user} onBack={() => navigation.goBack()} />

      {/* Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>ONT Number</Text>
        <TextInput style={styles.input} value="125412" />

        <Text style={styles.label}>MAC ID</Text>
        <TextInput style={styles.input} value="5115955-181" />

        <Text style={styles.label}>OLT</Text>
        <TextInput style={styles.input} value="5111481484" />

        <Text style={styles.label}>Port</Text>
        <TextInput style={styles.input} value="dummmy" />

        <Text style={styles.label}>Signal</Text>
        <TextInput style={styles.input} value="151484-115" />

        <Text style={styles.label}>KSEB Post</Text>
        <TextInput style={styles.input} value="1348495" />

        <Text style={styles.label}>Distance</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
          multiline
          value={`Lorem ipsum dolor sit amet consectetur. Sed id pharetra et quis nullam. Cursus condimentum blandit sit leo in. Luctus morbi diam dui diam enim libero malesuada cursus mauris. Bibendum dui consectetur scelerisque malesuada mauris.`}
        />
      </View>
    </ScrollView>
  );
};

export default UserNetwork;
