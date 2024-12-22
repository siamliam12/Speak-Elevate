import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface RoundMapProps {
    fillNumber:number;
    percentage:number;
}
export const RoundMap = ({fillNumber,percentage}:RoundMapProps) => {
    // const percentage = 66;
    return (
        <View style={styles.circle}>
            <AnimatedCircularProgress
            size={100}
            width={3}
            fill={percentage}
            tintColor="#00e0ff"
            backgroundColor="#fff">
            {
                (fill) => (
                <Text>
                    {fillNumber}
                </Text>
                )
            }
            </AnimatedCircularProgress>
        </View>
    )
}
const styles = StyleSheet.create({
    circle: {
        backgroundColor: '#ADCEF8',
        width:100,
        borderRadius:50
    }
})