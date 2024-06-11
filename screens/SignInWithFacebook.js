import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SignInWithFacebook = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signInWithFacebook, styles.card4Layout]}>
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
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
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
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
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
        <View style={styles.homeIndicator} />
      </View>
      <Text style={[styles.project, styles.projectPosition]}>Project</Text>
      <View style={[styles.signInWithFacebookChild, styles.iconLayout]} />
      <View style={[styles.barTab2Project, styles.barLayout]}>
        <View style={[styles.tabBar, styles.text2FlexBox]}>
          <View style={[styles.active, styles.activeSpaceBlock]}>
            <Text style={[styles.projects, styles.buttonClr]}>Projects</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.textTypo]}>Completed</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={[styles.inactive1, styles.textTypo]}>Flag</Text>
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
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
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
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
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
        style={[styles.buttonFab, styles.textPosition1]}
        contentFit="cover"
        source={require("../assets/button--fab.png")}
      />
      <View style={[styles.overlay, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition]} />
      </View>
      <View style={[styles.card4, styles.card4Position]}>
        <View style={styles.cardChild27} />
        <Text style={[styles.email, styles.textTypo]}>Email</Text>
        <Text style={[styles.password, styles.textTypo]}>Password</Text>
        <View style={[styles.date, styles.textLayout]}>
          <Image
            style={[styles.labelIcon, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/label.png")}
          />
          <Text style={[styles.jan12021, styles.textIconPosition]}>
            Jan 1 2024
          </Text>
        </View>
        <View style={[styles.navigation, styles.card4Position]}>
          <Text style={[styles.search, styles.searchPosition]}>
            Sign In with Facebook
          </Text>
          <Image
            style={[styles.iconBackward, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--backward.png")}
          />
          <Pressable
            style={[styles.iconCancel, styles.iconLayout]}
            onPress={() => navigation.navigate("SignInPasswordHidden")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon--cancel.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.textFieldPrimaryText, styles.textShadowBox]}>
          <Text
            style={[styles.text16, styles.textIconPosition]}
          >{`         HackerBrain1@live.com `}</Text>
          <Image
            style={[styles.iconUser, styles.textIconPosition]}
            contentFit="cover"
            source={require("../assets/icon--user.png")}
          />
        </View>
        <View style={[styles.textFieldPrimaryText2, styles.textPosition]}>
          <Text style={[styles.text17, styles.textIconPosition]}>
            *****************
          </Text>
          <Image
            style={[styles.iconUser, styles.textIconPosition]}
            contentFit="cover"
            source={require("../assets/icon--password.png")}
          />
          <Image
            style={[styles.iconEyes, styles.textIconPosition]}
            contentFit="cover"
            source={require("../assets/vuesaxboldsearchnormal.png")}
          />
        </View>
        <Pressable
          style={[styles.buttonPrimaryTextAble, styles.textPosition]}
          onPress={() => navigation.navigate("HomepageScrollingOverview")}
        >
          <View style={styles.text18}>
            <Text style={[styles.button, styles.buttonClr]}>Sign In</Text>
          </View>
        </Pressable>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.text2FlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.card4Position1]}
              contentFit="cover"
              source={require("../assets/signal.png")}
            />
            <Text style={styles.text19}>9:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card4Layout: {
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
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
    backgroundColor: Color.universalWhite,
  },
  text2FlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  cardChildPosition: {
    top: 70,
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIconPosition: {
    left: 134,
    position: "absolute",
  },
  barLayout: {
    height: 40,
    position: "absolute",
  },
  projectPosition: {
    top: 68,
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
  buttonClr: {
    color: Color.universalWhite,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  textTypo: {
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  datePosition: {
    top: 364,
    left: 24,
  },
  textPosition1: {
    right: 28,
    overflow: "hidden",
  },
  modalPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
  textIconPosition: {
    top: 12,
    position: "absolute",
  },
  searchPosition: {
    top: "50%",
    left: "50%",
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
    backgroundColor: Color.universalWhite,
  },
  textPosition: {
    left: 23,
    right: 25,
    height: 48,
    borderRadius: Border.br_base,
    position: "absolute",
    overflow: "hidden",
  },
  card4Position1: {
    right: "0%",
    overflow: "hidden",
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
    top: "50%",
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
  },
  cardChild1: {
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.universalWhite,
    left: 24,
  },
  cardChild2: {
    left: 203,
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
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
    left: "50%",
    backgroundColor: Color.textColor,
    position: "absolute",
  },
  barHomeIndicator: {
    marginLeft: -188,
    width: 375,
    bottom: 0,
    left: "50%",
  },
  project: {
    marginLeft: -33,
    textAlign: "center",
    left: "50%",
    color: Color.textColor,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
  },
  signInWithFacebookChild: {
    backgroundColor: Color.neutral2,
    top: 70,
    position: "absolute",
    overflow: "hidden",
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
    top: 0,
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
    left: "0%",
    backgroundColor: Color.textColor,
  },
  overlay: {
    opacity: 0.7,
    left: "0%",
  },
  cardChild27: {
    marginLeft: -32,
    top: 16,
    width: 64,
    height: 4,
    borderRadius: Border.br_5xs,
    left: "50%",
    backgroundColor: Color.neutral3,
    position: "absolute",
  },
  email: {
    top: 236,
    left: 33,
    textAlign: "left",
    color: Color.textColor,
    position: "absolute",
  },
  password: {
    top: 348,
    left: 30,
    textAlign: "left",
    color: Color.textColor,
    position: "absolute",
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
    marginLeft: -99.5,
    textAlign: "center",
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
  text16: {
    left: -33,
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
    left: 24,
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    top: 272,
    height: 48,
    position: "absolute",
    left: 30,
    right: 28,
    overflow: "hidden",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
  },
  text17: {
    left: 11,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.textColor,
  },
  iconEyes: {
    left: 279,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  textFieldPrimaryText2: {
    top: 400,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    backgroundColor: Color.universalWhite,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text18: {
    marginLeft: -28,
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
  image1Icon: {
    top: 79,
    left: 122,
    width: 133,
    height: 133,
    position: "absolute",
  },
  card4: {
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    left: "0%",
    right: "0%",
    overflow: "hidden",
    bottom: 0,
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  text19: {
    top: "5.88%",
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
    left: "0%",
    textAlign: "left",
    position: "absolute",
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
    left: -22,
    backgroundColor: Color.colorCadetblue,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  signInWithFacebook: {
    flex: 1,
    height: 733,
    overflow: "hidden",
  },
});

export default SignInWithFacebook;
