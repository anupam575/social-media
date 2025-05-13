// src/components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import vector icons

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Tripathi</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate('Story')}>
          <Ionicons name="camera-outline" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <Ionicons name="mail-outline" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    height: 60,
    marginTop: 30,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    marginLeft: 15,
    color: '#000',
  },
});
