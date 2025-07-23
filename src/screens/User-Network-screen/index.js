// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import styles from './styles';
// import ProfileHeader from '../../components/UserHeader';

// const UserNetwork = ({ navigation }) => {
//   const user = {
//     name: 'Corey Kenter',
//     phone: '6235689451',
//     lastUpdated: '12-12-2025',
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Fixed profile header */}
//         <ProfileHeader user={user} onBack={() => navigation.goBack()} />

//         {/* Tab selection UI (static in this version) */}
//         <View style={styles.tabs}>
//           <View style={styles.tabButton}>
//             <Text style={styles.tabText}>General</Text>
//           </View>
//           <View style={[styles.tabButton, styles.activeTab]}>
//             <Text style={[styles.tabText, styles.activeTabText]}>Network</Text>
//           </View>
//           <View style={styles.tabButton}>
//             <Text style={styles.tabText}>ISP</Text>
//           </View>
//         </View>

//         {/* Network form content */}
//         <View style={styles.form}>
//           <Text style={styles.label}>ONT Number</Text>
//           <TextInput style={styles.input} value="125412" editable={false} />

//           <Text style={styles.label}>MAC ID</Text>
//           <TextInput style={styles.input} value="5115955-181" editable={false} />

//           <Text style={styles.label}>OLT</Text>
//           <TextInput style={styles.input} value="5111481484" editable={false} />

//           <Text style={styles.label}>Port</Text>
//           <TextInput style={styles.input} value="dummmy" editable={false} />

//           <Text style={styles.label}>Signal</Text>
//           <TextInput style={styles.input} value="151484-115" editable={false} />

//           <Text style={styles.label}>KSEB Post</Text>
//           <TextInput style={styles.input} value="1348495" editable={false} />

//           <Text style={styles.label}>Distance</Text>
//           <TextInput
//             style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
//             multiline
//             editable={false}
//             value="Lorem ipsum dolor sit amet consectetur. Sed id pharetra et quis nullam. Cursus condimentum blandit sit leo in. Luctus morbi diam dui diam enim libero malesuada cursus mauris. Bibendum dui consectetur scelerisque malesuada mauris."
//           />
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default UserNetwork;
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import styles from './styles';
import ProfileHeader from '../../components/UserHeader';

const UserNetwork = ({ navigation }) => {
  const user = {
    name: 'Corey Kenter',
    phone: '6235689451',
    lastUpdated: '12-12-2025',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Header */}
      <ProfileHeader user={user} onBack={() => navigation.goBack()} />

    
      

      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.scrollForm}>
        <ScrollView
                style={styles.scrollContent}
                contentContainerStyle={styles.formContainer}
                showsVerticalScrollIndicator={false}
              ></ScrollView>
        <Text style={styles.label}>ONT Number</Text>
        <TextInput style={styles.input} value="125412" editable={false} />

        <Text style={styles.label}>MAC ID</Text>
        <TextInput style={styles.input} value="5115955-181" editable={false} />

        <Text style={styles.label}>OLT</Text>
        <TextInput style={styles.input} value="5111481484" editable={false} />

        <Text style={styles.label}>Port</Text>
        <TextInput style={styles.input} value="dummmy" editable={false} />

        <Text style={styles.label}>Signal</Text>
        <TextInput style={styles.input} value="151484-115" editable={false} />

        <Text style={styles.label}>KSEB Post</Text>
        <TextInput style={styles.input} value="1348495" editable={false} />

        <Text style={styles.label}>Distance</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value="Lorem ipsum dolor sit amet consectetur. Sed id pharetra et quis nullam. Cursus condimentum blandit sit leo in. Luctus morbi diam dui diam enim libero malesuada cursus mauris. Bibendum dui consectetur scelerisque malesuada mauris."
          editable={false}
          multiline
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserNetwork;
