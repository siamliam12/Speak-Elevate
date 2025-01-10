import RecordingCard from "@/components/RecordingCard";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function audio() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <RecordingCard title={'Recording 1'} subtitle={'12th February, 3:00 pm'}/>
                <RecordingCard title={'Recording 2'} subtitle={'18th February, 3:00 pm'}/>
                <RecordingCard title={'Presentation'} subtitle={'19th February, 3:00 pm'}/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});