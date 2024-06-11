import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings1, styles.iconLayout1]}>
      <Text style={[styles.hackerbrain1, styles.edit1Typo]}>HackerBrain1</Text>
      <Text style={[styles.tientom3010gmailcom, styles.hackerbrain1Position]}>
        <Text style={styles.hackerbrain11}>HackerBrain1</Text>
        <Text style={styles.edit1Typo}>@gmail.com</Text>
      </Text>
      <Pressable
        style={[styles.edit, styles.editFlexBox]}
        onPress={() => navigation.navigate("Settings1")}
      >
        <Text style={[styles.edit1, styles.edit1Typo]}>Edit</Text>
        <Image
          style={[styles.iconEdit, styles.iconLayout]}
          contentFit="cover"
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
        <Text style={[styles.hackTheBrains, styles.turnOnPosition1]}>
          Hack The Brains
        </Text>
        <Text
          style={[styles.hackthebrainssustainabletech, styles.turnOnPosition1]}
        >
          HackTheBrains@sustainabletech.com
        </Text>
        <Image
          style={[styles.barSearchInactiveChild, styles.avatarsIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-40.png")}
        />
      </View>
      <View style={[styles.cardNotification, styles.cardNotificationShadowBox]}>
        <Text style={[styles.turnOn, styles.turnOnPosition]}>Turn on</Text>
        <Image
          style={[styles.barSearchInactiveChild, styles.avatarsIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-401.png")}
        />
        <Image
          style={[styles.iconNotification, styles.turnOnPosition]}
          contentFit="cover"
          source={require("../assets/icon--notification.png")}
        />
        <Image
          style={styles.buttonLargeWithIconSw}
          contentFit="cover"
          source={require("../assets/button-large--with-icon--switch--on.png")}
        />
      </View>
      <Pressable
        style={[styles.buttonText, styles.editFlexBox]}
        onPress={() => navigation.navigate("SignInPasswordHidden")}
      >
        <Text style={[styles.buttonText1, styles.edit1Typo]}>Log out</Text>
      </Pressable>
      <View style={styles.navigation}>
        <View style={[styles.title, styles.titleFlexBox]}>
          <Text style={[styles.dashboard, styles.edit1Typo]}>Settings</Text>
          <Image
            style={[styles.iconEdit, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--settings3.png")}
          />
        </View>
        <Image
          style={[styles.buttonFab, styles.buttonFabPosition]}
          contentFit="cover"
          source={require("../assets/button--fab1.png")}
        />
      </View>
      <Image
        style={[styles.avatarsIcon, styles.avatarsIconLayout]}
        contentFit="cover"
        source={require("../assets/avatars1.png")}
      />
      <View style={[styles.statusBar, styles.buttonFabPosition1]}>
        <View style={[styles.icons, styles.titleFlexBox]}>
          <View style={styles.top}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("../assets/signal3.png")}
            />
            <Text style={styles.text}>9:30</Text>
          </View>
        </View>
      </View>
      <View style={[styles.homeNavBar, styles.homeLayout]}>
        <View style={[styles.barBottomHome, styles.homeLayout]}>
          <Pressable
            style={[styles.barBottomItemActive, styles.barItemLayout]}
            onPress={() => navigation.navigate("HomepageScrollingOverview")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.barBottomItemInactiv, styles.barItemLayout]}
            onPress={() => navigation.navigate("ControlIrrigationPlot1Colu")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
            onPress={() => navigation.navigate("AidMainPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active1.png")}
            />
          </Pressable>
          <Image
            style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active1.png")}
          />
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={[styles.iconSettings1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--settings4.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
        <Image
          style={[styles.cocoboldhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cocoboldhome1.png")}
        />
        <Image
          style={[styles.homeNavBarChild, styles.hackerbrain1Position]}
          contentFit="cover"
          source={require("../assets/ellipse-51.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  edit1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  hackerbrain1Position: {
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
    color: Color.textColor,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  cardNotificationShadowBox: {
    height: 80,
    width: 327,
    elevation: 8,
    shadowRadius: 8,
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
    backgroundColor: Color.universalWhite,
  },
  turnOnPosition1: {
    left: 88,
    textAlign: "left",
  },
  avatarsIconLayout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  turnOnPosition: {
    top: 28,
    position: "absolute",
  },
  titleFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonFabPosition: {
    right: 0,
    overflow: "hidden",
  },
  buttonFabPosition1: {
    top: 0,
    position: "absolute",
  },
  homeLayout: {
    height: 65,
    position: "absolute",
  },
  barItemLayout: {
    height: 64,
    width: 82,
    top: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: 22,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hackerbrain1: {
    top: 128,
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    left: "50%",
    position: "absolute",
    marginLeft: -93,
  },
  hackerbrain11: {
    fontFamily: FontFamily.poppinsRegular,
  },
  tientom3010gmailcom: {
    top: 160,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 24,
    marginLeft: -93,
    left: "50%",
  },
  edit1: {
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  iconEdit: {
    marginLeft: 8,
  },
  edit: {
    top: 136,
    borderRadius: Border.br_13xl,
    borderStyle: "solid",
    borderColor: Color.textColor,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    right: 24,
  },
  companyWorkspace: {
    top: 216,
  },
  notification: {
    top: 364,
  },
  hackTheBrains: {
    top: 16,
    color: Color.textColor,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    position: "absolute",
  },
  hackthebrainssustainabletech: {
    top: 44,
    fontSize: FontSize.sansNoteHelper_size,
    lineHeight: 20,
    color: Color.neutral2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  barSearchInactiveChild: {
    top: 16,
    left: 24,
  },
  barSearchInactive: {
    top: 260,
  },
  turnOn: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    left: 88,
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
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
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  buttonText: {
    top: 616,
    left: 24,
  },
  dashboard: {
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    textAlign: "left",
    color: Color.textColor,
  },
  title: {
    top: 4,
    left: 0,
    position: "absolute",
  },
  buttonFab: {
    borderRadius: Border.br_xs,
    width: 44,
    display: "none",
    top: 0,
    position: "absolute",
    height: 44,
  },
  navigation: {
    top: 60,
    height: 44,
    left: 24,
    right: 24,
    position: "absolute",
  },
  avatarsIcon: {
    top: 130,
    left: 29,
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
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
    left: -17,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  barBottomItemActive: {
    left: 0,
  },
  barBottomItemInactiv: {
    left: 82,
  },
  barBottomItemInactiv1: {
    left: 164,
  },
  barBottomItemInactiv2: {
    left: 246,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  barBottomHome: {
    bottom: 0,
    shadowRadius: 16,
    elevation: 16,
    right: 0,
    overflow: "hidden",
    left: 0,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 65,
    backgroundColor: Color.universalWhite,
  },
  vectorIcon: {
    width: "5.39%",
    right: "59.52%",
    left: "35.09%",
    height: 20,
  },
  iconSettings1: {
    bottom: 19,
    left: 277,
    position: "absolute",
  },
  vectorIcon1: {
    width: "5.42%",
    right: "34.76%",
    left: "59.82%",
    height: 18,
  },
  cocoboldhomeIcon: {
    bottom: 20,
    left: 31,
    position: "absolute",
  },
  homeNavBarChild: {
    marginLeft: 122.3,
    bottom: 8,
    width: 6,
    height: 6,
  },
  homeNavBar: {
    bottom: 5,
    left: 26,
    right: 24,
  },
  settings1: {
    flex: 1,
    height: 733,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
    width: "100%",
  },
});

export default Settings;
