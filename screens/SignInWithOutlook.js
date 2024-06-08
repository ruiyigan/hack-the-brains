import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SignInWithOutlook = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signInWithOutlook}>
      <View style={[styles.card, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.tasksTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textTypo1]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textTypo1]}>01/02/2021</Text>
        <Image
          style={[styles.cardChild, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardItem, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardInner, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <View style={[styles.frameView, styles.cardLayout]}>
          <View style={[styles.frameChild, styles.childCardLayout]} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout]}>
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo1]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={[styles.rectangleView, styles.borderLayout]} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          resizeMode="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <View style={[styles.card1, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.tasksTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textTypo1]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textTypo1]}>01/02/2021</Text>
        <Image
          style={[styles.cardChild, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardItem, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardInner, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <View style={[styles.frameView, styles.cardLayout]}>
          <View style={[styles.frameChild, styles.childCardLayout]} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout]}>
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo1]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={[styles.rectangleView, styles.borderLayout]} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          resizeMode="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <View style={styles.barStatus}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={[styles.capIcon, styles.capIconLayout]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
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
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.textTypo]}>9:41</Text>
        </View>
      </View>
      <View style={styles.barHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={[styles.project, styles.textTypo]}>Project</Text>
      <View style={[styles.signInWithOutlookChild, styles.iconLayout]} />
      <View style={[styles.barTab2Project, styles.outlookIconPosition]}>
        <View style={[styles.tabBar, styles.text2FlexBox]}>
          <View style={[styles.active, styles.activeSpaceBlock]}>
            <Text style={[styles.projects, styles.textLayout]}>Projects</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.textLayout]}>Completed</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.textLayout]}>Flag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card2, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.tasksTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textTypo1]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textTypo1]}>01/02/2021</Text>
        <Image
          style={[styles.cardChild, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardItem, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardInner, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <View style={[styles.frameView, styles.cardLayout]}>
          <View style={[styles.frameChild, styles.childCardLayout]} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout]}>
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo1]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={[styles.rectangleView, styles.borderLayout]} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          resizeMode="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <View style={[styles.card3, styles.datePosition]}>
        <Text style={[styles.maneUikit, styles.tasksTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textTypo1]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textTypo1]}>01/02/2021</Text>
        <Image
          style={[styles.cardChild, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardItem, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardInner, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <View style={[styles.frameView, styles.cardLayout]}>
          <View style={[styles.frameChild, styles.childCardLayout]} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout]}>
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo1]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={[styles.rectangleView, styles.borderLayout]} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          resizeMode="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <Image
        style={styles.buttonFab}
        resizeMode="cover"
        source={require("../assets/button--fab1.png")}
      />
      <View style={[styles.overlay, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition]} />
      </View>
      <View style={[styles.card4, styles.card4Position]}>
        <View style={[styles.cardChild27, styles.capIconLayout]} />
        <Text style={[styles.email, styles.textLayout]}>Email</Text>
        <Text style={styles.password}>Password</Text>
        <View style={styles.barHomeIndicator}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={[styles.date, styles.datePosition]}>
          <Image
            style={[styles.labelIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/label.png")}
          />
          <Text style={[styles.jan12021, styles.iconPosition]}>Jan 1 2024</Text>
        </View>
        <View style={[styles.navigation, styles.card4Position]}>
          <Text style={[styles.search, styles.textTypo]}>
            Sign In with Outlook
          </Text>
          <Image
            style={[styles.iconBackward, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon--backward.png")}
          />
          <Pressable
            style={[styles.iconCancel, styles.iconLayout]}
            onPress={() => navigation.navigate("SignInPasswordHidden")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon--cancel.png")}
            />
          </Pressable>
        </View>
        <View style={styles.textShadowBox1}>
          <Text style={[styles.text16, styles.textTypo]}>
            <Text style={styles.hackerbrain1}>{`HackerBrain1    `}</Text>
            <Text style={styles.text17}>__</Text>
          </Text>
          <Image
            style={[styles.iconUser, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon--user.png")}
          />
        </View>
        <View style={styles.textShadowBox1}>
          <Text style={[styles.text18, styles.textTypo]}>
            <Text
              style={styles.hackerbrain1}
            >{` .                          HackerBrain1@outlook.com     `}</Text>
            <Text style={styles.text17}>__</Text>
          </Text>
          <Image
            style={[styles.iconUser, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon--user.png")}
          />
        </View>
        <View style={[styles.textFieldPrimaryText2, styles.textPosition]}>
          <Text style={[styles.text20, styles.textTypo]}>
            *****************
          </Text>
          <Image
            style={[styles.iconUser, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon--password.png")}
          />
          <Image
            style={[styles.iconEyes, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--eyes.png")}
          />
        </View>
        <Text style={styles.password}>Password</Text>
        <View style={[styles.textFieldPrimaryText21, styles.textPosition]}>
          <Text style={[styles.text20, styles.textTypo]}>
            *****************
          </Text>
          <Image
            style={[styles.iconUser, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon--password.png")}
          />
          <Image
            style={[styles.iconEyes, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--eyes.png")}
          />
        </View>
        <Pressable
          style={[styles.buttonPrimaryTextAble, styles.textPosition]}
          onPress={() => navigation.navigate("HomepageScrollingOverview")}
        >
          <View style={styles.text22}>
            <Text style={[styles.button, styles.textTypo]}>Sign In</Text>
          </View>
        </Pressable>
      </View>
      <Image
        style={[styles.outlookIcon, styles.outlookIconPosition]}
        resizeMode="cover"
        source={require("../assets/outlook.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout1: {
    height: 148,
    borderRadius: Border.br_base,
    right: 24,
    backgroundColor: Color.neutral3,
    overflow: "hidden",
  },
  tasksTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  textTypo1: {
    color: Color.neutral2,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  cardLayout: {
    width: 28,
    height: 28,
    top: 24,
    position: "absolute",
  },
  childCardLayout: {
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  text2FlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text3Typo: {
    textAlign: "right",
    fontFamily: FontFamily.poppins,
  },
  indicatorLayout: {
    width: 167,
    height: 8,
  },
  text3Typo1: {
    fontSize: FontSize.inputHelper_size,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.neutral1,
  },
  cardChildPosition: {
    top: 70,
    position: "absolute",
    overflow: "hidden",
  },
  borderLayout: {
    borderWidth: 1,
    position: "absolute",
  },
  capIconLayout: {
    height: 4,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  outlookIconPosition: {
    top: 128,
    position: "absolute",
  },
  activeSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  textLayout: {
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  datePosition: {
    top: 364,
    left: 24,
    position: "absolute",
  },
  modalPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  card4Position: {
    top: 44,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  textPosition: {
    left: 23,
    right: 25,
    height: 48,
    borderRadius: Border.br_base,
    position: "absolute",
    overflow: "hidden",
  },
  maneUikit: {
    color: Color.neutral1,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
    position: "absolute",
    top: 24,
    fontFamily: FontFamily.poppins,
    left: 24,
  },
  text: {
    left: 48,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    top: 68,
    position: "absolute",
  },
  text1: {
    left: 227,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    top: 68,
    position: "absolute",
  },
  cardChild: {
    left: 215,
    height: 28,
  },
  cardItem: {
    left: 255,
    height: 28,
  },
  cardInner: {
    left: 235,
    height: 28,
  },
  frameChild: {
    marginTop: -8,
    marginLeft: -8,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  frameView: {
    left: 275,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.neutral1,
    height: 28,
    overflow: "hidden",
  },
  text3: {
    fontSize: FontSize.inputHelper_size,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.neutral1,
  },
  indicator1: {
    backgroundColor: Color.overlayModal,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 8,
    position: "absolute",
  },
  indicator2: {
    width: 91,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 8,
    backgroundColor: Color.neutral1,
    position: "absolute",
  },
  indicator: {
    marginLeft: 8,
    height: 8,
  },
  tasks: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  text2: {
    top: 104,
    left: 24,
  },
  cardChild1: {
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.commonWhiteStatesMain,
    left: 24,
  },
  cardChild2: {
    left: 203,
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  rectangleView: {
    top: 77,
    borderStyle: "dashed",
    borderColor: Color.neutral2,
    width: 57,
    height: 2,
    left: 134,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
  },
  ellipseIcon: {
    top: 74,
    width: 8,
    left: 134,
    height: 8,
    position: "absolute",
  },
  polygonIcon: {
    top: 71,
    left: 179,
    borderRadius: Border.br_11xs,
    width: 14,
    height: 14,
    position: "absolute",
  },
  card: {
    top: 536,
    left: 24,
    position: "absolute",
  },
  card1: {
    top: 708,
    left: 24,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.neutral1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    top: 2,
    backgroundColor: Color.neutral1,
    position: "absolute",
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
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    width: 54,
    position: "absolute",
    left: 0,
    top: "50%",
    fontWeight: "500",
    color: Color.neutral1,
  },
  timeStyle: {
    left: 21,
    height: 21,
    top: 12,
  },
  barStatus: {
    height: 44,
    width: 375,
    marginLeft: -187.5,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
    backgroundColor: Color.neutral1,
    position: "absolute",
  },
  barHomeIndicator: {
    height: 40,
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  project: {
    marginLeft: -32.5,
    left: "50%",
    top: 68,
    textAlign: "center",
    color: Color.neutral1,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
    position: "absolute",
  },
  signInWithOutlookChild: {
    backgroundColor: Color.neutral2,
    top: 70,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_5xs,
    left: 24,
  },
  projects: {
    color: Color.commonWhiteStatesMain,
    textAlign: "right",
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
  },
  active: {
    backgroundColor: Color.blue,
    borderRadius: Border.br_xs,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  inactive1: {
    color: Color.neutral2,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  inactive: {
    marginLeft: 16,
  },
  tabBar: {
    left: 0,
    top: 0,
  },
  barTab2Project: {
    width: 313,
    height: 40,
    left: 24,
  },
  card2: {
    top: 192,
    left: 24,
    position: "absolute",
  },
  card3: {
    height: 148,
    borderRadius: Border.br_base,
    right: 24,
    backgroundColor: Color.neutral3,
    overflow: "hidden",
  },
  buttonFab: {
    width: 44,
    right: 28,
    borderRadius: Border.br_xs,
    height: 44,
    top: 68,
    position: "absolute",
    overflow: "hidden",
  },
  modal: {
    opacity: 0.5,
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.neutral1,
  },
  overlay: {
    opacity: 0.7,
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
  },
  cardChild27: {
    marginLeft: -31.5,
    top: 16,
    width: 64,
    borderRadius: Border.br_5xs,
    left: "50%",
    backgroundColor: Color.neutral3,
    height: 4,
  },
  email: {
    top: 236,
    left: 33,
    fontWeight: "500",
    fontSize: FontSize.inputValue_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    color: Color.neutral1,
    position: "absolute",
  },
  password: {
    top: 348,
    left: 30,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontWeight: "500",
    textAlign: "left",
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  labelIcon: {
    borderRadius: Border.br_29xl,
    width: 48,
    height: 48,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  jan12021: {
    left: 56,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    top: 12,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    color: Color.neutral1,
  },
  date: {
    width: 142,
    height: 48,
  },
  search: {
    marginTop: -14,
    marginLeft: -90.5,
    left: "50%",
    top: "50%",
    color: Color.neutral1,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
    position: "absolute",
  },
  iconBackward: {
    height: 24,
    width: 24,
    top: 2,
    left: 0,
    overflow: "hidden",
  },
  icon: {
    marginLeft: 139.5,
    marginTop: -12,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconCancel: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  navigation: {
    width: 327,
    height: 28,
    left: 24,
  },
  hackerbrain1: {
    color: Color.neutral1,
  },
  text17: {
    color: Color.commonWhiteStatesMain,
  },
  text16: {
    left: 7,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    top: 12,
    fontWeight: "500",
    position: "absolute",
  },
  iconUser: {
    height: 24,
    width: 24,
    top: 12,
    left: 24,
    overflow: "hidden",
  },
  textShadowBox1: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    top: 272,
    height: 48,
    left: 30,
    right: 28,
    borderRadius: Border.br_base,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  text18: {
    left: -111,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    top: 12,
    fontWeight: "500",
    position: "absolute",
  },
  text20: {
    left: 11,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    top: 12,
    fontWeight: "500",
    color: Color.neutral1,
    position: "absolute",
  },
  iconEyes: {
    left: 279,
    top: 12,
    position: "absolute",
    overflow: "hidden",
  },
  textFieldPrimaryText2: {
    top: 400,
    right: 25,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  textFieldPrimaryText21: {
    top: 400,
    right: 25,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  button: {
    color: Color.commonWhiteStatesMain,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontWeight: "500",
  },
  text22: {
    marginLeft: -27.5,
    marginTop: -12,
    flexDirection: "row",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonPrimaryTextAble: {
    top: 506,
    backgroundColor: Color.colorMediumspringgreen_200,
  },
  card4: {
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    left: "0%",
    right: "0%",
    width: "100%",
    top: 44,
    bottom: 0,
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  outlookIcon: {
    width: 108,
    height: 108,
    left: 134,
  },
  signInWithOutlook: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default SignInWithOutlook;
