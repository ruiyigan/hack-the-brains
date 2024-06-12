import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Settings1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.settings1}>
      <View style={[styles.frame, styles.frameLayout1]}>
        <View style={[styles.navigation, styles.buttonFabPosition]}>
          <View style={[styles.title, styles.editFlexBox]}>
            <Text style={[styles.dashboard, styles.edit1Typo]}>Settings</Text>
            <Image
              style={[styles.iconSettings, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icon--settings2.png")}
            />
          </View>
          <Image
            style={[styles.buttonFab, styles.buttonFabPosition]}
            contentFit="cover"
            source={require("../assets/button--fab.png")}
          />
        </View>
        <View style={[styles.frame1, styles.frameLayout1]}>
          <View style={[styles.frame2, styles.framePosition1]}>
            <Pressable
              style={[styles.edit, styles.editFlexBox]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Text style={[styles.edit1, styles.edit1Layout]}>Edit</Text>
              <Image
                style={[styles.iconSettings, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--edit.png")}
              />
            </Pressable>
            <View style={[styles.frame3, styles.framePosition2]}>
              <Image
                style={styles.avatarsIcon}
                contentFit="cover"
                source={require("../assets/avatars1.png")}
              />
              <View style={[styles.frame4, styles.framePosition2]}>
                <Text
                  style={[styles.hackerbrain1, styles.hackerbrain1Position]}
                >
                  HackerBrain1
                </Text>
                <Text
                  style={[
                    styles.tientom3010gmailcom,
                    styles.hackerbrain1Position,
                  ]}
                >
                  <Text style={styles.hackerbrain11}>HackerBrain1</Text>
                  <Text style={styles.gmailcomTypo}>@gmail.com</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frame5, styles.frameLayout1]}>
        <View style={[styles.frame6, styles.framePosition1]} />
        <View style={[styles.frame7, styles.frameLayout]}>
          <Pressable
            style={[styles.buttonText, styles.editFlexBox]}
            onPress={() => navigation.navigate("SignInPasswordHidden")}
          >
            <Text style={[styles.buttonText1, styles.edit1Layout]}>
              Log out
            </Text>
          </Pressable>
        </View>
        <View style={[styles.frame6, styles.framePosition1]}>
          <Text style={[styles.companyWorkspace, styles.edit1Typo]}>
            Company workspace
          </Text>
          <View style={styles.cardNotificationShadowBox}>
            <Image
              style={[styles.barSearchInactiveChild, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/ellipse-40.png")}
            />
            <View style={[styles.frame9, styles.framePosition]}>
              <Text style={[styles.hackTheBrains, styles.edit1Layout]}>
                Hack The Brains
              </Text>
              <Text
                style={[
                  styles.hackthebrainssustainabletech,
                  styles.turnOnPosition,
                ]}
              >
                HackTheBrains@sustainabletech.com
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame10, styles.frameLayout]}>
          <Text style={[styles.companyWorkspace, styles.edit1Typo]}>
            Notification
          </Text>
          <View style={styles.cardNotificationShadowBox}>
            <Text style={[styles.turnOn, styles.turnOnPosition]}>Turn on</Text>
            <Image
              style={styles.buttonLargeWithIconSw}
              contentFit="cover"
              source={require("../assets/button-large--with-icon--switch--on.png")}
            />
            <View style={[styles.frame11, styles.framePosition]} />
            <View style={[styles.frame11, styles.framePosition]} />
            <View style={[styles.frame11, styles.framePosition]} />
            <Image
              style={[styles.frame11, styles.framePosition]}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.controlNavBar, styles.barLayout]}>
        <View style={[styles.barBottomHome, styles.barLayout]}>
          <Image
            style={[styles.barBottomItemActive, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active.png")}
          />
          <Image
            style={[styles.barBottomItemInactiv, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active.png")}
          />
          <Image
            style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active.png")}
          />
          <Image
            style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active.png")}
          />
        </View>
        <Pressable
          style={[styles.vector, styles.vectorPosition]}
          onPress={() => navigation.navigate("ControlIrrigationPlot2Colu1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconSettings1, styles.iconLayout1]}
          onPress={() => navigation.navigate("Settings1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon--settings3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.vector1, styles.vectorPosition]}
          onPress={() => navigation.navigate("AidMainPage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.cocoboldhome, styles.iconLayout1]}
          onPress={() => navigation.navigate("HomepageScrollingOverview")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/cocoboldhome2.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.settings1Child, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    width: 332,
    position: "absolute",
    overflow: "hidden",
  },
  buttonFabPosition: {
    height: 44,
    right: 0,
    top: 0,
    position: "absolute",
  },
  editFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  edit1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  framePosition1: {
    width: 327,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  edit1Layout: {
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  framePosition2: {
    top: 0,
    position: "absolute",
  },
  hackerbrain1Position: {
    marginLeft: -70.5,
    left: "50%",
    lineHeight: 24,
    textAlign: "left",
    color: Color.textColor,
    position: "absolute",
  },
  frameLayout: {
    height: 364,
    width: 332,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    top: 16,
    height: 48,
    position: "absolute",
  },
  turnOnPosition: {
    top: 28,
    textAlign: "left",
    position: "absolute",
  },
  barLayout: {
    height: 65,
    position: "absolute",
  },
  barItemLayout: {
    height: 64,
    width: 82,
    borderRadius: Border.br_base,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition: {
    bottom: 22,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  dashboard: {
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    color: Color.textColor,
  },
  iconSettings: {
    marginLeft: 8,
    overflow: "hidden",
  },
  title: {
    top: 4,
    alignItems: "center",
    left: 0,
  },
  buttonFab: {
    borderRadius: Border.br_xs,
    width: 44,
    display: "none",
    overflow: "hidden",
  },
  navigation: {
    left: 0,
  },
  edit1: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.textColor,
  },
  edit: {
    top: 8,
    borderRadius: Border.br_13xl,
    borderStyle: "solid",
    borderColor: Color.textColor,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    right: 0,
    flexDirection: "row",
  },
  avatarsIcon: {
    top: 2,
    height: 48,
    width: 48,
    left: 0,
    position: "absolute",
  },
  hackerbrain1: {
    left: "50%",
    fontSize: FontSize.sansBodyBodyCopy_size,
    marginLeft: -70.5,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
  },
  hackerbrain11: {
    fontFamily: FontFamily.poppinsRegular,
  },
  gmailcomTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  tientom3010gmailcom: {
    top: 32,
    fontSize: FontSize.size_2xs,
    left: "50%",
  },
  frame4: {
    left: 68,
    width: 141,
    height: 56,
    overflow: "hidden",
  },
  frame3: {
    width: 209,
    height: 56,
    left: 0,
    overflow: "hidden",
  },
  frame2: {
    left: 5,
    height: 56,
  },
  frame1: {
    top: 68,
    height: 56,
    left: 0,
  },
  frame: {
    top: 60,
    height: 124,
    left: 24,
    width: 332,
  },
  frame6: {
    left: 0,
    height: 124,
  },
  buttonText1: {
    color: Color.colorTomato,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  buttonText: {
    top: 339,
    left: 153,
  },
  frame7: {
    top: 148,
    left: 0,
  },
  companyWorkspace: {
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    color: Color.textColor,
    left: 0,
    top: 0,
    position: "absolute",
  },
  barSearchInactiveChild: {
    width: 48,
    top: 16,
    left: 24,
  },
  hackTheBrains: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.textColor,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hackthebrainssustainabletech: {
    fontSize: FontSize.sansNoteHelper_size,
    lineHeight: 20,
    color: Color.neutral2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
  },
  frame9: {
    width: 231,
    left: 88,
    overflow: "hidden",
  },
  cardNotificationShadowBox: {
    height: 80,
    elevation: 8,
    shadowRadius: 8,
    top: 44,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 327,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  turnOn: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    left: 88,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.textColor,
  },
  buttonLargeWithIconSw: {
    top: 24,
    left: 247,
    width: 56,
    height: 32,
    position: "absolute",
  },
  frame11: {
    width: 48,
    top: 16,
    left: 24,
    overflow: "hidden",
  },
  frame10: {
    top: 120,
    left: 2,
  },
  frame5: {
    top: 216,
    height: 512,
    left: 24,
    width: 332,
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
  },
  barBottomHome: {
    bottom: 0,
    shadowRadius: 16,
    elevation: 16,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 65,
    left: 0,
    right: 0,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  icon: {
    maxWidth: "100%",
  },
  vector: {
    left: "35.17%",
    right: "59.45%",
    width: "5.37%",
    height: 20,
  },
  iconSettings1: {
    left: 277,
    bottom: 19,
    position: "absolute",
  },
  vector1: {
    left: "59.74%",
    right: "34.86%",
    width: "5.4%",
    height: 18,
  },
  cocoboldhome: {
    left: 31,
    bottom: 20,
    position: "absolute",
  },
  controlNavBar: {
    right: 16,
    bottom: 11,
    left: 29,
  },
  settings1Child: {
    marginLeft: 118.5,
    width: 6,
    height: 6,
    left: "50%",
  },
  settings1: {
    flex: 1,
    height: 851,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default Settings1;
