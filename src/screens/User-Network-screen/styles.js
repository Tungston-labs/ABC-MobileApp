// import { StyleSheet, Dimensions, Platform } from 'react-native';

// const { width } = Dimensions.get('window');

// export default StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#fff',
//     paddingBottom: 32,
//   },
//   tabs: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   tabButton: {
//     borderWidth: 1,
//     borderColor: '#6B00F5',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderTopLeftRadius: 4,
//     borderTopRightRadius: 4,
//     marginHorizontal: 4,
//     backgroundColor: '#fff',
//   },
//   activeTab: {
//     backgroundColor: '#6B00F5',
//   },
//   tabText: {
//     color: '#6B00F5',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   activeTabText: {
//     color: '#fff',
//   },
//   form: {
//     marginTop: 10,
//   },
//   label: {
//     color: '#000',
//     fontSize: 14,
//     marginBottom: 4,
//     marginLeft: 4,
//   },
//   input: {
//     backgroundColor: '#EDEDED',
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     paddingVertical: Platform.OS === 'ios' ? 12 : 8,
//     fontSize: 14,
//     marginBottom: 16,
//     color: '#000',
//   },
// });

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  tabButton: {
    borderWidth: 1,
    borderColor: '#6B00F5',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  activeTab: {
    backgroundColor: '#6B00F5',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B00F5',
  },
  activeTabText: {
    color: '#fff',
  },
  scrollForm: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  scrollContent: {
    flex: 1,
    paddingTop: 340, // Adjust to match actual header height
  },

  formContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 14,
    marginBottom: 16,
    color: '#000',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});
