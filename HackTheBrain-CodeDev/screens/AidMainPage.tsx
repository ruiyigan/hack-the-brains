import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AidMainPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.aidMainPage}>
      <View style={styles.barTab2Project}>
        <View style={styles.tabBar}>
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
        <Text style={styles.userflow}>Diversify crops</Text>
        <Image
          style={[styles.labelIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/label.png")}
        />
        <View style={styles.done}>
          <Image
            style={[styles.checkboxActive, styles.iconLayout2]}
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
        <Text style={styles.userflow}>Invest in tools</Text>
        <Image
          style={[styles.labelIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/label.png")}
        />
        <View style={styles.done}>
          <Image
            style={[styles.checkboxActive, styles.iconLayout2]}
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
        <Text style={styles.uiDesign}>{`Up skill new
 practices`}</Text>
        <Image
          style={[styles.labelIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/label.png")}
        />
        <View style={styles.done}>
          <View style={[styles.checkboxInactive, styles.iconLayout2]} />
          <Text style={[styles.maskAsDone, styles.donePosition]}>Marked</Text>
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
        <Text style={styles.uiDesign}>{`Switch to new
technology`}</Text>
        <Image
          style={[styles.labelIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/label.png")}
        />
        <View style={styles.done}>
          <View style={[styles.checkboxInactive, styles.iconLayout2]} />
          <Text style={[styles.maskAsDone, styles.donePosition]}>Marked</Text>
        </View>
      </View>
      <View style={styles.navigation}>
        <Text style={styles.title}>Feed</Text>
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
          source={require("../assets/button--fab.png")}
        />
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
              source={require("../assets/bar--bottom--item--active.png")}
            />
          </Pressable>
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
          <Pressable
            style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
            onPress={() => navigation.navigate("Settings1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[styles.vector, styles.vectorPosition]}
          onPress={() => navigation.navigate("ControlIrrigationPlot2Colu1")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconSettings, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/icon--settings1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.cocoboldhomeIcon, styles.iconLayout2]}
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
    left: 24,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout2: {
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
    left: 206,
    right: 13,
  },
  cardShadowBox: {
    height: 229,
    top: 410,
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
  iconPosition: {
    display: "none",
    top: "50%",
    position: "absolute",
  },
  buttonFabPosition: {
    right: 0,
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
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  vectorPosition: {
    bottom: 22,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.neutral2,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  inactive: {
    marginLeft: 16,
  },
  tabBar: {
    alignItems: "center",
    flexDirection: "row",
    left: 15,
    top: 0,
    position: "absolute",
  },
  barTab2Project: {
    top: 120,
    left: 8,
    width: 313,
    height: 40,
    position: "absolute",
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
    lineHeight: 28,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    left: 48,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
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
    left: 24,
    right: 195,
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
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    left: 48,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
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
    left: 24,
    right: 195,
  },
  cardTaskUndone1: {
    left: 206,
    right: 13,
  },
  title: {
    marginTop: -14,
    marginLeft: -21.5,
    fontSize: FontSize.headlines18Bold_size,
    textAlign: "center",
    left: "50%",
    top: "50%",
    color: Color.textColor,
    lineHeight: 28,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
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
    left: 24,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  barBottomItemActive: {
    left: 0,
  },
  barBottomItemInactiv: {
    left: 82,
    borderRadius: Border.br_base,
    overflow: "hidden",
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
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "35.09%",
    right: "59.51%",
    width: "5.4%",
    height: 20,
  },
  iconSettings: {
    bottom: 19,
    left: 277,
    height: 24,
    position: "absolute",
  },
  vectorIcon: {
    width: "5.43%",
    right: "34.77%",
    left: "59.8%",
    height: 18,
    bottom: 22,
    position: "absolute",
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
    top: 755,
    left: 29,
    width: 348,
  },
  aidMainPage: {
    flex: 1,
    height: 851,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default AidMainPage;
