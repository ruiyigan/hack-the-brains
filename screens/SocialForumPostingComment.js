import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SocialForumPostingComment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.socialForumPostingComment}>
      <Pressable
        style={[styles.iconBackward, styles.iconLayout1]}
        onPress={() => navigation.navigate("SocialForum")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--backward.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconDescription, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon--description.png")}
      />
      <Image
        style={[styles.iconMore, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon--more.png")}
      />
      <Image
        style={[styles.iconNotification, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon--notification.png")}
      />
      <Image
        style={[styles.iconCheckDone, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon--check-done.png")}
      />
      <Text style={[styles.description, styles.textFlexBox]}>Description</Text>
      <Text style={[styles.yourDatasSecurity, styles.textFlexBox]}>
        Your data's security is our top priority. Controlly offers robust
        security measures to protect your information.
      </Text>
      <View style={styles.comment}>
        <Image
          style={styles.commentIcon}
          contentFit="cover"
          source={require("../assets/comment.png")}
        />
        <Text
          style={[styles.farmersAreNot, styles.tapToPostTypo]}
        >{`Farmers are not facing climate change in 
isolation. Many join local and global networks to
share knowledge, experiences and best 
practices for adapting to changing conditions. `}</Text>
        <Pressable
          style={[styles.iconamoonsendThin, styles.iconamoonsendThinPosition]}
          onPress={() => navigation.navigate("SocialForumPostedComment")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/iconamoonsendthin.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.tapToPostContainer, styles.iconamoonsendThinPosition]}
          onPress={() => navigation.navigate("SocialForumPostedComment")}
        >
          <Text style={[styles.tapToPost, styles.tapToPostTypo]}>
            Tap to post
          </Text>
        </Pressable>
      </View>
      <View style={styles.statusBar}>
        <View style={styles.icons}>
          <View style={styles.top}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("../assets/signal5.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>9:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  tapToPostTypo: {
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconamoonsendThinPosition: {
    top: 16,
    position: "absolute",
  },
  icon: {
    marginLeft: -164,
    marginTop: -315.5,
  },
  iconBackward: {
    top: "50%",
    left: "50%",
    width: 24,
    position: "absolute",
  },
  iconDescription: {
    left: 24,
    top: 116,
    position: "absolute",
    overflow: "hidden",
  },
  iconMore: {
    marginLeft: 139,
    marginTop: -315.5,
    top: "50%",
    left: "50%",
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconNotification: {
    marginLeft: 99,
    marginTop: -315.5,
    top: "50%",
    left: "50%",
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconCheckDone: {
    marginLeft: 59,
    marginTop: -315.5,
    top: "50%",
    left: "50%",
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  description: {
    left: 56,
    color: Color.textColor,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    top: 116,
  },
  yourDatasSecurity: {
    top: 156,
    color: Color.neutral2,
    width: 325,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    left: 24,
  },
  commentIcon: {
    top: 8,
    borderRadius: Border.br_13xl,
    width: 40,
    height: 40,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  farmersAreNot: {
    top: 67,
    left: 32,
    width: 343,
    color: Color.textColor,
    position: "absolute",
  },
  iconamoonsendThin: {
    left: 336,
    height: 24,
    width: 24,
  },
  tapToPost: {
    color: "#0095fb",
    width: 86,
    height: 14,
  },
  tapToPostContainer: {
    left: 250,
  },
  comment: {
    right: 0,
    bottom: -60,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 524,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: "5.88%",
    left: "0%",
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
  },
  top: {
    width: 340,
    height: 17,
  },
  icons: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  statusBar: {
    top: 0,
    left: -18,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    position: "absolute",
    overflow: "hidden",
  },
  socialForumPostingComment: {
    flex: 1,
    height: 733,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default SocialForumPostingComment;
