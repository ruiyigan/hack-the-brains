import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={[styles.notificationChild, styles.rectangleIconPosition]} />
      <View style={[styles.frameWrapper, styles.framePosition]}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={styles.sectionHeader}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>Yesterrday</Text>
              </View>
              <View style={[styles.buttons, styles.buttonsFlexBox]}>
                <View style={[styles.contentContainer, styles.buttonsFlexBox]}>
                  <View style={styles.labelContainer}>
                    <Image
                      style={styles.iconLayout1}
                      resizeMode="cover"
                      source={require("../assets/leading-icon1.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={styles.frameSpaceBlock}
              onPress={() => navigation.navigate("HomepageScrollingOverview")}
            >
              <View style={[styles.pxSpacer, styles.spacerLayout]} />
              <View style={styles.textContainer}>
                <Text style={[styles.accountName, styles.titleTypo]}>
                  Soil Moisture
                </Text>
                <Text
                  style={[
                    styles.soilMoistureLevel,
                    styles.waterDispensedOnTypo,
                  ]}
                >
                  Soil moisture level is now mild!
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.framePosition]}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={styles.sectionHeader}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>Today</Text>
              </View>
              <View style={[styles.buttons, styles.buttonsFlexBox]}>
                <View style={[styles.contentContainer, styles.buttonsFlexBox]}>
                  <View style={styles.labelContainer}>
                    <Image
                      style={styles.iconLayout1}
                      resizeMode="cover"
                      source={require("../assets/leading-icon1.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={styles.frameSpaceBlock}
              onPress={() => navigation.navigate("HomepageScrollingOverview")}
            >
              <Image
                style={[styles.pxSpacerIcon, styles.spacerLayout]}
                resizeMode="cover"
                source={require("../assets/32px-spacer.png")}
              />
              <View style={[styles.textContainer1, styles.textSpaceBlock]}>
                <Text style={[styles.accountName, styles.titleTypo]}>
                  Irrigation Successful!
                </Text>
                <Text
                  style={[styles.waterDispensedOn, styles.waterDispensedOnTypo]}
                >
                  Water dispensed on selected plots!
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <Image
        style={[styles.iconNotification, styles.notificationPosition]}
        resizeMode="cover"
        source={require("../assets/icon--notification.png")}
      />
      <View style={styles.pageHeader}>
        <View style={styles.leftContainer}>
          <Pressable
            style={styles.vuesaxlineararrowLeft}
            onPress={() => navigation.navigate("HomepageScrollingOverview")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowleft1.png")}
            />
          </Pressable>
          <Text style={[styles.title2, styles.titleTypo]}>Notification</Text>
        </View>
        <Image
          style={styles.vuesaxlinearmoreSquareIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearmoresquare.png")}
        />
      </View>
      <Pressable
        style={[styles.iconDelete, styles.deletePosition]}
        onPress={() => navigation.navigate("Notification")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--delete.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.deleteAll, styles.deletePosition]}
        onPress={() => navigation.navigate("Notification")}
      >
        <Text style={styles.deleteAll1}>Delete all</Text>
      </Pressable>
      <View style={[styles.barHomeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator, styles.homePosition]} />
      </View>
      <View style={[styles.iphoneX11ProBlack, styles.iconPosition]}>
        <Image
          style={styles.bgIcon}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <View style={[styles.rightSide, styles.sidePosition]}>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
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
    width: 375,
  },
  framePosition: {
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    height: 142,
    paddingTop: Padding.p_11xs,
    justifyContent: "center",
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
  },
  buttonsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
  },
  iconLayout1: {
    width: 16,
    maxHeight: "100%",
    alignSelf: "stretch",
    display: "none",
  },
  spacerLayout: {
    width: 40,
    borderRadius: Border.br_5xs,
    height: 40,
  },
  waterDispensedOnTypo: {
    marginTop: 1,
    color: Color.universalBlack70,
    lineHeight: 20,
    fontSize: FontSize.chipLabel_size,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  notificationPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  deletePosition: {
    top: 124,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.size_xl,
    color: Color.universalBlack100,
    lineHeight: 24,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
  },
  container: {
    width: 43,
    zIndex: 1,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.avatarInitialsSm_size,
    lineHeight: 15,
    color: Color.colorDarkslategray_100,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  textAlignmentMicro: {
    marginLeft: 2,
    flexDirection: "row",
  },
  trailingIcon: {
    marginLeft: 2,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    borderRadius: Border.br_203xl,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    height: 28,
    overflow: "hidden",
  },
  buttons: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSet1Cloud20,
    zIndex: 0,
    marginLeft: 60,
    display: "none",
  },
  sectionHeader: {
    alignItems: "baseline",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    width: 327,
  },
  pxSpacer: {
    backgroundColor: Color.statusWarning20,
    height: 40,
  },
  accountName: {
    color: Color.universalBlack,
    fontSize: FontSize.inputValue_size,
    alignSelf: "stretch",
    lineHeight: 24,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
  },
  soilMoistureLevel: {
    alignSelf: "stretch",
  },
  textContainer: {
    width: 216,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_11xs,
    marginLeft: 8,
    paddingTop: Padding.p_11xs,
  },
  frameSpaceBlock: {
    marginTop: 10,
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_4xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_2xs,
    backgroundColor: Color.commonWhiteStatesMain,
    borderRadius: Border.br_7xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  frame1: {
    height: 123,
    paddingBottom: Padding.p_18xl,
  },
  frame: {
    height: 133,
    paddingRight: Padding.p_6xs,
  },
  frameWrapper: {
    top: 314,
  },
  pxSpacerIcon: {
    height: 40,
  },
  waterDispensedOn: {
    width: 239,
  },
  textContainer1: {
    width: 178,
    marginLeft: 8,
  },
  frameContainer: {
    top: 164,
  },
  rectangleIcon: {
    height: 156,
    width: 375,
    left: 0,
  },
  iconNotification: {
    top: 55,
    left: 188,
    width: 24,
    height: 24,
  },
  vuesaxlineararrowLeft: {
    width: 28,
    height: 28,
  },
  title2: {
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    color: Color.darkMode,
    marginLeft: 8,
    flex: 1,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  vuesaxlinearmoreSquareIcon: {
    marginLeft: 16,
    width: 28,
    height: 28,
    display: "none",
  },
  pageHeader: {
    top: 52,
    left: 16,
    flexDirection: "row",
    width: 327,
    alignItems: "center",
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  iconDelete: {
    left: 337,
    width: 24,
    height: 24,
  },
  deleteAll1: {
    lineHeight: 24,
    fontFamily: FontFamily.poppins,
    color: Color.colorTomato,
    textAlign: "right",
    fontSize: FontSize.inputValue_size,
  },
  deleteAll: {
    right: 46,
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
    marginLeft: -188.5,
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
    width: 24,
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
  },
  iphoneX11ProBlack: {
    height: 44,
    width: 375,
    left: 0,
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

export default Notification1;
