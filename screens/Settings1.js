import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Settings1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings1}>
      <View style={styles.barStatus}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.editBorder]} />
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
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barHomeIndicator, styles.capIconPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Text style={[styles.hackerbrain1, styles.hackerbrain1Position]}>
        HackerBrain1
      </Text>
      <Text style={[styles.tientom3010gmailcom, styles.hackerbrain1Position]}>
        <Text style={styles.hackerbrain11}>HackerBrain1</Text>
        <Text style={styles.gmailcom}>@gmail.com</Text>
      </Text>
      <Pressable
        style={[styles.edit, styles.editFlexBox]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={[styles.edit1, styles.timeLayout]}>Edit</Text>
        <Image
          style={[styles.iconEdit, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--edit.png")}
        />
      </Pressable>
      <Text style={[styles.companyWorkspace, styles.notificationTypo]}>
        Company workspace
      </Text>
      <Text style={[styles.notification, styles.notificationTypo]}>
        Notification
      </Text>
      <View
        style={[styles.barSearchInactive, styles.cardNotificationShadowBox]}
      >
        <Text style={[styles.hackTheBrains, styles.turnOnTypo]}>
          Hack The Brains
        </Text>
        <Text style={[styles.hackthebrainssustainabletech, styles.turnOnTypo]}>
          HackTheBrains@sustainabletech.com
        </Text>
        <Image
          style={[styles.barSearchInactiveChild, styles.avatarsIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-40.png")}
        />
      </View>
      <View style={[styles.cardNotification, styles.cardNotificationShadowBox]}>
        <Text style={[styles.turnOn, styles.turnOnPosition]}>Turn on</Text>
        <Image
          style={[styles.barSearchInactiveChild, styles.avatarsIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-401.png")}
        />
        <Image
          style={[styles.iconNotification, styles.turnOnPosition]}
          resizeMode="cover"
          source={require("../assets/icon--notification.png")}
        />
        <Image
          style={styles.buttonLargeWithIconSw}
          resizeMode="cover"
          source={require("../assets/button-large--with-icon--switch--on.png")}
        />
      </View>
      <Pressable
        style={[styles.buttonText, styles.editFlexBox]}
        onPress={() => navigation.navigate("SignInPasswordHidden")}
      >
        <Text style={[styles.buttonText1, styles.timeLayout]}>Log out</Text>
      </Pressable>
      <View style={styles.barBottomSetting}>
        <View style={[styles.barBottomItemActive, styles.barItemLayout]}>
          <Image
            style={[styles.iconCocoboldsetting, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon--cocoboldsetting.png")}
          />
          <Image
            style={[styles.barBottomItemActiveChild, styles.timePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-5.png")}
          />
        </View>
        <Pressable
          style={[styles.barBottomItemInactiv, styles.barItemLayout]}
          onPress={() => navigation.navigate("ControlIrrigationPlot1Colu")}
        >
          <Image
            style={[styles.icon, styles.barItemLayout1]}
            resizeMode="cover"
            source={require("../assets/bar--bottom--item--inactive.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
          onPress={() => navigation.navigate("AidMainPage")}
        >
          <Image
            style={[styles.icon, styles.barItemLayout1]}
            resizeMode="cover"
            source={require("../assets/bar--bottom--item--inactive.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
          onPress={() => navigation.navigate("HomepageScrollingOverview")}
        >
          <Image
            style={[styles.iconHome, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon--home.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={styles.navigation}>
        <View style={[styles.title, styles.editFlexBox]}>
          <Text style={styles.dashboard}>Settings</Text>
          <Image
            style={[styles.iconEdit, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--settings1.png")}
          />
        </View>
        <Image
          style={[styles.buttonFab, styles.capIconPosition]}
          resizeMode="cover"
          source={require("../assets/button--fab.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.avatarsIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/avatars1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  editBorder: {
    borderWidth: 1,
    borderColor: Color.neutral1,
    borderStyle: "solid",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.neutral1,
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  hackerbrain1Position: {
    marginLeft: -92.5,
    textAlign: "left",
    color: Color.neutral1,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  editFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  notificationTypo: {
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
    left: 24,
    textAlign: "left",
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    position: "absolute",
  },
  cardNotificationShadowBox: {
    height: 80,
    width: 327,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: Border.br_base,
    left: 24,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  turnOnTypo: {
    left: 88,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  avatarsIconLayout: {
    height: 48,
    width: 48,
  },
  turnOnPosition: {
    top: 28,
    position: "absolute",
  },
  barItemLayout: {
    width: 82,
    height: 64,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 29,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  barItemLayout1: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "89.78%",
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 3,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    width: 1,
    height: 4,
    opacity: 0.4,
    top: 4,
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
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    left: 0,
    top: "50%",
    position: "absolute",
    width: 54,
  },
  timeStyle: {
    left: 21,
    height: 21,
    width: 54,
    top: 12,
    position: "absolute",
  },
  barStatus: {
    marginLeft: -187.5,
    width: 375,
    height: 44,
    left: "50%",
    top: 0,
    position: "absolute",
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
  hackerbrain1: {
    top: 128,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    fontSize: FontSize.inputValue_size,
    marginLeft: -92.5,
  },
  hackerbrain11: {
    fontFamily: FontFamily.poppins,
  },
  gmailcom: {
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  tientom3010gmailcom: {
    top: 160,
    fontSize: 11,
    textAlign: "left",
  },
  edit1: {
    textAlign: "left",
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  iconEdit: {
    marginLeft: 8,
  },
  edit: {
    top: 136,
    borderRadius: Border.br_13xl,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    right: 24,
    borderWidth: 1,
    borderColor: Color.neutral1,
    borderStyle: "solid",
  },
  companyWorkspace: {
    top: 216,
  },
  notification: {
    top: 364,
  },
  hackTheBrains: {
    top: 16,
    position: "absolute",
    color: Color.neutral1,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  hackthebrainssustainabletech: {
    top: 44,
    fontSize: FontSize.inputHelper_size,
    lineHeight: 20,
    color: Color.neutral2,
    fontWeight: "500",
    position: "absolute",
  },
  barSearchInactiveChild: {
    top: 16,
    position: "absolute",
    left: 24,
  },
  barSearchInactive: {
    top: 260,
  },
  turnOn: {
    fontWeight: "600",
    left: 88,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    color: Color.neutral1,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  iconNotification: {
    left: 36,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  buttonLargeWithIconSw: {
    top: 24,
    left: 247,
    width: 56,
    height: 32,
    position: "absolute",
  },
  cardNotification: {
    top: 408,
  },
  buttonText1: {
    color: Color.colorTomato,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  buttonText: {
    top: 616,
    left: 24,
  },
  iconCocoboldsetting: {
    height: 24,
    width: 24,
    overflow: "hidden",
    top: 12,
  },
  barBottomItemActiveChild: {
    marginTop: 12,
    marginLeft: -3,
    width: 6,
    height: 6,
    left: "50%",
  },
  barBottomItemActive: {
    left: 245,
    borderRadius: Border.br_base,
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  barBottomItemInactiv: {
    left: 82,
  },
  barBottomItemInactiv1: {
    left: 164,
  },
  iconHome: {
    top: 20,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  barBottomItemInactiv2: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    left: 0,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  barBottomSetting: {
    top: 708,
    shadowRadius: 16,
    elevation: 16,
    height: 64,
    width: 327,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    left: 24,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  vectorIcon: {
    height: "2.22%",
    width: "4.8%",
    right: "36.27%",
    bottom: "8%",
    left: "58.93%",
  },
  dashboard: {
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    textAlign: "left",
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  title: {
    alignItems: "center",
    left: 0,
    top: 4,
  },
  buttonFab: {
    borderRadius: Border.br_xs,
    width: 44,
    display: "none",
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  navigation: {
    top: 60,
    left: 24,
    right: 24,
    height: 44,
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.46%",
    width: "4.77%",
    right: "58.13%",
    bottom: "7.76%",
    left: "37.09%",
  },
  avatarsIcon: {
    top: 130,
    height: 48,
    width: 48,
  },
  settings1: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default Settings1;
