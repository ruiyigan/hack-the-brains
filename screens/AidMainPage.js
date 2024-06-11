import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AidMainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aidMainPage, styles.iconLayout1]}>
      <View style={[styles.barTab2Project, styles.navigationPosition]}>
        <View style={[styles.tabBar, styles.iconsFlexBox]}>
          <View style={[styles.active, styles.activeSpaceBlock]}>
            <Text style={styles.projects}>Guide</Text>
          </View>
          <Pressable
            style={[styles.inactive, styles.activeSpaceBlock]}
            onPress={() => navigation.navigate("SocialForum")}
          >
            <Text style={styles.inactive1}>Social forum</Text>
          </Pressable>
          <Pressable
            style={[styles.inactive, styles.activeSpaceBlock]}
            onPress={() => navigation.navigate("AIChatbot")}
          >
            <Text style={styles.inactive1}>AI chatbot</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.cardTaskDone, styles.cardShadowBox1]}>
        <View style={styles.dl}>
          <Text style={[styles.deadline, styles.textTypo]}>Deadline</Text>
          <Text style={[styles.text, styles.textTypo]}>20/10/2024</Text>
          <Image
            style={styles.iconDateAndTime}
            contentFit="cover"
            source={require("../assets/icon--date-and-time.png")}
          />
        </View>
        <View style={styles.priority}>
          <Text style={[styles.text, styles.textTypo]}>Low</Text>
          <Text style={[styles.deadline, styles.textTypo]}>Priority</Text>
          <Image
            style={styles.iconDateAndTime}
            contentFit="cover"
            source={require("../assets/icon--priority.png")}
          />
        </View>
        <Text style={[styles.userflow, styles.titleTypo]}>Diversify crops</Text>
        <Image
          style={[styles.labelIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/label2.png")}
        />
        <View style={styles.done}>
          <Image
            style={[styles.checkboxActive, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/checkbox--active.png")}
          />
          <Text style={[styles.done1, styles.donePosition]}>Done</Text>
        </View>
      </View>
      <View style={[styles.cardTaskDone1, styles.cardPosition]}>
        <View style={styles.dl}>
          <Text style={[styles.deadline, styles.textTypo]}>Deadline</Text>
          <Text style={[styles.text, styles.textTypo]}>10/09/2024</Text>
          <Image
            style={styles.iconDateAndTime}
            contentFit="cover"
            source={require("../assets/icon--date-and-time.png")}
          />
        </View>
        <View style={styles.priority}>
          <Text style={[styles.text, styles.textTypo]}>Mid</Text>
          <Text style={[styles.deadline, styles.textTypo]}>Priority</Text>
          <Image
            style={styles.iconDateAndTime}
            contentFit="cover"
            source={require("../assets/icon--priority.png")}
          />
        </View>
        <Text style={[styles.userflow, styles.titleTypo]}>Invest in tools</Text>
        <Image
          style={[styles.labelIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/label2.png")}
        />
        <View style={styles.done}>
          <Image
            style={[styles.checkboxActive, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/checkbox--active.png")}
          />
          <Text style={[styles.done1, styles.donePosition]}>Done</Text>
        </View>
      </View>
      <View style={[styles.cardTaskUndone, styles.cardShadowBox]}>
        <View style={styles.dl}>
          <Text style={[styles.deadline, styles.textTypo]}>Deadline</Text>
          <Text style={[styles.text, styles.textTypo]}>20/11/2024</Text>
          <Image
            style={styles.iconDateAndTime}
            contentFit="cover"
            source={require("../assets/icon--date-and-time.png")}
          />
        </View>
        <View style={styles.priority}>
          <Text style={[styles.text, styles.textTypo]}>High</Text>
          <Text style={[styles.deadline, styles.textTypo]}>Priority</Text>
          <Image
            style={styles.iconDateAndTime}
            contentFit="cover"
            source={require("../assets/icon--priority.png")}
          />
        </View>
        <Text style={[styles.uiDesign, styles.text4Typo]}>{`Up skill new
 practices`}</Text>
        <Image
          style={[styles.labelIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/label2.png")}
        />
        <View style={styles.done}>
          <View style={[styles.checkboxInactive, styles.iconLayout]} />
          <Text style={[styles.maskAsDone, styles.donePosition]}>
            Mark as Done
          </Text>
        </View>
      </View>
      <View style={[styles.cardTaskUndone1, styles.cardShadowBox]}>
        <View style={styles.dl}>
          <Text style={[styles.deadline, styles.textTypo]}>Deadline</Text>
          <Text style={[styles.text, styles.textTypo]}>12/08/2024</Text>
          <Image
            style={styles.iconDateAndTime}
            contentFit="cover"
            source={require("../assets/icon--date-and-time.png")}
          />
        </View>
        <View style={styles.priority}>
          <Text style={[styles.text, styles.textTypo]}>High</Text>
          <Text style={[styles.deadline, styles.textTypo]}>Priority</Text>
          <Image
            style={styles.iconDateAndTime}
            contentFit="cover"
            source={require("../assets/icon--priority.png")}
          />
        </View>
        <Text style={[styles.uiDesign, styles.text4Typo]}>{`Switch to new
technology`}</Text>
        <Image
          style={[styles.labelIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/label2.png")}
        />
        <View style={styles.done}>
          <View style={[styles.checkboxInactive, styles.iconLayout]} />
          <Text style={[styles.maskAsDone, styles.donePosition]}>
            Mark as Done
          </Text>
        </View>
      </View>
      <View style={[styles.navigation, styles.navigationPosition]}>
        <Text style={[styles.title, styles.iconPosition1]}>Feed</Text>
        <Image
          style={[styles.iconBackward, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--backward.png")}
        />
        <Image
          style={[styles.iconCancel, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/icon--cancel.png")}
        />
        <Image
          style={[styles.buttonFab, styles.buttonFabPosition]}
          contentFit="cover"
          source={require("../assets/button--fab1.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.macbookandiphoneIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/macbookandiphone.png")}
      />
      <Image
        style={[styles.dollarsigncircleIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/dollarsigncircle.png")}
      />
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.iconsFlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/signal.png")}
            />
            <Text style={[styles.text4, styles.text4Typo]}>9:30</Text>
          </View>
        </View>
      </View>
      <View style={[styles.aidNavBar, styles.barLayout]}>
        <View style={[styles.barBottomHome, styles.barLayout]}>
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
          <Image
            style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active1.png")}
          />
          <Pressable
            style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active1.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={[styles.iconSettings, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--settings5.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
        <Image
          style={[styles.cocoboldhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cocoboldhome1.png")}
        />
        <Image
          style={styles.aidNavBarChild}
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
  navigationPosition: {
    left: 24,
    position: "absolute",
  },
  iconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  activeSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  cardShadowBox1: {
    height: 210,
    elevation: 8,
    shadowRadius: 8,
    top: 184,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  textTypo: {
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 24,
    position: "absolute",
  },
  titleTypo: {
    lineHeight: 28,
    color: Color.textColor,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  donePosition: {
    left: 32,
    marginTop: -10,
    top: "50%",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  cardPosition: {
    left: 196,
    right: 23,
  },
  cardShadowBox: {
    top: 410,
    height: 210,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  text4Typo: {
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition1: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    top: "50%",
    position: "absolute",
  },
  buttonFabPosition: {
    right: 0,
    overflow: "hidden",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barLayout: {
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
  projects: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.universalWhite,
    textAlign: "right",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  active: {
    backgroundColor: Color.blue,
    borderRadius: Border.br_xs,
  },
  inactive1: {
    textAlign: "left",
    color: Color.neutral2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  inactive: {
    marginLeft: 16,
  },
  tabBar: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  barTab2Project: {
    top: 120,
    width: 313,
    height: 40,
  },
  deadline: {
    color: Color.blue,
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    top: 0,
  },
  text: {
    top: 24,
    fontSize: FontSize.sansNoteHelper_size,
    lineHeight: 20,
    color: Color.neutral2,
  },
  iconDateAndTime: {
    top: 2,
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  dl: {
    top: 58,
    width: 89,
    height: 44,
    left: 16,
    position: "absolute",
  },
  priority: {
    top: 110,
    width: 74,
    height: 44,
    left: 16,
    position: "absolute",
  },
  userflow: {
    color: Color.textColor,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    textAlign: "left",
    position: "absolute",
    left: 48,
    top: 16,
  },
  labelIcon: {
    top: 18,
    height: 24,
    borderRadius: Border.br_5xs,
    width: 24,
    position: "absolute",
    left: 16,
  },
  checkboxActive: {
    height: 24,
    borderRadius: Border.br_5xs,
    width: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  done1: {
    color: Color.orange,
  },
  done: {
    top: 170,
    width: 73,
    height: 24,
    left: 16,
    position: "absolute",
  },
  cardTaskDone: {
    right: 195,
    left: 24,
  },
  cardTaskDone1: {
    height: 210,
    elevation: 8,
    shadowRadius: 8,
    top: 184,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  uiDesign: {
    lineHeight: 23,
    color: Color.textColor,
    left: 48,
    top: 16,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  checkboxInactive: {
    backgroundColor: Color.neutral3,
    height: 24,
    borderRadius: Border.br_5xs,
    width: 24,
    position: "absolute",
    left: 0,
    top: 0,
  },
  maskAsDone: {
    color: Color.textColor,
  },
  cardTaskUndone: {
    right: 195,
    left: 24,
  },
  cardTaskUndone1: {
    left: 196,
    right: 23,
  },
  title: {
    marginTop: -14,
    marginLeft: -21.5,
    fontSize: FontSize.headlines18Bold_size,
    textAlign: "center",
    left: "50%",
    color: Color.textColor,
    lineHeight: 28,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconBackward: {
    marginTop: -12,
    height: 24,
    width: 24,
    overflow: "hidden",
    left: 0,
  },
  iconCancel: {
    marginTop: -8,
    marginLeft: 139.5,
    left: "50%",
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  buttonFab: {
    marginTop: -22,
    width: 44,
    display: "none",
    top: "50%",
    position: "absolute",
    height: 44,
    borderRadius: Border.br_xs,
  },
  navigation: {
    top: 60,
    width: 327,
    height: 44,
  },
  groupIcon: {
    height: "1.72%",
    width: "3.74%",
    top: "28.25%",
    bottom: "70.03%",
    left: "12%",
    right: "84.26%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupIcon1: {
    height: "1.98%",
    width: "4%",
    top: "58.96%",
    bottom: "39.06%",
    left: "11.74%",
    right: "84.26%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  macbookandiphoneIcon: {
    marginTop: 68.5,
    marginLeft: 24,
    width: 19,
    height: 12,
    left: "50%",
    overflow: "hidden",
  },
  dollarsigncircleIcon: {
    marginTop: -159.5,
    marginLeft: 27,
    width: 13,
    height: 13,
    left: "50%",
    overflow: "hidden",
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
  },
  text4: {
    top: "5.88%",
    left: "0%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
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
    left: -21,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 0,
    position: "absolute",
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
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  barBottomItemInactiv2: {
    left: 246,
  },
  barBottomHome: {
    bottom: 0,
    shadowRadius: 16,
    elevation: 16,
    right: 0,
    overflow: "hidden",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 65,
    left: 0,
    backgroundColor: Color.universalWhite,
  },
  vectorIcon: {
    width: "5.39%",
    right: "59.52%",
    left: "35.09%",
    height: 20,
  },
  iconSettings: {
    bottom: 19,
    left: 277,
    height: 24,
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
    height: 24,
    position: "absolute",
  },
  aidNavBarChild: {
    marginLeft: 38.3,
    bottom: 8,
    width: 6,
    height: 6,
    left: "50%",
    position: "absolute",
  },
  aidNavBar: {
    right: 25,
    bottom: 7,
    left: 25,
  },
  aidMainPage: {
    flex: 1,
    height: 733,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
    width: "100%",
  },
});

export default AidMainPage;
