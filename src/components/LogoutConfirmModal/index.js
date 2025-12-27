import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./style";

export default function LogoutConfirmModal({
  visible,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Logout</Text>
          <Text style={styles.message}>
            Are you sure you want to logout?
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.noButton]}
              onPress={onCancel}
              activeOpacity={0.8}
            >
              <Text style={styles.noText}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.yesButton]}
              activeOpacity={0.8}
              onPress={() => {
                onConfirm?.();

                navigation.reset({
                  index: 0,
                  routes: [{ name: "LoginScreen" }],
                });
              }}
            >
              <Text style={styles.yesText}>Yes</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </Modal>
  );
}
