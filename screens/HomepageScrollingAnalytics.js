import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const HomepageScrollingAnalytics = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageScrollingAnalytics}>
      <View style={[styles.optimumGrowth, styles.lightStatusPosition]}>
        <View style={[styles.goals, styles.goalsSpaceBlock]}>
          <View>
            <View style={styles.sectionHeader}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Optimum growth
                </Text>
              </View>
              <View style={[styles.buttons, styles.buttonsFlexBox]}>
                <View
                  style={[
                    styles.contentContainer,
                    styles.stayConnectedSpaceBlock,
                  ]}
                >
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout2}
                      resizeMode="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.dashboard}>
            <View style={styles.number}>
              <Text style={[styles.text, styles.textTypo2]}>200</Text>
              <Text style={[styles.text1, styles.textTypo2]}>100</Text>
              <Text style={[styles.text2, styles.textTypo2]}>0</Text>
            </View>
            <View style={styles.number1}>
              <Text style={styles.text3}>1</Text>
              <Text style={[styles.text4, styles.textTypo1]}>4</Text>
              <Text style={[styles.text5, styles.textTypo1]}>8</Text>
              <Text style={styles.text6}>12</Text>
            </View>
            <View style={styles.dashboard1}>
              <Image
                style={styles.shapeIcon}
                resizeMode="cover"
                source={require("../assets/shape.png")}
              />
              <View style={styles.line}>
                <View style={[styles.lineChild, styles.lineLayout1]} />
                <View style={[styles.lineItem, styles.lineLayout1]} />
                <View style={[styles.lineInner, styles.lineLayout1]} />
              </View>
              <Image
                style={styles.lineIcon}
                resizeMode="cover"
                source={require("../assets/line.png")}
              />
            </View>
          </View>
          <View style={styles.task}>
            <Text style={styles.cropsGrowth}>Crops Growth</Text>
            <View style={[styles.taskChild, styles.taskChildLayout]} />
          </View>
          <View style={styles.project}>
            <Text style={styles.cropsGrowth}>Water to dispense</Text>
            <View style={[styles.projectChild, styles.taskChildLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.lightStatus, styles.lightStatusPosition]}>
        <View style={[styles.frame, styles.goalsSpaceBlock]}>
          <View>
            <View style={styles.sectionHeader}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Watering Regime
                </Text>
              </View>
              <View style={[styles.buttons, styles.buttonsFlexBox]}>
                <View
                  style={[
                    styles.contentContainer,
                    styles.stayConnectedSpaceBlock,
                  ]}
                >
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout2}
                      resizeMode="cover"
                      source={require("../assets/leading-icon1.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon1.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.chart}>
              <View style={[styles.task1, styles.task1Position]}>
                <Text style={styles.cropsGrowth}>Temperature</Text>
                <View style={[styles.taskItem, styles.taskChildLayout]} />
              </View>
              <View style={[styles.project1, styles.task1Position]}>
                <Text style={styles.cropsGrowth}>Water to dispense</Text>
                <View style={[styles.projectChild, styles.taskChildLayout]} />
              </View>
              <View style={styles.number2}>
                <Text style={[styles.text7, styles.textTypo]}>200</Text>
                <Text style={[styles.text8, styles.textTypo]}>100</Text>
                <Text style={[styles.text9, styles.textTypo]}>0</Text>
              </View>
              <View style={[styles.line1, styles.colPosition]}>
                <View style={[styles.line2, styles.lineLayout]} />
                <View style={[styles.line3, styles.lineLayout]} />
                <View style={[styles.line4, styles.lineLayout]} />
              </View>
              <View style={[styles.col, styles.colLayout2]}>
                <View style={[styles.colChild, styles.colLayout2]} />
                <View style={[styles.colItem, styles.colItemLayout]} />
                <View style={[styles.colInner, styles.colLayout]} />
                <View style={[styles.rectangleView, styles.colLayout]} />
                <View style={[styles.colChild1, styles.colChildLayout2]} />
                <View style={[styles.colChild2, styles.colChildPosition1]} />
                <View style={[styles.colChild3, styles.colLayout]} />
                <View style={[styles.colChild4, styles.colLayout1]} />
                <View style={[styles.colChild5, styles.colChildLayout1]} />
                <View style={[styles.colChild6, styles.colChildLayout1]} />
                <View style={[styles.colChild7, styles.colChildLayout]} />
                <View style={[styles.colChild8, styles.colChildLayout]} />
                <View style={[styles.colChild9, styles.colChildPosition]} />
                <View style={[styles.colChild10, styles.colChildPosition]} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.navTopBarOpen}>
        <View style={[styles.rectangle, styles.rectangleLayout1]}>
          <View style={[styles.rectangle1, styles.searchBarBg]} />
          <View style={[styles.searchBar, styles.searchBarBg]}>
            <Pressable
              style={styles.contentContainer2}
              onPress={() => navigation.navigate("SearchFeature")}
            >
              <View style={styles.labelContainer2}>
                <View style={styles.leadingIcon2}>
                  <Image
                    style={styles.normalIconLayout}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearsearchnormal.png")}
                  />
                </View>
                <View
                  style={[
                    styles.textAlignmentBase,
                    styles.trailingIconSpaceBlock,
                  ]}
                >
                  <Text style={[styles.label2, styles.titleTypo]}>Search</Text>
                </View>
                <View
                  style={[styles.trailingIcon2, styles.trailingIconSpaceBlock]}
                >
                  <Image
                    style={[styles.systemQrCode, styles.normalIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/system--qr-code.png")}
                  />
                </View>
              </View>
            </Pressable>
            <Text style={[styles.helperText, styles.textTypo]}>
              Helper text for status and guidance
            </Text>
          </View>
          <Image
            style={[styles.vuesaxboldsearchNormalIcon, styles.normalIconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--eyes.png")}
          />
        </View>
        <Pressable
          style={styles.notification}
          onPress={() => navigation.navigate("Notification1")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/notification.png")}
          />
        </Pressable>
        <View style={[styles.stayConnected, styles.stayConnectedSpaceBlock]}>
          <View style={styles.frame2}>
            <View style={styles.sectionHeader2}>
              <View style={styles.container2}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Be up to date
                </Text>
              </View>
              <View style={[styles.buttons2, styles.buttonsFlexBox]}>
                <View
                  style={[
                    styles.contentContainer,
                    styles.stayConnectedSpaceBlock,
                  ]}
                >
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout2}
                      resizeMode="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon1.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameParent}>
              <View style={styles.frameWrapper}>
                <View style={styles.buttonsParent}>
                  <View style={[styles.buttons3, styles.buttonsLayout]}>
                    <View
                      style={[
                        styles.contentContainer4,
                        styles.contentContainerLayout,
                      ]}
                    >
                      <View style={styles.labelContainer4}>
                        <View style={styles.leadingIcon4}>
                          <Image
                            style={styles.iconButtons}
                            resizeMode="cover"
                            source={require("../assets/icon-buttons.png")}
                          />
                        </View>
                        <View style={styles.textAlignmentSmall}>
                          <Text style={[styles.label4, styles.labelTypo]}>
                            Overview
                          </Text>
                        </View>
                        <View style={styles.trailingIcon4}>
                          <Image
                            style={[
                              styles.faIconsolidlongArrowAltR,
                              styles.normalIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/fa-iconsolidlongarrowaltright.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.buttons4, styles.buttonsLayout]}>
                    <View
                      style={[
                        styles.contentContainer4,
                        styles.contentContainerLayout,
                      ]}
                    >
                      <View style={styles.labelContainer5}>
                        <View style={styles.leadingIcon2}>
                          <Image
                            style={styles.iconButtons}
                            resizeMode="cover"
                            source={require("../assets/icon-buttons1.png")}
                          />
                        </View>
                        <View
                          style={[
                            styles.textAlignmentSmall1,
                            styles.trailingIconSpaceBlock,
                          ]}
                        >
                          <Text
                            style={[styles.label5, styles.labelTypo]}
                          >{`Analytics &
report`}</Text>
                        </View>
                        <View
                          style={[
                            styles.trailingIcon5,
                            styles.trailingIconSpaceBlock,
                          ]}
                        >
                          <Image
                            style={[
                              styles.faIconsolidlongArrowAltR,
                              styles.normalIconLayout,
                            ]}
                            resizeMode="cover"
                            source={require("../assets/fa-iconsolidlongarrowaltright.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Image
                style={[
                  styles.materialSymbolsoverviewOutlIcon,
                  styles.normalIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsoverviewoutline.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle1.png")}
        />
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <View style={[styles.welcomeHeader, styles.colItemLayout]}>
          <View style={styles.welcomeHeaderInner}>
            <View style={styles.container}>
              <View style={styles.avatarsWrapper}>
                <Image
                  style={styles.avatarsIcon}
                  resizeMode="cover"
                  source={require("../assets/avatars2.png")}
                />
              </View>
              <View style={styles.component1}>
                <Text style={[styles.goodMorning, styles.jackSpowLayout]}>
                  Good morning 👋
                </Text>
                <Text style={[styles.jackSpow, styles.jackSpowLayout]}>
                  Hackerbrain1
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.iphoneX11ProBlack}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <View style={[styles.rightSide, styles.sidePosition]}>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
        </View>
        <Image
          style={[styles.leftSideIcon, styles.sidePosition]}
          resizeMode="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
      <Image
        style={[styles.barBottomHome, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bar--bottom--home.png")}
      />
      <Image
        style={[styles.barBottomHome, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bar--bottom--home.png")}
      />
      <View style={[styles.barHomeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator, styles.homePosition]} />
      </View>
      <View style={[styles.riremoteControlLine, styles.normalIconLayout]} />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("ControlIrrigationPlot1Colu")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconSettings, styles.iconPosition]}
        onPress={() => navigation.navigate("Settings1")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/icon--settings.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("AidMainPage")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[styles.cocoboldhomeIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/cocoboldhome.png")}
      />
      <Image
        style={[styles.homepageScrollingAnalyticsChild, styles.homePosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightStatusPosition: {
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.commonWhiteStatesMain,
    width: 375,
    left: 0,
    position: "absolute",
  },
  goalsSpaceBlock: {
    paddingRight: Padding.p_6xs,
    paddingLeft: Padding.p_10xs,
    height: 347,
  },
  titleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
    lineHeight: 24,
  },
  buttonsFlexBox: {
    backgroundColor: Color.colorSet1Cloud20,
    borderRadius: Border.br_6xs,
    display: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  stayConnectedSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  iconLayout2: {
    width: 16,
    maxHeight: "100%",
    alignSelf: "stretch",
    display: "none",
  },
  textTypo2: {
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  textTypo1: {
    width: 11,
    textAlign: "center",
    height: 20,
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    top: 0,
    position: "absolute",
  },
  lineLayout1: {
    height: 1,
    width: 907,
    borderTopWidth: 1,
    borderColor: Color.neutral3,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  taskChildLayout: {
    height: 16,
    top: 2,
    borderRadius: Border.br_5xs,
    width: 8,
    left: 0,
    position: "absolute",
  },
  task1Position: {
    top: 104,
    height: 20,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.inputHelper_size,
    textAlign: "left",
  },
  colPosition: {
    width: 272,
    left: 40,
    top: 13,
  },
  lineLayout: {
    backgroundColor: Color.neutral3,
    borderRadius: Border.br_11xs,
    width: 272,
    height: 1,
    left: 0,
    position: "absolute",
  },
  colLayout2: {
    height: 66,
    position: "absolute",
  },
  colItemLayout: {
    height: 56,
    position: "absolute",
  },
  colLayout: {
    height: 43,
    top: 23,
    borderRadius: Border.br_5xs,
    width: 8,
    position: "absolute",
  },
  colChildLayout2: {
    height: 35,
    top: 31,
    backgroundColor: Color.orange,
  },
  colChildPosition1: {
    left: 220,
    borderRadius: Border.br_5xs,
    width: 8,
    position: "absolute",
  },
  colLayout1: {
    left: 44,
    borderRadius: Border.br_5xs,
    width: 8,
  },
  colChildLayout1: {
    top: 38,
    backgroundColor: Color.blue,
    borderRadius: Border.br_5xs,
    width: 8,
    height: 28,
    position: "absolute",
  },
  colChildLayout: {
    height: 23,
    top: 43,
    backgroundColor: Color.blue,
  },
  colChildPosition: {
    left: 264,
    borderRadius: Border.br_5xs,
    width: 8,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 347,
    top: 0,
    width: 375,
    left: 0,
  },
  searchBarBg: {
    backgroundColor: Color.colorSet1Cloud40,
    position: "absolute",
  },
  trailingIconSpaceBlock: {
    marginLeft: 8,
    flexDirection: "row",
  },
  normalIconLayout: {
    height: 24,
    width: 24,
  },
  buttonsLayout: {
    width: 155,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainerLayout: {
    borderRadius: Border.br_203xl,
    alignItems: "center",
  },
  labelTypo: {
    lineHeight: 20,
    fontSize: FontSize.chipLabel_size,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  rectangleLayout: {
    height: 4,
    top: 399,
    borderRadius: Border.br_11xs,
    width: 16,
    position: "absolute",
  },
  jackSpowLayout: {
    height: 30,
    color: Color.colorSet1Cloud90,
    width: 132,
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  sidePosition: {
    top: 17,
    height: 11,
    position: "absolute",
  },
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  vectorPosition: {
    bottom: "2.83%",
    position: "absolute",
  },
  iconPosition: {
    top: 1145,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  title: {
    color: Color.universalBlack100,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    color: Color.colorDarkslategray_100,
    fontWeight: "600",
    lineHeight: 15,
    fontSize: FontSize.avatarInitialsSm_size,
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  textAlignmentMicro: {
    paddingVertical: Padding.p_11xs,
    marginLeft: 2,
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  trailingIcon: {
    marginLeft: 2,
  },
  contentContainer: {
    paddingVertical: Padding.p_9xs,
    height: 28,
    borderRadius: Border.br_203xl,
    alignItems: "center",
  },
  buttons: {
    display: "none",
  },
  sectionHeader: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    width: 327,
  },
  text: {
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  text1: {
    top: 72,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    textAlign: "left",
    left: 0,
  },
  text2: {
    top: 144,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    textAlign: "left",
    left: 0,
  },
  number: {
    top: 6,
    width: 27,
    height: 164,
    left: 0,
    position: "absolute",
  },
  text3: {
    width: 8,
    height: 20,
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    top: 0,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  text4: {
    left: 85,
  },
  text5: {
    left: 174,
  },
  text6: {
    left: 262,
    width: 17,
    textAlign: "center",
    height: 20,
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    top: 0,
    position: "absolute",
  },
  number1: {
    top: 177,
    left: 49,
    width: 279,
    height: 20,
    position: "absolute",
  },
  shapeIcon: {
    top: 42,
    left: 1,
    width: 904,
    height: 127,
    position: "absolute",
  },
  lineChild: {
    top: 0,
  },
  lineItem: {
    top: 72,
  },
  lineInner: {
    top: 143,
  },
  line: {
    top: 52,
    width: 906,
    height: 143,
    left: 0,
    position: "absolute",
  },
  lineIcon: {
    width: 905,
    height: 194,
    top: 0,
    left: 0,
    position: "absolute",
  },
  dashboard1: {
    top: -35,
    left: 43,
    width: 308,
    height: 196,
    position: "absolute",
    overflow: "hidden",
  },
  dashboard: {
    width: 342,
    height: 197,
    marginTop: 16,
    overflow: "hidden",
  },
  cropsGrowth: {
    left: 16,
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  taskChild: {
    backgroundColor: "#9d9c9b",
  },
  task: {
    width: 81,
    height: 20,
    marginTop: 16,
  },
  projectChild: {
    backgroundColor: Color.blue,
  },
  project: {
    width: 84,
    height: 20,
    marginTop: 16,
  },
  goals: {
    width: 363,
  },
  optimumGrowth: {
    top: 778,
    height: 353,
    paddingRight: Padding.p_9xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.commonWhiteStatesMain,
    overflow: "hidden",
  },
  taskItem: {
    backgroundColor: Color.orange,
  },
  task1: {
    width: 81,
    left: 0,
  },
  project1: {
    left: 123,
    width: 84,
  },
  text7: {
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
    top: 0,
    left: 0,
  },
  text8: {
    top: 33,
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
    left: 0,
  },
  text9: {
    right: 16,
    top: 66,
    color: Color.neutral2,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  number2: {
    height: 86,
    width: 24,
    top: 0,
    left: 0,
    position: "absolute",
  },
  line2: {
    top: 33,
  },
  line3: {
    top: 66,
  },
  line4: {
    top: 0,
  },
  line1: {
    height: 67,
    position: "absolute",
  },
  colChild: {
    backgroundColor: Color.orange,
    borderRadius: Border.br_5xs,
    height: 66,
    width: 8,
    top: 0,
    left: 0,
  },
  colItem: {
    top: 10,
    left: 44,
    borderRadius: Border.br_5xs,
    width: 8,
    backgroundColor: Color.orange,
  },
  colInner: {
    left: 88,
    backgroundColor: Color.orange,
  },
  rectangleView: {
    left: 176,
    backgroundColor: Color.orange,
  },
  colChild1: {
    left: 132,
    borderRadius: Border.br_5xs,
    width: 8,
    position: "absolute",
  },
  colChild2: {
    height: 35,
    top: 31,
    backgroundColor: Color.orange,
  },
  colChild3: {
    backgroundColor: Color.blue,
    left: 0,
  },
  colChild4: {
    top: 29,
    height: 37,
    backgroundColor: Color.blue,
    position: "absolute",
  },
  colChild5: {
    left: 88,
  },
  colChild6: {
    left: 176,
  },
  colChild7: {
    left: 132,
    borderRadius: Border.br_5xs,
    width: 8,
    position: "absolute",
  },
  colChild8: {
    left: 220,
    borderRadius: Border.br_5xs,
    width: 8,
    position: "absolute",
  },
  colChild9: {
    height: 35,
    top: 31,
    backgroundColor: Color.orange,
  },
  colChild10: {
    height: 23,
    top: 43,
    backgroundColor: Color.blue,
  },
  col: {
    width: 272,
    left: 40,
    top: 13,
  },
  chart: {
    width: 312,
    height: 124,
    marginTop: 10,
  },
  frame: {
    width: 327,
  },
  lightStatus: {
    top: 442,
    height: 336,
    paddingRight: Padding.p_9xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.commonWhiteStatesMain,
    overflow: "hidden",
  },
  rectangle1: {
    borderBottomRightRadius: Border.br_13xl,
    top: 0,
    height: 347,
    width: 375,
    left: 0,
  },
  leadingIcon2: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label2: {
    fontSize: FontSize.inputValue_size,
    color: Color.universalBlack50,
    flex: 1,
  },
  textAlignmentBase: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    flex: 1,
  },
  systemQrCode: {
    display: "none",
    overflow: "hidden",
  },
  trailingIcon2: {
    width: 24,
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelContainer2: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  contentContainer2: {
    padding: Padding.p_5xs,
    height: 44,
    borderWidth: 1,
    borderColor: Color.colorSet1Cloud10,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  helperText: {
    lineHeight: 14,
    marginTop: 4,
    color: Color.commonWhiteStatesMain,
    alignSelf: "stretch",
    display: "none",
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontSize: FontSize.inputHelper_size,
  },
  searchBar: {
    top: 204,
    left: 27,
    width: 321,
  },
  vuesaxboldsearchNormalIcon: {
    top: 213,
    left: 36,
    display: "none",
    position: "absolute",
  },
  rectangle: {
    top: 0,
    position: "absolute",
  },
  notification: {
    left: 320,
    top: 145,
    width: 28,
    height: 28,
    position: "absolute",
  },
  container2: {
    width: 43,
    zIndex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 24,
    flexDirection: "row",
  },
  buttons2: {
    zIndex: 0,
    marginLeft: -12,
    display: "none",
  },
  sectionHeader2: {
    alignItems: "baseline",
    paddingHorizontal: Padding.p_78xl,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    width: 327,
  },
  iconButtons: {
    borderRadius: Border.br_2203xl,
    width: 28,
    height: 28,
  },
  leadingIcon4: {
    paddingLeft: Padding.p_8xl,
    paddingTop: Padding.p_6xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label4: {
    color: "#131313",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  textAlignmentSmall: {
    paddingLeft: Padding.p_4xs,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_10xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  faIconsolidlongArrowAltR: {
    overflow: "hidden",
  },
  trailingIcon4: {
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer4: {
    paddingBottom: Padding.p_7xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  contentContainer4: {
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_29xl,
    paddingBottom: Padding.p_9xs,
    height: 48,
    justifyContent: "center",
    overflow: "hidden",
  },
  buttons3: {
    borderColor: Color.colorSet1Cloud10,
    width: 155,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  label5: {
    color: Color.commonWhiteStatesMain,
  },
  textAlignmentSmall1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    justifyContent: "center",
  },
  trailingIcon5: {
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
  },
  labelContainer5: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons4: {
    backgroundColor: Color.colorDeepskyblue,
    borderColor: Color.commonWhiteStatesMain,
    marginLeft: 18,
  },
  buttonsParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameWrapper: {
    top: 0,
    width: 327,
    left: 0,
    position: "absolute",
  },
  materialSymbolsoverviewOutlIcon: {
    top: 11,
    left: 18,
    position: "absolute",
  },
  frameParent: {
    marginTop: 5,
    height: 48,
    alignSelf: "stretch",
  },
  frame2: {
    height: 110,
    paddingLeft: Padding.p_2xs,
    paddingBottom: Padding.p_2xs,
  },
  stayConnected: {
    top: 410,
    height: 108,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.commonWhiteStatesMain,
    width: 375,
    left: 0,
    position: "absolute",
    paddingHorizontal: Padding.p_3xs,
  },
  rectangleIcon: {
    left: 195,
  },
  rectangle2: {
    backgroundColor: Color.colorLightgray,
    left: 174,
  },
  avatarsIcon: {
    width: 48,
    height: 48,
  },
  avatarsWrapper: {
    paddingRight: Padding.p_xs,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
  },
  goodMorning: {
    lineHeight: 15,
    fontSize: FontSize.avatarInitialsSm_size,
    color: Color.colorSet1Cloud90,
  },
  jackSpow: {
    marginTop: -10,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    color: Color.colorSet1Cloud90,
    lineHeight: 24,
  },
  component1: {
    height: 59,
    paddingTop: Padding.p_12xs,
    paddingBottom: Padding.p_8xs,
    width: 132,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
  },
  welcomeHeaderInner: {
    paddingRight: Padding.p_75xl,
    alignSelf: "stretch",
    flex: 1,
  },
  welcomeHeader: {
    top: 132,
    left: 24,
    width: 327,
  },
  navTopBarOpen: {
    top: -80,
    height: 403,
    width: 375,
    left: 0,
    position: "absolute",
  },
  bgIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    height: 11,
    width: 24,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    height: 11,
    width: 17,
  },
  rightSide: {
    right: 15,
    width: 67,
    height: 11,
  },
  leftSideIcon: {
    left: 34,
    height: 11,
    width: 28,
  },
  iphoneX11ProBlack: {
    height: 44,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  barBottomHome: {
    top: 1128,
    right: -51,
    left: -7,
    borderRadius: Border.br_base,
    height: 75,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutral1,
    width: 134,
    height: 5,
  },
  barHomeIndicator: {
    marginLeft: -194.5,
    bottom: -12,
    height: 40,
    width: 375,
  },
  riremoteControlLine: {
    top: 1151,
    left: 144,
    position: "absolute",
    overflow: "hidden",
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "33.33%",
    top: "95.51%",
    right: "61.89%",
    width: "4.77%",
    height: "1.66%",
  },
  icon2: {
    overflow: "hidden",
  },
  iconSettings: {
    left: 308,
  },
  vector1: {
    left: "58.4%",
    top: "95.68%",
    right: "36.8%",
    width: "4.8%",
    height: "1.5%",
  },
  cocoboldhomeIcon: {
    left: 30,
    overflow: "hidden",
  },
  homepageScrollingAnalyticsChild: {
    marginTop: 575.5,
    marginLeft: -148.5,
    top: "50%",
    width: 6,
    height: 6,
  },
  homepageScrollingAnalytics: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 1203,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomepageScrollingAnalytics;
