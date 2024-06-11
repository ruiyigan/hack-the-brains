import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SettingsEditedSuccessfully = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsEditedSuccessfully, styles.card4Layout]}>
      <View style={[styles.card, styles.cardPosition]}>
        <Text style={[styles.maneUikit, styles.projectTypo]}>Mane UiKit</Text>
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
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout1]}>
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={[styles.indicator2, styles.indicatorLayout]} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildLayout]} />
        <View style={[styles.cardChild2, styles.cardChildLayout]} />
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
      <View style={[styles.card1, styles.cardPosition]}>
        <Text style={[styles.maneUikit, styles.projectTypo]}>Mane UiKit</Text>
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
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout1]}>
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={[styles.indicator2, styles.indicatorLayout]} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildLayout]} />
        <View style={[styles.cardChild2, styles.cardChildLayout]} />
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
      <View style={styles.settingsEditedSuccessfullyChild} />
      <View style={[styles.barTab2Project, styles.barLayout]}>
        <View style={[styles.tabBar, styles.text2FlexBox]}>
          <View style={[styles.active, styles.activeSpaceBlock]}>
            <Text style={[styles.projects, styles.buttonClr]}>Projects</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={styles.inactive1}>Completed</Text>
          </View>
          <View style={[styles.inactive, styles.activeSpaceBlock]}>
            <Text style={styles.inactive1}>Flag</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card2, styles.cardPosition]}>
        <Text style={[styles.maneUikit, styles.projectTypo]}>Mane UiKit</Text>
        <Text style={[styles.text, styles.textTypo]}>Please</Text>
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
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout1]}>
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={[styles.indicator2, styles.indicatorLayout]} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildLayout]} />
        <View style={[styles.cardChild2, styles.cardChildLayout]} />
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
      <View style={[styles.card3, styles.cardPosition]}>
        <Text style={[styles.maneUikit, styles.projectTypo]}>Mane UiKit</Text>
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
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.text2, styles.text2FlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>50%</Text>
          <View style={[styles.indicator, styles.indicatorLayout1]}>
            <View style={[styles.indicator1, styles.indicatorLayout]} />
            <View style={[styles.indicator2, styles.indicatorLayout]} />
          </View>
          <Text style={[styles.tasks, styles.text3Typo]}>24/48 tasks</Text>
        </View>
        <View style={[styles.cardChild1, styles.cardChildLayout]} />
        <View style={[styles.cardChild2, styles.cardChildLayout]} />
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
        style={[styles.buttonFab, styles.projectPosition]}
        contentFit="cover"
        source={require("../assets/button--fab.png")}
      />
      <View style={[styles.overlay, styles.modalPosition]}>
        <View style={[styles.modal, styles.modalPosition]} />
      </View>
      <View style={[styles.card4, styles.card4Position]}>
        <View style={[styles.cardChild27, styles.indicatorLayout]} />
        <View style={[styles.navigation, styles.cardLayout]}>
          <Text style={[styles.search, styles.searchPosition]}>
            Saves changed!
          </Text>
          <Image
            style={[styles.iconBackward, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--backward.png")}
          />
          <Image
            style={[styles.iconCancel, styles.text15Position]}
            contentFit="cover"
            source={require("../assets/icon--cancel.png")}
          />
        </View>
        <Text style={[styles.lookingGood, styles.text16Typo]}>
          Looking good!
        </Text>
        <Pressable
          style={styles.buttonPrimaryTextAble}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={[styles.text15, styles.text15Position]}>
            <Text style={[styles.button, styles.buttonClr]}>
              Return to Settings Page
            </Text>
          </View>
        </Pressable>
        <View style={styles.mdialert} />
        <Image
          style={styles.mdisuccessCircleOutlineIcon}
          contentFit="cover"
          source={require("../assets/mdisuccesscircleoutline.png")}
        />
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.text2FlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.card4Position]}
              contentFit="cover"
              source={require("../assets/signal4.png")}
            />
            <Text style={[styles.text16, styles.text16Typo]}>9:30</Text>
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
  cardPosition: {
    height: 148,
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_base,
    left: 24,
    right: 24,
    position: "absolute",
    overflow: "hidden",
  },
  projectTypo: {
    color: Color.textColor,
    lineHeight: 28,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.headlines18Bold_size,
  },
  textTypo: {
    color: Color.neutral2,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 68,
    textAlign: "left",
    position: "absolute",
  },
  cardLayout: {
    height: 28,
    position: "absolute",
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
  indicatorLayout1: {
    width: 167,
    height: 8,
  },
  indicatorLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  cardChildLayout: {
    top: 70,
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
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
  modalPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  card4Position: {
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  searchPosition: {
    top: "50%",
    textAlign: "center",
    left: "50%",
    color: Color.textColor,
    lineHeight: 28,
  },
  iconLayout: {
    display: "none",
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  text15Position: {
    marginTop: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text16Typo: {
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    position: "absolute",
  },
  maneUikit: {
    textAlign: "left",
    top: 24,
    lineHeight: 28,
    left: 24,
    position: "absolute",
  },
  text: {
    left: 48,
  },
  text1: {
    left: 227,
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
    height: 16,
    width: 16,
    borderRadius: Border.br_9xs,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  frameView: {
    left: 275,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.textColor,
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
    left: 0,
    top: 0,
    height: 8,
    width: 167,
  },
  indicator2: {
    width: 91,
    left: 0,
    top: 0,
    height: 8,
    backgroundColor: Color.textColor,
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
    left: 24,
  },
  cardChild2: {
    left: 203,
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
  },
  card1: {
    top: 708,
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
    lineHeight: 28,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.headlines18Bold_size,
  },
  settingsEditedSuccessfullyChild: {
    backgroundColor: Color.neutral2,
    height: 24,
    width: 24,
    top: 70,
    borderRadius: Border.br_5xs,
    left: 24,
    position: "absolute",
    overflow: "hidden",
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
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
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
    height: 44,
    borderRadius: Border.br_xs,
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
    marginLeft: -32,
    top: 16,
    width: 64,
    height: 4,
    left: "50%",
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_5xs,
  },
  search: {
    marginTop: -14,
    marginLeft: -74.5,
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.headlines18Bold_size,
    top: "50%",
    position: "absolute",
  },
  iconBackward: {
    top: 2,
    left: 0,
    position: "absolute",
  },
  iconCancel: {
    marginLeft: 139.5,
    display: "none",
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  navigation: {
    top: 113,
    left: 23,
    width: 327,
  },
  lookingGood: {
    marginTop: 0.5,
    marginLeft: -46,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    left: "50%",
    top: "50%",
    color: Color.textColor,
    lineHeight: 28,
  },
  button: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.universalWhite,
  },
  text15: {
    marginLeft: -95,
    flexDirection: "row",
    marginTop: -12,
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
  },
  text16: {
    top: "5.88%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
    left: "0%",
    textAlign: "left",
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
    left: -17,
    backgroundColor: Color.colorCadetblue,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  settingsEditedSuccessfully: {
    flex: 1,
    height: 733,
    overflow: "hidden",
  },
});

export default SettingsEditedSuccessfully;
