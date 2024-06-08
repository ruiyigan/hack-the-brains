import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const OnBoarding = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.onBoarding1, styles.iconLayout]}
      onPress={() => navigation.navigate("OnBoarding1")}
    >
      <View style={[styles.content, styles.aboutPosition]}>
        <View style={[styles.about, styles.aboutPosition]}>
          <Text
            style={[styles.irrigationControl, styles.irrigationControlTypo]}
          >
            Irrigation Control
          </Text>
          <Text style={[styles.efficientlyManageYour, styles.timeClr]}>
            Efficiently manage your farm's water usage with real-time sensor
            data and automated irrigation schedules. Save resources and ensure
            optimal growth conditions for your crops.
          </Text>
        </View>
        <View style={[styles.action, styles.groupPosition]}>
          <View style={styles.slider}>
            <View style={styles.dot} />
            <Image
              style={styles.dotIcon}
              resizeMode="cover"
              source={require("../assets/dot.png")}
            />
            <Image
              style={styles.dotIcon}
              resizeMode="cover"
              source={require("../assets/dot.png")}
            />
          </View>
          <Pressable
            style={[styles.groupParent, styles.groupPosition]}
            onPress={() => navigation.navigate("SignInPasswordHidden")}
          >
            <Image
              style={[styles.groupChild, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-1000003266.png")}
            />
            <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.barStatus, styles.capIconPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
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
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.hackTheBrainOnboard11}
        resizeMode="cover"
        source={require("../assets/hack-the-brain-onboard-1-1.png")}
      />
      <Pressable
        style={styles.iconBackward}
        onPress={() => navigation.navigate("AppLogo")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--backward.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  aboutPosition: {
    left: 24,
    position: "absolute",
  },
  irrigationControlTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  timeClr: {
    color: Color.neutral1,
    left: 0,
    fontWeight: "500",
  },
  groupPosition: {
    height: 60,
    left: 0,
    position: "absolute",
  },
  skipTypo: {
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  irrigationControl: {
    left: 3,
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    color: Color.additionalColorsBlack,
    width: 273,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    top: 0,
  },
  efficientlyManageYour: {
    top: 72,
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    height: 85,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
    width: 279,
  },
  about: {
    height: 157,
    width: 279,
    top: 0,
  },
  dot: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMediumspringgreen_100,
    height: 8,
    width: 24,
  },
  dotIcon: {
    width: 8,
    marginLeft: 8,
    height: 8,
  },
  slider: {
    top: 26,
    left: 271,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  groupChild: {
    width: 60,
    top: 0,
  },
  skip: {
    top: 18,
    left: 73,
    fontWeight: "700",
    color: Color.neutral2,
    position: "absolute",
  },
  groupParent: {
    width: 109,
    top: 0,
  },
  action: {
    top: 227,
    width: 327,
  },
  content: {
    top: 492,
    height: 287,
    width: 327,
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
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
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
    top: "50%",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    color: Color.neutral1,
    left: 0,
    fontWeight: "500",
  },
  timeStyle: {
    top: 12,
    left: 21,
    height: 21,
  },
  barStatus: {
    height: 44,
    left: 0,
    right: 0,
    top: 0,
  },
  hackTheBrainOnboard11: {
    top: 182,
    left: 61,
    width: 277,
    height: 277,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  iconBackward: {
    left: 30,
    top: 52,
    height: 24,
    width: 24,
    position: "absolute",
  },
  onBoarding1: {
    backgroundColor: Color.additionalColorsWhite,
    flex: 1,
    height: 812,
  },
});

export default OnBoarding;
