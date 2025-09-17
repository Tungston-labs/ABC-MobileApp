import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logoContainer: {
    marginBottom: 10,
    marginTop: -40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 140,
    height: 140,
  },
  form: {
    width: '85%',
  },
  title: {
    fontSize: 24,
    fontFamily: "Lato_700Bold",
    marginBottom: 30,
    color: 'black',
    textAlign: 'left',
  },
  inputWrapper: {
    marginBottom: 20,
    position: 'relative',
  },
  floatingLabel: {
    position: 'absolute',
    top: -10,
    left: 14,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 4,
    fontSize: 14,
    color: '#000',
    zIndex: 1,
    fontFamily: "Lato_400Regular",
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#83B1C9',
    borderRadius: 8,
    fontSize: 16,
    fontFamily: "Lato_700Bold",
    color: '#000',
    backgroundColor: '#FFFFFF',
  },
  passwordInput: {
    paddingRight: 45, // space for eye icon inside
  },
  eyeIconInside: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  button: {
    backgroundColor: '#83B1C9',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
  reset: {
    marginTop: 16,
    color: '#83B1C9',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "Lato_500Regular",
  },

  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -10,
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    fontFamily: "Lato_400Regular",
  },


});

