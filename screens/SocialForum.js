import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SocialForum = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.socialForum}>
      <View style={styles.barStatus}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Pressable
        style={[styles.iconBackward, styles.iconLayout]}
        onPress={() => navigation.navigate("AidMainPage")}
      >
        <Image
          style={[styles.icon, styles.iconSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/icon--backward.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconDescription, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon--description.png")}
      />
      <View style={[styles.iconImage, styles.iconSpaceBlock]}>
        <View style={[styles.vector, styles.borderBorder]} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
      </View>
      <Image
        style={[styles.iconComment, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon--comment.png")}
      />
      <Image
        style={[styles.iconMore, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon--more.png")}
      />
      <Image
        style={[styles.iconNotification, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon--notification.png")}
      />
      <Image
        style={[styles.iconCheckDone, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon--check-done.png")}
      />
      <Text style={[styles.description, styles.imageTypo]}>Description</Text>
      <Text style={[styles.image, styles.imageTypo]}>{`Image `}</Text>
      <Text style={[styles.comment, styles.imageTypo]}>Comment</Text>
      <Text style={styles.yourDatasSecurity}>
        Your data's security is our top priority. Controlly offers robust
        security measures to protect your information.
      </Text>
      <Image
        style={[styles.socialForumChild, styles.socialLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Image
        style={[styles.socialForumItem, styles.socialLayout]}
        resizeMode="cover"
        source={require("../assets/frame-77.png")}
      />
      <View style={[styles.comment1, styles.commentLayout]}>
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
          style={styles.commentChild}
          resizeMode="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Text style={styles.pyotrKodzhebash}>Pyotr Kodzhebash</Text>
      </View>
      <View style={[styles.comment2, styles.commentLayout]}>
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
          style={styles.commentChild}
          resizeMode="cover"
          source={require("../assets/ellipse-201.png")}
        />
        <Text style={styles.pyotrKodzhebash}>Anna Brown</Text>
      </View>
      <View style={styles.comment3}>
        <Image
          style={[styles.commentIcon, styles.commentIconLayout]}
          resizeMode="cover"
          source={require("../assets/comment.png")}
        />
        <Text style={styles.postYourComment}>Post your comment</Text>
      </View>
      <View style={[styles.barHomeIndicator, styles.commentIconLayout]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderBorder: {
    borderColor: Color.neutral1,
    borderStyle: "solid",
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.neutral1,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconSpaceBlock: {
    marginLeft: -163.5,
    overflow: "hidden",
  },
  imageTypo: {
    textAlign: "left",
    left: 56,
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    position: "absolute",
  },
  socialLayout: {
    height: 80,
    width: 120,
    borderRadius: Border.br_base,
    top: 300,
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
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    position: "absolute",
  },
  commentIconLayout: {
    height: 40,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
  },
  battery: {
    top: 17,
    right: 14,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -11.5,
    textAlign: "center",
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    left: 0,
    top: "50%",
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 12,
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  barStatus: {
    marginLeft: -187.5,
    width: 375,
    height: 44,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    marginTop: -346,
    width: "100%",
  },
  iconBackward: {
    top: "50%",
    height: 24,
    left: "50%",
  },
  iconDescription: {
    left: 24,
    top: 116,
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
    borderWidth: 1.5,
  },
  vectorIcon: {
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconImage: {
    marginTop: -146,
    height: 24,
    width: 24,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  iconComment: {
    top: 412,
    left: 24,
    overflow: "hidden",
  },
  iconMore: {
    marginLeft: 139.5,
    marginTop: -346,
    top: "50%",
    height: 24,
    left: "50%",
    overflow: "hidden",
  },
  iconNotification: {
    marginLeft: 99.5,
    marginTop: -346,
    top: "50%",
    height: 24,
    left: "50%",
    overflow: "hidden",
  },
  iconCheckDone: {
    marginLeft: 59.5,
    marginTop: -346,
    top: "50%",
    height: 24,
    left: "50%",
    overflow: "hidden",
  },
  description: {
    top: 116,
  },
  image: {
    top: 260,
  },
  comment: {
    top: 412,
  },
  yourDatasSecurity: {
    top: 156,
    width: 325,
    color: Color.neutral2,
    textAlign: "left",
    left: 24,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
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
    color: "#0b0b0c",
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  pyotrKodzhebash: {
    left: 64,
    color: Color.neutral2,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    top: 0,
    position: "absolute",
  },
  comment1: {
    top: 460,
  },
  considerVerticalFarming: {
    color: Color.neutral1,
  },
  comment2: {
    top: 585,
  },
  commentIcon: {
    top: 8,
    borderRadius: Border.br_13xl,
    width: 40,
    left: 24,
    overflow: "hidden",
  },
  postYourComment: {
    top: 18,
    left: 72,
    color: Color.blue,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    position: "absolute",
  },
  comment3: {
    bottom: 40,
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
    right: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
  },
  barHomeIndicator: {
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  socialForum: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default SocialForum;
