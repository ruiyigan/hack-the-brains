import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const SignUpPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUpPassword}>
      <Text style={styles.signUp}>Sign Up</Text>
      <Pressable
        style={styles.buttonPrimaryTextAble}
        onPress={() => navigation.navigate("AccountRegisteredSuccessfull")}
      >
        <View style={styles.text}>
          <Text style={[styles.button, styles.textTypo]}>Register</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.iconBackward, styles.iconLayout]}
        onPress={() => navigation.navigate("SignInPasswordHidden")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon--backward.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector22.png")}
      />
      <View style={[styles.textFieldPrimaryText, styles.textShadowBox]}>
        <Text style={[styles.text1, styles.textPosition]}>
          <Text style={styles.tan}>{`Tan                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Text style={[styles.firstName, styles.nameTypo]}>First Name:</Text>
      <View style={[styles.textFieldPrimaryText1, styles.textShadowBox]}>
        <Text style={[styles.text1, styles.textPosition]}>
          <Text style={styles.tan}>{`Tan                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Text style={[styles.lastName, styles.nameTypo]}>Last Name:</Text>
      <View style={[styles.textFieldPrimaryText2, styles.textShadowBox]}>
        <Text style={[styles.text5, styles.textPosition]}>
          <Text
            style={styles.tan}
          >{`                                      HackerBrain1@gmail.com                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Text style={[styles.email, styles.nameTypo]}>Email:</Text>
      <View style={[styles.textFieldPrimaryText3, styles.textShadowBox]}>
        <Text style={[styles.text7, styles.textPosition]}>
          <Text
            style={styles.tan}
          >{` .            HackerBrain1                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Text style={[styles.username, styles.nameTypo]}>Username:</Text>
      <View style={[styles.textFieldPrimaryText4, styles.textShadowBox]}>
        <Text style={[styles.text9, styles.textPosition]}>
          <Text
            style={styles.tan}
          >{` .              Ha6\;’3@#5_                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Pressable
        style={[styles.iconEyes, styles.iconLayout]}
        onPress={() => navigation.navigate("SignUpPasswordConcealed")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon--eyes1.png")}
        />
      </Pressable>
      <Text style={[styles.password, styles.nameTypo]}>Password</Text>
      <View style={[styles.textFieldPrimaryText5, styles.textShadowBox]}>
        <Text style={[styles.text9, styles.textPosition]}>
          <Text
            style={styles.tan}
          >{` .   .          Ha6\;’3@#5_                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Pressable
        style={[styles.iconEyes1, styles.iconLayout]}
        onPress={() => navigation.navigate("SignUpPasswordConcealed")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon--eyes1.png")}
        />
      </Pressable>
      <Text style={[styles.reEnterPassword, styles.nameTypo]}>
        Re-enter password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "64.71%",
    right: "35.11%",
    width: "0.18%",
    height: "0.31%",
    overflow: "hidden",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "88.7%",
    top: "11.22%",
    width: "0.66%",
    height: "0.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    right: 29,
    overflow: "hidden",
    height: 48,
    borderRadius: Border.br_base,
    left: 29,
    position: "absolute",
    backgroundColor: Color.universalWhite,
  },
  textPosition: {
    top: 12,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    left: 36,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.textColor,
    position: "absolute",
  },
  signUp: {
    marginLeft: -34.5,
    top: 67,
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    color: Color.textColor,
    left: "50%",
    position: "absolute",
  },
  button: {
    color: Color.universalWhite,
  },
  text: {
    marginTop: -12,
    marginLeft: -33.5,
    top: "50%",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  buttonPrimaryTextAble: {
    top: 699,
    right: 19,
    backgroundColor: Color.colorMediumspringgreen_200,
    overflow: "hidden",
    height: 48,
    borderRadius: Border.br_base,
    left: 29,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconBackward: {
    top: 50,
    left: 24,
    width: 24,
    position: "absolute",
  },
  vectorIcon: {
    top: "10.78%",
    bottom: "88.92%",
  },
  vectorIcon1: {
    right: "34.15%",
    left: "65.19%",
  },
  vectorIcon2: {
    top: "11.45%",
    bottom: "88.25%",
  },
  vectorIcon3: {
    right: "35.6%",
    left: "63.74%",
  },
  tan: {
    color: Color.textColor,
  },
  text2: {
    color: Color.universalWhite,
  },
  text1: {
    left: 15,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
  },
  iconUser: {
    display: "none",
    height: 24,
    width: 24,
    left: 24,
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    top: 135,
  },
  firstName: {
    top: 102,
  },
  textFieldPrimaryText1: {
    top: 236,
  },
  lastName: {
    top: 203,
  },
  text5: {
    left: -153,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
  },
  textFieldPrimaryText2: {
    top: 332,
  },
  email: {
    top: 299,
  },
  text7: {
    left: -51,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
  },
  textFieldPrimaryText3: {
    top: 433,
  },
  username: {
    top: 400,
  },
  text9: {
    left: -61,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
  },
  textFieldPrimaryText4: {
    top: 529,
  },
  iconEyes: {
    left: 304,
    top: 541,
    position: "absolute",
  },
  password: {
    top: 496,
  },
  textFieldPrimaryText5: {
    top: 630,
  },
  iconEyes1: {
    left: 307,
    top: 642,
    position: "absolute",
  },
  reEnterPassword: {
    top: 597,
  },
  signUpPassword: {
    flex: 1,
    height: 851,
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default SignUpPassword;
