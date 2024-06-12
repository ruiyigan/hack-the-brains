import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const NotificationCleared = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.notificationCleared}>
      <View style={styles.notificationClearedChild} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle1.png")}
      />
      <Image
        style={styles.iconNotification}
        contentFit="cover"
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
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowleft1.png")}
            />
          </Pressable>
          <Text style={[styles.title, styles.titleTypo]}>Notifications</Text>
        </View>
        <Image
          style={[
            styles.vuesaxlinearmoreSquareIcon,
            styles.vuesaxlineararrowLeftLayout,
          ]}
          contentFit="cover"
          source={require("../assets/vuesaxlinearmoresquare.png")}
        />
      </View>
      <Text
        style={[styles.noNewNotifications, styles.titleTypo]}
      >{`No new notifications! `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeaderFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleTypo: {
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.title24Bold_size,
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
    top: 0,
    width: 393,
    height: 156,
    left: 0,
    position: "absolute",
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
    left: 11,
    width: 327,
    position: "absolute",
  },
  noNewNotifications: {
    top: 270,
    left: 80,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsBold,
    color: Color.universalBlack,
    width: 317,
    height: 50,
    position: "absolute",
  },
  notificationCleared: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 851,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default NotificationCleared;
