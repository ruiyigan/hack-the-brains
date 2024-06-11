import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SignInWithOutlook = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signInWithOutlook, styles.card4Layout]}>
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
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={styles.rectangleView} />
        <Image
          style={styles.ellipseIcon}
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
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={styles.rectangleView} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
      <Text style={[styles.project, styles.childPosition]}>Project</Text>
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
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={styles.rectangleView} />
        <Image
          style={styles.ellipseIcon}
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
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={styles.indicator2} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildPosition]} />
        <View style={[styles.cardChild2, styles.cardChildPosition]} />
        <View style={styles.rectangleView} />
        <Image
          style={styles.ellipseIcon}
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
        source={require("../assets/button--fab.png")}
      />
      <View style={[styles.overlay, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition]} />
      </View>
      <View style={[styles.card4, styles.card4Position]}>
        <View style={[styles.cardChild27, styles.childPosition]} />
        <Text style={[styles.email, styles.textLayout]}>Email</Text>
        <Text style={styles.password}>Password</Text>
        <View style={[styles.date, styles.dateLayout]}>
          <Image
            style={[styles.labelIcon, styles.dateLayout]}
            contentFit="cover"
            source={require("../assets/label.png")}
          />
          <Text style={[styles.jan12021, styles.textIconPosition]}>
            Jan 1 2024
          </Text>
        </View>
        <View style={[styles.navigation, styles.card4Position]}>
          <Text style={[styles.search, styles.childPosition]}>
            Sign In with Outlook
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
        <View style={styles.textShadowBox1}>
          <Text style={[styles.text16, styles.textIconPosition]}>
            <Text style={styles.hackerbrain1}>{`HackerBrain1    `}</Text>
            <Text style={styles.text17}>__</Text>
          </Text>
          <Image
            style={[styles.iconUser, styles.textIconPosition]}
            contentFit="cover"
            source={require("../assets/icon--user.png")}
          />
        </View>
        <View style={styles.textShadowBox1}>
          <Text style={[styles.text18, styles.textIconPosition]}>
            <Text
              style={styles.hackerbrain1}
            >{` .                          HackerBrain1@outlook.com     `}</Text>
            <Text style={styles.text17}>__</Text>
          </Text>
          <Image
            style={[styles.iconUser, styles.textIconPosition]}
            contentFit="cover"
            source={require("../assets/icon--user.png")}
          />
        </View>
        <View style={[styles.textFieldPrimaryText2, styles.textPosition]}>
          <Text style={[styles.text20, styles.textIconPosition]}>
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
        <Text style={styles.password}>Password</Text>
        <View style={[styles.textFieldPrimaryText21, styles.textPosition]}>
          <Text style={[styles.text20, styles.textIconPosition]}>
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
          <View style={styles.text22}>
            <Text style={[styles.button, styles.textLayout]}>Sign In</Text>
          </View>
        </Pressable>
      </View>
      <Image
        style={[styles.outlookIcon, styles.outlookIconPosition]}
        contentFit="cover"
        source={require("../assets/outlook.png")}
      />
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.text2FlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.card4Position1]}
              contentFit="cover"
              source={require("../assets/signal.png")}
            />
            <Text style={styles.text23}>9:30</Text>
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
    borderRadius: Border.br_base,
    right: 24,
    backgroundColor: Color.neutral3,
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
  childPosition: {
    left: "50%",
    position: "absolute",
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
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  datePosition: {
    top: 364,
    left: 24,
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
  dateLayout: {
    height: 48,
    position: "absolute",
  },
  textIconPosition: {
    top: 12,
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
    left: 134,
    borderRadius: Border.br_9xs,
    position: "absolute",
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
  },
  card1: {
    top: 708,
    left: 24,
  },
  project: {
    marginLeft: -32.5,
    textAlign: "center",
    top: 68,
    left: "50%",
    color: Color.textColor,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headlines18Bold_size,
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
    color: Color.universalWhite,
    textAlign: "right",
    fontFamily: FontFamily.poppinsBold,
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    width: 313,
    height: 40,
    left: 24,
  },
  card2: {
    top: 192,
    left: 24,
  },
  card3: {
    height: 148,
    borderRadius: Border.br_base,
    right: 24,
    backgroundColor: Color.neutral3,
    position: "absolute",
    overflow: "hidden",
  },
  buttonFab: {
    width: 44,
    height: 44,
    right: 28,
    borderRadius: Border.br_xs,
    top: 68,
    position: "absolute",
    overflow: "hidden",
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
    marginLeft: -31.5,
    top: 16,
    width: 64,
    height: 4,
    borderRadius: Border.br_5xs,
    left: "50%",
    backgroundColor: Color.neutral3,
  },
  email: {
    top: 236,
    left: 33,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    color: Color.textColor,
    position: "absolute",
  },
  password: {
    top: 348,
    left: 30,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    marginLeft: -90.5,
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
    position: "absolute",
    top: "50%",
  },
  navigation: {
    width: 327,
    height: 28,
    left: 24,
  },
  hackerbrain1: {
    color: Color.textColor,
  },
  text17: {
    color: Color.universalWhite,
  },
  text16: {
    left: 7,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconUser: {
    display: "none",
    height: 24,
    width: 24,
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
    backgroundColor: Color.universalWhite,
  },
  text18: {
    left: -111,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text20: {
    left: 11,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    right: 25,
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
    backgroundColor: Color.universalWhite,
  },
  button: {
    color: Color.universalWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.sansBodyBodyCopy_size,
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
    bottom: 0,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    left: "0%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
  outlookIcon: {
    width: 108,
    height: 108,
    left: 134,
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
  text23: {
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
    left: -18,
    backgroundColor: Color.colorCadetblue,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  signInWithOutlook: {
    flex: 1,
    height: 733,
    overflow: "hidden",
  },
});

export default SignInWithOutlook;
