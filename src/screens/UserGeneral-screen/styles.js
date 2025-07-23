import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },

  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#F3F3F3',
  },

  scrollContent: {
    flex: 1,
    paddingTop: 380, // Adjust to match actual header height
  },

  formContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#484848',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#E3E3E3',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: '#000000',
  },
  addressInput: {
    textAlignVertical: 'top',
    height: 100,
  },
});
