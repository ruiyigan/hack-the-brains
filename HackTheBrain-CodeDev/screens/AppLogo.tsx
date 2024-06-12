import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AppLogo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.appLogo}
      onPress={() => navigation.navigate("OnBoarding3")}
    >
      <Image
        style={styles.hackTheBrainsLogo1}
        contentFit="cover"
        source={require("../assets/hack-the-brains-logo-1.png")}
      />
      <Text style={[styles.tapAnywhereTo, styles.agrismartFlexBox]}>
        Tap anywhere to begin
      </Text>
      <Text style={[styles.agrismart, styles.agrismartFlexBox]}>AgriSmart</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  agrismartFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  hackTheBrainsLogo1: {
    top: 163,
    left: 65,
    width: 251,
    height: 267,
    position: "absolute",
  },
  tapAnywhereTo: {
    top: 656,
    left: 107,
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.neutral2,
    width: 165,
    height: 21,
  },
  agrismart: {
    top: 445,
    left: 51,
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.additionalColorsBlack,
    width: 273,
  },
  appLogo: {
    backgroundColor: Color.universalWhite,
    flex: 1,
    width: "100%",
    height: 851,
    overflow: "hidden",
  },
});

export default AppLogo;
