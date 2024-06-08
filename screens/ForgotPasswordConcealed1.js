import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ForgotPasswordConcealed1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPasswordConcealed}>
      <View style={[styles.card, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textClr]}>01/02/2021</Text>
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
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
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
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textClr]}>01/02/2021</Text>
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
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barHomeIndicator, styles.barLayout]}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={[styles.project, styles.searchTypo]}>Project</Text>
      <View style={[styles.forgotPasswordConcealedChild, styles.iconLayout]} />
      <View style={[styles.barTab2Project, styles.barLayout]}>
        <View style={[styles.tabBar, styles.text2FlexBox]}>
          <View style={[styles.active, styles.activeSpaceBlock]}>
            <Text style={[styles.projects, styles.buttonTypo]}>Projects</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.timeTypo]}>Completed</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.timeTypo]}>Flag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card2, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textClr]}>01/02/2021</Text>
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
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
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
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textClr]}>01/02/2021</Text>
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
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
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
        style={[styles.buttonFab, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/button--fab1.png")}
      />
      <View style={[styles.overlay, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition]} />
      </View>
      <View style={[styles.card4, styles.card4Position]}>
        <View style={[styles.cardChild27, styles.capIconLayout]} />
        <View style={[styles.barHomeIndicator, styles.barLayout]}>
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
          <Text style={[styles.search, styles.searchTypo]}>
            Forgot Password
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
        <Text style={[styles.keyInUser, styles.timeTypo]}>
          Key in user email
        </Text>
        <View style={[styles.textFieldPrimaryText, styles.textPosition]}>
          <Text
            style={[styles.text16, styles.timeTypo]}
          >{` .           HackerBrain1@gmail.com `}</Text>
          <Image
            style={[styles.iconUser, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon--user.png")}
          />
        </View>
        <Pressable
          style={[styles.buttonPrimaryTextAble, styles.textLayout1]}
          onPress={() => navigation.navigate("ForgotPasswordConcealed")}
        >
          <View style={styles.text17}>
            <Text style={[styles.button, styles.buttonTypo]}>
              Get reset code
            </Text>
          </View>
        </Pressable>
      </View>
      <Image
        style={styles.mdialertIcon}
        resizeMode="cover"
        source={require("../assets/mdialert1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout1: {
    height: 148,
    right: 24,
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  searchTypo: {
    fontFamily: FontFamily.poppins,
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
    color: Color.neutral1,
    fontWeight: "700",
    position: "absolute",
  },
  textClr: {
    color: Color.neutral2,
    textAlign: "left",
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
    fontSize: FontSize.inputHelper_size,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
  },
  indicatorLayout: {
    width: 167,
    height: 8,
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
  timeTypo: {
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  barLayout: {
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  activeSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonTypo: {
    color: Color.commonWhiteStatesMain,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.poppins,
  },
  datePosition: {
    top: 364,
    left: 24,
    position: "absolute",
  },
  textPosition: {
    right: 28,
    position: "absolute",
    overflow: "hidden",
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
  textLayout1: {
    borderRadius: Border.br_base,
    height: 48,
  },
  maneUikit: {
    textAlign: "left",
    color: Color.neutral1,
    top: 24,
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
    left: 24,
  },
  text: {
    left: 48,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    top: 68,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  text1: {
    left: 227,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    top: 68,
    fontFamily: FontFamily.poppins,
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
    textAlign: "right",
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
    textAlign: "center",
    width: 54,
    position: "absolute",
    left: 0,
    top: "50%",
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
    bottom: 0,
    height: 40,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
  },
  project: {
    marginLeft: -32.5,
    textAlign: "center",
    left: "50%",
    top: 68,
    color: Color.neutral1,
  },
  forgotPasswordConcealedChild: {
    backgroundColor: Color.neutral2,
    top: 70,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_5xs,
    left: 24,
  },
  projects: {
    textAlign: "right",
    fontWeight: "700",
    color: Color.commonWhiteStatesMain,
  },
  active: {
    backgroundColor: Color.blue,
    borderRadius: Border.br_xs,
  },
  inactive1: {
    color: Color.neutral2,
    textAlign: "left",
  },
  inactive: {
    marginLeft: 16,
  },
  tabBar: {
    left: 0,
    top: 0,
  },
  barTab2Project: {
    top: 128,
    width: 313,
    left: 24,
  },
  card2: {
    top: 192,
    left: 24,
    position: "absolute",
  },
  card3: {
    height: 148,
    right: 24,
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  buttonFab: {
    width: 44,
    borderRadius: Border.br_xs,
    height: 44,
    top: 68,
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
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    top: 12,
    textAlign: "left",
    color: Color.neutral1,
  },
  date: {
    width: 142,
    height: 48,
  },
  search: {
    marginTop: -14,
    marginLeft: -76.5,
    textAlign: "center",
    left: "50%",
    top: "50%",
    color: Color.neutral1,
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
  keyInUser: {
    top: 236,
    left: 33,
    textAlign: "left",
    color: Color.neutral1,
    position: "absolute",
  },
  text16: {
    left: -51,
    textAlign: "center",
    top: 12,
    color: Color.neutral1,
    position: "absolute",
  },
  iconUser: {
    height: 24,
    width: 24,
    top: 12,
    left: 24,
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    top: 272,
    left: 30,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 48,
    borderRadius: Border.br_base,
    backgroundColor: Color.commonWhiteStatesMain,
    right: 28,
  },
  button: {
    textAlign: "center",
    fontWeight: "500",
  },
  text17: {
    marginLeft: -59.5,
    marginTop: -12,
    flexDirection: "row",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonPrimaryTextAble: {
    top: 336,
    right: 23,
    left: 25,
    backgroundColor: Color.colorMediumspringgreen_200,
    height: 48,
    position: "absolute",
    overflow: "hidden",
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
  mdialertIcon: {
    top: 124,
    left: 127,
    width: 136,
    height: 136,
    position: "absolute",
    overflow: "hidden",
  },
  forgotPasswordConcealed: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default ForgotPasswordConcealed1;
