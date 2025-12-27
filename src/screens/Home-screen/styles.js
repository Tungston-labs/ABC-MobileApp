import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  header: {
    backgroundColor: '#FFFFFF',
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

headerTopRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10,
  paddingTop: 35,
},

logo: {
  width: 40, 
  height: 40,
},


menuIcon: {
  padding: 8,
},

userCard: {
  marginTop: 40,
  backgroundColor: '#83B1C9',
  borderRadius: 10,
  padding: 10,
  elevation: 20,
 

  shadowColor: '#000',
  shadowOffset: { width: 3, height: 3 }, 
  shadowOpacity: 0.3,
  shadowRadius: 4,
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
    elevation: 10,
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
  // Dynamic image section
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height:240,
    marginBottom: 20,
  },
   imagedash: {
    width: 200,
    height:140,
    marginLeft:30,
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#4433CC',
    fontStyle: 'italic',
  },

  // Drawer Screen (if used in DrawerContent)
  drawerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    gap:"20px",
    backgroundColor: '#FFFFFF',
  },
  drawerProfile: {
    marginTop: 20,
  },
  drawerName: {
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 4,
  color: '#303030',
  
  paddingVertical: 10,
  paddingHorizontal: 1,
  borderRadius: 2, // rounded edges
},

  drawerRole: {
    fontSize: 18,
    color: '#303030',
    marginTop: 8,
  },
  logoutContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop:20,
  },
  logoutText: {
    marginLeft: 8,

    color: '#FD3F3F',
    fontSize: 18,
  },
  menuSection: {
  marginTop: 20,
},

menuItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
  paddingHorizontal: 10,
},

menuText: {
  marginLeft: 10,
  fontSize: 16,
  color: '#333',
},

drawerEmail: {
  fontSize: 16,
  color: '#777',
  marginTop: 8,
},

divider: {
  height: 1,
  backgroundColor: '#ddd',
  marginVertical: 20,
},

footer: {
  alignItems: 'center',
  marginBottom: 40,
  gap: 20,  // remove "px"
},

imagefooter: {
  justifyContent: 'center',
  alignItems: 'center',
},

imagedash: {
  width: 120,
  height: 120,
},

footerNote: {
  textAlign: 'center',
  fontSize: 16,
  color: '#aaa',
},

});