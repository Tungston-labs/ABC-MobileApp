import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 40,
    marginBottom: 10,
  },
  headerCard: {
    backgroundColor: '#6B00F5',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  userPhone: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  updatedDate: {
    fontSize: 12,
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    right: 16,
    textAlign: 'right',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    borderWidth: 1,
    borderColor: '#6B00F5',
    paddingVertical: 6,
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
    color: '#6B00F5',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  form: {
    marginTop: 10,
  },
  label: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#F2EFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 16,
    color: '#000',
  },
});
