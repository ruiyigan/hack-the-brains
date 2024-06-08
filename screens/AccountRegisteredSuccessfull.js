import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AccountRegisteredSuccessfull = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountRegisteredSuccessfull}>
      <View style={[styles.card, styles.cardPosition]}>
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
      <View style={[styles.card1, styles.cardPosition]}>
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
      <View style={[styles.barStatus, styles.barStatusLayout]}>
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
      <View
        style={[styles.accountRegisteredSuccessfullChild, styles.iconLayout]}
      />
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
      <View style={[styles.card2, styles.cardPosition]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>Please</Text>
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
      <View style={[styles.card3, styles.cardPosition]}>
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
        style={[styles.buttonFab, styles.barStatusLayout]}
        resizeMode="cover"
        source={require("../assets/button--fab1.png")}
      />
      <View style={[styles.overlay, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition]} />
      </View>
      <View style={[styles.card4, styles.modalPosition]}>
        <View style={[styles.cardChild27, styles.capIconLayout]} />
        <View style={[styles.barHomeIndicator, styles.barLayout]}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={[styles.navigation, styles.cardLayout]}>
          <Text style={[styles.search, styles.searchTypo]}>
            Account created!
          </Text>
          <Image
            style={[styles.iconBackward, styles.iconCommon]}
            resizeMode="cover"
            source={require("../assets/icon--backward.png")}
          />
          <Pressable
            style={[styles.iconCancel, styles.iconLayout]}
            onPress={() => navigation.navigate("SignInPasswordHidden")}
          >
            <Image
              style={[styles.icon, styles.iconCommon]}
              resizeMode="cover"
              source={require("../assets/icon--cancel.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.welcomeOnboard, styles.searchTypo]}>
          Welcome onboard!
        </Text>
        <Pressable
          style={styles.buttonPrimaryTextAble}
          onPress={() => navigation.navigate("SignInPasswordHidden")}
        >
          <View style={styles.text15}>
            <Text style={[styles.button, styles.buttonTypo]}>
              Return to Sign in Page
            </Text>
          </View>
        </Pressable>
        <View style={styles.mdialert} />
        <Image
          style={styles.mdisuccessCircleOutlineIcon}
          resizeMode="cover"
          source={require("../assets/mdisuccesscircleoutline.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    height: 148,
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_base,
    left: 24,
    right: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searchTypo: {
    fontFamily: FontFamily.poppins,
    lineHeight: 28,
    color: Color.neutral1,
    position: "absolute",
  },
  textClr: {
    color: Color.neutral2,
    textAlign: "left",
  },
  cardLayout: {
    height: 28,
    position: "absolute",
  },
  childCardLayout: {
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    position: "absolute",
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
    overflow: "hidden",
  },
  borderLayout: {
    borderWidth: 1,
    position: "absolute",
  },
  barStatusLayout: {
    height: 44,
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
    position: "absolute",
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
  modalPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconCommon: {
    display: "none",
    overflow: "hidden",
  },
  maneUikit: {
    textAlign: "left",
    color: Color.neutral1,
    fontWeight: "700",
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    top: 24,
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
    width: 28,
    height: 28,
    top: 24,
  },
  cardItem: {
    left: 255,
    width: 28,
    height: 28,
    top: 24,
  },
  cardInner: {
    left: 235,
    width: 28,
    height: 28,
    top: 24,
  },
  frameChild: {
    marginTop: -8,
    marginLeft: -8,
    left: "50%",
    top: "50%",
    overflow: "hidden",
  },
  frameView: {
    left: 275,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.neutral1,
    width: 28,
    height: 28,
    top: 24,
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
    position: "absolute",
    backgroundColor: Color.commonWhiteStatesMain,
    left: 24,
  },
  cardChild2: {
    left: 203,
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    position: "absolute",
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
  },
  card1: {
    top: 708,
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
    top: 12,
    left: 21,
    height: 21,
  },
  barStatus: {
    width: 375,
    marginLeft: -187.5,
    height: 44,
    top: 0,
    left: "50%",
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
    fontWeight: "700",
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
  },
  accountRegisteredSuccessfullChild: {
    backgroundColor: Color.neutral2,
    top: 70,
    overflow: "hidden",
    borderRadius: Border.br_5xs,
    left: 24,
  },
  projects: {
    textAlign: "right",
    fontWeight: "700",
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
  },
  card3: {
    top: 364,
  },
  buttonFab: {
    right: 28,
    width: 44,
    borderRadius: Border.br_xs,
    top: 68,
    overflow: "hidden",
  },
  modal: {
    opacity: 0.5,
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    backgroundColor: Color.neutral1,
  },
  overlay: {
    opacity: 0.7,
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
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
  search: {
    marginTop: -14,
    marginLeft: -80.5,
    textAlign: "center",
    left: "50%",
    top: "50%",
    color: Color.neutral1,
    fontWeight: "700",
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
  },
  iconBackward: {
    height: 24,
    width: 24,
    position: "absolute",
    top: 2,
    left: 0,
  },
  icon: {
    marginLeft: 139.5,
    marginTop: -12,
    height: "100%",
    display: "none",
    width: "100%",
  },
  iconCancel: {
    left: "50%",
    top: "50%",
  },
  navigation: {
    top: 113,
    left: 23,
    width: 327,
  },
  welcomeOnboard: {
    marginTop: 0,
    marginLeft: -63.5,
    fontSize: FontSize.chipLabel_size,
    textAlign: "center",
    left: "50%",
    top: "50%",
    color: Color.neutral1,
  },
  button: {
    textAlign: "center",
    fontWeight: "500",
  },
  text15: {
    marginLeft: -89,
    marginTop: -12,
    flexDirection: "row",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonPrimaryTextAble: {
    top: 500,
    backgroundColor: Color.colorMediumspringgreen_200,
    height: 48,
    borderRadius: Border.br_base,
    right: 24,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  mdialert: {
    top: 296,
    left: 121,
    width: 136,
    height: 136,
    position: "absolute",
    overflow: "hidden",
  },
  mdisuccessCircleOutlineIcon: {
    top: 172,
    left: 99,
    width: 186,
    height: 181,
    position: "absolute",
    overflow: "hidden",
  },
  card4: {
    top: 44,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    left: "0%",
    right: "0%",
    bottom: 0,
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  accountRegisteredSuccessfull: {
    flex: 1,
    height: 820,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default AccountRegisteredSuccessfull;
