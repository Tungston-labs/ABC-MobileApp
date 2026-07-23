import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Login-screen";
import HomeScreen from "../screens/Home-screen";
import ForgotPasswordScreen from "../screens/ForgotPassword-screen";
import VerificationScreen from "../screens/Verification-screen";
import SetNewPasswordScreen from "../screens/SetNewPassword-screen";
import UserTabs from "../screens/UserTabs";
import SplashScreen from "../screens/Splash-screen";
import MainDrawer from "./MainDrawer";

import OLTScreen from "../screens/OLTScreen";
import ISPScreen from "../screens/ISP-screen";
import SwitchesScreen from "../screens/Switches-screen";
import CustomerScreen from "../screens/Customer-screen";
import PlanExpiry from "../screens/PlanExpiry-screen";
import LCOScreen from "../screens/LCO-screen";
import TermsAndConditions from "../screens/Terms&Conditions";
import PrivacyPolicy from "../screens/Privacy Policy";
import UserGeneral from "../screens/UserGeneral-screen";
import LCODrawer from "./LCODrawer";
import TicketListScreen from "../screens/TicketListScreen";
import TicketDetailsScreen from "../screens/TicketListScreen/Ticketdetailsscreen";
import OltListScreen from "../screens/OLtlco/OltListScreen";
import OltDetailScreen from "../screens/OLtlco/Oltdetailscreen ";
import PlanExpiryScreen from "../screens/PlanexpiryLco/Planexpiryscreen";
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
        <Stack.Screen
          name="LCODrawer"
          component={LCODrawer}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="UserTabs" component={UserTabs} />

        <Stack.Screen name="OLTScreen" component={OLTScreen} />
        <Stack.Screen name="ISPScreen" component={ISPScreen} />
        <Stack.Screen name="SwitchesScreen" component={SwitchesScreen} />
        <Stack.Screen name="CustomerScreen" component={CustomerScreen} />
        <Stack.Screen name="TicketListScreen" component={TicketListScreen} />
        <Stack.Screen name="UserGeneral" component={UserGeneral} />
        <Stack.Screen name="PlanExpiry" component={PlanExpiry} />
        <Stack.Screen name="LCOScreen" component={LCOScreen} />
        <Stack.Screen name="TicketDetails" component={TicketDetailsScreen} />
        <Stack.Screen name="OltListScreen" component={OltListScreen} />
        <Stack.Screen name="OltDetailScreen" component={OltDetailScreen} />
        <Stack.Screen name="PlanExpiryScreen" component={PlanExpiryScreen} />

        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}