import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import StoryList from '../components/StoryList';
import Feed from '../components/Feed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoryList />
        <Feed />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});