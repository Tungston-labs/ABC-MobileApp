import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function PrivacyPolicy() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Privacy Policy</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* MAIN TITLE */}
        <Text style={styles.title}>ABC Broadband – Privacy Policy</Text>

        <Text style={styles.heading}>1. Introduction</Text>
        <Text style={styles.paragraph}>
          Welcome to the ABC Broadband platform, powered by Tungston Labs. By
          accessing or using our website and mobile application (“Platform”),
          you agree to comply with and be bound by these Terms & Conditions.
          Please read them carefully before using the services. If you do not
          agree, you must not use our Platform.
        </Text>

        <Text style={styles.heading}>2. Use of Services</Text>
        <Text style={styles.paragraph}>
          The Platform is provided to Local Cable Operators (LCOs) and
          authorized users only. Users must register with accurate information
          and keep their credentials secure. Unauthorized use, including
          sharing login credentials or tampering with the system, is strictly
          prohibited.
        </Text>

        <Text style={styles.heading}>3. Customer Data Management</Text>
        <Text style={styles.paragraph}>
          Bulk uploads, customer records, and service details entered on the
          Platform are the responsibility of the LCO or authorized user. Users
          must ensure that all data is accurate, lawful, and does not infringe
          on third-party rights. ABC Broadband is not liable for errors or
          omissions in uploaded data.
        </Text>

        <Text style={styles.heading}>4. Restrictions</Text>
        <Text style={styles.paragraph}>
          You agree not to use the Platform for fraudulent or unlawful
          purposes. Do not attempt to hack, disrupt, or reverse-engineer the
          system. Misuse of automated reports or activity logs for non-business
          purposes is prohibited.
        </Text>

        <Text style={styles.heading}>5. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          All content, software, and designs on the Platform are the property
          of ABC Broadband and Tungston Labs. Users are granted a limited,
          non-transferable license to use the services solely for broadband
          management purposes.
        </Text>

        <Text style={styles.heading}>6. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          ABC Broadband is not responsible for service interruptions caused by
          external factors or technical problems. Unauthorized access caused
          by weak or unsafe passwords is the responsibility of the user. ABC
          Broadband is not liable for indirect losses or damages arising from
          the use of the Platform.
        </Text>

        <Text style={styles.heading}>7. Termination</Text>
        <Text style={styles.paragraph}>
          We reserve the right to suspend or terminate access if users violate
          these Terms.
        </Text>

        <Text style={styles.heading}>8. Governing Law</Text>
        <Text style={styles.paragraph}>
          These Terms are governed by and construed in accordance with the
          laws of India.
        </Text>
      </ScrollView>
    </View>
  );
}
