import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import mic from '../../assets/images/microphone-with-wire.png';
import { Box } from '@/components/ui/box';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Button,
  ButtonText,
} from '@/components/ui/button';
import Ellipse from '@/components/Ellipse';

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
      <LinearGradient
        colors={['#2EC0FF','#3B6BC5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}>       
        <Box
        className="bg-primary-500 p-5"
          style={styles.BoxContainer}
        >
          <Text className="text-typography-0" style={styles.BoxContainerText}>
            "Power Of Body Language"
          </Text>
          
        <Button size="lg" variant="solid" action="primary" style={styles.BoxContainerButton}>
          <ButtonText style={styles.BoxContainerButtonText}>Continue Lesson</ButtonText>
        </Button>
      
        </Box>
      </LinearGradient>
      {/* <View style={styles.ellipseStyle}>
        <Ellipse bg='#ADCEF8' width={250} height={200}/> 
        <Ellipse bg='#4C8AFF' width={350} height={300}/> 
        <Ellipse bg='#ADCEF8' width={270} height={200}/> 
      </View> */}
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
  BoxContainer:{
    // paddingTop:50,
    // paddingBottom:50,
    // marginTop:45,
    // width:"87%",
    // marginLeft:22,
    // borderRadius:27,
    backgroundColor:'none',
    alignItems:"flex-end"
  },
  gradient: {
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:20,
    paddingBottom:20,
    marginTop:45,
    width:"87%",
    marginLeft:22,
    borderRadius:27,
  },
  BoxContainerText:{
    textAlign:"center",
    fontSize:20,
    fontWeight:600,
    marginBottom:20,
    marginTop:-20,
  },
  BoxContainerButton:{
    backgroundColor:"#D7E5F9",
    width:'51%',
    borderRadius:10,
    // padding:25,
  },
  BoxContainerButtonText:{
    color:'#3B6BC5',
    fontSize:12,
  },
  ellipseStyle:{
    display:'flex',
    position:'absolute',
    zIndex:-2,
    left:100
  },
});
