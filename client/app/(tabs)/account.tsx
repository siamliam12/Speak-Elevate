import {View,Text, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account(){
    return(
        <SafeAreaView>
            <ScrollView>
                <Text>Account page</Text>
            </ScrollView>
        </SafeAreaView>
    )
}