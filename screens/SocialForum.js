import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SocialForum = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.socialForum, styles.comment2Bg]}>
      <Pressable
        style={[styles.iconBackward, styles.iconLayout1]}
        onPress={() => navigation.navigate("AidMainPage")}
      >
        <Image
          style={[styles.icon, styles.iconSpaceBlock]}
          contentFit="cover"
          source={require("../assets/icon--backward.png")}
        />
      </Pressable>
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
          source={require("../assets/vector16.png")}
        />
      </View>
      <Image
        style={[styles.iconComment, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon--comment.png")}
      />
      <Image
        style={[styles.iconMore, styles.iconSpaceBlock]}
        contentFit="cover"
        source={require("../assets/icon--more.png")}
      />
      <Image
        style={[styles.iconNotification, styles.iconSpaceBlock]}
        contentFit="cover"
        source={require("../assets/icon--notification.png")}
      />
      <Image
        style={[styles.iconCheckDone, styles.iconSpaceBlock]}
        contentFit="cover"
        source={require("../assets/icon--check-done.png")}
      />
      <Text style={[styles.description, styles.textFlexBox]}>Description</Text>
      <Text style={[styles.image, styles.textFlexBox]}>{`Image `}</Text>
      <Text style={[styles.forum, styles.textFlexBox]}>Forum</Text>
      <Text style={styles.yourDatasSecurity}>
        Your data's security is our top priority. Controlly offers robust
        security measures to protect your information.
      </Text>
      <Image
        style={[styles.socialForumChild, styles.socialLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Image
        style={[styles.socialForumItem, styles.socialLayout]}
        contentFit="cover"
        source={require("../assets/frame-77.png")}
      />
      <View style={[styles.comment, styles.commentLayout]}>
        <Text
          style={[
            styles.implementingPracticesLike,
            styles.considerVerticalFarmingTypo,
          ]}
        >
           Implementing practices like crop rotation and cover cropping helps
          sequester carbon, improve soil health and reduce water usage.
        </Text>
        <View style={styles.divider} />
        <Image
          style={[styles.commentChild, styles.commentChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Text style={[styles.pyotrKodzhebash, styles.commentChildPosition]}>
          Pyotr Kodzhebash - 2hrs ago
        </Text>
      </View>
      <View style={[styles.comment1, styles.commentLayout]}>
        <Text
          style={[
            styles.considerVerticalFarming,
            styles.considerVerticalFarmingTypo,
          ]}
        >
          Consider vertical farming which can reduce land cleared for
          conventional farming.
        </Text>
        <View style={styles.divider} />
        <Image
          style={[styles.commentChild, styles.commentChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-201.png")}
        />
        <Text style={[styles.pyotrKodzhebash, styles.commentChildPosition]}>
          Anna Brown - 5hrs ago
        </Text>
      </View>
      <Pressable
        style={[styles.comment2, styles.comment2Bg]}
        onPress={() => navigation.navigate("SocialForumPostingComment")}
      >
        <Image
          style={styles.commentIcon}
          contentFit="cover"
          source={require("../assets/comment.png")}
        />
        <Text style={styles.tapToPost}>Tap to post your comment</Text>
      </Pressable>
      <View style={styles.statusBar}>
        <View style={styles.icons}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.iconLayout]}
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
  comment2Bg: {
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconSpaceBlock: {
    marginTop: -315.5,
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
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
  considerVerticalFarmingTypo: {
    width: 263,
    top: 32,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  commentChildPosition: {
    top: 0,
    position: "absolute",
  },
  icon: {
    marginLeft: -164,
    height: "100%",
    width: "100%",
  },
  iconBackward: {
    top: "50%",
    left: "50%",
    width: 24,
  },
  iconDescription: {
    left: 24,
    top: 96,
    overflow: "hidden",
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
  },
  iconImage: {
    marginTop: -127.5,
    marginLeft: -166,
    top: "50%",
    left: "50%",
    width: 24,
    overflow: "hidden",
  },
  iconComment: {
    top: 442,
    left: 24,
    overflow: "hidden",
  },
  iconMore: {
    marginLeft: 139,
    height: 24,
    width: 24,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  iconNotification: {
    marginLeft: 99,
    height: 24,
    width: 24,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  iconCheckDone: {
    marginLeft: 59,
    height: 24,
    width: 24,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  description: {
    color: Color.textColor,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    left: 56,
    textAlign: "left",
    top: 96,
  },
  image: {
    top: 240,
    color: Color.textColor,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    left: 56,
    textAlign: "left",
  },
  forum: {
    color: Color.textColor,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    left: 56,
    textAlign: "left",
    top: 442,
  },
  yourDatasSecurity: {
    top: 136,
    width: 325,
    color: Color.neutral2,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    left: 24,
    position: "absolute",
  },
  socialForumChild: {
    left: 24,
  },
  socialForumItem: {
    left: 160,
    overflow: "hidden",
  },
  implementingPracticesLike: {
    color: Color.colorGray_200,
  },
  divider: {
    top: 108,
    backgroundColor: Color.neutral3,
    height: 1,
    left: 0,
    width: 327,
    position: "absolute",
  },
  commentChild: {
    width: 48,
    height: 48,
    left: 0,
  },
  pyotrKodzhebash: {
    left: 64,
    top: 0,
    color: Color.neutral2,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  comment: {
    top: 490,
  },
  considerVerticalFarming: {
    color: Color.textColor,
  },
  comment1: {
    top: 615,
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
  comment2: {
    right: 0,
    bottom: 310,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 56,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
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
    top: 1,
    left: -17,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    position: "absolute",
    overflow: "hidden",
  },
  socialForum: {
    flex: 1,
    height: 735,
    overflow: "hidden",
    width: "100%",
  },
});

export default SocialForum;
