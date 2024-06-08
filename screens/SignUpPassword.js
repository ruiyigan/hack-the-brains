import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const SignUpPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUpPassword, styles.iconLayout1]}>
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
          <Text style={[styles.time, styles.textTypo]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barHomeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator, styles.homePosition]} />
      </View>
      <Text style={[styles.signUp, styles.homePosition]}>Sign Up</Text>
      <View style={styles.buttonPrimaryTextAble}>
        <View style={[styles.text, styles.homePosition]}>
          <Pressable
            onPress={() => navigation.navigate("AccountRegisteredSuccessfull")}
          >
            <Text style={[styles.register, styles.textTypo]}>Register</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.iconBackward, styles.iconLayout]}
        onPress={() => navigation.navigate("SignInPasswordHidden")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon--backward.png")}
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
      <View style={[styles.textFieldPrimaryText, styles.textShadowBox]}>
        <Text style={[styles.text1, styles.textTypo]}>
          <Text style={styles.tan}>{`Tan                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Text style={[styles.firstName, styles.nameTypo]}>First Name:</Text>
      <View style={[styles.textFieldPrimaryText1, styles.textShadowBox]}>
        <Text style={[styles.text1, styles.textTypo]}>
          <Text style={styles.tan}>{`Tan                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Text style={[styles.lastName, styles.nameTypo]}>Last Name:</Text>
      <View style={[styles.textFieldPrimaryText2, styles.textShadowBox]}>
        <Text style={[styles.text5, styles.textTypo]}>
          <Text
            style={styles.tan}
          >{`                                      HackerBrain1@gmail.com                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Text style={[styles.email, styles.nameTypo]}>Email:</Text>
      <View style={[styles.textFieldPrimaryText3, styles.textShadowBox]}>
        <Text style={[styles.text7, styles.textTypo]}>
          <Text
            style={styles.tan}
          >{` .            HackerBrain1                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Text style={[styles.username, styles.nameTypo]}>Username:</Text>
      <View style={[styles.textFieldPrimaryText4, styles.textShadowBox]}>
        <Text style={[styles.text9, styles.textTypo]}>
          <Text
            style={styles.tan}
          >{` .              Ha6\;’3@#5_                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Pressable
        style={[styles.iconEyes, styles.iconLayout]}
        onPress={() => navigation.navigate("SignUpPasswordConcealed")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon--eyes1.png")}
        />
      </Pressable>
      <Text style={[styles.password, styles.nameTypo]}>Password</Text>
      <View style={[styles.textFieldPrimaryText5, styles.textShadowBox]}>
        <Text style={[styles.text9, styles.textTypo]}>
          <Text
            style={styles.tan}
          >{` .   .          Ha6\;’3@#5_                  `}</Text>
          <Text style={styles.text2}>__</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <Pressable
        style={[styles.iconEyes1, styles.iconLayout]}
        onPress={() => navigation.navigate("SignUpPasswordConcealed")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
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
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
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
    height: 48,
    borderRadius: Border.br_base,
    left: 29,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  nameTypo: {
    textAlign: "left",
    left: 36,
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
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
    width: 18,
    height: 7,
    backgroundColor: Color.neutral1,
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
    color: Color.neutral1,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
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
    top: 0,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.neutral1,
  },
  barHomeIndicator: {
    marginLeft: -187.5,
    bottom: 0,
    width: 375,
    height: 40,
  },
  signUp: {
    marginLeft: -34.5,
    top: 90,
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    color: Color.neutral1,
  },
  register: {
    color: Color.commonWhiteStatesMain,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
  },
  text: {
    marginTop: -12,
    marginLeft: -33.5,
    flexDirection: "row",
    top: "50%",
  },
  buttonPrimaryTextAble: {
    top: 742,
    right: 19,
    backgroundColor: Color.colorMediumspringgreen_200,
    height: 48,
    borderRadius: Border.br_base,
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconBackward: {
    top: 60,
    left: 24,
    height: 24,
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
  tan: {
    color: Color.neutral1,
  },
  text2: {
    color: Color.commonWhiteStatesMain,
  },
  text1: {
    left: 15,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
    top: 12,
    position: "absolute",
  },
  iconUser: {
    display: "none",
    left: 24,
    height: 24,
    top: 12,
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    top: 178,
  },
  firstName: {
    top: 145,
  },
  textFieldPrimaryText1: {
    top: 279,
  },
  lastName: {
    top: 246,
  },
  text5: {
    left: -153,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
    top: 12,
    position: "absolute",
  },
  textFieldPrimaryText2: {
    top: 375,
  },
  email: {
    top: 342,
  },
  text7: {
    left: -51,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
    top: 12,
    position: "absolute",
  },
  textFieldPrimaryText3: {
    top: 476,
  },
  username: {
    top: 443,
  },
  text9: {
    left: -61,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
    top: 12,
    position: "absolute",
  },
  textFieldPrimaryText4: {
    top: 572,
  },
  iconEyes: {
    left: 304,
    top: 584,
  },
  password: {
    top: 539,
  },
  textFieldPrimaryText5: {
    top: 673,
  },
  iconEyes1: {
    left: 307,
    top: 685,
  },
  reEnterPassword: {
    top: 640,
  },
  signUpPassword: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
    width: "100%",
  },
});

export default SignUpPassword;
