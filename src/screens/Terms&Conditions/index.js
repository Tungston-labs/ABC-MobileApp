import React from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function TermsAndConditions() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Terms & Conditions</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Content */}
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>ABC Broadband – Terms & Conditions</Text>

                <Text style={styles.paragraph}>
                    Welcome to the ABC Broadband platform, powered by Tungston Labs. By
                    accessing or using our website and mobile application (“Platform”),
                    you agree to comply with and be bound by these Terms & Conditions.
                    Please read them carefully before using the services. If you do not
                    agree, you must not use our Platform.
                </Text>

                <Text style={styles.sectionTitle}>1. Data Collection</Text>
                <Text style={styles.paragraph}>
                    We collect the following information:
                </Text>
                <Text style={styles.bullet}>• LCO registration details (name, email, contact).</Text>
                <Text style={styles.bullet}>• Customer data uploaded by LCOs.</Text>
                <Text style={styles.bullet}>• Activity logs and service usage metrics.</Text>

                <Text style={styles.sectionTitle}>2. Data Usage</Text>
                <Text style={styles.bullet}>
                    • Data is used to manage broadband services, generate reports, and
                    improve efficiency.
                </Text>
                <Text style={styles.bullet}>
                    • We do not sell or rent customer data to third parties.
                </Text>
                <Text style={styles.bullet}>
                    • Aggregated, non-identifiable data may be used for analytics.
                </Text>

                <Text style={styles.sectionTitle}>3. Data Security</Text>
                <Text style={styles.bullet}>
                    • All credentials are encrypted and securely stored.
                </Text>
                <Text style={styles.bullet}>
                    • Users are responsible for safeguarding their login details.
                </Text>
                <Text style={styles.bullet}>
                    • We implement industry-standard measures to prevent unauthorized
                    access.
                </Text>

                <Text style={styles.sectionTitle}>4. Data Sharing</Text>
                <Text style={styles.bullet}>
                    • Data may be shared with authorized ABC Broadband staff for service
                    support.
                </Text>
                <Text style={styles.bullet}>
                    • Third-party integrations, if any, will comply with confidentiality
                    agreements.
                </Text>

                <Text style={styles.sectionTitle}>5. Intellectual Property</Text>
                <Text style={styles.paragraph}>
                    All content, software, and designs on the Platform are the property
                    of ABC Broadband and Tungston Labs. Users are granted a limited,
                    non-transferable license to use the services solely for broadband
                    management purposes.
                </Text>

                <Text style={styles.sectionTitle}>6. User Rights</Text>
                <Text style={styles.bullet}>
                    • LCOs can update, edit, or delete customer details as required.
                </Text>
                <Text style={styles.bullet}>
                    • Users may request access to their stored information.
                </Text>

                <Text style={styles.sectionTitle}>7. Updates to Policy</Text>
                <Text style={styles.paragraph}>
                    We may update these Terms & Policies from time to time. Continued use
                    of the Platform after updates constitutes acceptance of the revised
                    terms.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
