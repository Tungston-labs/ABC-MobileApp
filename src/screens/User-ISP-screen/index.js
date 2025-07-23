import React from "react";
import { View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import ProfileHeader from "../../components/UserHeader";

const UserISP = ({ navigation }) => {
  const user = {
    name: "Corey Kenter",
    phone: "6235689451",
    lastUpdated: "12-12-2025",
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Header */}
      <ProfileHeader user={user} onBack={() => navigation.goBack()} />

      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <ScrollView
          style={styles.scrollContent}
          contentContainerStyle={styles.formContainer}
          showsVerticalScrollIndicator={false}
        ></ScrollView>

        <Text style={styles.label}>MAC ID</Text>
        <TextInput style={styles.input} value="f651dfsd" editable={false} />

        <Text style={styles.label}>ISP</Text>
        <TextInput style={styles.input} value="5115955-181" editable={false} />

        <Text style={styles.label}>Plan</Text>
        <TextInput style={styles.input} value="12554" editable={false} />

        <Text style={styles.label}>EXP date</Text>
        <TextInput style={styles.input} value="12-12-25" editable={false} />

        <Text style={styles.label}>V LAN</Text>
        <TextInput style={styles.input} value="51-115" editable={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserISP;
