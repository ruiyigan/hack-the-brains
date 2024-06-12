import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const SignInPasswordHidden = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signInPasswordHidden}>
      <Text style={styles.signIn}>Sign In</Text>
      <View style={[styles.textFieldPrimaryText, styles.textPosition]}>
        <Text style={[styles.text, styles.textTypo]}>HackerBrain1</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <View style={[styles.textFieldPrimaryText2, styles.textPosition]}>
        <Text style={[styles.text, styles.textTypo]}>***********</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon--password.png")}
        />
        <Pressable
          style={[styles.iconEyes, styles.iconLayout1]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
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
      <TouchableHighlight
        style={[styles.buttonText, styles.textFlexBox]}
        underlayColor="#fff"
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={[styles.buttonText1, styles.textTypo]}>
          Forgot password ?
        </Text>
      </TouchableHighlight>
      <View style={[styles.text3, styles.textFlexBox]}>
        <Text style={[styles.dontHaveAn, styles.orSignInTypo]}>
          Don't have an account?
        </Text>
        <TouchableHighlight
          style={styles.signUp}
          underlayColor="#fff"
          onPress={() => navigation.navigate("SignUpPasswordConcealed")}
        >
          <Text style={styles.signUp1}>Sign Up</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        style={[styles.facebookButton, styles.buttonLayout]}
        underlayColor="#fff"
        onPress={() => navigation.navigate("SignInWithFacebook")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facebook-button.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.appleMailButton, styles.buttonLayout]}
        underlayColor="#fff"
        onPress={() => navigation.navigate("SignInWithOutlook")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/apple-mail-button.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.gmailButton, styles.buttonLayout]}
        underlayColor="#fff"
        onPress={() => navigation.navigate("SignInWithGmail")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/gmail-button.png")}
        />
      </TouchableHighlight>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Image
        style={styles.mdiloginIcon}
        contentFit="cover"
        source={require("../assets/mdilogin.png")}
      />
      <Pressable
        style={[styles.pressable, styles.textFlexBox]}
        onPress={() => navigation.navigate("OnBoarding")}
      >
        <Image
          style={styles.vectorIcon4}
          contentFit="cover"
          source={require("../assets/vector13.png")}
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
    left: "64.71%",
    right: "35.11%",
    width: "0.18%",
    height: "0.31%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "84.44%",
    top: "15.48%",
    width: "0.66%",
    height: "0.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signIn: {
    marginLeft: -41.5,
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
    marginLeft: -57.5,
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
    marginLeft: -27.5,
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
  signUp1: {
    color: Color.colorMediumseagreen,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  signUp: {
    marginLeft: 8,
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
    top: "15.03%",
    bottom: "84.67%",
  },
  vectorIcon1: {
    right: "34.15%",
    left: "65.19%",
  },
  vectorIcon2: {
    top: "15.69%",
    bottom: "84.01%",
  },
  vectorIcon3: {
    right: "35.6%",
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
  vectorIcon4: {
    width: 10,
    height: 19,
  },
  pressable: {
    top: 42,
    left: 25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 56,
    height: 35,
    alignItems: "center",
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_5xs,
    minWidth: 36,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    flexDirection: "row",
  },
  signInPasswordHidden: {
    flex: 1,
    height: 851,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default SignInPasswordHidden;
