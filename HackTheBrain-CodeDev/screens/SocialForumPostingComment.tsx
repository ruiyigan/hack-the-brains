import * as React from "react";
import {
  Pressable,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SocialForumPostingComment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.socialForumPostingComment}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <TouchableHighlight
            style={styles.iconBackward}
            underlayColor="#fff"
            onPress={() => navigation.navigate("SocialForum")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon--backward.png")}
            />
          </TouchableHighlight>
          <Image
            style={styles.iconMore}
            contentFit="cover"
            source={require("../assets/icon--more.png")}
          />
          <Image
            style={styles.iconNotification}
            contentFit="cover"
            source={require("../assets/icon--notification.png")}
          />
          <Image
            style={styles.iconCheckDone}
            contentFit="cover"
            source={require("../assets/icon--check-done.png")}
          />
        </View>
        <View style={styles.frame2}>
          <Image
            style={styles.iconDescription}
            contentFit="cover"
            source={require("../assets/icon--description.png")}
          />
          <Text style={styles.description}>Description</Text>
        </View>
      </View>
      <View style={styles.frame3}>
        <Text style={styles.yourDatasSecurity}>
          Your data's security is our top priority. Controlly offers robust
          security measures to protect your information.
        </Text>
        <View style={styles.comment}>
          <View style={styles.frame4}>
            <Image
              style={styles.commentIcon}
              contentFit="cover"
              source={require("../assets/comment.png")}
            />
            <View style={styles.frame5}>
              <Pressable
                style={styles.tapToPostContainer}
                onPress={() => navigation.navigate("SocialForumPostedComment")}
              >
                <Text style={styles.tapToPost}>Tap to post</Text>
              </Pressable>
              <Pressable
                style={styles.iconamoonsendThin}
                onPress={() => navigation.navigate("SocialForumPostedComment")}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/iconamoonsendthin.png")}
                />
              </Pressable>
            </View>
          </View>
          <Text
            style={styles.farmersAreNot}
          >{`Farmers are not facing climate change in 
isolation. Many join local and global networks to
share knowledge, experiences and best 
practices for adapting to changing conditions. `}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -12,
    marginLeft: -163.5,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconBackward: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 24,
    height: 24,
  },
  iconMore: {
    position: "absolute",
    marginTop: -12,
    marginLeft: 139.5,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconNotification: {
    position: "absolute",
    marginTop: -12,
    marginLeft: 99.5,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconCheckDone: {
    position: "absolute",
    marginTop: -12,
    marginLeft: 59.5,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frame1: {
    position: "relative",
    top: 0,
    width: 327,
    height: 24,
    overflow: "hidden",
    marginLeft: 26,
  },
  iconDescription: {
    position: "relative",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  description: {
    position: "relative",
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textColor,
    textAlign: "left",
    marginLeft: 8,
  },
  frame2: {
    width: 124,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 24,
    marginTop: 41,
  },
  frame: {
    width: 353,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  yourDatasSecurity: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.neutral2,
    textAlign: "left",
    width: 325,
    height: 72,
    marginLeft: 24,
  },
  commentIcon: {
    position: "relative",
    borderRadius: Border.br_13xl,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  tapToPost: {
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#0095fb",
    textAlign: "left",
    width: 86,
    height: 14,
  },
  tapToPostContainer: {
    position: "relative",
  },
  icon1: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconamoonsendThin: {
    position: "relative",
    width: 24,
    height: 24,
  },
  frame5: {
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 186,
  },
  frame4: {
    width: 336,
    height: 40,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  farmersAreNot: {
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textColor,
    textAlign: "left",
    width: 343,
    height: 80,
    marginLeft: 8,
    marginTop: 19,
  },
  comment: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    backgroundColor: Color.universalWhite,
    width: 380,
    height: 524,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_5xs,
    marginTop: 41,
  },
  frame3: {
    width: 380,
    height: 637,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 16,
  },
  socialForumPostingComment: {
    position: "relative",
    backgroundColor: Color.universalWhite,
    flex: 1,
    width: "100%",
    height: 851,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 51,
  },
});

export default SocialForumPostingComment;
