import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const OnBoarding1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.onBoarding3}
      onPress={() => navigation.navigate("OnBoarding2")}
    >
      <View style={styles.bxChevronRight31Wrapper}>
        <View style={styles.bxChevronRight31} />
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.content}>
        <View style={styles.about}>
          <Text style={styles.socialForum}>Social Forum</Text>
          <Text style={styles.connectWithFellow}>
            Connect with fellow farmers to share best practices, discuss
            challenges, and collaborate on solutions. Join a community dedicated
            to sustainable and efficient farming.
          </Text>
        </View>
        <View style={[styles.action, styles.groupPosition]}>
          <View style={styles.slider}>
            <View style={styles.dot} />
            <Image
              style={styles.dotIcon}
              contentFit="cover"
              source={require("../assets/dot.png")}
            />
            <Image
              style={styles.dotIcon}
              contentFit="cover"
              source={require("../assets/dot.png")}
            />
          </View>
          <Pressable
            style={[styles.groupParent, styles.groupPosition]}
            onPress={() => navigation.navigate("OnBoarding2")}
          >
            <Image
              style={[styles.groupChild, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/group-1000003266.png")}
            />
            <Text style={styles.skip}>Skip</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.hackTheBrainOnboard31}
        contentFit="cover"
        source={require("../assets/hack-the-brain-onboard-3-1.png")}
      />
      <Text style={[styles.tapAnywhereFor, styles.tapTypo]}>
        Tap anywhere for next
      </Text>
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.iconsFlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/signal.png")}
            />
            <Text style={styles.text}>9:30</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.pressable, styles.iconsFlexBox]}
        onPress={() => navigation.navigate("OnBoarding")}
      >
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.tapAnywhereFor1, styles.frameFlexBox]}>
          Tap anywhere for next
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    height: 60,
    left: 0,
    position: "absolute",
  },
  tapTypo: {
    height: 21,
    width: 165,
    fontSize: FontSize.size_2xs,
    color: Color.neutral2,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bxChevronRight31: {
    left: 0,
    top: 0,
    height: 28,
    width: 28,
    position: "absolute",
    overflow: "hidden",
  },
  bxChevronRight31Wrapper: {
    top: 735,
    left: 40,
    height: 28,
    width: 28,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.64%",
    width: "2.21%",
    top: "91.42%",
    right: "84.24%",
    bottom: "6.94%",
    left: "13.55%",
  },
  socialForum: {
    left: 3,
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    color: Color.additionalColorsBlack,
    width: 273,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  connectWithFellow: {
    top: 72,
    fontSize: FontSize.typographyBody2_size,
    color: Color.textColor,
    height: 85,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    width: 279,
    left: 0,
    position: "absolute",
  },
  about: {
    left: 22,
    height: 157,
    width: 279,
    top: 0,
    position: "absolute",
  },
  dot: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMediumspringgreen_100,
    width: 24,
    height: 8,
  },
  dotIcon: {
    width: 8,
    marginLeft: 8,
    height: 8,
  },
  slider: {
    top: 26,
    left: 275,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupChild: {
    width: 60,
    top: 0,
  },
  skip: {
    top: 18,
    left: 74,
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.neutral2,
    textAlign: "center",
    position: "absolute",
  },
  groupParent: {
    width: 110,
    top: 0,
  },
  action: {
    top: 224,
    width: 331,
  },
  content: {
    top: 435,
    left: 24,
    height: 284,
    width: 331,
    position: "absolute",
  },
  hackTheBrainOnboard31: {
    top: 148,
    left: 49,
    width: 274,
    height: 274,
    position: "absolute",
  },
  tapAnywhereFor: {
    top: 768,
    left: 117,
    position: "absolute",
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
    textAlign: "left",
    position: "absolute",
  },
  top: {
    width: 340,
    height: 17,
  },
  icons: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  statusBar: {
    left: -19,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    width: 10,
    height: 19,
  },
  pressable: {
    top: 42,
    left: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 56,
    height: 35,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_5xs,
    minWidth: 36,
    position: "absolute",
  },
  tapAnywhereFor1: {
    display: "flex",
    height: 21,
    width: 165,
    fontSize: FontSize.size_2xs,
    color: Color.neutral2,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frame: {
    top: 704,
    left: 33,
    width: 256,
    position: "absolute",
    overflow: "hidden",
  },
  onBoarding3: {
    backgroundColor: Color.universalWhite,
    flex: 1,
    width: "100%",
    height: 733,
    overflow: "hidden",
  },
});

export default OnBoarding1;
