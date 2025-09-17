import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";


export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });


  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Lato_400Regular", fontSize: 18 }}>
        This is Lato Regular!
      </Text>
      <Text style={{ fontFamily: "Lato_700Bold", fontSize: 20 }}>
        This is Lato Bold!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


