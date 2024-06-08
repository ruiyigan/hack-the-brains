import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AppLogo = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.appLogo}
      onPress={() => navigation.navigate("OnBoarding")}
    >
      <View style={[styles.barStatus, styles.borderPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
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
      <Image
        style={styles.hackTheBrainsLogo1}
        resizeMode="cover"
        source={require("../assets/hack-the-brains-logo-1.png")}
      />
      <Text style={[styles.agrismart, styles.agrismartTypo]}>AgriSmart</Text>
      <Text style={[styles.tapAnywhereTo, styles.agrismartTypo]}>
        Tap anywhere to begin
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  agrismartTypo: {
    color: Color.universalBlack,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.neutral1,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.neutral1,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 14,
    width: 24,
    height: 11,
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
    top: "50%",
    left: 0,
    fontSize: FontSize.inputValue_size,
    lineHeight: 24,
    color: Color.neutral1,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
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
    left: "50%",
    height: 44,
    width: 375,
  },
  hackTheBrainsLogo1: {
    top: 163,
    left: 65,
    width: 251,
    height: 267,
    position: "absolute",
  },
  agrismart: {
    top: 509,
    left: 80,
    fontSize: 36,
    lineHeight: 30,
    fontWeight: "700",
    width: 223,
    height: 41,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  tapAnywhereTo: {
    top: 656,
    left: 107,
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    width: 165,
    height: 47,
    fontWeight: "500",
    color: Color.universalBlack,
  },
  appLogo: {
    backgroundColor: Color.commonWhiteStatesMain,
    height: 812,
    overflow: "hidden",
    width: 375,
  },
});

export default AppLogo;
