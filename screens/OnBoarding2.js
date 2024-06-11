import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const OnBoarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onBoarding4}>
      <View style={styles.about}>
        <Text
          style={[styles.analyticsAndReports, styles.analyticsAndReportsTypo]}
        >
          Analytics and Reports
        </Text>
        <Text
          style={[styles.gainValuableInsights, styles.analyticsAndReportsTypo]}
        >
          Gain valuable insights through detailed analytics and reports. Track
          performance, predict future trends, and make data-driven decisions to
          optimize your farming practices.
        </Text>
      </View>
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.signIn}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SignInPasswordHidden")}
        >
          <Text style={[styles.signIn1, styles.signTypo]}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.hackTheBrainOnboard41}
        contentFit="cover"
        source={require("../assets/hack-the-brain-onboard-4-1.png")}
      />
      <View style={[styles.text1, styles.textFlexBox]}>
        <Text style={styles.alreadyHaveAn}>Don't have an account?</Text>
        <TouchableHighlight
          style={styles.signIn}
          underlayColor="#fff"
          onPress={() => navigation.navigate("SignUpPasswordConcealed")}
        >
          <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.iconsFlexBox]}>
          <View style={styles.top}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("../assets/signal2.png")}
            />
            <Text style={styles.text2}>9:30</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.pressable, styles.iconsFlexBox]}
        onPress={() => navigation.navigate("OnBoarding1")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  analyticsAndReportsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  signTypo: {
    color: Color.colorMediumseagreen,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  iconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  analyticsAndReports: {
    left: 3,
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    color: Color.additionalColorsBlack,
    width: 273,
    top: 0,
  },
  gainValuableInsights: {
    top: 72,
    left: 0,
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    color: Color.textColor,
    height: 85,
    width: 279,
  },
  about: {
    top: 437,
    left: 47,
    height: 157,
    width: 279,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.neutral2,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  signIn1: {
    textAlign: "right",
  },
  signIn: {
    marginLeft: 8,
  },
  text: {
    top: 691,
    left: 54,
  },
  hackTheBrainOnboard41: {
    top: 170,
    left: 64,
    width: 246,
    height: 246,
    position: "absolute",
  },
  signUp1: {
    textAlign: "left",
  },
  text1: {
    top: 656,
    left: 59,
    width: 271,
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
  text2: {
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
  vectorIcon: {
    width: 10,
    height: 19,
  },
  pressable: {
    top: 42,
    left: 14,
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
  onBoarding4: {
    backgroundColor: Color.universalWhite,
    flex: 1,
    width: "100%",
    height: 733,
    overflow: "hidden",
  },
});

export default OnBoarding2;
