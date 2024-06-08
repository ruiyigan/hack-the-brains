import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings2, styles.iconLayout1]}>
      <View style={[styles.barStatus, styles.borderPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
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
        <View style={[styles.timeStyle, styles.iconUserPosition]}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barHomeIndicator, styles.capIconPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Text style={[styles.tapToUpload, styles.tapToUploadTypo]}>
        Tap to upload new image
      </Text>
      <Text style={[styles.name, styles.passwordTypo]}>Name</Text>
      <Text style={[styles.email, styles.passwordTypo]}>Email</Text>
      <Text style={[styles.phoneNumber, styles.passwordTypo]}>
        Phone number
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <View style={[styles.textFieldPrimaryText, styles.textLayout]}>
        <Text style={[styles.text, styles.textPosition]}>HackerBrain1</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <View style={[styles.textFieldPrimaryText1, styles.textLayout]}>
        <Text style={styles.textPosition}>
          <Text style={styles.hackerbrain1}>HackerBrain1</Text>
          <Text style={styles.gmailcom}>@gmail.com</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--mail.png")}
        />
      </View>
      <View style={[styles.textFieldPrimaryText2, styles.textLayout]}>
        <Text style={[styles.text, styles.textPosition]}>+65 9988 7766</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--phone.png")}
        />
      </View>
      <Text style={[styles.changePassword, styles.passwordTypo]}>
        Change password
      </Text>
      <Pressable
        style={[styles.buttonPrimaryTextAble, styles.textLayout]}
        onPress={() => navigation.navigate("Settings1")}
      >
        <View style={[styles.text3, styles.text3Position]}>
          <Text style={[styles.button, styles.timeTypo]}>Save changes</Text>
        </View>
      </Pressable>
      <View style={styles.navigation}>
        <Text style={[styles.search, styles.timeTypo]}>Edit profile</Text>
        <Pressable
          style={[styles.iconBackward, styles.iconLayout]}
          onPress={() => navigation.navigate("Settings1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon--backward.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconCancel, styles.text3Position]}
          resizeMode="cover"
          source={require("../assets/icon--cancel.png")}
        />
      </View>
      <Image
        style={styles.avatarsIcon}
        resizeMode="cover"
        source={require("../assets/avatars.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.neutral1,
    position: "absolute",
  },
  iconUserPosition: {
    top: 12,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  tapToUploadTypo: {
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    fontWeight: "500",
  },
  passwordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  textLayout: {
    height: 48,
    borderRadius: Border.br_base,
    width: 327,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    left: 64,
    textAlign: "left",
    color: Color.neutral1,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    top: 12,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  text3Position: {
    marginTop: -12,
    top: "50%",
    left: "50%",
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
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    top: 2,
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
    top: "50%",
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    left: 0,
    width: 54,
  },
  timeStyle: {
    left: 21,
    height: 21,
    width: 54,
  },
  barStatus: {
    marginLeft: -187.5,
    width: 375,
    height: 44,
    left: "50%",
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
    bottom: 0,
    height: 40,
    left: 0,
  },
  tapToUpload: {
    marginLeft: -89.5,
    top: 200,
    color: Color.secondary,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    left: "50%",
    position: "absolute",
  },
  name: {
    top: 252,
    fontWeight: "700",
    textAlign: "left",
    color: Color.neutral1,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    left: 24,
  },
  email: {
    top: 364,
    fontWeight: "700",
    textAlign: "left",
    color: Color.neutral1,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    left: 24,
  },
  phoneNumber: {
    top: 476,
    fontWeight: "700",
    textAlign: "left",
    color: Color.neutral1,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    left: 24,
  },
  password: {
    top: 588,
    left: 155,
    fontWeight: "700",
    textAlign: "left",
    color: Color.neutral1,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  text: {
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  iconUser: {
    left: 24,
    top: 12,
    position: "absolute",
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    top: 292,
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
  hackerbrain1: {
    fontFamily: FontFamily.poppins,
  },
  gmailcom: {
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  textFieldPrimaryText1: {
    top: 404,
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
  textFieldPrimaryText2: {
    top: 516,
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
  changePassword: {
    top: 628,
    left: 130,
    color: Color.blue,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    fontWeight: "500",
  },
  button: {
    color: Color.commonWhiteStatesMain,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  text3: {
    marginLeft: -58,
    flexDirection: "row",
  },
  buttonPrimaryTextAble: {
    top: 708,
    backgroundColor: "#1fefa4",
  },
  search: {
    marginTop: -14,
    marginLeft: -46.5,
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    color: Color.neutral1,
    top: "50%",
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
    left: "50%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconBackward: {
    left: 0,
    top: 2,
    position: "absolute",
  },
  iconCancel: {
    marginLeft: 139.5,
    display: "none",
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  navigation: {
    top: 60,
    height: 28,
    width: 327,
    left: 24,
    position: "absolute",
  },
  avatarsIcon: {
    top: 93,
    left: 139,
    width: 94,
    height: 94,
    position: "absolute",
  },
  settings2: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
    width: "100%",
  },
});

export default Settings;
