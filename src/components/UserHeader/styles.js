import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  headerWrapper: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    paddingTop: 40,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
  },
  profileCard: {
    backgroundColor: '#83B1C9',
    height: 250, // Increased height
    width: width - 60, // Fill most of screen, aligned right
    marginLeft: 60, // Shift to the right
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 40, // Only bottom-left rounded
    padding: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 6,
  },
  profilePhone: {
    fontSize: 16,
    color: '#000000',
  },
  updatedWrapper: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'flex-end',
  },
  updatedLabel: {
    fontSize: 12,
    color: '#4A6471',
  },
  updatedDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  editIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 10,
  },
  
  
  // Tabs Styling
  tabsContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 20,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#A5A5A5',
  },
  activeTab: {
    flex: 1,
    backgroundColor: '#83B1C9',
    paddingVertical: 10,
    alignItems: 'center',
  },
  inactiveTab: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inactiveTabText: {
    color: '#000000',
    fontSize: 16,
  },
});
