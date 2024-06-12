import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.notification}>
      <View style={[styles.notificationChild, styles.rectangleIconPosition]} />
      <View style={[styles.frame, styles.framePosition]}>
        <View style={[styles.pxSpacer, styles.spacerLayout]} />
        <View style={styles.textContainer}>
          <Text style={[styles.accountName, styles.title2Typo]}>
            Soil Moisture
          </Text>
          <Text style={[styles.soilMoistureLevel, styles.waterDispensedOnTypo]}>
            Soil moisture level is now mild!
          </Text>
        </View>
      </View>
      <Text style={[styles.title, styles.titleTypo]}>Yesterday</Text>
      <View style={[styles.frame1, styles.framePosition]}>
        <Image
          style={styles.spacerLayout}
          contentFit="cover"
          source={require("../assets/32px-spacer.png")}
        />
        <View style={[styles.textContainer1, styles.textSpaceBlock]}>
          <Text style={[styles.accountName, styles.title2Typo]}>
            Irrigation Successful!
          </Text>
          <Text style={[styles.waterDispensedOn, styles.waterDispensedOnTypo]}>
            Water dispensed on selected plots!
          </Text>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <View style={styles.container}>
          <Text style={styles.titleTypo}>Today</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.contentContainer}>
            <View style={styles.labelContainer}>
              <Image
                style={styles.iconLayout2}
                contentFit="cover"
                source={require("../assets/leading-icon2.png")}
              />
              <View style={[styles.textAlignmentMicro, styles.textSpaceBlock]}>
                <Text style={styles.label}>Label</Text>
              </View>
              <Image
                style={[styles.trailingIcon, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/trailing-icon.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle1.png")}
      />
      <Image
        style={[styles.iconNotification, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/icon--notification.png")}
      />
      <View style={styles.pageHeader}>
        <View style={styles.leftContainer}>
          <View style={styles.vuesaxlineararrowLeftLayout}>
            <TouchableHighlight
              style={[styles.vuesaxlineararrowLeft1, styles.iconLayout]}
              underlayColor="#fff"
              onPress={() => navigation.navigate("HomepageScrollingAnalytics")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft1.png")}
              />
            </TouchableHighlight>
          </View>
          <Text style={[styles.title2, styles.title2Typo]}>Notifications</Text>
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
      <Pressable
        style={[styles.iconDelete, styles.deletePosition]}
        onPress={() => navigation.navigate("NotificationCleared")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--delete.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.deleteAll, styles.deletePosition]}
        onPress={() => navigation.navigate("NotificationCleared")}
      >
        <Text style={styles.deleteAll1}>Delete All</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIconPosition: {
    left: 0,
    position: "absolute",
  },
  framePosition: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_4xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_2xs,
    backgroundColor: Color.universalWhite,
    borderRadius: Border.br_7xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    flexDirection: "row",
    width: 327,
    alignItems: "center",
    position: "absolute",
  },
  spacerLayout: {
    height: 40,
    width: 40,
    borderRadius: Border.br_5xs,
  },
  title2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  waterDispensedOnTypo: {
    marginTop: 1,
    color: Color.universalBlack70,
    lineHeight: 20,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  titleTypo: {
    color: Color.universalBlack100,
    fontSize: FontSize.sansHeadingHeading5SemiBold_size,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "800",
    lineHeight: 24,
  },
  textSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
  },
  iconLayout2: {
    width: 16,
    maxHeight: "100%",
    display: "none",
    alignSelf: "stretch",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vuesaxlineararrowLeftLayout: {
    width: 28,
    height: 28,
  },
  deletePosition: {
    top: 124,
    position: "absolute",
  },
  notificationChild: {
    top: 464,
    width: 375,
    height: 283,
    alignItems: "center",
    overflow: "hidden",
  },
  pxSpacer: {
    backgroundColor: Color.statusWarning20,
  },
  accountName: {
    color: Color.universalBlack,
    lineHeight: 24,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.sansBodyBodyCopy_size,
    alignSelf: "stretch",
  },
  soilMoistureLevel: {
    alignSelf: "stretch",
    color: Color.universalBlack70,
    lineHeight: 20,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
  },
  textContainer: {
    width: 216,
    paddingTop: Padding.p_11xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_11xs,
    marginLeft: 8,
  },
  frame: {
    top: 358,
    left: 28,
  },
  title: {
    top: 318,
    left: 28,
    position: "absolute",
  },
  waterDispensedOn: {
    width: 239,
  },
  textContainer1: {
    width: 178,
    marginLeft: 8,
  },
  frame1: {
    top: 228,
    left: 23,
  },
  container: {
    width: 43,
    zIndex: 1,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.sansBodyMicro_size,
    lineHeight: 15,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    textAlign: "left",
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
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  buttons: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorAquamarine_100,
    zIndex: 0,
    marginLeft: 60,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader: {
    top: 179,
    alignItems: "baseline",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    width: 327,
    left: 28,
    position: "absolute",
  },
  rectangleIcon: {
    top: 0,
    width: 393,
    height: 156,
  },
  iconNotification: {
    top: 55,
    left: 188,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vuesaxlineararrowLeft1: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  title2: {
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    color: Color.darkMode,
    marginLeft: 3,
    flex: 1,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  vuesaxlinearmoreSquareIcon: {
    marginLeft: 16,
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
    left: 355,
    width: 24,
    height: 24,
  },
  deleteAll1: {
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorTomato,
    textAlign: "right",
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  deleteAll: {
    right: 45,
  },
  notification: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 851,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Notification1;
