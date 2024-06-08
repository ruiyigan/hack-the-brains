import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const AidMainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aidMainPage}>
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
      <View style={[styles.barHomeIndicator, styles.barPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={styles.barBottomNotification}>
        <Image
          style={[styles.barBottomItemActive, styles.barItemLayout]}
          resizeMode="cover"
          source={require("../assets/bar--bottom--item--active.png")}
        />
        <Pressable
          style={[styles.barBottomItemInactiv, styles.barItemLayout]}
          onPress={() => navigation.navigate("ControlIrrigationPlot1Colu")}
        >
          <Image
            style={[styles.icon, styles.barItemLayout1]}
            resizeMode="cover"
            source={require("../assets/bar--bottom--item--inactive.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
          onPress={() => navigation.navigate("HomepageScrollingOverview")}
        >
          <Image
            style={styles.iconHome}
            resizeMode="cover"
            source={require("../assets/icon--home.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
          onPress={() => navigation.navigate("Settings1")}
        >
          <Image
            style={[styles.icon, styles.barItemLayout1]}
            resizeMode="cover"
            source={require("../assets/bar--bottom--item--inactive1.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={[styles.barTab2Project, styles.navigationPosition]}>
        <View style={styles.tabBar}>
          <View style={[styles.active, styles.activeSpaceBlock]}>
            <Text style={[styles.projects, styles.timeLayout]}>Guide</Text>
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
            resizeMode="cover"
            source={require("../assets/icon--date-and-time.png")}
          />
        </View>
        <View style={styles.priority}>
          <Text style={[styles.text, styles.textTypo]}>Low</Text>
          <Text style={[styles.deadline, styles.textTypo]}>Priority</Text>
          <Image
            style={styles.iconDateAndTime}
            resizeMode="cover"
            source={require("../assets/icon--priority.png")}
          />
        </View>
        <Text style={[styles.userflow, styles.titleTypo]}>Diversify crops</Text>
        <Image
          style={[styles.labelIcon, styles.checkboxLayout]}
          resizeMode="cover"
          source={require("../assets/label1.png")}
        />
        <View style={styles.done}>
          <Image
            style={[styles.checkboxActive, styles.checkboxLayout]}
            resizeMode="cover"
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
            resizeMode="cover"
            source={require("../assets/icon--date-and-time.png")}
          />
        </View>
        <View style={styles.priority}>
          <Text style={[styles.text, styles.textTypo]}>Mid</Text>
          <Text style={[styles.deadline, styles.textTypo]}>Priority</Text>
          <Image
            style={styles.iconDateAndTime}
            resizeMode="cover"
            source={require("../assets/icon--priority.png")}
          />
        </View>
        <Text style={[styles.userflow, styles.titleTypo]}>Invest in tools</Text>
        <Image
          style={[styles.labelIcon, styles.checkboxLayout]}
          resizeMode="cover"
          source={require("../assets/label1.png")}
        />
        <View style={styles.done}>
          <Image
            style={[styles.checkboxActive, styles.checkboxLayout]}
            resizeMode="cover"
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
            resizeMode="cover"
            source={require("../assets/icon--date-and-time.png")}
          />
        </View>
        <View style={styles.priority}>
          <Text style={[styles.text, styles.textTypo]}>High</Text>
          <Text style={[styles.deadline, styles.textTypo]}>Priority</Text>
          <Image
            style={styles.iconDateAndTime}
            resizeMode="cover"
            source={require("../assets/icon--priority.png")}
          />
        </View>
        <Text style={[styles.uiDesign, styles.userflowTypo]}>{`Up skill new
 practices`}</Text>
        <Image
          style={[styles.labelIcon, styles.checkboxLayout]}
          resizeMode="cover"
          source={require("../assets/label1.png")}
        />
        <View style={styles.done}>
          <View style={[styles.checkboxInactive, styles.checkboxLayout]} />
          <Text style={[styles.maskAsDone, styles.donePosition]}>
            Mask as Done
          </Text>
        </View>
      </View>
      <View style={[styles.cardTaskUndone1, styles.cardShadowBox]}>
        <View style={styles.dl}>
          <Text style={[styles.deadline, styles.textTypo]}>Deadline</Text>
          <Text style={[styles.text, styles.textTypo]}>12/08/2024</Text>
          <Image
            style={styles.iconDateAndTime}
            resizeMode="cover"
            source={require("../assets/icon--date-and-time.png")}
          />
        </View>
        <View style={styles.priority}>
          <Text style={[styles.text, styles.textTypo]}>High</Text>
          <Text style={[styles.deadline, styles.textTypo]}>Priority</Text>
          <Image
            style={styles.iconDateAndTime}
            resizeMode="cover"
            source={require("../assets/icon--priority.png")}
          />
        </View>
        <Text style={[styles.uiDesign, styles.userflowTypo]}>{`Switch to new
technology`}</Text>
        <Image
          style={[styles.labelIcon, styles.checkboxLayout]}
          resizeMode="cover"
          source={require("../assets/label1.png")}
        />
        <View style={styles.done}>
          <View style={[styles.checkboxInactive, styles.checkboxLayout]} />
          <Text style={[styles.maskAsDone, styles.donePosition]}>
            Mask as Done
          </Text>
        </View>
      </View>
      <View style={[styles.navigation, styles.navigationPosition]}>
        <Text style={[styles.title, styles.titleTypo]}>Feed</Text>
        <Image
          style={[styles.iconBackward, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon--backward.png")}
        />
        <Image
          style={[styles.iconCancel, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon--cancel.png")}
        />
        <Image
          style={[styles.buttonFab, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/button--fab.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.macbookandiphoneIcon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/macbookandiphone.png")}
      />
      <Image
        style={[styles.dollarsigncircleIcon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/dollarsigncircle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  barItemLayout: {
    width: 82,
    height: 64,
    top: 0,
    position: "absolute",
  },
  barItemLayout1: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  navigationPosition: {
    left: 24,
    position: "absolute",
  },
  activeSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  timeLayout: {
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  cardShadowBox1: {
    height: 210,
    elevation: 8,
    shadowRadius: 8,
    top: 264,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  textTypo: {
    lineHeight: 20,
    textAlign: "left",
    left: 24,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    position: "absolute",
  },
  titleTypo: {
    lineHeight: 28,
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    position: "absolute",
  },
  checkboxLayout: {
    borderRadius: Border.br_5xs,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  donePosition: {
    left: 32,
    marginTop: -10,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  cardPosition: {
    left: 196,
    right: 23,
  },
  cardShadowBox: {
    top: 490,
    height: 210,
    elevation: 8,
    shadowRadius: 8,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  userflowTypo: {
    fontSize: FontSize.chipLabel_size,
    left: 48,
    top: 16,
    textAlign: "left",
  },
  iconPosition: {
    display: "none",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    right: "84.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.neutral1,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  capacity: {
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    top: 2,
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
    position: "absolute",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    left: 0,
    width: 54,
  },
  timeStyle: {
    top: 12,
    height: 21,
    width: 54,
    left: 21,
    position: "absolute",
  },
  barStatus: {
    height: 44,
    top: 0,
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
  },
  barBottomItemActive: {
    left: 164,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  barBottomItemInactiv: {
    left: 82,
  },
  iconHome: {
    top: 20,
    left: 29,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  barBottomItemInactiv1: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    left: 0,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  barBottomItemInactiv2: {
    left: 246,
  },
  barBottomNotification: {
    right: 27,
    bottom: 32,
    shadowRadius: 16,
    elevation: 16,
    height: 64,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: Border.br_base,
    left: 21,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  vectorIcon: {
    height: "2.22%",
    width: "4.8%",
    top: "90.52%",
    right: "37.33%",
    bottom: "7.27%",
    left: "57.87%",
  },
  vectorIcon1: {
    height: "2.46%",
    width: "4.77%",
    top: "90.64%",
    right: "58.67%",
    bottom: "6.9%",
    left: "36.56%",
  },
  projects: {
    fontWeight: "700",
    color: Color.commonWhiteStatesMain,
    textAlign: "right",
    fontFamily: FontFamily.poppins,
  },
  active: {
    backgroundColor: Color.blue,
    borderRadius: Border.br_xs,
  },
  inactive1: {
    textAlign: "left",
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  inactive: {
    marginLeft: 16,
  },
  tabBar: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  barTab2Project: {
    top: 200,
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
    fontSize: FontSize.inputHelper_size,
    lineHeight: 20,
    color: Color.neutral2,
  },
  iconDateAndTime: {
    width: 16,
    height: 16,
    left: 0,
    top: 2,
    position: "absolute",
    overflow: "hidden",
  },
  dl: {
    top: 58,
    width: 89,
    left: 16,
    height: 44,
    position: "absolute",
  },
  priority: {
    top: 110,
    width: 74,
    left: 16,
    height: 44,
    position: "absolute",
  },
  userflow: {
    fontSize: FontSize.chipLabel_size,
    left: 48,
    top: 16,
    textAlign: "left",
  },
  labelIcon: {
    top: 18,
    left: 16,
  },
  checkboxActive: {
    left: 0,
    top: 0,
  },
  done1: {
    color: Color.orange,
  },
  done: {
    top: 170,
    width: 73,
    left: 16,
    height: 24,
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
    top: 264,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  uiDesign: {
    lineHeight: 23,
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    position: "absolute",
  },
  checkboxInactive: {
    backgroundColor: Color.neutral3,
    left: 0,
    top: 0,
  },
  maskAsDone: {
    color: Color.neutral1,
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
    top: "50%",
    left: "50%",
  },
  iconBackward: {
    marginTop: -12,
    height: 24,
    left: 0,
    width: 24,
  },
  iconCancel: {
    marginTop: -8,
    marginLeft: 139.5,
    height: 24,
    width: 24,
    left: "50%",
  },
  buttonFab: {
    marginTop: -22,
    width: 44,
    borderRadius: Border.br_xs,
    right: 0,
    height: 44,
  },
  navigation: {
    top: 60,
    width: 327,
    height: 44,
  },
  groupIcon: {
    height: "1.72%",
    width: "3.73%",
    top: "35.34%",
    bottom: "62.93%",
    left: "12%",
  },
  groupIcon1: {
    height: "1.97%",
    width: "4%",
    top: "63.05%",
    bottom: "34.98%",
    left: "11.73%",
  },
  macbookandiphoneIcon: {
    marginTop: 108,
    marginLeft: 27.5,
    width: 19,
    height: 12,
  },
  dollarsigncircleIcon: {
    marginTop: -119,
    marginLeft: 29.5,
    width: 13,
    height: 13,
  },
  aidMainPage: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default AidMainPage;
