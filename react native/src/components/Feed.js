// src/components/Feed.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, AntDesign } from 'react-native-vector-icons'; // Importing icons

// Sample Data for 10 Feed Posts
const posts = [
  {
    id: 1,
    username: 'john_doe',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    postImage: 'https://placeimg.com/640/480/tech', 
    likes: 120,
    comments: 35,
    shares: 10,
  },
  {
    id: 2,
    username: 'jane_doe',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg', 
    postImage: 'https://placeimg.com/640/480/nature', 
    likes: 200,
    comments: 50,
    shares: 12,
  },
  {
    id: 3,
    username: 'michael_johnson',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg', 
    postImage: 'https://placeimg.com/640/480/people', 
    likes: 150,
    comments: 30,
    shares: 9,
  },
  {
    id: 4,
    username: 'sarah_smith',
    profilePic: 'https://randomuser.me/api/portraits/women/4.jpg', 
    postImage: 'https://placeimg.com/640/480/animals', 
    likes: 180,
    comments: 40,
    shares: 15,
  },
  {
    id: 5,
    username: 'david_williams',
    profilePic: 'https://randomuser.me/api/portraits/men/5.jpg', 
    postImage: 'https://placeimg.com/640/480/abstract', 
    likes: 220,
    comments: 70,
    shares: 20,
  },
  {
    id: 6,
    username: 'lisa_miller',
    profilePic: 'https://randomuser.me/api/portraits/women/6.jpg', 
    postImage: 'https://placeimg.com/640/480/city', 
    likes: 250,
    comments: 90,
    shares: 25,
  },
  {
    id: 7,
    username: 'charlie_brown',
    profilePic: 'https://randomuser.me/api/portraits/men/7.jpg', 
    postImage: 'https://placeimg.com/640/480/fashion', 
    likes: 300,
    comments: 120,
    shares: 30,
  },
  {
    id: 8,
    username: 'emma_jones',
    profilePic: 'https://randomuser.me/api/portraits/women/8.jpg', 
    postImage: 'https://placeimg.com/640/480/food', 
    likes: 320,
    comments: 110,
    shares: 35,
  },
  {
    id: 9,
    username: 'robert_taylor',
    profilePic: 'https://randomuser.me/api/portraits/men/9.jpg', 
    postImage: 'https://placeimg.com/640/480/people', 
    likes: 270,
    comments: 80,
    shares: 40,
  },
  {
    id: 10,
    username: 'olivia_wilson',
    profilePic: 'https://randomuser.me/api/portraits/women/10.jpg', 
    postImage: 'https://placeimg.com/640/480/tech', 
    likes: 400,
    comments: 140,
    shares: 50,
  },
];

export default function Feed() {
  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <Image source={{ uri: post.profilePic }} style={styles.profilePic} />
            <Text style={styles.username}>{post.username}</Text>
          </View>

          {/* Post Image */}
          <Image source={{ uri: post.postImage }} style={styles.postImage} />

          {/* Actions Section */}
          <View style={styles.actions}>
            {/* Like Button */}
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="heart-outline" size={30} color="#000" />
            </TouchableOpacity>

            {/* Comment Button */}
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chatbubble-outline" size={30} color="#000" />
            </TouchableOpacity>

            {/* Share Button */}
            <TouchableOpacity style={styles.iconButton}>
              <AntDesign name="sharealt" size={30} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Post Info */}
          <View style={styles.postInfo}>
            <Text style={styles.postText}>
              Liked by {post.likes} people and others...
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postInfo: {
    padding: 10,
  },
  postText: {
    fontSize: 14,
    color: '#555',
  },
});
