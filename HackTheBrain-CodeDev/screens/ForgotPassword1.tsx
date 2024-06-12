import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ForgotPassword1 = () => {
  return (
    <View style={styles.forgotPassword}>
      <View style={[styles.card, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textClr]}>01/02/2021</Text>
        <Image
          style={[styles.cardChild, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardItem, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardInner, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <View style={[styles.frameView, styles.cardLayout]}>
          <View style={[styles.frameChild, styles.childCardLayout]} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout]}>
            <View style={[styles.indicator1, styles.indicatorPosition]} />
            <View style={[styles.indicator2, styles.indicatorPosition]} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={[styles.rectangleView, styles.ellipseIconPosition]} />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <View style={[styles.card1, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textClr]}>01/02/2021</Text>
        <Image
          style={[styles.cardChild, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardItem, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardInner, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <View style={[styles.frameView, styles.cardLayout]}>
          <View style={[styles.frameChild, styles.childCardLayout]} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout]}>
            <View style={[styles.indicator1, styles.indicatorPosition]} />
            <View style={[styles.indicator2, styles.indicatorPosition]} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={[styles.rectangleView, styles.ellipseIconPosition]} />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <View style={[styles.barHomeIndicator, styles.barLayout]}>
        <View style={[styles.homeIndicator, styles.childPosition]} />
      </View>
      <Text style={[styles.project, styles.childPosition]}>Project</Text>
      <View style={[styles.forgotPasswordChild, styles.iconLayout]} />
      <View style={[styles.barTab2Project, styles.barLayout]}>
        <View style={[styles.tabBar, styles.indicatorPosition]}>
          <View style={[styles.active, styles.activeSpaceBlock]}>
            <Text style={[styles.projects, styles.buttonClr]}>Projects</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.text16Typo]}>Completed</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.text16Typo]}>Flag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card2, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textClr]}>01/02/2021</Text>
        <Image
          style={[styles.cardChild, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardItem, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardInner, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <View style={[styles.frameView, styles.cardLayout]}>
          <View style={[styles.frameChild, styles.childCardLayout]} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout]}>
            <View style={[styles.indicator1, styles.indicatorPosition]} />
            <View style={[styles.indicator2, styles.indicatorPosition]} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={[styles.rectangleView, styles.ellipseIconPosition]} />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <View style={[styles.card3, styles.datePosition]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textClr]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textClr]}>01/02/2021</Text>
        <Image
          style={[styles.cardChild, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardItem, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.cardInner, styles.cardLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <View style={[styles.frameView, styles.cardLayout]}>
          <View style={[styles.frameChild, styles.childCardLayout]} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout]}>
            <View style={[styles.indicator1, styles.indicatorPosition]} />
            <View style={[styles.indicator2, styles.indicatorPosition]} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={[styles.rectangleView, styles.ellipseIconPosition]} />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <Image
        style={[styles.buttonFab, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/button--fab1.png")}
      />
      <View style={[styles.overlay, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition]} />
      </View>
      <View style={[styles.card4, styles.card4Position]}>
        <View style={[styles.cardChild27, styles.childPosition]} />
        <View style={[styles.date, styles.textLayout]}>
          <Image
            style={[styles.labelIcon, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/label1.png")}
          />
          <Text style={[styles.jan12021, styles.text16Position]}>
            Jan 1 2024
          </Text>
        </View>
        <View style={[styles.navigation, styles.card4Position]}>
          <Text style={[styles.search, styles.childPosition]}>
            Forgot Password
          </Text>
          <Image
            style={[styles.iconBackward, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--backward.png")}
          />
          <Image
            style={[styles.iconCancel, styles.text17Position]}
            contentFit="cover"
            source={require("../assets/icon--cancel.png")}
          />
        </View>
        <Text style={[styles.keyInUser, styles.text16Typo]}>
          Key in user email
        </Text>
        <View style={[styles.textFieldPrimaryText, styles.textLayout]}>
          <Text
            style={[styles.text16, styles.text16Position]}
          >{` .           HackerBrain1@gmail.com `}</Text>
          <Image
            style={[styles.iconUser, styles.text16Position]}
            contentFit="cover"
            source={require("../assets/icon--user.png")}
          />
        </View>
        <View style={[styles.buttonPrimaryTextAble, styles.textLayout]}>
          <View style={[styles.text17, styles.text17Position]}>
            <Text style={[styles.button, styles.buttonClr]}>
              Get reset code
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.mdialertIcon}
        contentFit="cover"
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
    position: "absolute",
    overflow: "hidden",
  },
  searchTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  text2FlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text3Typo: {
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.textColor,
  },
  indicatorLayout: {
    width: 167,
    height: 8,
  },
  indicatorPosition: {
    top: 0,
    left: 0,
  },
  cardChildPosition: {
    top: 70,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 134,
    position: "absolute",
  },
  barLayout: {
    height: 40,
    position: "absolute",
  },
  childPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  activeSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonClr: {
    color: Color.universalWhite,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  text16Typo: {
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  datePosition: {
    top: 364,
    left: 24,
  },
  textPosition: {
    right: 28,
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
  textLayout: {
    height: 48,
    position: "absolute",
  },
  text16Position: {
    top: 12,
    position: "absolute",
  },
  text17Position: {
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  maneUikit: {
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
    fontWeight: "700",
    top: 24,
    left: 24,
    position: "absolute",
  },
  text: {
    left: 48,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    top: 68,
    position: "absolute",
  },
  text1: {
    left: 227,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    position: "absolute",
    top: "50%",
  },
  frameView: {
    left: 275,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.textColor,
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
    height: 8,
    width: 167,
    position: "absolute",
  },
  indicator2: {
    width: 91,
    borderRadius: Border.br_5xs,
    left: 0,
    height: 8,
    backgroundColor: Color.textColor,
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
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
    left: 24,
  },
  cardChild2: {
    left: 203,
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  rectangleView: {
    top: 77,
    borderStyle: "dashed",
    borderColor: Color.neutral2,
    borderWidth: 1,
    width: 57,
    height: 2,
    borderRadius: Border.br_9xs,
    left: 134,
  },
  ellipseIcon: {
    top: 74,
    width: 8,
    height: 8,
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
  },
  card1: {
    top: 708,
    left: 24,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.textColor,
  },
  barHomeIndicator: {
    marginLeft: -187.5,
    width: 375,
    bottom: 0,
    height: 40,
    left: "50%",
  },
  project: {
    marginLeft: -32.5,
    textAlign: "center",
    top: 68,
    color: Color.textColor,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
  },
  forgotPasswordChild: {
    backgroundColor: Color.neutral2,
    top: 70,
    position: "absolute",
    borderRadius: Border.br_5xs,
    left: 24,
  },
  projects: {
    textAlign: "right",
    fontFamily: FontFamily.poppinsBold,
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
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  barTab2Project: {
    top: 128,
    width: 313,
    left: 24,
  },
  card2: {
    top: 192,
    left: 24,
  },
  card3: {
    height: 148,
    right: 24,
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_base,
    position: "absolute",
    overflow: "hidden",
  },
  buttonFab: {
    width: 44,
    height: 44,
    borderRadius: Border.br_xs,
    top: 68,
    position: "absolute",
  },
  modal: {
    opacity: 0.5,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    backgroundColor: Color.textColor,
  },
  overlay: {
    opacity: 0.7,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  cardChild27: {
    marginLeft: -31.5,
    top: 16,
    width: 64,
    height: 4,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutral3,
    left: "50%",
  },
  labelIcon: {
    borderRadius: Border.br_29xl,
    width: 48,
    display: "none",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  jan12021: {
    left: 56,
    display: "none",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.textColor,
  },
  date: {
    width: 142,
    top: 364,
    left: 24,
  },
  search: {
    marginTop: -14,
    marginLeft: -76.5,
    textAlign: "center",
    top: "50%",
    left: "50%",
    color: Color.textColor,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
  },
  iconBackward: {
    top: 2,
    display: "none",
    left: 0,
    position: "absolute",
  },
  iconCancel: {
    marginLeft: 139.5,
    height: 24,
    width: 24,
    overflow: "hidden",
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
    color: Color.textColor,
    position: "absolute",
  },
  text16: {
    left: -51,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.textColor,
  },
  iconUser: {
    display: "none",
    height: 24,
    width: 24,
    overflow: "hidden",
    left: 24,
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
    right: 28,
    overflow: "hidden",
    borderRadius: Border.br_base,
    height: 48,
    backgroundColor: Color.universalWhite,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text17: {
    marginLeft: -59.5,
    flexDirection: "row",
    marginTop: -12,
  },
  buttonPrimaryTextAble: {
    top: 336,
    right: 23,
    left: 25,
    backgroundColor: Color.colorMediumspringgreen_200,
    borderRadius: Border.br_base,
    height: 48,
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
    backgroundColor: Color.universalWhite,
  },
  mdialertIcon: {
    top: 124,
    left: 127,
    width: 136,
    height: 136,
    position: "absolute",
    overflow: "hidden",
  },
  forgotPassword: {
    flex: 1,
    height: 851,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default ForgotPassword1;
