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
    marginBottom: 16,
  },
  
  activeTab: {
    backgroundColor: '#6BBAE8',
  },
  tabText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
  },
  activeTabText: {
    color: '#000',
  },
  formContainer: {
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
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 14,
    marginBottom: 16,
    color: '#000',
  },
});
