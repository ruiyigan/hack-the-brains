import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OnBoarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onBoarding4, styles.iconLayout]}>
      <View style={styles.about}>
        <Text style={styles.analyticsAndReports}>Analytics and Reports</Text>
        <Text style={[styles.gainValuableInsights, styles.timeClr]}>
          Gain valuable insights through detailed analytics and reports. Track
          performance, predict future trends, and make data-driven decisions to
          optimize your farming practices.
        </Text>
      </View>
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={[styles.alreadyHaveAn, styles.timeTypo]}>
          Already have an account?
        </Text>
        <Pressable
          style={styles.signIn}
          onPress={() => navigation.navigate("SignInPasswordHidden")}
        >
          <Text style={[styles.signIn1, styles.signTypo]}>Sign In</Text>
        </Pressable>
      </View>
      <View style={[styles.barStatus, styles.capIconPosition]}>
        <View style={[styles.battery, styles.batteryLayout]}>
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
        style={styles.hackTheBrainOnboard41}
        resizeMode="cover"
        source={require("../assets/hack-the-brain-onboard-4-1.png")}
      />
      <View style={[styles.text1, styles.textFlexBox]}>
        <Text style={[styles.alreadyHaveAn, styles.timeTypo]}>
          Don't have an account?
        </Text>
        <Pressable
          style={styles.signIn}
          onPress={() => navigation.navigate("SignUpPasswordConcealed")}
        >
          <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.iconBackward, styles.batteryLayout]}
        onPress={() => navigation.navigate("OnBoarding2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--backward.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  timeClr: {
    color: Color.neutral1,
    left: 0,
    textAlign: "center",
  },
  textFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  timeTypo: {
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  signTypo: {
    color: Color.colorMediumseagreen,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  batteryLayout: {
    width: 24,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  analyticsAndReports: {
    left: 3,
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    color: Color.additionalColorsBlack,
    width: 273,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  gainValuableInsights: {
    top: 72,
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    height: 85,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    color: Color.neutral1,
    width: 279,
    position: "absolute",
  },
  about: {
    top: 482,
    left: 48,
    height: 157,
    width: 279,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.neutral2,
    textAlign: "left",
  },
  signIn1: {
    textAlign: "right",
  },
  signIn: {
    marginLeft: 8,
  },
  text: {
    top: 763,
    left: 57,
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
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    color: Color.neutral1,
    left: 0,
    textAlign: "center",
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
  hackTheBrainOnboard41: {
    top: 189,
    left: 64,
    width: 246,
    height: 246,
    position: "absolute",
  },
  signUp1: {
    textAlign: "left",
  },
  text1: {
    top: 689,
    left: 67,
    width: 271,
  },
  icon: {
    height: "100%",
  },
  iconBackward: {
    left: 31,
    top: 52,
    height: 24,
  },
  onBoarding4: {
    backgroundColor: Color.commonWhiteStatesMain,
    flex: 1,
    height: 812,
  },
});

export default OnBoarding3;
