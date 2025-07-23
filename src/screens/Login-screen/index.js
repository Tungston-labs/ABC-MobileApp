import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Log in</Text>

          {/* Email Field */}
          <View style={styles.inputWrapper}>
            <Text style={styles.floatingLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password Field */}
          <View style={styles.inputWrapper}>
            <Text style={styles.floatingLabel}>Password</Text>
            <View>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Enter Password"
                placeholderTextColor="#aaa"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeIconInside}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={22}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

          {/* Reset Link */}
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")}>
            <Text style={styles.reset}>Re-set password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
