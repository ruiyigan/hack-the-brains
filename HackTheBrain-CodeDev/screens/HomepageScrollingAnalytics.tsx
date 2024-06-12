import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomepageScrollingAnalytics = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homepageScrollingAnalytics}>
      <View style={[styles.optimumGrowth, styles.updatesPosition]}>
        <View style={[styles.goals, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.textSpaceBlock]}>
              <View style={styles.container}>
                <Text style={styles.title}>Optimum growth</Text>
              </View>
              <View style={styles.buttons}>
                <View style={styles.contentContainer}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout3]}
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
      <View style={[styles.settingsNavBar, styles.barLayout]}>
        <View style={[styles.barBottomHome, styles.barItemLayout1]}>
          <Image
            style={[styles.barBottomItemActive, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active.png")}
          />
          <Image
            style={[styles.barBottomItemInactiv, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active.png")}
          />
          <Pressable
            style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
            onPress={() => navigation.navigate("AidMainPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
            onPress={() => navigation.navigate("Settings1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[styles.vector, styles.vectorPosition]}
          onPress={() => navigation.navigate("ControlIrrigationPlot2Colu1")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconSettings, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--settings.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
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
      <View style={styles.lightStatus}>
        <View style={[styles.frame, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.textSpaceBlock]}>
              <View style={styles.container}>
                <Text style={styles.title}>Watering Regime</Text>
              </View>
              <View style={styles.buttons}>
                <View style={styles.contentContainer}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout3]}
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
      <View style={styles.navTopBarOpen}>
        <View style={[styles.rectangle, styles.rectangleLayout1]}>
          <View style={[styles.rectangle1, styles.searchBarBg]} />
          <Pressable
            style={[styles.searchBar, styles.searchBarBg]}
            onPress={() => navigation.navigate("SearchFeature")}
          >
            <View style={styles.contentContainer2}>
              <View style={styles.labelContainer2}>
                <Image
                  style={[styles.leadingIcon2, styles.iconLayout4]}
                  contentFit="cover"
                  source={require("../assets/leading-icon1.png")}
                />
                <View style={[styles.textAlignmentBase, styles.textSpaceBlock]}>
                  <Text style={[styles.label2, styles.label2Typo]}>Search</Text>
                </View>
                <Image
                  style={[styles.trailingIcon2, styles.iconLayout4]}
                  contentFit="cover"
                  source={require("../assets/trailing-icon1.png")}
                />
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
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </Pressable>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <Text style={[styles.search, styles.label2Typo]}>Search</Text>
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
      <View style={styles.riremoteControlLine} />
      <View style={[styles.updates, styles.rectangleLayout1]}>
        <View style={[styles.goals2, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.textSpaceBlock]}>
              <View style={styles.container}>
                <Text style={styles.title}>Updates</Text>
              </View>
              <View style={styles.buttons}>
                <View style={styles.contentContainer}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View style={styles.textAlignmentMicro}>
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameWrapper}>
              <View style={styles.buttonsParent}>
                <View style={[styles.buttons3, styles.buttonsLayout]}>
                  <Pressable
                    style={styles.contentContainer4}
                    onPress={() =>
                      navigation.navigate("HomepageScrollingOverview")
                    }
                  >
                    <View style={styles.labelContainer4}>
                      <View style={styles.leadingIcon4}>
                        <Image
                          style={[styles.iconButtons, styles.iconButtonsLayout]}
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
                          style={styles.faIconsolidlongArrowAltR}
                          contentFit="cover"
                          source={require("../assets/fa-iconsolidlongarrowaltright.png")}
                        />
                      </View>
                    </View>
                  </Pressable>
                </View>
                <Pressable style={[styles.buttons4, styles.buttonsLayout]}>
                  <View style={styles.contentContainer4}>
                    <View style={styles.labelContainer5}>
                      <View style={styles.leadingIcon5}>
                        <Image
                          style={[styles.iconButtons, styles.iconButtonsLayout]}
                          contentFit="cover"
                          source={require("../assets/icon-buttons1.png")}
                        />
                      </View>
                      <View
                        style={[
                          styles.textAlignmentSmall1,
                          styles.textSpaceBlock,
                        ]}
                      >
                        <Text
                          style={[styles.label5, styles.labelTypo]}
                        >{`Analytics`}</Text>
                      </View>
                      <View style={styles.trailingIcon5}>
                        <Image
                          style={styles.faIconsolidlongArrowAltR}
                          contentFit="cover"
                          source={require("../assets/fa-iconsolidlongarrowaltright1.png")}
                        />
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
            <Image
              style={styles.materialSymbolsoverviewOutlIcon}
              contentFit="cover"
              source={require("../assets/materialsymbolsoverviewoutline.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  updatesPosition: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    justifyContent: "center",
    backgroundColor: Color.universalWhite,
    position: "absolute",
    overflow: "hidden",
  },
  goalsSpaceBlock: {
    paddingRight: Padding.p_6xs,
    paddingLeft: Padding.p_10xs,
  },
  textSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  iconLayout3: {
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
    height: 65,
    position: "absolute",
  },
  barItemLayout1: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  barItemLayout: {
    height: 64,
    width: 82,
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  vectorPosition: {
    bottom: 22,
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    width: 25,
    height: 24,
    position: "absolute",
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
    width: 397,
    left: 0,
  },
  searchBarBg: {
    backgroundColor: Color.colorSet1Cloud40,
    position: "absolute",
  },
  iconLayout4: {
    maxHeight: "100%",
    width: 24,
    alignSelf: "stretch",
  },
  label2Typo: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.sansBodyMicro,
    textAlign: "left",
    lineHeight: 24,
  },
  iconButtonsLayout: {
    width: 28,
    height: 28,
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
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
  },
  title: {
    color: Color.universalBlack100,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.sansHeadingHeading5SemiBold_size,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
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
    paddingHorizontal: Padding.p_3xs,
    height: 28,
    borderRadius: Border.br_203xl,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttons: {
    backgroundColor: Color.colorAquamarine_100,
    display: "none",
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionHeader: {
    justifyContent: "space-between",
    alignItems: "center",
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
    height: 347,
  },
  optimumGrowth: {
    top: 572,
    left: 2,
    width: 404,
    height: 350,
  },
  barBottomItemActive: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    left: 0,
  },
  barBottomItemInactiv: {
    left: 82,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_base,
    overflow: "hidden",
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
    position: "absolute",
    left: 0,
    backgroundColor: Color.universalWhite,
    borderRadius: Border.br_base,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "35.09%",
    right: "59.51%",
    width: "5.4%",
    height: 20,
  },
  iconSettings: {
    bottom: 19,
    left: 292,
    height: 24,
    overflow: "hidden",
  },
  vectorIcon: {
    width: "5.43%",
    right: "34.77%",
    left: "59.8%",
    height: 18,
    bottom: 22,
    position: "absolute",
  },
  cocoboldhomeIcon: {
    bottom: 20,
    left: 32,
    height: 24,
    overflow: "hidden",
  },
  settingsNavBarChild: {
    marginLeft: -132.5,
    bottom: 8,
    left: "50%",
    width: 6,
    height: 6,
    position: "absolute",
  },
  settingsNavBar: {
    bottom: 11,
    left: 29,
    right: 16,
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
    top: 66,
    right: 16,
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
    height: 347,
  },
  lightStatus: {
    top: 340,
    width: 402,
    height: 232,
    paddingTop: 253,
    paddingBottom: 31,
    left: 0,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    justifyContent: "center",
    backgroundColor: Color.universalWhite,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle1: {
    borderBottomRightRadius: Border.br_13xl,
    width: 397,
    left: 0,
    top: 0,
    height: 347,
  },
  leadingIcon2: {
    width: 24,
  },
  label2: {
    color: Color.universalBlack50,
    fontFamily: FontFamily.sansBodyMicro,
    flex: 1,
  },
  textAlignmentBase: {
    marginLeft: 8,
    display: "none",
    justifyContent: "center",
    flex: 1,
  },
  trailingIcon2: {
    marginLeft: 8,
    width: 24,
  },
  labelContainer2: {
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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
    color: Color.universalWhite,
    marginTop: 4,
    fontFamily: FontFamily.sansBodyMicro,
    alignSelf: "stretch",
    display: "none",
  },
  searchBar: {
    top: 204,
    left: 28,
    width: 335,
  },
  vuesaxboldsearchNormalIcon: {
    top: 213,
    left: 38,
    height: 24,
    display: "none",
  },
  rectangle: {
    top: 0,
    height: 347,
    position: "absolute",
  },
  notification: {
    left: 320,
    top: 145,
    position: "absolute",
  },
  rectangleIcon: {
    left: 195,
  },
  rectangle2: {
    backgroundColor: Color.colorLightgray,
    left: 174,
  },
  search: {
    top: 214,
    left: 45,
    color: Color.colorSilver_100,
    width: 209,
    height: 31,
    fontFamily: FontFamily.sansBodyMicro,
    position: "absolute",
  },
  avatarsIcon: {
    width: 48,
    height: 48,
  },
  avatarsWrapper: {
    alignItems: "flex-end",
    paddingRight: Padding.p_xs,
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
    color: Color.colorSet1Cloud90,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.sansHeadingHeading5SemiBold_size,
  },
  component1: {
    height: 59,
    justifyContent: "flex-end",
    paddingTop: Padding.p_12xs,
    paddingBottom: Padding.p_8xs,
    width: 132,
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
    width: 393,
    height: 403,
    left: 0,
    position: "absolute",
  },
  riremoteControlLine: {
    top: 1151,
    left: 144,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
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
    color: Color.colorGray_200,
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
    width: 24,
    height: 24,
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
  leadingIcon5: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label5: {
    color: Color.universalBlack,
  },
  textAlignmentSmall1: {
    marginLeft: 8,
    justifyContent: "center",
  },
  trailingIcon5: {
    marginLeft: 8,
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer5: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons4: {
    backgroundColor: Color.colorDeepskyblue,
    borderColor: Color.colorDeepskyblue,
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
    top: 12,
    left: 12,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frameGroup: {
    marginTop: -3,
    height: 48,
    alignSelf: "stretch",
  },
  goals2: {
    height: 82,
    width: 327,
  },
  updates: {
    top: 203,
    height: 99,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    justifyContent: "center",
    backgroundColor: Color.universalWhite,
    position: "absolute",
    overflow: "hidden",
  },
  homepageScrollingAnalytics: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 851,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomepageScrollingAnalytics;
