import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <View style={[styles.barStatus, styles.borderPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
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
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.textTypo]}>9:41</Text>
        </View>
      </View>
      <View style={styles.barHomeIndicator}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Text style={[styles.signIn1, styles.signTypo]}>Sign In</Text>
      <View style={[styles.textFieldPrimaryText, styles.textPosition]}>
        <Text style={[styles.text, styles.textTypo]}>HackerBrain1</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <View style={[styles.textFieldPrimaryText2, styles.textPosition]}>
        <Text style={[styles.text, styles.textTypo]}>Ha6\;’3@#5_</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon--password.png")}
        />
        <Pressable
          style={[styles.iconEyes, styles.iconLayout1]}
          onPress={() => navigation.navigate("SignInPasswordHidden")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/icon--eyes1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.divider, styles.iconLayout1]}>
        <Text style={[styles.orSignIn, styles.orSignInTypo]}>
          Or sign in with
        </Text>
        <View style={[styles.dividerChild, styles.dividerPosition]} />
        <View style={[styles.dividerItem, styles.dividerPosition]} />
      </View>
      <Pressable
        style={[styles.buttonPrimaryTextAble, styles.textPosition]}
        onPress={() => navigation.navigate("HomepageScrollingOverview")}
      >
        <View style={[styles.text2, styles.textFlexBox]}>
          <Text style={[styles.button, styles.textTypo]}>Sign In</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.buttonText, styles.textFlexBox]}
        onPress={() => navigation.navigate("ForgotPasswordConcealed1")}
      >
        <Text style={[styles.buttonText1, styles.textTypo]}>
          Forgot password ?
        </Text>
      </Pressable>
      <Pressable
        style={[styles.text3, styles.textFlexBox]}
        onPress={() => navigation.navigate("SignUpPasswordConcealed")}
      >
        <Text style={[styles.dontHaveAn, styles.orSignInTypo]}>
          Don't have an account?
        </Text>
        <Pressable
          style={styles.signUp}
          onPress={() => navigation.navigate("SignUpPasswordConcealed")}
        >
          <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={[styles.iconBackward, styles.iconLayout1]}
        onPress={() => navigation.navigate("OnBoarding3")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icon--backward.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.facebookButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignInWithFacebook")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/facebook-button.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.appleMailButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignInWithOutlook")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/apple-mail-button.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.gmailButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignInWithGmail")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/gmail-button.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={styles.mdiloginIcon}
        resizeMode="cover"
        source={require("../assets/mdilogin.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.neutral1,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  signTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
  },
  textPosition: {
    height: 48,
    borderRadius: Border.br_base,
    left: 24,
    right: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    position: "absolute",
  },
  orSignInTypo: {
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  dividerPosition: {
    width: 92,
    backgroundColor: Color.neutral3,
    bottom: "45.83%",
    top: "45.83%",
    height: "8.33%",
    position: "absolute",
  },
  textFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  buttonLayout: {
    width: 48,
    top: 475,
    height: 48,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "64.69%",
    right: "35.12%",
    width: "0.19%",
    height: "0.31%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "84.45%",
    top: "15.47%",
    width: "0.67%",
    height: "0.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    top: "50%",
    width: 54,
    position: "absolute",
    left: 0,
  },
  timeStyle: {
    left: 21,
    height: 21,
    top: 12,
  },
  barStatus: {
    height: 44,
    left: 0,
    right: 0,
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
    marginLeft: -187.5,
    bottom: 0,
    width: 375,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  signIn1: {
    marginLeft: -41.5,
    top: 119,
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    left: "50%",
    textAlign: "center",
    color: Color.neutral1,
    position: "absolute",
  },
  text: {
    left: 64,
    textAlign: "left",
    color: Color.neutral1,
    top: 12,
    position: "absolute",
  },
  iconUser: {
    left: 24,
    height: 24,
    top: 12,
    width: 24,
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    top: 187,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    borderRadius: Border.br_base,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  iconEyes: {
    left: 279,
    top: 12,
    width: 24,
  },
  textFieldPrimaryText2: {
    top: 251,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    borderRadius: Border.br_base,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  orSignIn: {
    marginLeft: -57.5,
    left: "50%",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  dividerChild: {
    left: 0,
  },
  dividerItem: {
    right: 0,
  },
  divider: {
    top: 435,
    left: 24,
    height: 24,
    right: 24,
  },
  button: {
    color: Color.commonWhiteStatesMain,
    textAlign: "center",
  },
  text2: {
    marginTop: -12,
    marginLeft: -27.5,
    left: "50%",
    top: "50%",
  },
  buttonPrimaryTextAble: {
    top: 363,
    backgroundColor: Color.colorMediumspringgreen_200,
  },
  buttonText1: {
    textAlign: "right",
    color: Color.neutral1,
  },
  buttonText: {
    top: 315,
    right: 24,
  },
  dontHaveAn: {
    textAlign: "left",
  },
  signUp1: {
    color: Color.colorMediumseagreen,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontWeight: "700",
  },
  signUp: {
    marginLeft: 8,
  },
  text3: {
    top: 732,
    left: 61,
  },
  iconBackward: {
    top: 60,
    left: 24,
    height: 24,
    width: 24,
  },
  icon2: {
    borderRadius: Border.br_5xs,
  },
  facebookButton: {
    left: 100,
  },
  appleMailButton: {
    left: 164,
  },
  gmailButton: {
    left: 228,
  },
  vectorIcon: {
    top: "15.02%",
    bottom: "84.67%",
  },
  vectorIcon1: {
    right: "34.13%",
    left: "65.2%",
  },
  vectorIcon2: {
    top: "15.69%",
    bottom: "84%",
  },
  vectorIcon3: {
    right: "35.6%",
    left: "63.73%",
  },
  mdiloginIcon: {
    top: 115,
    left: 235,
    width: 34,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  signIn: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default SignIn;
