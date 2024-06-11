import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomepageScrollingAnalytics = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageScrollingAnalytics}>
      <View style={[styles.optimumGrowth, styles.bottomTabPosition]}>
        <View style={[styles.goals, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.iconsFlexBox]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleFlexBox]}>
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
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout2]}
                      contentFit="cover"
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
                contentFit="cover"
                source={require("../assets/shape.png")}
              />
              <View style={styles.line}>
                <View style={[styles.lineChild, styles.lineLayout1]} />
                <View style={[styles.lineItem, styles.lineLayout1]} />
                <View style={[styles.lineInner, styles.lineLayout1]} />
              </View>
              <Image
                style={styles.lineIcon}
                contentFit="cover"
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
      <View style={[styles.bottomTab, styles.bottomTabPosition]}>
        <View style={styles.settingsNavBar}>
          <View style={[styles.barBottomHome, styles.barLayout]}>
            <Image
              style={[styles.barBottomItemActive, styles.barItemLayout]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active.png")}
            />
            <Pressable
              style={[styles.barBottomItemInactiv, styles.barItemLayout]}
              onPress={() => navigation.navigate("ControlIrrigationPlot1Colu")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
              onPress={() => navigation.navigate("AidMainPage")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active.png")}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.iconSettings, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--settings.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.cocoboldhomeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/cocoboldhome.png")}
          />
          <Image
            style={styles.settingsNavBarChild}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
        </View>
      </View>
      <View style={[styles.lightStatus, styles.bottomTabPosition]}>
        <View style={[styles.frame, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.iconsFlexBox]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleFlexBox]}>
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
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout2]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon.png")}
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
      <View style={[styles.navTopBarOpen, styles.rectangleLayout1]}>
        <View style={[styles.rectangle, styles.rectangleLayout1]}>
          <View style={[styles.rectangle1, styles.searchBarBg]} />
          <Pressable
            style={[styles.searchBar, styles.searchBarBg]}
            onPress={() => navigation.navigate("SearchFeature")}
          >
            <View style={styles.contentContainer2}>
              <View style={styles.labelContainer2}>
                <View style={styles.leadingIcon2}>
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require("../assets/vuesaxlinearsearchnormal.png")}
                  />
                </View>
                <View
                  style={[
                    styles.textAlignmentBase,
                    styles.trailingIconSpaceBlock,
                  ]}
                >
                  <Text style={[styles.label2, styles.titleFlexBox]}>
                    Search
                  </Text>
                </View>
                <View
                  style={[styles.trailingIcon2, styles.trailingIconSpaceBlock]}
                >
                  <Image
                    style={[styles.systemQrCode, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/system--qr-code.png")}
                  />
                </View>
              </View>
            </View>
            <Text style={[styles.helperText, styles.textTypo]}>
              Helper text for status and guidance
            </Text>
          </Pressable>
          <Image
            style={[styles.vuesaxboldsearchNormalIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxboldsearchnormal.png")}
          />
        </View>
        <Pressable
          style={[styles.notification, styles.iconButtonsLayout]}
          onPress={() => navigation.navigate("Notification1")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </Pressable>
        <View style={[styles.stayConnected, styles.stayConnectedSpaceBlock]}>
          <View style={styles.frame2}>
            <View style={styles.sectionHeader2}>
              <View style={styles.container2}>
                <Text style={[styles.title2, styles.titleFlexBox]}>
                  <Text style={styles.text10}>{`                         
`}</Text>
                  <Text style={styles.titleTypo1}>Updates</Text>
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
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout2]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameParent}>
              <View style={styles.frameWrapper}>
                <View style={styles.buttonsParent}>
                  <Pressable
                    style={[styles.buttons3, styles.buttonsLayout]}
                    onPress={() =>
                      navigation.navigate("HomepageScrollingOverview")
                    }
                  >
                    <View style={styles.contentContainer4}>
                      <View style={styles.labelContainer4}>
                        <View style={styles.leadingIcon4}>
                          <Image
                            style={[
                              styles.iconButtons,
                              styles.iconButtonsLayout,
                            ]}
                            contentFit="cover"
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
                              styles.iconLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/fa-iconsolidlongarrowaltright.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </Pressable>
                  <View style={[styles.buttons4, styles.buttonsLayout]}>
                    <View style={styles.contentContainer4}>
                      <View style={styles.labelContainer5}>
                        <View style={styles.leadingIcon2}>
                          <Image
                            style={[
                              styles.iconButtons,
                              styles.iconButtonsLayout,
                            ]}
                            contentFit="cover"
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
                              styles.iconLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/fa-iconsolidlongarrowaltright1.png")}
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
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/materialsymbolsoverviewoutline.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <View style={[styles.welcomeHeader, styles.colItemLayout]}>
          <View style={styles.welcomeHeaderInner}>
            <View style={styles.container}>
              <View style={styles.avatarsWrapper}>
                <Image
                  style={styles.avatarsIcon}
                  contentFit="cover"
                  source={require("../assets/avatars.png")}
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
      <View style={[styles.riremoteControlLine, styles.iconLayout]} />
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.iconsFlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/signal.png")}
            />
            <Text style={styles.text11}>9:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabPosition: {
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.universalWhite,
    position: "absolute",
  },
  goalsSpaceBlock: {
    paddingRight: Padding.p_6xs,
    paddingLeft: Padding.p_10xs,
    height: 347,
  },
  iconsFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  titleFlexBox: {
    textAlign: "left",
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  textTypo1: {
    width: 11,
    textAlign: "center",
    height: 20,
    color: Color.neutral2,
    fontFamily: FontFamily.poppinsMedium,
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
  barLayout: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  barItemLayout: {
    height: 64,
    width: 82,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  task1Position: {
    top: 104,
    height: 20,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.sansNoteHelper_size,
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
    width: 380,
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
  iconButtonsLayout: {
    width: 28,
    height: 28,
  },
  buttonsLayout: {
    width: 155,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
  },
  labelTypo: {
    lineHeight: 20,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    textAlign: "center",
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
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
  },
  title: {
    color: Color.universalBlack100,
    textAlign: "left",
    fontSize: FontSize.sansHeadingHeading5SemiBold_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    lineHeight: 15,
    fontSize: FontSize.sansBodyMicro_size,
    textAlign: "left",
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
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_203xl,
    alignItems: "center",
  },
  buttons: {
    display: "none",
  },
  sectionHeader: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    width: 327,
  },
  text: {
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    left: 0,
    textAlign: "left",
    top: 0,
  },
  text1: {
    top: 72,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    left: 0,
    textAlign: "left",
  },
  text2: {
    top: 144,
    fontSize: FontSize.typographyBody2_size,
    color: Color.neutral2,
    left: 0,
    textAlign: "left",
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    top: 0,
    left: 0,
    textAlign: "left",
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
    fontFamily: FontFamily.poppinsMedium,
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
    overflow: "hidden",
    position: "absolute",
  },
  dashboard: {
    width: 342,
    height: 197,
    marginTop: 16,
    overflow: "hidden",
  },
  cropsGrowth: {
    left: 16,
    color: Color.textColor,
    fontFamily: FontFamily.poppinsMedium,
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
    top: 666,
    height: 353,
    paddingRight: Padding.p_9xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    overflow: "hidden",
    width: 385,
    left: -5,
  },
  barBottomItemActive: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    left: 0,
  },
  icon: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  barBottomItemInactiv: {
    left: 82,
  },
  barBottomItemInactiv1: {
    left: 164,
  },
  barBottomItemInactiv2: {
    left: 246,
  },
  barBottomHome: {
    right: 0,
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    height: 65,
    left: 0,
    backgroundColor: Color.universalWhite,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  vectorIcon: {
    width: "5.39%",
    right: "59.52%",
    left: "35.09%",
    bottom: 22,
    maxWidth: "100%",
    height: 20,
  },
  iconSettings: {
    bottom: 19,
    left: 277,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIcon1: {
    width: "5.42%",
    right: "34.76%",
    left: "59.82%",
    height: 18,
    bottom: 22,
    maxWidth: "100%",
  },
  cocoboldhomeIcon: {
    bottom: 20,
    left: 31,
    overflow: "hidden",
    position: "absolute",
  },
  settingsNavBarChild: {
    marginLeft: -125.7,
    bottom: 8,
    left: "50%",
    width: 6,
    height: 6,
    position: "absolute",
  },
  settingsNavBar: {
    width: 330,
    height: 65,
  },
  bottomTab: {
    top: 1018,
    left: 8,
    width: 374,
    height: 80,
    paddingRight: Padding.p_9xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
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
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
    top: 0,
    left: 0,
  },
  text8: {
    top: 33,
    color: Color.neutral2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
    left: 0,
  },
  text9: {
    right: 16,
    top: 66,
    color: Color.neutral2,
    fontFamily: FontFamily.poppinsMedium,
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
    top: 338,
    height: 339,
    paddingRight: Padding.p_9xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    overflow: "hidden",
    width: 385,
    left: -5,
  },
  rectangle1: {
    borderBottomRightRadius: Border.br_13xl,
    width: 380,
    left: 0,
    top: 0,
    height: 347,
  },
  leadingIcon2: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label2: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    color: Color.universalBlack50,
    fontFamily: FontFamily.sansBodyMicro,
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
    height: 44,
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.colorSet1Cloud10,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.universalWhite,
  },
  helperText: {
    lineHeight: 14,
    marginTop: 4,
    color: Color.universalWhite,
    fontFamily: FontFamily.sansBodyMicro,
    alignSelf: "stretch",
    display: "none",
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
    height: 347,
    width: 380,
    position: "absolute",
  },
  notification: {
    left: 320,
    top: 145,
    position: "absolute",
  },
  text10: {
    fontFamily: FontFamily.sansBodyMicro,
  },
  titleTypo1: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  title2: {
    color: Color.universalBlack100,
    textAlign: "left",
    fontSize: FontSize.sansHeadingHeading5SemiBold_size,
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
    width: 350,
    alignItems: "baseline",
    paddingHorizontal: Padding.p_78xl,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  iconButtons: {
    borderRadius: Border.br_2203xl,
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
    borderRadius: Border.br_203xl,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttons3: {
    borderColor: Color.colorSet1Cloud10,
    width: 155,
    backgroundColor: Color.universalWhite,
  },
  label5: {
    color: Color.universalWhite,
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
    borderColor: Color.universalWhite,
    marginLeft: 18,
  },
  buttonsParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameWrapper: {
    top: 0,
    left: 0,
    width: 327,
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
    top: 276,
    left: -6,
    width: 386,
    height: 108,
    paddingTop: Padding.p_sm,
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.universalWhite,
    position: "absolute",
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
    fontFamily: FontFamily.sansBodyMicro,
    lineHeight: 15,
    fontSize: FontSize.sansBodyMicro_size,
    color: Color.colorSet1Cloud90,
  },
  jackSpow: {
    marginTop: -10,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    color: Color.colorSet1Cloud90,
    lineHeight: 24,
    fontSize: FontSize.sansHeadingHeading5SemiBold_size,
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
    width: 292,
  },
  navTopBarOpen: {
    top: -80,
    height: 403,
    position: "absolute",
  },
  riremoteControlLine: {
    top: 1151,
    left: 144,
    overflow: "hidden",
    position: "absolute",
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text11: {
    top: "5.88%",
    left: "0%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    textAlign: "left",
    position: "absolute",
  },
  top: {
    width: 340,
    height: 17,
  },
  icons: {
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  statusBar: {
    left: -19,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  homepageScrollingAnalytics: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 733,
    width: "100%",
    flex: 1,
  },
});

export default HomepageScrollingAnalytics;
