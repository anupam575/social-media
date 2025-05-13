import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import UploadScreen from '../screens/UploadScreen';
import ReelScreen from '../screens/ReelScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
import NotificationScreen from '../screens/NotificationScreen';
import StoryScreen from '../screens/StoryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'HomeTab') {
            return <Ionicons name="home-outline" size={size} color={color} />;
          } else if (route.name === 'Search') {
            return <Ionicons name="search-outline" size={size} color={color} />;
          } else if (route.name === 'Upload') {
            return <MaterialCommunityIcons name="plus-box-outline" size={size} color={color} />;
          } else if (route.name === 'Reels') {
            return <Ionicons name="play-circle-outline" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Reels" component={ReelScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Story" component={StoryScreen} />
    </Stack.Navigator>
  );
}
