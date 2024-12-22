import {View,Text, ScrollView, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { RoundMap } from "@/components/RoundMap";

export default function Roadmap(){
    return(
    <SafeAreaView>
        <ScrollView style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.maintext}>Fundamentals</Text>
                <AntDesign style={{marginLeft: 8}} name="down" size={18} color="#3C6DC8" />
            </View>
            <RoundMap fillNumber={1} percentage={60}/>
            <RoundMap fillNumber={2} percentage={70}/>
            <RoundMap fillNumber={3} percentage={30}/>
            <RoundMap fillNumber={4} percentage={0}/>
            <RoundMap fillNumber={5} percentage={50}/>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    maintext: {
        fontWeight: 400,
        fontSize: 30,
        color: '#3C6DC8'
    },
    container:{
        marginLeft: 25,

    },
    innercontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    }
})