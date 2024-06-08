import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const OnBoarding1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.onBoarding2, styles.iconLayout]}
      onPress={() => navigation.navigate("OnBoarding2")}
    >
      <View style={[styles.bxChevronRight31Wrapper, styles.chevronLayout]}>
        <View style={[styles.bxChevronRight31, styles.barStatusPosition]} />
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <View style={[styles.content, styles.aboutPosition]}>
        <View style={[styles.about, styles.aboutPosition]}>
          <Text style={[styles.cropMonitoring, styles.cropMonitoringTypo]}>
            Crop Monitoring
          </Text>
          <Text style={[styles.monitorYourCrops, styles.timeClr]}>
            Monitor your crops in real-time using advanced imaging and sensor
            technology. Ensure healthy growth and quickly address any issues
            with precision agriculture tools.
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
        style={[styles.hackTheBrainOnboard21, styles.skipPosition]}
        resizeMode="cover"
        source={require("../assets/hack-the-brain-onboard-2-1.png")}
      />
      <Image
        style={[styles.hackTheBrainOnboard21, styles.skipPosition]}
        resizeMode="cover"
        source={require("../assets/hack-the-brain-onboard-2-1.png")}
      />
      <Pressable
        style={styles.iconBackward}
        onPress={() => navigation.navigate("OnBoarding")}
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
    width: "100%",
    overflow: "hidden",
  },
  chevronLayout: {
    height: 28,
    width: 28,
    position: "absolute",
  },
  barStatusPosition: {
    left: 0,
    top: 0,
  },
  aboutPosition: {
    left: 24,
    position: "absolute",
  },
  cropMonitoringTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  timeClr: {
    color: Color.neutral1,
    fontWeight: "500",
    left: 0,
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
  skipPosition: {
    left: 73,
    position: "absolute",
  },
  bxChevronRight31: {
    height: 28,
    width: 28,
    position: "absolute",
    overflow: "hidden",
  },
  bxChevronRight31Wrapper: {
    top: 735,
    left: 40,
  },
  vectorIcon: {
    height: "1.64%",
    width: "2.21%",
    top: "91.42%",
    right: "84.24%",
    bottom: "6.95%",
    left: "13.55%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cropMonitoring: {
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
  monitorYourCrops: {
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
    fontWeight: "700",
    color: Color.neutral2,
    left: 73,
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
    fontWeight: "500",
    left: 0,
  },
  timeStyle: {
    top: 12,
    left: 21,
    height: 21,
  },
  barStatus: {
    height: 44,
    left: 0,
    top: 0,
  },
  hackTheBrainOnboard21: {
    top: 204,
    width: 243,
    height: 243,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconBackward: {
    left: 35,
    top: 52,
    height: 24,
    width: 24,
    position: "absolute",
  },
  onBoarding2: {
    backgroundColor: Color.commonWhiteStatesMain,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default OnBoarding1;
