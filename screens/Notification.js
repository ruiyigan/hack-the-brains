import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Notification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.notificationChild} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <Image
        style={[styles.iconNotification, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon--notification.png")}
      />
      <View style={[styles.pageHeader, styles.pageHeaderFlexBox]}>
        <View style={[styles.leftContainer, styles.pageHeaderFlexBox]}>
          <Pressable
            style={styles.vuesaxlineararrowLeftLayout}
            onPress={() => navigation.navigate("HomepageScrollingOverview")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowleft1.png")}
            />
          </Pressable>
          <Text style={[styles.title, styles.titleTypo]}>Notification</Text>
        </View>
        <Image
          style={[
            styles.vuesaxlinearmoreSquareIcon,
            styles.vuesaxlineararrowLeftLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearmoresquare.png")}
        />
      </View>
      <Text
        style={[styles.noNewNotifications, styles.titleTypo]}
      >{`No new notifications! `}</Text>
      <View style={[styles.barHomeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator, styles.homePosition]} />
      </View>
      <View style={[styles.iphoneX11ProBlack, styles.rectangleIconPosition]}>
        <Image
          style={styles.bgIcon}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <View style={[styles.rightSide, styles.sidePosition]}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
        </View>
        <Image
          style={[styles.leftSideIcon, styles.sidePosition]}
          resizeMode="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIconPosition: {
    left: 0,
    top: 0,
    width: 375,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    position: "absolute",
  },
  pageHeaderFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleTypo: {
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  vuesaxlineararrowLeftLayout: {
    height: 28,
    width: 28,
  },
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  sidePosition: {
    top: 17,
    height: 11,
    position: "absolute",
  },
  notificationChild: {
    top: 464,
    height: 283,
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    height: 156,
    top: 0,
    width: 375,
  },
  iconNotification: {
    top: 55,
    left: 188,
    height: 24,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  title: {
    lineHeight: 29,
    fontFamily: FontFamily.sansBodyBodyCopy,
    color: Color.darkMode,
    marginLeft: 8,
    flex: 1,
  },
  leftContainer: {
    flex: 1,
  },
  vuesaxlinearmoreSquareIcon: {
    marginLeft: 16,
    display: "none",
  },
  pageHeader: {
    top: 52,
    left: 16,
    width: 327,
    position: "absolute",
  },
  noNewNotifications: {
    top: 270,
    left: 57,
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    color: Color.universalBlack,
    width: 317,
    height: 50,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutral1,
    width: 134,
    height: 5,
  },
  barHomeIndicator: {
    marginLeft: -183.5,
    bottom: 0,
    height: 40,
    width: 375,
  },
  bgIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    height: 11,
    top: 0,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  rightSide: {
    right: 15,
    width: 67,
    height: 11,
  },
  leftSideIcon: {
    left: 34,
    height: 11,
    width: 28,
    top: 17,
  },
  iphoneX11ProBlack: {
    height: 44,
    top: 0,
    width: 375,
    overflow: "hidden",
  },
  notification: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Notification;
