import { View, Text, StyleSheet } from 'react-native';

// Custom header component
export const CustomHeader = ({title}:{
    title:any
}) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '90%', // Set header width here
    marginLeft: '5%', // Center the header
    // marginRight: '10%', // Center the header
    backgroundColor: '#6B9FFF', // Set your header background color
    padding: 10,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
