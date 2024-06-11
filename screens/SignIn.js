import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <Text style={styles.signIn1}>Sign In</Text>
      <View style={[styles.textFieldPrimaryText, styles.textPosition]}>
        <Text style={[styles.text, styles.textTypo]}>HackerBrain1</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <View style={[styles.textFieldPrimaryText2, styles.textPosition]}>
        <Text style={[styles.text, styles.textTypo]}>Ha6\;’3@#5_</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon--password.png")}
        />
        <Pressable
          style={[styles.iconEyes, styles.iconLayout1]}
          onPress={() => navigation.navigate("SignInPasswordHidden")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon--eyes.png")}
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
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={[styles.buttonText1, styles.textTypo]}>
          Forgot password ?
        </Text>
      </Pressable>
      <View style={[styles.text3, styles.textFlexBox]}>
        <Text style={[styles.dontHaveAn, styles.orSignInTypo]}>
          Don't have an account?
        </Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
      <Pressable
        style={[styles.facebookButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignInWithFacebook")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facebook-button.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.appleMailButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignInWithOutlook")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/apple-mail-button.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.gmailButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignInWithGmail")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/gmail-button.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={styles.mdiloginIcon}
        contentFit="cover"
        source={require("../assets/mdilogin.png")}
      />
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.iconsFlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/signal1.png")}
            />
            <Text style={styles.text4}>9:30</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.pressable, styles.iconsFlexBox]}
        onPress={() => navigation.navigate("OnBoarding2")}
      >
        <Image
          style={styles.vectorIcon4}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    height: 48,
    borderRadius: Border.br_base,
    left: 24,
    right: 24,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  iconLayout1: {
    height: 24,
    position: "absolute",
  },
  orSignInTypo: {
    color: Color.neutral2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
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
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "84.45%",
    top: "15.47%",
    width: "0.66%",
    height: "0.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  signIn1: {
    marginLeft: -42,
    top: 119,
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    textAlign: "center",
    color: Color.textColor,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  text: {
    left: 64,
    textAlign: "left",
    top: 12,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.textColor,
    position: "absolute",
  },
  iconUser: {
    width: 24,
    height: 24,
    top: 12,
    left: 24,
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    top: 187,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    borderRadius: Border.br_base,
    backgroundColor: Color.universalWhite,
  },
  iconEyes: {
    left: 279,
    width: 24,
    height: 24,
    top: 12,
  },
  textFieldPrimaryText2: {
    top: 251,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    borderRadius: Border.br_base,
    backgroundColor: Color.universalWhite,
  },
  orSignIn: {
    marginLeft: -58,
    top: 0,
    textAlign: "center",
    left: "50%",
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
    right: 24,
  },
  button: {
    color: Color.universalWhite,
    textAlign: "center",
  },
  text2: {
    marginTop: -12,
    marginLeft: -28,
    top: "50%",
    left: "50%",
  },
  buttonPrimaryTextAble: {
    top: 363,
    backgroundColor: Color.colorMediumspringgreen_200,
  },
  buttonText1: {
    textAlign: "right",
    color: Color.textColor,
  },
  buttonText: {
    top: 315,
    right: 24,
  },
  dontHaveAn: {
    textAlign: "left",
  },
  signUp: {
    color: Color.colorMediumseagreen,
    marginLeft: 8,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text3: {
    top: 732,
    left: 61,
  },
  icon1: {
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
    height: "0.3%",
    top: "15.02%",
    bottom: "84.68%",
    left: "64.71%",
    right: "35.11%",
    width: "0.18%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    right: "34.16%",
    left: "65.18%",
  },
  vectorIcon2: {
    height: "0.31%",
    top: "15.69%",
    bottom: "84%",
    left: "64.71%",
    right: "35.11%",
    width: "0.18%",
    maxWidth: "100%",
  },
  vectorIcon3: {
    right: "35.61%",
    left: "63.74%",
  },
  mdiloginIcon: {
    top: 115,
    left: 235,
    width: 34,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
  },
  text4: {
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
    top: -1,
    left: -20,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    width: 10,
    height: 19,
  },
  pressable: {
    top: 41,
    left: 25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 56,
    height: 35,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_5xs,
    minWidth: 36,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignItems: "center",
    position: "absolute",
  },
  signIn: {
    flex: 1,
    height: 733,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default SignIn;
