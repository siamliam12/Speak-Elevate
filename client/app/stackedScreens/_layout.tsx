import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomHeader } from '@/components/CustomHeader';
import RecordView from './recordView';

const Stack = createStackNavigator();

export default function StackLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={({ route }: { route: any }) => {
                        const title = route.params?.title || 'Default';

                        return {
                            header: () => <CustomHeader title={title} />,
                            headerShown: true, // Ensure header is shown
                        };
                    }}
                >
                    <Stack.Screen name="account" component={RecordView} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
