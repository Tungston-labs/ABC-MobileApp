// import React from "react";
// import { View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
// import styles from "./styles";
// import ProfileHeader from "../../components/UserHeader";

// const UserISP = ({ navigation, route }) => {
//   const { user } = route.params || {};

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ProfileHeader user={user} onBack={() => navigation.goBack()} />

//       <ScrollView contentContainerStyle={styles.formContainer}>
//         <Text style={styles.label}>MAC ID</Text>
//         <TextInput style={styles.input} value={user?.mac_id || ''} editable={false} />

//         <Text style={styles.label}>ISP</Text>
//         <TextInput style={styles.input} value={user?.isp_name || ''} editable={false} />

//         <Text style={styles.label}>Plan</Text>
//         <TextInput style={styles.input} value={user?.plan || ''} editable={false} />

//         <Text style={styles.label}>EXP date</Text>
//         <TextInput style={styles.input} value={user?.expiry_date?.split('T')[0] || ''} editable={false} />

//         <Text style={styles.label}>V LAN</Text>
//         <TextInput style={styles.input} value={user?.v_lan || ''} editable={false} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default UserISP;

import React from "react";
import { View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import ProfileHeader from "../../components/UserHeader";
import { useCustomer } from "../../components/context/CustomerContext";

const UserISP = ({ navigation }) => {
  const user = useCustomer();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ProfileHeader user={user} onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={[styles.formContainer, { paddingTop: 380 }]}>
      <Text style={styles.label}>MAC ID</Text>
        <TextInput style={styles.input} value={user?.mac_id || ''} editable={false} />

        <Text style={styles.label}>ISP</Text>
        <TextInput style={styles.input} value={user?.isp_name || ''} editable={false} />

        <Text style={styles.label}>Plan</Text>
        <TextInput style={styles.input} value={user?.plan || ''} editable={false} />

        <Text style={styles.label}>EXP date</Text>
        <TextInput style={styles.input} value={user?.expiry_date?.split('T')[0] || ''} editable={false} />

        <Text style={styles.label}>V LAN</Text>
        <TextInput style={styles.input} value={user?.v_lan || ''} editable={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserISP;

