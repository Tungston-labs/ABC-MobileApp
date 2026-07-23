import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../components/DrawerContent";
import LCODashboardScreen from "../screens/LCODashboardScreen";

const Drawer = createDrawerNavigator();

export default function LCODrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="LCODashboard"
        component={LCODashboardScreen}
      />
    </Drawer.Navigator>
  );
}