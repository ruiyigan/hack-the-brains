import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.notificationChild} />
      <View style={[styles.frameWrapper, styles.framePosition]}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={styles.sectionHeader}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>Yesterrday</Text>
              </View>
              <View style={styles.buttons}>
                <View style={styles.contentContainer}>
                  <View style={styles.labelContainer}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon1.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameSpaceBlock}>
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
            </View>
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
              <View style={styles.buttons}>
                <View style={styles.contentContainer}>
                  <View style={styles.labelContainer}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon1.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameSpaceBlock}>
              <Image
                style={styles.spacerLayout}
                contentFit="cover"
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
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle1.png")}
      />
      <Image
        style={[styles.iconNotification, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/icon--notification.png")}
      />
      <View style={styles.pageHeader}>
        <View style={styles.leftContainer}>
          <View style={styles.vuesaxlineararrowLeftLayout}>
            <TouchableHighlight
              style={[styles.vuesaxlineararrowLeft1, styles.iconLayout1]}
              underlayColor="#fff"
              onPress={() => navigation.navigate("HomepageScrollingOverview")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </TouchableHighlight>
          </View>
          <Text style={[styles.title2, styles.titleTypo]}>Notification</Text>
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
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon--delete.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.deleteAll, styles.deletePosition]}
        onPress={() => navigation.navigate("NotificationCleared")}
      >
        <Text style={styles.deleteAll1}>Delete all</Text>
      </Pressable>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.icons}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.iconLayout]}
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
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  textSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
  },
  iconLayout3: {
    width: 16,
    maxHeight: "100%",
    alignSelf: "stretch",
    display: "none",
  },
  spacerLayout: {
    height: 40,
    width: 40,
    borderRadius: Border.br_5xs,
  },
  waterDispensedOnTypo: {
    marginTop: 1,
    color: Color.universalBlack70,
    lineHeight: 20,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  iconLayout2: {
    width: 24,
    height: 24,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vuesaxlineararrowLeftLayout: {
    width: 28,
    height: 28,
  },
  deletePosition: {
    top: 124,
    position: "absolute",
  },
  statusBarPosition: {
    position: "absolute",
    overflow: "hidden",
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
  title: {
    fontSize: FontSize.sansHeadingHeading5SemiBold_size,
    color: Color.universalBlack100,
    lineHeight: 24,
    fontFamily: FontFamily.nunitoBold,
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
    fontSize: FontSize.sansBodyMicro_size,
    lineHeight: 15,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
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
    backgroundColor: Color.colorSet1Cloud20,
    zIndex: 0,
    marginLeft: 60,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
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
  },
  accountName: {
    color: Color.universalBlack,
    fontSize: FontSize.sansBodyBodyCopy_size,
    alignSelf: "stretch",
    lineHeight: 24,
    fontFamily: FontFamily.nunitoBold,
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
    top: 0,
    width: 382,
    height: 156,
    left: 0,
    position: "absolute",
  },
  iconNotification: {
    top: 55,
    left: 188,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vuesaxlineararrowLeft1: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    left: "0%",
  },
  title2: {
    fontSize: FontSize.title24Bold_size,
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
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorTomato,
    textAlign: "right",
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  deleteAll: {
    right: 46,
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    bottom: "17.06%",
    left: "83.28%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  text: {
    top: "5.88%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
    left: "0%",
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    textAlign: "left",
    position: "absolute",
  },
  top: {
    width: 340,
    height: 17,
  },
  icons: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  statusBar: {
    top: -1,
    left: -19,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
  },
  notification: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 733,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Notification1;
