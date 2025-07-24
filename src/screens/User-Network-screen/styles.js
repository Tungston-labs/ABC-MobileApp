import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollArea: {
    flex: 1,
  },

  formContainer: {
    paddingHorizontal: 18,
    paddingVertical: 24,
  },

  inputGroup: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 6,
    marginLeft: 4,
  },

  input: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 14,
    color: '#000',
  },

  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },

  // Optional - for tabs if reused
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
});
