import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f7f9fc',
        },
        headerTintColor: '#0066cc',
        tabBarActiveTintColor: '#0066cc',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hello World App',
          tabBarLabel: 'Home',
        }}
      />
    </Tabs>
  );
}