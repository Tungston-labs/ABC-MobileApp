import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 30,
    position: 'relative',
  },
  floatingLabel: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 4,
    fontSize: 14,
    color: '#000',
    zIndex: 1,
  },
  input: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#83B1C9',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '100%',
    backgroundColor: '#83B1C9',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#83B1C9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
