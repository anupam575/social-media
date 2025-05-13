
// src/components/StoryList.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StoryList() {
  const navigation = useNavigation();

  const stories = Array.from({ length: 10 }, (_, i) => `User ${i + 1}`);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {stories.map((story, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('Story')} style={styles.circle}>
          <Text style={styles.text}>{story}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: '#f9f9f9',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
  },
});
