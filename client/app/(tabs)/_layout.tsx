import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomHeader } from '@/components/CustomHeader';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{flex:1}}>
    <Tabs
      // screenOptions={{
      //   tabBarActiveTintColor: 'skyblue',
      //   header:({route})=><CustomHeader title={route.name}/>,
      //   tabBarShowLabel: false,
      // }}>
      screenOptions={({route}) => {
        const titles = {
          index: 'Home',
          roadmap: 'Learning Track',
          audio: 'Recordings',
          chat: 'Chat',
          account: 'Profile',
        };

        const title = titles[route.name as keyof typeof titles] || 'Default'; 

        return {
          header: () => <CustomHeader title={title} />, 
          headerShown: true, // Ensure header is shown
          tabBarShowLabel: false,
        };
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="roadmap"
        options={{
          title: 'Learning Track',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="audio"
        options={{
          title: 'Audio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="microphone" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="comment" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'User',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
    
    </SafeAreaView>
  );
}
