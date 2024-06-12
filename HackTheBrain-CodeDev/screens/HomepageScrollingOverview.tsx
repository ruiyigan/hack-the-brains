import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HomepageScrollingOverview = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homepageScrollingOverview}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.airMoistureAndTemperature, styles.viewSpaceBlock]}>
        <View style={[styles.goals, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.textSpaceBlock1]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleClr]}>
                  Air moisture and temperature
                </Text>
              </View>
              <View style={styles.buttons}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon2.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon2.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.goalsInner}>
              <View style={[styles.frameWrapper, styles.framePosition]}>
                <View style={styles.selectionChipsParent}>
                  <View style={[styles.selectionChips, styles.selectionBorder]}>
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Plot #1
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label2, styles.labelTypo]}>
                      Plot #2
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label2, styles.labelTypo]}>
                      Plot #3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.cardProcessShipmentWrapper, styles.viewSpaceBlock]}
            >
              <View style={styles.cardProcessShipment}>
                <View style={styles.cardProcessShipmentChild} />
                <Image
                  style={[styles.cardProcessShipmentItem, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group-15.png")}
                />
                <View
                  style={[styles.cardProcessShipmentInner, styles.cardPosition]}
                />
                <View
                  style={[styles.rectangleView, styles.rectangleViewPosition]}
                />
                <View
                  style={[
                    styles.uicolorsmainParent,
                    styles.uicolorsmainPosition,
                  ]}
                >
                  <Image
                    style={[
                      styles.uicolorsmainIcon,
                      styles.uicolorsmainIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/uicolorsmain.png")}
                  />
                  <Text style={[styles.remboursser, styles.remboursserClr]}>
                    Moderate
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo3]}>From</Text>
                <Text style={[styles.text1, styles.textPosition1]}>To</Text>
                <Text style={[styles.text2, styles.textPosition]}>Air</Text>
                <Text style={[styles.text3, styles.textTypo2]}>
                  Temperature in degrees
                </Text>
                <Text style={[styles.atebyDiaoureGallet, styles.atebyTypo2]}>
                  35%
                </Text>
                <Text style={[styles.atebyDiaoureGallet1, styles.atebyTypo2]}>
                  29.5
                </Text>
                <Text style={[styles.atebyDiaoureGallet2, styles.atebyTypo2]}>
                  Column 1
                </Text>
                <Text style={[styles.atebyDiaoureGallet3, styles.atebyTypo1]}>
                  {" "}
                  Column 9
                </Text>
                <Text style={[styles.docteur, styles.docteurTypo]}>Status</Text>
                <View style={[styles.lineView, styles.lineViewPosition]} />
                <View
                  style={[
                    styles.cardProcessShipmentChild1,
                    styles.lineViewPosition,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild2,
                    styles.cardChildPosition1,
                  ]}
                />
                <View
                  style={[
                    styles.vuesaxboldroutingParent,
                    styles.vuesaxboldroutingPosition,
                  ]}
                >
                  <Image
                    style={[styles.vuesaxboldroutingIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/vuesaxboldrouting.png")}
                  />
                  <Text style={[styles.details, styles.detailsTypo]}>
                    Power
                  </Text>
                </View>
                <Image
                  style={[
                    styles.vuesaxboldtruckFastIcon,
                    styles.vuesaxboldtruckIconPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/vuesaxboldtruckfast.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <View style={[styles.goals, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.textSpaceBlock1]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleClr]}>
                  Soil moisture and pH level
                </Text>
              </View>
              <View style={styles.buttons}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon2.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon2.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.goalsInner}>
              <View style={[styles.frameWrapper, styles.framePosition]}>
                <View style={styles.selectionChipsParent}>
                  <View style={[styles.selectionChips, styles.selectionBorder]}>
                    <Text style={[styles.label1, styles.labelTypo]}>
                      Plot #1
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label2, styles.labelTypo]}>
                      Plot #2
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label2, styles.labelTypo]}>
                      Plot #3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.cardProcessShipmentWrapper, styles.viewSpaceBlock]}
            >
              <View style={styles.cardProcessShipment1}>
                <View style={styles.cardProcessShipmentChild} />
                <Image
                  style={[styles.groupIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group-151.png")}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild4,
                    styles.cardPosition,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild5,
                    styles.rectangleViewPosition,
                  ]}
                />
                <View
                  style={[
                    styles.uicolorsmainGroup,
                    styles.uicolorsmainPosition,
                  ]}
                >
                  <Image
                    style={[
                      styles.uicolorsmainIcon1,
                      styles.uicolorsmainIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/uicolorsmain1.png")}
                  />
                  <Text style={[styles.remboursser, styles.remboursserClr]}>
                    Good
                  </Text>
                </View>
                <Text style={[styles.text4, styles.textTypo1]}>From</Text>
                <Text style={[styles.text5, styles.textTypo1]}>To</Text>
                <Text style={[styles.text6, styles.textTypo]}>
                  Soil moiature
                </Text>
                <Text style={[styles.text7, styles.textTypo]}>pH level</Text>
                <Text style={[styles.atebyDiaoureGallet4, styles.atebyTypo]}>
                  39%
                </Text>
                <Text style={[styles.atebyDiaoureGallet5, styles.atebyTypo]}>
                  7
                </Text>
                <Text style={[styles.atebyDiaoureGallet2, styles.atebyTypo2]}>
                  Column 1
                </Text>
                <Text style={[styles.atebyDiaoureGallet7, styles.atebyTypo1]}>
                  {" "}
                  Column 9
                </Text>
                <Text style={[styles.docteur1, styles.docteurTypo]}>
                  Status
                </Text>
                <View
                  style={[
                    styles.cardProcessShipmentChild6,
                    styles.cardChildPosition,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild7,
                    styles.cardChildPosition,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild8,
                    styles.cardChildPosition1,
                  ]}
                />
                <View
                  style={[
                    styles.vuesaxboldroutingGroup,
                    styles.vuesaxboldroutingPosition,
                  ]}
                >
                  <Image
                    style={[styles.vuesaxboldroutingIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/vuesaxboldrouting1.png")}
                  />
                  <Text style={[styles.details1, styles.detailsTypo]}>
                    Power
                  </Text>
                </View>
                <Image
                  style={[
                    styles.vuesaxboldtruckFastIcon1,
                    styles.vuesaxboldtruckIconPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/vuesaxboldtruckfast1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.cropStatus, styles.cropStatusPosition]}>
        <View style={[styles.goals, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.textSpaceBlock1]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleClr]}>Crop status</Text>
              </View>
              <View style={styles.viewAllButtons}>
                <View
                  style={[
                    styles.contentContainer2,
                    styles.contentContainerSpaceBlock,
                  ]}
                >
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
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
            <View style={styles.chipsWrapper}>
              <View style={styles.chips}>
                <View style={styles.selectionChipsParent}>
                  <View style={[styles.selectionChips, styles.selectionBorder]}>
                    <Text style={[styles.label1, styles.labelTypo]}>#1</Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label2, styles.labelTypo]}>#2</Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label2, styles.labelTypo]}>#3</Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label2, styles.labelTypo]}>#4</Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text
                      style={[styles.label2, styles.labelTypo]}
                    >{` #5 `}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.boxShipment}>
              <View style={[styles.textContainer, styles.textSpaceBlock]}>
                <Text
                  style={[styles.accountName, styles.accountTypo]}
                >{`Plot 1 Column 1 `}</Text>
                <Text
                  style={[styles.pesticideUsageMildContainer, styles.labelTypo]}
                >
                  <Text
                    style={styles.pesticideUsage}
                  >{`Pesticide usage: `}</Text>
                  <Text style={styles.mild}>Mild</Text>
                </Text>
              </View>
              <Text style={[styles.accountNumber, styles.accountTypo]}>
                Healthy
              </Text>
            </View>
            <View style={styles.boxShipment}>
              <View style={[styles.textContainer, styles.textSpaceBlock]}>
                <Text style={[styles.accountName, styles.accountTypo]}>
                  Plot 2 Column 2
                </Text>
                <Text
                  style={[styles.pesticideUsageMildContainer, styles.labelTypo]}
                >
                  <Text
                    style={styles.pesticideUsage}
                  >{`Pesticide usage: `}</Text>
                  <Text style={styles.high}>High</Text>
                </Text>
              </View>
              <Text style={[styles.accountNumber1, styles.accountTypo]}>
                Mild issue
              </Text>
            </View>
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
              style={[styles.icon, styles.barItemLayout1]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
            onPress={() => navigation.navigate("Settings1")}
          >
            <Image
              style={[styles.icon, styles.barItemLayout1]}
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
            source={require("../assets/vector7.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconSettings, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--settings5.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorPosition]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={[styles.cocoboldhomeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cocoboldhome3.png")}
        />
        <Image
          style={[styles.settingsNavBarChild, styles.cropStatusPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-52.png")}
        />
      </View>
      <View style={[styles.updates, styles.viewSpaceBlock]}>
        <View style={[styles.goals4, styles.goalsSpaceBlock]}>
          <View>
            <View style={[styles.sectionHeader, styles.textSpaceBlock1]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleClr]}>Updates</Text>
              </View>
              <View style={styles.buttons}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout3}
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
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
          <View style={styles.frameParent}>
            <View style={[styles.frameView, styles.framePosition]}>
              <View style={styles.selectionChipsParent}>
                <View style={[styles.buttons3, styles.buttonsLayout]}>
                  <View style={styles.contentContainer4}>
                    <View style={styles.labelContainer4}>
                      <View style={styles.leadingIcon4}>
                        <Image
                          style={[styles.iconButtons, styles.iconButtonsLayout]}
                          contentFit="cover"
                          source={require("../assets/icon-buttons.png")}
                        />
                      </View>
                      <View style={styles.textAlignmentSmall}>
                        <Text style={[styles.label15, styles.labelTypo]}>
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
                  </View>
                </View>
                <TouchableHighlight
                  style={[styles.buttons4, styles.buttonsLayout]}
                  underlayColor="#fff"
                  onPress={() =>
                    navigation.navigate("HomepageScrollingAnalytics")
                  }
                >
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
                          styles.textSpaceBlock1,
                        ]}
                      >
                        <Text
                          style={[styles.label16, styles.labelTypo]}
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
                </TouchableHighlight>
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
      <View style={styles.navTopBarOpen}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Pressable
            style={styles.searchBar}
            onPress={() => navigation.navigate("SearchFeature")}
          >
            <View style={styles.contentContainer6}>
              <View style={styles.labelContainer6}>
                <View style={styles.trailingIcon4}>
                  <Image
                    style={styles.vuesaxlinearsearchNormalIcon}
                    contentFit="cover"
                    source={require("../assets/vuesaxlinearsearchnormal.png")}
                  />
                </View>
                <View
                  style={[styles.textAlignmentBase, styles.textSpaceBlock1]}
                >
                  <Text style={[styles.label17, styles.accountTypo]}>
                    Search
                  </Text>
                </View>
                <View style={styles.trailingIcon6}>
                  <Image
                    style={styles.systemQrCode}
                    contentFit="cover"
                    source={require("../assets/system--qr-code.png")}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.helperText}>
              Helper text for status and guidance
            </Text>
          </Pressable>
          <Image
            style={[styles.vuesaxboldsearchNormalIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxboldsearchnormal1.png")}
          />
        </View>
        <View style={styles.slider}>
          <View style={[styles.rectangle2, styles.rectangleLayout]} />
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
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
        <View style={[styles.boxDeliveryStats, styles.cropStatusPosition]}>
          <View style={styles.frameGroup}>
            <LinearGradient
              style={[styles.groupWrapper, styles.groupWrapperBg]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"]}
            >
              <View style={styles.successfullyLayout}>
                <View
                  style={[styles.successfullySent, styles.successfullyLayout]}
                >
                  <Image
                    style={styles.gameIconsdeliveryDrone}
                    contentFit="cover"
                    source={require("../assets/gameiconsdeliverydrone.png")}
                  />
                  <View style={styles.droneCameraFeedParent}>
                    <Text style={[styles.droneCameraFeed, styles.labelTypo]}>
                      Drone Camera Feed
                    </Text>
                    <Text style={[styles.online, styles.text8Typo]}>
                      Online
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
              style={[styles.frameLineargradient, styles.groupWrapperBg]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"]}
            >
              <View style={styles.successfullyReceivedWrapper}>
                <View style={styles.successfullyReceived}>
                  <Image
                    style={styles.assetIllustrationBigBox}
                    contentFit="cover"
                    source={require("../assets/asset--illustration--big-box.png")}
                  />
                  <Text style={[styles.droneCameraFeed, styles.labelTypo]}>
                    Light Sensor Status
                  </Text>
                  <Text style={[styles.text8, styles.text8Typo]}>67%</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
        <Image
          style={styles.hugeiconsenergyEllipse}
          contentFit="cover"
          source={require("../assets/hugeiconsenergyellipse.png")}
        />
        <Text style={[styles.search, styles.accountTypo]}>Search</Text>
        <View style={styles.welcomeHeader}>
          <View style={styles.welcomeHeaderInner}>
            <View style={styles.container}>
              <View style={styles.avatarsWrapper}>
                <Image
                  style={styles.assetIllustrationBigBox}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  goalsSpaceBlock: {
    paddingRight: Padding.p_6xs,
    paddingLeft: Padding.p_10xs,
    width: 327,
  },
  textSpaceBlock1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  titleClr: {
    color: Color.universalBlack100,
    textAlign: "left",
  },
  textSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
  },
  iconLayout3: {
    width: 16,
    maxHeight: "100%",
    alignSelf: "stretch",
    display: "none",
  },
  framePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  selectionBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "flex-end",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_2203xl,
    alignItems: "center",
  },
  labelTypo: {
    lineHeight: 20,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardPosition: {
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    backgroundColor: Color.colorSet1Cloud90,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleViewPosition: {
    backgroundColor: Color.statusSuccessGreenBG,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  uicolorsmainPosition: {
    left: "70.64%",
    right: "5.2%",
    width: "24.16%",
    position: "absolute",
  },
  uicolorsmainIconLayout: {
    borderRadius: Border.br_mid,
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  remboursserClr: {
    color: Color.colorSet1Cloud90,
    textAlign: "left",
  },
  textTypo3: {
    color: Color.colorAquamarine_100,
    top: "52.16%",
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textPosition1: {
    left: "77.68%",
    textAlign: "right",
  },
  textPosition: {
    left: "5.81%",
    textAlign: "left",
  },
  textTypo2: {
    top: "7.37%",
    color: Color.colorAquamarine_100,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  atebyTypo2: {
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  atebyTypo1: {
    left: "75.23%",
    textAlign: "center",
    color: Color.colorSet1Cloud10,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  docteurTypo: {
    color: Color.colorSet1Cloud100,
    fontFamily: FontFamily.sansBodyMicro,
    fontSize: FontSize.sansBodyBodyCopy_size,
    left: "5.81%",
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  lineViewPosition: {
    borderTopWidth: 1,
    left: "-0.15%",
    right: "-0.15%",
    width: "100.31%",
    height: "0.53%",
    borderColor: Color.colorSet1Cloud10,
    borderStyle: "solid",
    position: "absolute",
  },
  cardChildPosition1: {
    borderRadius: Border.br_4xs,
    right: "7.03%",
    width: "87.16%",
    left: "5.81%",
    display: "none",
    backgroundColor: Color.colorAquamarine_100,
    position: "absolute",
  },
  vuesaxboldroutingPosition: {
    left: "61.16%",
    right: "31.5%",
    top: "76.95%",
    width: "7.34%",
    display: "none",
    position: "absolute",
  },
  detailsTypo: {
    lineHeight: 39,
    fontSize: FontSize.size_7xl,
    left: "-387.5%",
    textAlign: "center",
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    display: "none",
    color: Color.universalBlack100,
    position: "absolute",
  },
  vuesaxboldtruckIconPosition: {
    left: "28.44%",
    right: "67.89%",
    top: "56.95%",
    width: "3.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    top: "52.15%",
    color: Color.colorAquamarine_100,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    top: "7.4%",
    color: Color.colorAquamarine_100,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  atebyTypo: {
    top: "14.8%",
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  cardChildPosition: {
    height: "0.56%",
    borderTopWidth: 1,
    borderColor: Color.colorSet1Cloud10,
    left: "-0.15%",
    right: "-0.15%",
    width: "100.31%",
    borderStyle: "solid",
    position: "absolute",
  },
  cropStatusPosition: {
    left: "50%",
    position: "absolute",
  },
  contentContainerSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    height: 28,
    borderRadius: Border.br_203xl,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  accountTypo: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
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
  vectorPosition: {
    bottom: 23,
    position: "absolute",
  },
  iconLayout: {
    width: 25,
    height: 24,
    position: "absolute",
  },
  buttonsLayout: {
    width: 155,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonsLayout: {
    width: 28,
    height: 28,
  },
  rectanglePosition: {
    width: 397,
    top: 0,
    height: 347,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 4,
    borderRadius: Border.br_11xs,
    width: 16,
  },
  groupWrapperBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_5xs,
  },
  successfullyLayout: {
    height: 108,
    width: 129,
  },
  text8Typo: {
    lineHeight: 35,
    fontSize: FontSize.sansHeadingHeading3SemiBold_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  jackSpowLayout: {
    height: 30,
    width: 132,
    color: Color.colorSet1Cloud90,
    textAlign: "left",
  },
  title: {
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
    marginLeft: 2,
    flexDirection: "row",
  },
  trailingIcon: {
    marginLeft: 2,
  },
  buttons: {
    display: "none",
    backgroundColor: Color.colorAquamarine_100,
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 327,
  },
  label1: {
    color: Color.colorSet1Cloud80,
    textAlign: "left",
  },
  selectionChips: {
    backgroundColor: Color.colorSet1Cloud10,
    borderColor: Color.colorSet1Cloud40,
  },
  label2: {
    textAlign: "left",
    color: Color.universalBlack100,
  },
  selectionChips1: {
    borderColor: Color.colorGray_800,
    marginLeft: 12,
  },
  selectionChipsParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameWrapper: {
    width: 491,
  },
  goalsInner: {
    height: 32,
    marginTop: 10,
    alignSelf: "stretch",
  },
  cardProcessShipmentChild: {
    backgroundColor: Color.colorSet1Cloud90,
    borderRadius: Border.br_sm,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  cardProcessShipmentItem: {
    height: "8.68%",
    top: "55.21%",
    bottom: "36.11%",
    left: "27.22%",
    right: "24.46%",
    width: "48.32%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  cardProcessShipmentInner: {
    height: "29.11%",
    bottom: "70.89%",
  },
  rectangleView: {
    height: "17.84%",
    top: "29.11%",
    bottom: "53.05%",
  },
  uicolorsmainIcon: {
    height: "91.35%",
    bottom: "8.65%",
  },
  remboursser: {
    top: "3.85%",
    left: "18.99%",
    fontFamily: FontFamily.titilliumWebSemiBold,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    color: Color.colorSet1Cloud90,
    fontWeight: "600",
    position: "absolute",
  },
  uicolorsmainParent: {
    height: "10.95%",
    top: "32.63%",
    bottom: "56.42%",
  },
  text: {
    left: "16.21%",
    textAlign: "left",
  },
  text1: {
    textAlign: "right",
    color: Color.colorAquamarine_100,
    top: "52.16%",
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text2: {
    top: "7.37%",
    color: Color.colorAquamarine_100,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text3: {
    left: "53.21%",
    textAlign: "right",
  },
  atebyDiaoureGallet: {
    color: Color.colorSet1Cloud10,
    top: "14.79%",
    fontSize: FontSize.typographyBody2_size,
    left: "5.81%",
    textAlign: "left",
  },
  atebyDiaoureGallet1: {
    left: "84.1%",
    color: "#f75183",
    top: "14.79%",
    fontSize: FontSize.typographyBody2_size,
    textAlign: "right",
  },
  atebyDiaoureGallet2: {
    top: "60%",
    color: Color.colorSet1Cloud10,
    left: "5.81%",
    textAlign: "left",
  },
  atebyDiaoureGallet3: {
    top: "59.58%",
    textAlign: "center",
  },
  docteur: {
    top: "33.47%",
  },
  lineView: {
    top: "28.84%",
    bottom: "70.63%",
  },
  cardProcessShipmentChild1: {
    top: "46.68%",
    bottom: "52.79%",
    display: "none",
  },
  cardProcessShipmentChild2: {
    height: "20.89%",
    top: "72.16%",
    bottom: "6.95%",
  },
  vuesaxboldroutingIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "100%",
    position: "absolute",
    width: "100%",
  },
  details: {
    top: "-29.29%",
  },
  vuesaxboldroutingParent: {
    height: "10.42%",
    bottom: "12.63%",
  },
  vuesaxboldtruckFastIcon: {
    height: "5.21%",
    bottom: "37.84%",
  },
  cardProcessShipment: {
    height: 190,
    width: 327,
  },
  cardProcessShipmentWrapper: {
    paddingRight: Padding.p_3xs,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
  },
  goals: {
    height: 347,
    paddingRight: Padding.p_6xs,
    paddingLeft: Padding.p_10xs,
  },
  airMoistureAndTemperature: {
    top: 430,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
    height: 353,
    left: 0,
    position: "absolute",
    width: 394,
  },
  groupIcon: {
    height: "8.7%",
    top: "55.2%",
    bottom: "36.1%",
    left: "27.22%",
    right: "24.46%",
    width: "48.32%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  cardProcessShipmentChild4: {
    height: "29.15%",
    bottom: "70.85%",
  },
  cardProcessShipmentChild5: {
    height: "17.85%",
    top: "29.15%",
    bottom: "52.99%",
  },
  uicolorsmainIcon1: {
    height: "85.1%",
    bottom: "14.9%",
  },
  uicolorsmainGroup: {
    height: "11.75%",
    top: "32.6%",
    bottom: "55.65%",
  },
  text4: {
    left: "16.21%",
    textAlign: "left",
  },
  text5: {
    textAlign: "right",
    left: "77.68%",
  },
  text6: {
    left: "5.81%",
    textAlign: "left",
  },
  text7: {
    left: "78.9%",
    textAlign: "right",
  },
  atebyDiaoureGallet4: {
    color: Color.colorGold,
    left: "5.81%",
    textAlign: "left",
  },
  atebyDiaoureGallet5: {
    left: "90.21%",
    color: Color.colorSet1Cloud10,
    textAlign: "right",
  },
  atebyDiaoureGallet7: {
    top: "59.55%",
    textAlign: "center",
  },
  docteur1: {
    top: "33.5%",
  },
  cardProcessShipmentChild6: {
    top: "28.87%",
    bottom: "70.56%",
  },
  cardProcessShipmentChild7: {
    top: "46.67%",
    bottom: "52.77%",
    display: "none",
  },
  cardProcessShipmentChild8: {
    height: "20.85%",
    top: "72.15%",
    bottom: "7.01%",
  },
  details1: {
    top: "-29.19%",
  },
  vuesaxboldroutingGroup: {
    height: "10.45%",
    bottom: "12.6%",
  },
  vuesaxboldtruckFastIcon1: {
    height: "5.2%",
    bottom: "37.85%",
  },
  cardProcessShipment1: {
    height: 177,
    width: 327,
  },
  view: {
    top: 748,
    width: 383,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
    height: 353,
    left: 0,
    position: "absolute",
  },
  contentContainer2: {
    display: "none",
  },
  viewAllButtons: {
    width: 46,
    height: 28,
    display: "none",
    backgroundColor: Color.colorAquamarine_100,
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
  },
  chips: {
    width: 491,
  },
  chipsWrapper: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  accountName: {
    color: Color.colorSet1Cloud90,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  pesticideUsage: {
    color: Color.universalBlack70,
  },
  mild: {
    color: Color.colorGold,
  },
  pesticideUsageMildContainer: {
    marginTop: 1,
    alignSelf: "stretch",
    textAlign: "left",
  },
  textContainer: {
    width: 178,
  },
  accountNumber: {
    color: Color.statusSuccessGreen50,
    marginLeft: 8,
    textAlign: "right",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  boxShipment: {
    borderRadius: Border.br_7xs,
    width: 360,
    paddingLeft: Padding.p_2xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_5xs,
    marginTop: 16,
    borderColor: Color.colorSet1Cloud10,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  high: {
    color: "#fc0202",
  },
  accountNumber1: {
    marginLeft: 8,
    color: Color.colorGold,
    textAlign: "right",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  cropStatus: {
    marginLeft: -201.5,
    top: 1037,
    width: 392,
    height: 350,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    justifyContent: "center",
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
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
    height: "100%",
    width: "100%",
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
    backgroundColor: Color.universalWhite,
    left: 0,
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
    left: 283,
    height: 24,
    overflow: "hidden",
  },
  vectorIcon: {
    width: "5.43%",
    right: "34.77%",
    left: "59.8%",
    height: 18,
    bottom: 32,
    position: "absolute",
  },
  cocoboldhomeIcon: {
    bottom: 25,
    left: 27,
    height: 24,
    overflow: "hidden",
  },
  settingsNavBarChild: {
    marginLeft: -138.1,
    bottom: 13,
    width: 6,
    height: 6,
  },
  settingsNavBar: {
    right: 22,
    bottom: 11,
    left: 23,
  },
  iconButtons: {
    borderRadius: Border.br_2203xl,
    width: 28,
  },
  leadingIcon4: {
    paddingLeft: Padding.p_8xl,
    paddingTop: Padding.p_6xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label15: {
    color: Color.colorGray_200,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
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
    backgroundColor: Color.colorDeepskyblue,
    borderColor: Color.colorSet1Cloud10,
  },
  leadingIcon5: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label16: {
    color: Color.universalBlack,
    textAlign: "center",
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
    borderColor: Color.universalWhite,
    marginLeft: 18,
    backgroundColor: Color.universalWhite,
  },
  frameView: {
    width: 327,
  },
  materialSymbolsoverviewOutlIcon: {
    top: 12,
    left: 12,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frameParent: {
    marginTop: -3,
    height: 48,
    alignSelf: "stretch",
  },
  goals4: {
    height: 82,
  },
  updates: {
    top: 331,
    height: 99,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
    width: 394,
    left: 0,
    position: "absolute",
  },
  rectangle1: {
    borderBottomRightRadius: Border.br_13xl,
    backgroundColor: Color.colorSet1Cloud40,
  },
  vuesaxlinearsearchNormalIcon: {
    width: 24,
    height: 24,
  },
  label17: {
    color: Color.universalBlack50,
    fontFamily: FontFamily.sansBodyMicro,
    textAlign: "left",
    flex: 1,
  },
  textAlignmentBase: {
    marginLeft: 8,
    display: "none",
    justifyContent: "center",
  },
  systemQrCode: {
    width: 24,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  trailingIcon6: {
    width: 24,
    marginLeft: 8,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer6: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  contentContainer6: {
    height: 44,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    borderColor: Color.colorSet1Cloud10,
    borderWidth: 1,
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
    fontSize: FontSize.sansNoteHelper_size,
    alignSelf: "stretch",
    display: "none",
    textAlign: "left",
  },
  searchBar: {
    top: 204,
    left: 29,
    width: 340,
    backgroundColor: Color.colorSet1Cloud40,
    position: "absolute",
  },
  vuesaxboldsearchNormalIcon: {
    top: 213,
    left: 38,
    height: 24,
    display: "none",
  },
  rectangle2: {
    backgroundColor: Color.colorSet1Cloud40,
  },
  rectangle3: {
    backgroundColor: Color.colorLightgray,
    marginLeft: 6,
  },
  slider: {
    top: 399,
    left: 168,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  notification: {
    left: 320,
    top: 145,
    position: "absolute",
  },
  gameIconsdeliveryDrone: {
    width: 50,
    height: 48,
    overflow: "hidden",
  },
  droneCameraFeed: {
    color: Color.colorSet1Cloud10,
    alignSelf: "stretch",
    textAlign: "left",
  },
  online: {
    color: Color.colorSet1Cloud40,
    alignSelf: "stretch",
    textAlign: "left",
  },
  droneCameraFeedParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  successfullySent: {
    paddingBottom: Padding.p_6xs,
    justifyContent: "flex-end",
    width: 129,
    top: 0,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  groupWrapper: {
    width: 149,
    height: 1,
    paddingLeft: Padding.p_6xs,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_7xs,
    paddingBottom: 75,
  },
  assetIllustrationBigBox: {
    width: 48,
    height: 48,
  },
  text8: {
    color: "#c2e630",
    width: 86,
    textAlign: "right",
  },
  successfullyReceived: {
    height: 109,
    alignSelf: "stretch",
  },
  successfullyReceivedWrapper: {
    height: 115,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameLineargradient: {
    width: 175,
    height: 107,
    paddingLeft: Padding.p_sm,
    paddingTop: 17,
    marginLeft: 1,
    alignItems: "flex-end",
    paddingBottom: Padding.p_xs,
  },
  frameGroup: {
    marginTop: -62,
    top: "50%",
    right: 26,
    height: 144,
    paddingBottom: 33,
    zIndex: 0,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  boxDeliveryStats: {
    marginLeft: -187.5,
    top: 265,
    backgroundColor: Color.colorSet1Cloud100,
    width: 393,
    height: 122,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingRight: 13,
    paddingBottom: Padding.p_xs,
    borderRadius: Border.br_sm,
    left: "50%",
    overflow: "hidden",
  },
  hugeiconsenergyEllipse: {
    top: 281,
    left: 231,
    width: 43,
    height: 43,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: 215,
    left: 40,
    color: Color.colorSilver_100,
    width: 209,
    height: 31,
    fontFamily: FontFamily.sansBodyMicro,
    textAlign: "left",
    position: "absolute",
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
    height: 30,
  },
  jackSpow: {
    marginTop: -10,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
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
    width: 294,
    paddingRight: Padding.p_75xl,
    flex: 1,
  },
  welcomeHeader: {
    top: 132,
    left: 24,
    width: 291,
    height: 56,
    position: "absolute",
  },
  navTopBarOpen: {
    top: -80,
    width: 375,
    height: 403,
    left: 0,
    position: "absolute",
  },
  homepageScrollingOverview: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 851,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomepageScrollingOverview;
