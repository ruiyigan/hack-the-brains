import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const dummyPosts = [
  {
    id: 1,
    user: "Clark Tew",
    time: "45 mins ago",
    content:
      "Farmers are not facing climate change in isolation. Many join local and global networks to share knowledge, experiences and best practices for adapting to changing conditions.",
    likes: 0,
    avatar: require("../assets/ellipse-40.png"),
  },
  {
    id: 2,
    user: "Pyotr K",
    time: "2hrs ago",
    content:
      "Implementing practices like crop rotation and cover cropping helps sequester carbon, improve soil health and reduce water usage.",
    likes: 0,
    avatar: require("../assets/ellipse-20.png"),
  },
  {
    id: 3,
    user: "Anna Brown",
    time: "5hrs ago",
    content:
      "Consider vertical farming which can reduce land cleared for conventional farming.",
    likes: 0,
    avatar: require("../assets/ellipse-201.png"),
  },
];

const SocialForum = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [posts, setPosts] = React.useState(dummyPosts);
  const [newPost, setNewPost] = React.useState("");

  const addPost = () => {
    if (newPost.trim().length > 0) {
      const newPostObject = {
        id: posts.length + 1,
        user: "You",
        time: "Just now",
        content: newPost,
        likes: 0,
        avatar: require("../assets/avatars.png"), // Placeholder avatar for the new post
      };
      setPosts([newPostObject, ...posts]);
      setNewPost("");
    }
  };

  const likePost = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <View style={styles.socialForum}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("AidMainPage")}>
          <Image
            style={styles.icon}
            source={require("../assets/icon--backward.png")}
          />
        </Pressable>
        <Text style={styles.title}>Social Forum</Text>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <Image style={styles.avatar} source={item.avatar} />
              <View>
                <Text style={styles.username}>{item.user}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.postContent}>{item.content}</Text>
            <View style={styles.postFooter}>
              <Pressable onPress={() => likePost(item.id)}>
                <Text style={styles.likeButton}>Like ({item.likes})</Text>
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.postsList}
      />

      <View style={styles.newPostContainer}>
        <TextInput
          style={styles.newPostInput}
          placeholder="Share your post..."
          value={newPost}
          onChangeText={setNewPost}
        />
        <Pressable style={styles.postButton} onPress={addPost}>
          <Text style={styles.postButtonText}>Post</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialForum: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16, // Added padding to the top of the entire view
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 24, // Increased padding to move header down
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
  },
  postsList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
  post: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  postContent: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeButton: {
    color: "#007BFF",
  },
  newPostContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 16,
    marginTop: 16, // Added margin to move the new post container down
  },
  newPostInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  postButton: {
    backgroundColor: "#007BFF",
    borderRadius: 4,
    padding: 8,
  },
  postButtonText: {
    color: "#fff",
  },
});

export default SocialForum;
