import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SocialForumPostedComment = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.socialForumPostedComment}>
      <Image
        style={[styles.iconDescription, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon--description.png")}
      />
      <View style={[styles.iconImage, styles.iconLayout1]}>
        <View style={styles.vector} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <Image
        style={[styles.iconComment, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon--comment.png")}
      />
      <View style={[styles.iconMoreParent, styles.commentPosition]}>
        <Image
          style={[styles.iconMore, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--more.png")}
        />
        <TouchableHighlight
          style={[styles.iconBackward, styles.iconPosition]}
          underlayColor="#fff"
          onPress={() => navigation.navigate("AidMainPage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--backward.png")}
          />
        </TouchableHighlight>
        <Image
          style={[styles.iconNotification, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--notification.png")}
        />
        <Image
          style={[styles.iconCheckDone, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--check-done.png")}
        />
      </View>
      <Text style={[styles.description, styles.imageTypo]}>Description</Text>
      <Text style={[styles.image, styles.imageTypo]}>{`Image `}</Text>
      <Text style={[styles.forum, styles.imageTypo]}>Forum</Text>
      <Pressable
        style={[styles.comment, styles.commentPosition]}
        onPress={() => navigation.navigate("SocialForumPostingComment")}
      >
        <Image
          style={styles.commentIcon}
          contentFit="cover"
          source={require("../assets/comment.png")}
        />
        <Text style={styles.tapToPost}>Tap to post your comment</Text>
      </Pressable>
      <Text style={[styles.yourDatasSecurity, styles.pyotrKTypo]}>
        Your data's security is our top priority. Controlly offers robust
        security measures to protect your information.
      </Text>
      <Image
        style={[styles.socialForumPostedCommentChild, styles.socialLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Image
        style={[styles.socialForumPostedCommentItem, styles.socialLayout]}
        contentFit="cover"
        source={require("../assets/frame-77.png")}
      />
      <View style={[styles.comment1, styles.commentLayout]}>
        <Text
          style={[styles.implementingPracticesLike, styles.farmersAreNotTypo]}
        >
           Implementing practices like crop rotation and cover cropping helps
          sequester carbon, improve soil health and reduce water usage.
        </Text>
        <View style={styles.divider} />
        <Image
          style={[styles.commentChild, styles.commentPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Text style={[styles.pyotrK, styles.pyotrKTypo]}>
          Pyotr K - 2hrs ago
        </Text>
        <Text style={[styles.hackerbrain1Just, styles.pyotrKTypo]}>
          HackerBrain1 - Just now
        </Text>
      </View>
      <View style={[styles.comment2, styles.commentLayout]}>
        <Text
          style={[styles.considerVerticalFarming, styles.farmersAreNotTypo]}
        >
          Consider vertical farming which can reduce land cleared for
          conventional farming.
        </Text>
        <View style={styles.divider} />
        <Image
          style={[styles.commentChild, styles.commentPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-201.png")}
        />
        <Text style={[styles.pyotrK, styles.pyotrKTypo]}>
          Anna Brown - 5hrs ago
        </Text>
      </View>
      <Text
        style={[styles.farmersAreNot, styles.farmersAreNotTypo]}
      >{`Farmers are not facing climate change in isolation. Many join local and global networks to share knowledge, experiences and best 
practices for adapting to changing conditions. `}</Text>
      <Image
        style={[styles.imageIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  commentPosition: {
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    bottom: "0%",
    top: "71.43%",
    width: "6.4%",
    height: "28.57%",
    position: "absolute",
  },
  imageTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    left: 56,
    color: Color.textColor,
    position: "absolute",
  },
  pyotrKTypo: {
    color: Color.neutral2,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    position: "absolute",
  },
  socialLayout: {
    height: 80,
    width: 120,
    borderRadius: Border.br_base,
    top: 280,
    position: "absolute",
  },
  commentLayout: {
    height: 109,
    width: 327,
    left: 24,
    position: "absolute",
  },
  farmersAreNotTypo: {
    width: 263,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconDescription: {
    overflow: "hidden",
    left: 24,
    top: 116,
  },
  vector: {
    height: "22.92%",
    width: "22.92%",
    top: "26.25%",
    right: "25.83%",
    bottom: "50.83%",
    left: "51.25%",
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.textColor,
    borderWidth: 1.5,
    position: "absolute",
  },
  vectorIcon: {
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    position: "absolute",
  },
  iconImage: {
    marginTop: -128.5,
    marginLeft: -163.5,
    top: "50%",
    left: "50%",
    overflow: "hidden",
  },
  iconComment: {
    top: 433,
    overflow: "hidden",
    left: 24,
  },
  iconMore: {
    right: "6.4%",
    left: "87.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconBackward: {
    left: "6.4%",
    right: "87.2%",
  },
  iconNotification: {
    right: "17.07%",
    left: "76.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconCheckDone: {
    right: "27.73%",
    left: "65.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconMoreParent: {
    width: 375,
    height: 84,
    top: 0,
  },
  description: {
    top: 116,
  },
  image: {
    top: 240,
  },
  forum: {
    top: 433,
  },
  commentIcon: {
    top: 8,
    borderRadius: Border.br_13xl,
    width: 40,
    height: 40,
    overflow: "hidden",
    left: 24,
    position: "absolute",
  },
  tapToPost: {
    top: 18,
    left: 72,
    color: Color.blue,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  comment: {
    right: -5,
    bottom: 429,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 56,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  yourDatasSecurity: {
    top: 156,
    width: 325,
    left: 24,
  },
  socialForumPostedCommentChild: {
    left: 24,
  },
  socialForumPostedCommentItem: {
    left: 160,
    overflow: "hidden",
  },
  implementingPracticesLike: {
    color: Color.colorGray_300,
    left: 64,
    top: 32,
    width: 263,
  },
  divider: {
    top: 108,
    backgroundColor: Color.neutral3,
    height: 1,
    width: 327,
    left: 0,
    position: "absolute",
  },
  commentChild: {
    width: 48,
    height: 48,
    top: 0,
  },
  pyotrK: {
    left: 64,
    top: 0,
  },
  hackerbrain1Just: {
    top: -167,
    left: 64,
  },
  comment1: {
    top: 637,
  },
  considerVerticalFarming: {
    left: 64,
    top: 32,
    width: 263,
    color: Color.textColor,
  },
  comment2: {
    top: 752,
  },
  farmersAreNot: {
    top: 506,
    left: 88,
    color: Color.textColor,
  },
  imageIcon: {
    height: "7.51%",
    width: "15.19%",
    top: "56.46%",
    right: "80.92%",
    bottom: "36.03%",
    left: "3.89%",
    position: "absolute",
  },
  socialForumPostedComment: {
    flex: 1,
    height: 851,
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default SocialForumPostedComment;
