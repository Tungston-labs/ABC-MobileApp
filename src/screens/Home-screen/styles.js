

import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  header: {
    backgroundColor: 'red',
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#303030',
  },
  menuIcon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 45 : 60,
    right: 20,
  },
  userCard: {
    marginTop: 20,
    backgroundColor: '#83B1C9',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: '#E8E8E8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#303030',
  },
  userRole: {
    fontSize: 14,
    color: '#303030',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    borderColor: '#83B1C9',
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
  },
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  userItem: {
    backgroundColor: '#E3E3E3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
  },
  userItemName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  userItemPhone: {
    fontSize: 13,
    color: '#464646',
    marginTop: 4,
  },
  generalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
  },
  drawerProfile: {
    marginTop: 20, 
  },
  drawerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#303030',
  },
  drawerRole: {
    fontSize: 14,
    color: '#303030',
    marginTop: 4,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  logoutText: {
    marginLeft: 8,
    color: '#FD3F3F',
    fontSize: 16,
  },
});
