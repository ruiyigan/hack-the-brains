import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const SignUpPasswordConcealed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPasswordConcealed}>
      <Text style={styles.signUp}>Sign Up</Text>
      <Pressable
        style={styles.buttonPrimaryTextAble}
        onPress={() => navigation.navigate("AccountRegisteredSuccessfull")}
      >
        <View style={styles.text}>
          <Text style={[styles.button, styles.textTypo]}>Register</Text>
        </View>
      </Pressable>
      <Image
        style={[styles.iconBackward, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--backward.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector18.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
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
      <Text style={[styles.firstName, styles.nameFlexBox]}>First Name:</Text>
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
      <Text style={[styles.lastName, styles.nameFlexBox]}>Last Name:</Text>
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
      <Text style={[styles.email, styles.nameFlexBox]}>Email:</Text>
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
      <Text style={[styles.username, styles.nameFlexBox]}>Username:</Text>
      <View style={[styles.textFieldPrimaryText4, styles.textShadowBox]}>
        <Text style={[styles.text9, styles.textPosition]}>
          <Text
            style={styles.tan}
          >{`           ***********                  `}</Text>
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
        onPress={() => navigation.navigate("SignUpPassword")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon--eyes.png")}
        />
      </Pressable>
      <Text style={[styles.password, styles.nameFlexBox]}>Password</Text>
      <View style={[styles.textFieldPrimaryText5, styles.textShadowBox]}>
        <Text style={[styles.text12, styles.textPosition]}>
          <Text
            style={styles.tan}
          >{` .          **********                  `}</Text>
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
        onPress={() => navigation.navigate("SignUpPassword")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon--eyes.png")}
        />
      </Pressable>
      <Text style={[styles.reEnterPassword, styles.nameFlexBox]}>
        Re-enter password
      </Text>
      <View style={styles.statusBar}>
        <View style={styles.icons}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/signal6.png")}
            />
            <Text style={[styles.text15, styles.nameFlexBox]}>9:30</Text>
          </View>
        </View>
      </View>
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
    overflow: "hidden",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "89.11%",
    top: "10.8%",
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
  nameFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  signUp: {
    marginLeft: -35,
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
    marginLeft: -34,
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
  iconBackward: {
    top: 50,
    left: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIcon: {
    height: "0.3%",
    top: "10.35%",
    bottom: "89.35%",
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
    top: "11.02%",
    bottom: "88.66%",
    left: "64.71%",
    right: "35.11%",
    width: "0.18%",
    maxWidth: "100%",
  },
  vectorIcon3: {
    right: "35.61%",
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
    top: 105,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.textColor,
  },
  textFieldPrimaryText1: {
    top: 236,
  },
  lastName: {
    top: 206,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.textColor,
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
    top: 302,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.textColor,
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
    top: 403,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.textColor,
  },
  text9: {
    left: -37,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
  },
  textFieldPrimaryText4: {
    top: 529,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconEyes: {
    left: 304,
    top: 541,
    position: "absolute",
  },
  password: {
    top: 499,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.textColor,
  },
  text12: {
    left: -35,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
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
    top: 600,
    left: 36,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.textColor,
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
  },
  text15: {
    top: "5.88%",
    left: "0%",
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
  },
  top: {
    width: 340,
    height: 17,
  },
  icons: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  statusBar: {
    top: 0,
    left: -20,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    overflow: "hidden",
    position: "absolute",
  },
  signUpPasswordConcealed: {
    flex: 1,
    height: 733,
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default SignUpPasswordConcealed;
