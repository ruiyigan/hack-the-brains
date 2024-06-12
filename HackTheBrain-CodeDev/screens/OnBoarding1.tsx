import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const OnBoarding1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.onBoarding3}
      onPress={() => navigation.navigate("OnBoarding")}
    >
      <View style={[styles.bxChevronRight31Wrapper, styles.chevronLayout]}>
        <View style={[styles.bxChevronRight31, styles.chevronLayout]} />
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <View style={styles.content}>
        <View style={styles.about}>
          <Text style={[styles.socialForum, styles.socialForumFlexBox]}>
            Social Forum
          </Text>
          <Text style={[styles.connectWithFellow, styles.tapAnywhereForTypo]}>
            Connect with fellow farmers to share best practices, discuss
            challenges, and collaborate on solutions.
          </Text>
        </View>
        <View style={[styles.action, styles.groupPosition]}>
          <View style={[styles.slider, styles.sliderFlexBox]}>
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
            onPress={() => navigation.navigate("OnBoarding")}
          >
            <Image
              style={[styles.groupChild, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/group-1000003266.png")}
            />
            <Text style={[styles.skip, styles.skipClr]}>Skip</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.hackTheBrainOnboard31}
        contentFit="cover"
        source={require("../assets/hack-the-brain-onboard-3-1.png")}
      />
      <Text style={[styles.tapAnywhereFor, styles.skipClr]}>
        Tap anywhere for next
      </Text>
      <Pressable
        style={[styles.pressable, styles.sliderFlexBox]}
        onPress={() => navigation.navigate("OnBoarding2")}
      >
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chevronLayout: {
    height: 28,
    width: 28,
    position: "absolute",
  },
  socialForumFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  tapAnywhereForTypo: {
    lineHeight: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupPosition: {
    height: 60,
    left: 0,
    position: "absolute",
  },
  sliderFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  skipClr: {
    color: Color.neutral2,
    textAlign: "center",
    position: "absolute",
  },
  bxChevronRight31: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  bxChevronRight31Wrapper: {
    top: 735,
    left: 40,
  },
  vectorIcon: {
    height: "1.65%",
    width: "2.21%",
    top: "91.42%",
    right: "84.22%",
    bottom: "6.93%",
    left: "13.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  socialForum: {
    left: 3,
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    color: Color.additionalColorsBlack,
    width: 273,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    top: 0,
  },
  connectWithFellow: {
    top: 72,
    fontSize: FontSize.typographyBody2_size,
    color: Color.textColor,
    height: 85,
    textAlign: "center",
    position: "absolute",
    width: 279,
    left: 0,
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
    left: 285,
    justifyContent: "center",
  },
  groupChild: {
    width: 60,
    top: 0,
  },
  skip: {
    top: 18,
    left: 77,
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  groupParent: {
    width: 113,
    top: 0,
  },
  action: {
    top: 224,
    width: 341,
  },
  content: {
    top: 435,
    left: 24,
    height: 284,
    width: 341,
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
    left: 120,
    fontSize: FontSize.size_2xs,
    width: 165,
    height: 21,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
  },
  onBoarding3: {
    backgroundColor: Color.universalWhite,
    flex: 1,
    width: "100%",
    height: 851,
    overflow: "hidden",
  },
});

export default OnBoarding1;
