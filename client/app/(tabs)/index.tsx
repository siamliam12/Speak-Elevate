import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import mic from '../../assets/images/microphone-with-wire.png'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.welcome}>Welcome</Text><Text style={styles.welcomesign}>!</Text>
      </View>
        <Text style={styles.username}>Henry</Text>
      <View style={styles.roundedIcon}>
        <Image style={styles.roundedIconImage} source={mic}/>
        <View style={styles.roundedIconTextContainer}>
          <Text style={styles.roundedIconText}>Record</Text>
          <Text style={styles.roundedIconText}>&</Text>
          <Text style={styles.roundedIconText}>Analyze</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:10
    // flex:1,
  },
  innercontainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    marginLeft:35
  },
  welcome:{
    color:'#0059FF',
    fontSize:37,
    fontWeight:800,
    fontFamily:'Gilroy-Black',
  },
  welcomesign:{
    color:'#0059FF',
    fontSize:37,
    fontWeight:800,
  },
  username:{
    fontWeight:800,
    fontSize:27,
    marginLeft:35
  },
  roundedIcon:{
    justifyContent: 'space-between', // Centers image vertically
    alignItems: 'center', // Centers image horizontally
    alignSelf: 'flex-start', // Centers the container itself
    display:'flex',
    flexDirection:'row',
  },
  roundedIconImage:{
    width: '40%', // Percentage of parent container
    height: '70%', // Percentage of parent container
    resizeMode: 'contain', // Maintains aspect ratio
    borderRadius: 250,
    justifyContent:"center",
    alignItems: 'center',
    zIndex:1,
  },
  roundedIconTextContainer:{
    height:200,
    width:200,
    backgroundColor: '#4C8AFF', // Optional background
    borderRadius: 200, // Makes it circular
    justifyContent: 'center', // Centers image vertically
    alignItems: 'center', // Centers image horizontally
    alignSelf: 'flex-start', // Centers the container itself
    marginTop: 60,
    marginLeft:-100,
    paddingLeft:40,
    zIndex:-1,
    display:'flex',
  },
  roundedIconText:{
    color:"white",
    fontSize:21,
    fontWeight:600,
  },
});
