import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.forgotPassword}>
      <View style={[styles.card, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textTypo]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textTypo]}>01/02/2021</Text>
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
        <Text style={[styles.text, styles.textTypo]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textTypo]}>01/02/2021</Text>
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
            <Text style={[styles.projects, styles.newLayout]}>Projects</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.newLayout]}>Completed</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.newLayout]}>Flag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card2, styles.cardLayout1]}>
        <Text style={[styles.maneUikit, styles.searchTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textTypo]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textTypo]}>01/02/2021</Text>
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
        <Text style={[styles.text, styles.textTypo]}>01/01/2021</Text>
        <Text style={[styles.text1, styles.textTypo]}>01/02/2021</Text>
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
        style={styles.buttonFab}
        contentFit="cover"
        source={require("../assets/button--fab1.png")}
      />
      <View style={[styles.overlay, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition]} />
      </View>
      <View style={[styles.card4, styles.card4Position]}>
        <View style={[styles.cardChild27, styles.childPosition]} />
        <View style={[styles.date, styles.dateLayout]}>
          <Image
            style={[styles.labelIcon, styles.dateLayout]}
            contentFit="cover"
            source={require("../assets/label1.png")}
          />
          <Text style={[styles.jan12021, styles.iconPosition1]}>
            Jan 1 2024
          </Text>
        </View>
        <View style={[styles.navigation, styles.card4Position]}>
          <Text style={[styles.search, styles.childPosition]}>
            Reset Password
          </Text>
          <Image
            style={[styles.iconBackward, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--backward.png")}
          />
          <Image
            style={[styles.iconCancel, styles.text16Position]}
            contentFit="cover"
            source={require("../assets/icon--cancel.png")}
          />
        </View>
        <Pressable
          style={[styles.buttonPrimaryTextAble, styles.dateLayout]}
          onPress={() => navigation.navigate("PasswordResetSuccess")}
        >
          <View style={[styles.text16, styles.text16Position]}>
            <Text style={[styles.button, styles.newLayout]}>
              Reset Password
            </Text>
          </View>
        </Pressable>
        <Image
          style={styles.mdialertIcon}
          contentFit="cover"
          source={require("../assets/mdialert.png")}
        />
        <View style={[styles.textFieldPrimaryText2, styles.textShadowBox]}>
          <Text style={[styles.text17, styles.iconPosition1]}>
            <Text
              style={styles.ha635}
            >{` .              Ha6\;’3@#5_                  `}</Text>
            <Text style={styles.text18}>__</Text>
          </Text>
          <Image
            style={[styles.iconPassword, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/icon--password.png")}
          />
          <Image
            style={[styles.iconEyes, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/icon--eyes.png")}
          />
        </View>
        <Pressable
          style={[styles.iconEyes1, styles.iconPosition]}
          onPress={() => navigation.navigate("ForgotPasswordConcealed")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--eyes1.png")}
          />
        </Pressable>
        <Text style={[styles.newPassword, styles.newLayout]}>New Password</Text>
        <View style={[styles.textFieldPrimaryText21, styles.textShadowBox]}>
          <Text style={[styles.text17, styles.iconPosition1]}>
            <Text
              style={styles.ha635}
            >{` .              Ha6\;’3@#5_                  `}</Text>
            <Text style={styles.text18}>__</Text>
          </Text>
          <Image
            style={[styles.iconPassword, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/icon--password.png")}
          />
          <Image
            style={[styles.iconEyes, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/icon--eyes.png")}
          />
        </View>
        <Pressable
          style={[styles.iconEyes3, styles.iconPosition]}
          onPress={() => navigation.navigate("ForgotPasswordConcealed")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--eyes1.png")}
          />
        </Pressable>
        <Text style={[styles.confirmNewPassword, styles.newLayout]}>
          Confirm New Password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout1: {
    height: 148,
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_base,
    right: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searchTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  textTypo: {
    color: Color.neutral2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
  newLayout: {
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  datePosition: {
    top: 364,
    left: 24,
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
  dateLayout: {
    height: 48,
    position: "absolute",
  },
  iconPosition1: {
    top: 12,
    position: "absolute",
  },
  text16Position: {
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    borderRadius: Border.br_base,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  iconPosition: {
    left: 314,
    height: 24,
    width: 24,
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
    color: Color.universalWhite,
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_base,
    right: 24,
    position: "absolute",
    overflow: "hidden",
  },
  buttonFab: {
    right: 28,
    width: 44,
    height: 44,
    borderRadius: Border.br_xs,
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
    backgroundColor: Color.textColor,
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
    marginLeft: -72.5,
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
  button: {
    color: Color.universalWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  text16: {
    marginLeft: -64,
    flexDirection: "row",
    marginTop: -12,
  },
  buttonPrimaryTextAble: {
    top: 500,
    backgroundColor: Color.colorMediumspringgreen_200,
    borderRadius: Border.br_base,
    height: 48,
    left: 24,
    right: 24,
    overflow: "hidden",
  },
  mdialertIcon: {
    top: 64,
    left: 130,
    width: 136,
    height: 136,
    position: "absolute",
    overflow: "hidden",
  },
  ha635: {
    color: Color.textColor,
  },
  text18: {
    color: Color.universalWhite,
  },
  text17: {
    left: -61,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconPassword: {
    display: "none",
    height: 24,
    width: 24,
    overflow: "hidden",
    left: 24,
  },
  iconEyes: {
    left: 279,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  textFieldPrimaryText2: {
    top: 284,
    left: 24,
    right: 24,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconEyes1: {
    top: 296,
  },
  newPassword: {
    top: 232,
    left: 31,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    color: Color.textColor,
    position: "absolute",
  },
  textFieldPrimaryText21: {
    top: 400,
    right: 25,
    left: 23,
  },
  iconEyes3: {
    top: 406,
  },
  confirmNewPassword: {
    top: 348,
    left: 30,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    color: Color.textColor,
    position: "absolute",
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
  forgotPassword: {
    flex: 1,
    height: 851,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default ForgotPassword;
