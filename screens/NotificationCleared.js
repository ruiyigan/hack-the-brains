import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const NotificationCleared = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificationCleared}>
      <View style={styles.notificationClearedChild} />
      <Image
        style={[styles.rectangleIcon, styles.statusBarPosition]}
        contentFit="cover"
        source={require("../assets/rectangle2.png")}
      />
      <Image
        style={styles.iconNotification}
        contentFit="cover"
        source={require("../assets/icon--notification.png")}
      />
      <View style={[styles.pageHeader, styles.iconsFlexBox]}>
        <View style={[styles.leftContainer, styles.iconsFlexBox]}>
          <Pressable
            style={styles.vuesaxlineararrowLeftLayout}
            onPress={() => navigation.navigate("HomepageScrollingOverview")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowleft.png")}
            />
          </Pressable>
          <Text style={[styles.title, styles.titleTypo]}>Notification</Text>
        </View>
        <Image
          style={[
            styles.vuesaxlinearmoreSquareIcon,
            styles.vuesaxlineararrowLeftLayout,
          ]}
          contentFit="cover"
          source={require("../assets/vuesaxlinearmoresquare1.png")}
        />
      </View>
      <Text
        style={[styles.noNewNotifications, styles.titleTypo]}
      >{`No new notifications! `}</Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.icons, styles.iconsFlexBox]}>
          <View style={styles.top}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("../assets/signal.png")}
            />
            <Text style={styles.text}>9:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    top: 0,
    position: "absolute",
  },
  iconsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleTypo: {
    fontWeight: "700",
    fontSize: FontSize.title24Bold_size,
    textAlign: "left",
  },
  vuesaxlineararrowLeftLayout: {
    height: 28,
    width: 28,
  },
  notificationClearedChild: {
    top: 464,
    width: 375,
    height: 283,
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    width: 380,
    height: 156,
    left: 0,
    top: 0,
  },
  iconNotification: {
    top: 55,
    left: 188,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  title: {
    lineHeight: 29,
    fontFamily: FontFamily.nunitoBold,
    color: Color.darkMode,
    marginLeft: 8,
    textAlign: "left",
    flex: 1,
  },
  leftContainer: {
    flex: 1,
  },
  vuesaxlinearmoreSquareIcon: {
    display: "none",
    marginLeft: 16,
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
    fontFamily: FontFamily.poppinsBold,
    color: Color.universalBlack,
    width: 317,
    height: 50,
    textAlign: "left",
    position: "absolute",
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    maxHeight: "100%",
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
    left: -19,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    overflow: "hidden",
  },
  notificationCleared: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 733,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default NotificationCleared;
