import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 40, // enough space from top but not too close
    marginTop: -40, // shift slightly upward to balance perfectly
  },
  logo: {
    width: width * 0.38,
    height: width * 0.38,
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 25,
    position: 'relative',
  },
  floatingLabelContainer: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 5,
    zIndex: 2,
  },
  floatingLabel: {
    fontSize: 13,
    color: '#000',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#B7D3E1',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    paddingVertical: 0,
  },
  button: {
    backgroundColor: '#83B1C9',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
