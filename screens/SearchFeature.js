import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SearchFeature = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.searchFeature, styles.iconLayout1]}>
      <View style={[styles.barStatus, styles.barPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barSearchTyping, styles.barSearchTypingBorder]}>
        <View style={styles.text}>
          <Text style={[styles.search, styles.searchTypo]}>Search</Text>
          <View style={styles.indicator} />
        </View>
      </View>
      <Pressable
        style={[styles.cardMemberActive, styles.navigationLayout]}
        onPress={() => navigation.navigate("Settings1")}
      >
        <Text style={[styles.tienTom, styles.uiUxPosition]}>Settings</Text>
        <Text style={[styles.uiUx, styles.uiUxPosition]} />
        <Image
          style={[styles.iconCheck, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon--check.png")}
        />
        <Image
          style={[styles.avatarOnline, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/avatar--online.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconSettings, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon--settings.png")}
      />
      <Text style={[styles.selected1, styles.search1Typo]}>Selected (1)</Text>
      <View style={[styles.navigation, styles.iconPosition]}>
        <Text style={[styles.search1, styles.search1Typo]}>Add member</Text>
        <Image
          style={[styles.iconBackward, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--backward.png")}
        />
        <Image
          style={[styles.iconCancel, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon--cancel.png")}
        />
      </View>
      <View style={[styles.barHomeIndicator, styles.barPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Pressable
        style={styles.vuesaxlineararrowLeft}
        onPress={() => navigation.navigate("HomepageScrollingOverview")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  barPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.neutral1,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    top: "50%",
  },
  barSearchTypingBorder: {
    borderColor: Color.blue,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  searchTypo: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  navigationLayout: {
    width: 327,
    left: 24,
  },
  uiUxPosition: {
    left: 84,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  search1Typo: {
    fontWeight: "700",
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.neutral1,
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    top: 2,
    backgroundColor: Color.neutral1,
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
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    textAlign: "center",
    left: 0,
    top: "50%",
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    left: 21,
    height: 21,
    width: 54,
    top: 12,
    position: "absolute",
  },
  barStatus: {
    height: 44,
    top: 0,
    width: 375,
    marginLeft: -187.5,
  },
  search: {
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  indicator: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.blue,
    width: 2,
    height: 20,
    marginLeft: 4,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    left: 24,
    top: 12,
    position: "absolute",
  },
  barSearchTyping: {
    top: 112,
    height: 48,
    left: 24,
    right: 24,
  },
  tienTom: {
    top: 16,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral1,
    lineHeight: 24,
  },
  uiUx: {
    top: 44,
    fontSize: FontSize.inputHelper_size,
    lineHeight: 20,
    color: Color.neutral2,
    fontWeight: "500",
    left: 84,
  },
  iconCheck: {
    height: 24,
    width: 24,
    overflow: "hidden",
    marginTop: -12,
    display: "none",
    top: "50%",
    right: 24,
  },
  avatarOnline: {
    top: 18,
    width: 44,
    left: 24,
    height: 44,
  },
  cardMemberActive: {
    top: 224,
    height: 80,
    borderColor: Color.blue,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  iconSettings: {
    top: 240,
    left: 65,
    position: "absolute",
  },
  selected1: {
    top: 184,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    left: 24,
  },
  search1: {
    marginTop: -14,
    marginLeft: -60.5,
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    textAlign: "center",
    top: "50%",
    fontWeight: "700",
    left: "50%",
  },
  iconBackward: {
    left: 0,
    height: 24,
    top: 2,
    position: "absolute",
  },
  iconCancel: {
    marginLeft: 139.5,
    height: 24,
    width: 24,
    overflow: "hidden",
    marginTop: -12,
    display: "none",
    top: "50%",
    left: "50%",
  },
  navigation: {
    top: 60,
    height: 28,
    width: 327,
    left: 24,
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
    width: 375,
    marginLeft: -187.5,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vuesaxlineararrowLeft: {
    left: "7.73%",
    top: "7.88%",
    right: "84.8%",
    bottom: "88.67%",
    width: "7.47%",
    height: "3.45%",
    position: "absolute",
  },
  searchFeature: {
    flex: 1,
    height: 812,
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default SearchFeature;
