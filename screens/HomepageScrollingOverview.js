import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const HomepageScrollingOverview = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageScrollingOverview}>
      <View style={styles.frame}>
        <View style={styles.sectionHeader}>
          <View style={styles.container}>
            <Text
              style={[styles.title, styles.accountTypo1]}
            >{`                        
Updates`}</Text>
          </View>
          <View style={[styles.buttons, styles.buttonsPosition]}>
            <View style={styles.contentContainerSpaceBlock}>
              <View style={styles.labelContainer}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/leading-icon.png")}
                />
                <View
                  style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                >
                  <Text style={styles.label}>Label</Text>
                </View>
                <Image
                  style={[styles.trailingIcon, styles.iconLayout1]}
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
              <View style={[styles.buttons1, styles.buttonsBorder]}>
                <View style={styles.contentContainer1}>
                  <View style={styles.labelContainer1}>
                    <View style={styles.leadingIcon1}>
                      <Image
                        style={[styles.iconButtons, styles.iconButtonsLayout]}
                        contentFit="cover"
                        source={require("../assets/icon-buttons.png")}
                      />
                    </View>
                    <View style={styles.textAlignmentSmall}>
                      <Text style={[styles.label1, styles.labelTypo]}>
                        Overview
                      </Text>
                    </View>
                    <View style={styles.trailingIcon1}>
                      <Image
                        style={styles.faIconsolidlongArrowAltR}
                        contentFit="cover"
                        source={require("../assets/fa-iconsolidlongarrowaltright.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <Pressable
                style={[styles.buttons2, styles.buttonsBorder]}
                onPress={() =>
                  navigation.navigate("HomepageScrollingAnalytics")
                }
              >
                <View style={styles.contentContainer1}>
                  <View style={styles.labelContainer2}>
                    <View style={styles.leadingIcon2}>
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
                        style={[styles.label2, styles.labelTypo]}
                      >{`Analytics &
report`}</Text>
                    </View>
                    <View style={styles.trailingIcon2}>
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
      <View style={[styles.lightStatus, styles.statusSpaceBlock]}>
        <View style={styles.frame1}>
          <View>
            <View style={[styles.sectionHeader1, styles.iconsFlexBox]}>
              <View style={styles.labelContainer}>
                <Text style={[styles.title, styles.accountTypo1]}>
                  Light status
                </Text>
              </View>
              <View style={[styles.buttons3, styles.buttonsBg]}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.labelContainer}>
                    <Image
                      style={styles.iconLayout1}
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameInner}>
              <View style={styles.frameContainer}>
                <View style={styles.buttonsParent}>
                  <View style={[styles.selectionChips, styles.selectionBorder]}>
                    <Text style={[styles.label4, styles.labelTypo1]}>
                      Plot #1
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>
                      Plot #2
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>
                      Plot #3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.cardProcessShipmentWrapper,
                styles.statusSpaceBlock,
              ]}
            >
              <View style={styles.cardProcessShipment}>
                <View style={styles.cardProcessShipmentChild} />
                <Image
                  style={[
                    styles.cardProcessShipmentItem,
                    styles.iconCardLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/group-15.png")}
                />
                <View
                  style={[
                    styles.cardProcessShipmentInner,
                    styles.cardChildPosition4,
                  ]}
                />
                <View
                  style={[styles.rectangleView, styles.cardChildPosition3]}
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
                  <Text style={[styles.remboursser, styles.remboursserTypo]}>
                    {" "}
                    . Good
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo5]}>From</Text>
                <Text style={[styles.text1, styles.textPosition1]}>To</Text>
                <Text style={[styles.text2, styles.textPosition]}>Power</Text>
                <Text style={[styles.text3, styles.textTypo4]}>Mode</Text>
                <Text style={[styles.atebyDiaoureGallet, styles.atebyTypo3]}>
                  On
                </Text>
                <Text style={[styles.atebyDiaoureGallet1, styles.atebyTypo3]}>
                  Normal
                </Text>
                <Text style={[styles.atebyDiaoureGallet2, styles.atebyTypo3]}>
                  Column 1
                </Text>
                <Text style={[styles.atebyDiaoureGallet3, styles.atebyTypo2]}>
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
                    styles.cardChildPosition2,
                  ]}
                />
                <View style={styles.vuesaxboldroutingParent}>
                  <Image
                    style={styles.vuesaxboldroutingIcon}
                    contentFit="cover"
                    source={require("../assets/vuesaxboldrouting.png")}
                  />
                  <Text style={styles.details}>Dispens</Text>
                </View>
                <Image
                  style={styles.vuesaxboldtruckFastIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxboldtruckfast.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.airMoistureAndTemperature, styles.rectanglePosition]}
      >
        <View style={styles.frame1}>
          <View>
            <View style={[styles.sectionHeader1, styles.iconsFlexBox]}>
              <View style={styles.labelContainer}>
                <Text style={[styles.title, styles.accountTypo1]}>
                  Air moisture and temperature
                </Text>
              </View>
              <View style={[styles.buttons3, styles.buttonsBg]}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.labelContainer}>
                    <Image
                      style={styles.iconLayout1}
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameInner}>
              <View style={styles.frameContainer}>
                <View style={styles.buttonsParent}>
                  <View style={[styles.selectionChips, styles.selectionBorder]}>
                    <Text style={[styles.label4, styles.labelTypo1]}>
                      Plot #1
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>
                      Plot #2
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>
                      Plot #3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.cardProcessShipmentWrapper,
                styles.statusSpaceBlock,
              ]}
            >
              <View style={styles.cardProcessShipment1}>
                <View style={styles.cardProcessShipmentChild} />
                <Image
                  style={[styles.groupIcon, styles.iconCardLayout]}
                  contentFit="cover"
                  source={require("../assets/group-151.png")}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild4,
                    styles.cardChildPosition4,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild5,
                    styles.cardChildPosition3,
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
                  <Text style={[styles.remboursser1, styles.remboursserTypo]}>
                    Moderate
                  </Text>
                </View>
                <Text style={[styles.text4, styles.textTypo3]}>From</Text>
                <Text style={[styles.text5, styles.textTypo3]}>To</Text>
                <Text style={[styles.text6, styles.textTypo2]}>Air</Text>
                <Text style={[styles.text7, styles.textTypo2]}>
                  Temperature in degrees
                </Text>
                <Text style={[styles.atebyDiaoureGallet4, styles.atebyTypo1]}>
                  35%
                </Text>
                <Text style={[styles.atebyDiaoureGallet5, styles.atebyTypo1]}>
                  29.5
                </Text>
                <Text style={[styles.atebyDiaoureGallet2, styles.atebyTypo3]}>
                  Column 1
                </Text>
                <Text style={[styles.atebyDiaoureGallet7, styles.atebyTypo2]}>
                  {" "}
                  Column 9
                </Text>
                <Text style={[styles.docteur1, styles.docteurTypo]}>
                  Status
                </Text>
                <View
                  style={[
                    styles.cardProcessShipmentChild6,
                    styles.cardChildPosition1,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild7,
                    styles.cardChildPosition1,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild8,
                    styles.cardChildPosition2,
                  ]}
                />
                <View
                  style={[
                    styles.vuesaxboldroutingGroup,
                    styles.vuesaxboldroutingPosition,
                  ]}
                >
                  <Image
                    style={[
                      styles.vuesaxboldroutingIcon1,
                      styles.iconCardLayout,
                    ]}
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
      <View style={[styles.view, styles.rectanglePosition]}>
        <View style={styles.frame1}>
          <View>
            <View style={[styles.sectionHeader1, styles.iconsFlexBox]}>
              <View style={styles.labelContainer}>
                <Text style={[styles.title, styles.accountTypo1]}>
                  Soil moisture and pH level
                </Text>
              </View>
              <View style={[styles.buttons3, styles.buttonsBg]}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.labelContainer}>
                    <Image
                      style={styles.iconLayout1}
                      contentFit="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameInner}>
              <View style={styles.frameContainer}>
                <View style={styles.buttonsParent}>
                  <View style={[styles.selectionChips, styles.selectionBorder]}>
                    <Text style={[styles.label4, styles.labelTypo1]}>
                      Plot #1
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>
                      Plot #2
                    </Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>
                      Plot #3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.cardProcessShipmentWrapper,
                styles.statusSpaceBlock,
              ]}
            >
              <View style={styles.cardProcessShipment2}>
                <View style={styles.cardProcessShipmentChild} />
                <Image
                  style={[
                    styles.cardProcessShipmentChild10,
                    styles.iconCardLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/group-152.png")}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild11,
                    styles.cardChildPosition4,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild12,
                    styles.cardChildPosition3,
                  ]}
                />
                <View
                  style={[
                    styles.uicolorsmainContainer,
                    styles.uicolorsmainPosition,
                  ]}
                >
                  <Image
                    style={[
                      styles.uicolorsmainIcon2,
                      styles.uicolorsmainIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/uicolorsmain2.png")}
                  />
                  <Text style={[styles.remboursser1, styles.remboursserTypo]}>
                    Good
                  </Text>
                </View>
                <Text style={[styles.text8, styles.textTypo1]}>From</Text>
                <Text style={[styles.text9, styles.textTypo1]}>To</Text>
                <Text style={[styles.text10, styles.textTypo]}>
                  Soil moiature
                </Text>
                <Text style={[styles.text11, styles.textTypo]}>pH level</Text>
                <Text style={[styles.atebyDiaoureGallet8, styles.atebyTypo]}>
                  39%
                </Text>
                <Text style={[styles.atebyDiaoureGallet9, styles.atebyTypo]}>
                  7
                </Text>
                <Text style={[styles.atebyDiaoureGallet2, styles.atebyTypo3]}>
                  Column 1
                </Text>
                <Text style={[styles.atebyDiaoureGallet11, styles.atebyTypo2]}>
                  {" "}
                  Column 9
                </Text>
                <Text style={[styles.docteur2, styles.docteurTypo]}>
                  Status
                </Text>
                <View
                  style={[
                    styles.cardProcessShipmentChild13,
                    styles.cardChildPosition,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild14,
                    styles.cardChildPosition,
                  ]}
                />
                <View
                  style={[
                    styles.cardProcessShipmentChild15,
                    styles.cardChildPosition2,
                  ]}
                />
                <View
                  style={[
                    styles.vuesaxboldroutingContainer,
                    styles.vuesaxboldroutingPosition,
                  ]}
                >
                  <Image
                    style={[
                      styles.vuesaxboldroutingIcon1,
                      styles.iconCardLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vuesaxboldrouting2.png")}
                  />
                  <Text style={[styles.details2, styles.detailsTypo]}>
                    Power
                  </Text>
                </View>
                <Image
                  style={[
                    styles.vuesaxboldtruckFastIcon2,
                    styles.vuesaxboldtruckIconPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/vuesaxboldtruckfast2.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.cropStatus, styles.cropStatusPosition]}>
        <View style={styles.frame1}>
          <View>
            <View style={[styles.sectionHeader1, styles.iconsFlexBox]}>
              <View style={styles.labelContainer}>
                <Text style={[styles.title, styles.accountTypo1]}>
                  Crop status
                </Text>
              </View>
              <View style={styles.viewAllButtons}>
                <View
                  style={[
                    styles.contentContainer6,
                    styles.contentContainerSpaceBlock,
                  ]}
                >
                  <View style={styles.labelContainer}>
                    <Image
                      style={styles.iconLayout1}
                      contentFit="cover"
                      source={require("../assets/leading-icon1.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      contentFit="cover"
                      source={require("../assets/trailing-icon1.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.chipsWrapper}>
              <View style={styles.chips}>
                <View style={styles.buttonsParent}>
                  <View style={[styles.selectionChips, styles.selectionBorder]}>
                    <Text style={[styles.label4, styles.labelTypo1]}>#1</Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>#2</Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>#3</Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text style={[styles.label5, styles.labelTypo1]}>#4</Text>
                  </View>
                  <View
                    style={[styles.selectionChips1, styles.selectionBorder]}
                  >
                    <Text
                      style={[styles.label5, styles.labelTypo1]}
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
                  style={[
                    styles.pesticideUsageMildContainer,
                    styles.labelTypo1,
                  ]}
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
                  style={[
                    styles.pesticideUsageMildContainer,
                    styles.labelTypo1,
                  ]}
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
      <View style={[styles.optimumGrowth, styles.statusSpaceBlock]}>
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
                style={[styles.icon, styles.barLayout]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
              onPress={() => navigation.navigate("AidMainPage")}
            >
              <Image
                style={[styles.icon, styles.barLayout]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon, styles.barLayout]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active.png")}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={styles.iconSettings}
            contentFit="cover"
            source={require("../assets/icon--settings.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Image
            style={styles.cocoboldhomeIcon}
            contentFit="cover"
            source={require("../assets/cocoboldhome.png")}
          />
          <Image
            style={[styles.settingsNavBarChild, styles.cropStatusPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
        </View>
      </View>
      <View style={styles.navTopBarOpen}>
        <View style={[styles.rectangle, styles.rectanglePosition]}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Pressable
            style={styles.searchBar}
            onPress={() => navigation.navigate("SearchFeature")}
          >
            <View style={styles.contentContainer7}>
              <View style={styles.labelContainer7}>
                <View style={styles.leadingIcon2}>
                  <Image
                    style={styles.vuesaxlinearsearchNormalIcon}
                    contentFit="cover"
                    source={require("../assets/vuesaxlinearsearchnormal1.png")}
                  />
                </View>
                <View
                  style={[styles.textAlignmentBase, styles.textSpaceBlock1]}
                >
                  <Text style={[styles.label21, styles.accountTypo]}>
                    Search
                  </Text>
                </View>
                <View style={styles.trailingIcon7}>
                  <Image
                    style={styles.systemQrCode}
                    contentFit="cover"
                    source={require("../assets/system--qr-code1.png")}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.helperText}>
              Helper text for status and guidance
            </Text>
          </Pressable>
          <Image
            style={styles.vuesaxboldsearchNormalIcon}
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
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </Pressable>
        <View style={[styles.boxDeliveryStats, styles.cropStatusPosition]}>
          <View style={[styles.frameGroup, styles.buttonsPosition]}>
            <LinearGradient
              style={[styles.groupWrapper, styles.groupWrapperLayout]}
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
                    <Text style={[styles.droneCameraFeed, styles.labelTypo1]}>
                      Drone Camera Feed
                    </Text>
                    <Text style={[styles.online, styles.onlineTypo]}>
                      Online
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
              style={[styles.frameLineargradient, styles.groupWrapperLayout]}
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
                  <Text style={[styles.droneCameraFeed, styles.labelTypo1]}>
                    Light Sensor Status
                  </Text>
                  <Text style={[styles.text12, styles.onlineTypo]}>67%</Text>
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
        <View style={styles.welcomeHeader}>
          <View style={styles.welcomeHeaderInner}>
            <View style={styles.labelContainer}>
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
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.iconsFlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.iconCardLayout]}
              contentFit="cover"
              source={require("../assets/signal.png")}
            />
            <Text style={styles.text13}>9:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountTypo1: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  buttonsPosition: {
    zIndex: 0,
    justifyContent: "center",
  },
  textSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
  },
  iconLayout1: {
    width: 16,
    maxHeight: "100%",
    alignSelf: "stretch",
    display: "none",
  },
  buttonsBorder: {
    width: 155,
    borderWidth: 1,
    borderColor: Color.colorSet1Cloud10,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_6xs,
  },
  iconButtonsLayout: {
    width: 28,
    height: 28,
  },
  labelTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
  },
  textSpaceBlock1: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
  statusSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
  },
  iconsFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonsBg: {
    backgroundColor: Color.colorSet1Cloud20,
    borderRadius: Border.br_6xs,
    display: "none",
    alignItems: "center",
  },
  selectionBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_2203xl,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  labelTypo1: {
    lineHeight: 20,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  iconCardLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  cardChildPosition4: {
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    backgroundColor: Color.colorSet1Cloud90,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  cardChildPosition3: {
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
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  remboursserTypo: {
    fontFamily: FontFamily.titilliumWebSemiBold,
    left: "18.99%",
    color: Color.colorSet1Cloud90,
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  textTypo5: {
    color: Color.colorSet1Cloud20,
    top: "52.17%",
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
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
  textTypo4: {
    top: "7.39%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  atebyTypo3: {
    fontSize: FontSize.typographyBody2_size,
    color: Color.colorSet1Cloud10,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  atebyTypo2: {
    left: "75.23%",
    color: Color.colorSet1Cloud10,
    fontSize: FontSize.typographyBody2_size,
    textAlign: "center",
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
    height: "0.48%",
    borderColor: Color.colorSet1Cloud10,
    borderStyle: "solid",
    position: "absolute",
  },
  cardChildPosition2: {
    borderRadius: Border.br_4xs,
    right: "7.03%",
    width: "87.16%",
    left: "5.81%",
    display: "none",
    backgroundColor: Color.colorSet1Cloud20,
    position: "absolute",
  },
  rectanglePosition: {
    width: 383,
    left: 0,
    position: "absolute",
  },
  textTypo3: {
    top: "52.16%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo2: {
    top: "7.37%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  atebyTypo1: {
    top: "14.79%",
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  cardChildPosition1: {
    height: "0.53%",
    borderTopWidth: 1,
    left: "-0.15%",
    right: "-0.15%",
    width: "100.31%",
    borderColor: Color.colorSet1Cloud10,
    borderStyle: "solid",
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
    left: "-387.5%",
    lineHeight: 39,
    fontSize: FontSize.size_7xl,
    textAlign: "center",
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    display: "none",
    color: Color.universalBlack100,
    position: "absolute",
  },
  vuesaxboldtruckIconPosition: {
    top: "56.95%",
    left: "28.44%",
    right: "67.89%",
    width: "3.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textTypo1: {
    top: "52.15%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    top: "7.4%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
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
    left: "-0.15%",
    right: "-0.15%",
    width: "100.31%",
    borderColor: Color.colorSet1Cloud10,
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
    overflow: "hidden",
    height: 28,
    borderRadius: Border.br_203xl,
    justifyContent: "center",
    alignItems: "center",
  },
  accountTypo: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
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
  vectorIconPosition: {
    bottom: 22,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleLayout: {
    height: 4,
    borderRadius: Border.br_11xs,
    width: 16,
  },
  groupWrapperLayout: {
    backgroundColor: "transparent",
    width: 149,
    borderRadius: Border.br_5xs,
  },
  successfullyLayout: {
    width: 136,
    height: 110,
  },
  onlineTypo: {
    lineHeight: 35,
    fontSize: FontSize.sansHeadingHeading3SemiBold_size,
    alignSelf: "stretch",
    textAlign: "left",
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
    color: Color.universalBlack100,
    lineHeight: 24,
    fontSize: FontSize.sansHeadingHeading5SemiBold_size,
    fontWeight: "700",
  },
  container: {
    zIndex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 24,
    width: 43,
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
    marginLeft: 2,
    flexDirection: "row",
  },
  trailingIcon: {
    marginLeft: 2,
  },
  labelContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: {
    marginLeft: -12,
    display: "none",
    alignItems: "center",
    backgroundColor: Color.colorSet1Cloud20,
    borderRadius: Border.br_6xs,
  },
  sectionHeader: {
    alignItems: "baseline",
    paddingHorizontal: Padding.p_78xl,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    width: 327,
  },
  iconButtons: {
    borderRadius: Border.br_2203xl,
    width: 28,
  },
  leadingIcon1: {
    paddingLeft: Padding.p_8xl,
    paddingTop: Padding.p_6xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label1: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.universalWhite,
    textAlign: "center",
  },
  textAlignmentSmall: {
    paddingLeft: Padding.p_4xs,
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_10xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  faIconsolidlongArrowAltR: {
    width: 24,
    overflow: "hidden",
    height: 24,
  },
  trailingIcon1: {
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer1: {
    paddingBottom: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  contentContainer1: {
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_29xl,
    paddingBottom: Padding.p_9xs,
    height: 48,
    overflow: "hidden",
    borderRadius: Border.br_203xl,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons1: {
    backgroundColor: Color.colorDeepskyblue,
  },
  leadingIcon2: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label2: {
    color: Color.colorSet1Cloud90,
  },
  textAlignmentSmall1: {
    marginLeft: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
  trailingIcon2: {
    marginLeft: 8,
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttons2: {
    marginLeft: 18,
    backgroundColor: Color.universalWhite,
  },
  buttonsParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameWrapper: {
    left: 0,
    top: 0,
    width: 327,
    position: "absolute",
  },
  materialSymbolsoverviewOutlIcon: {
    top: 11,
    left: 18,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frameParent: {
    marginTop: 5,
    height: 48,
    alignSelf: "stretch",
  },
  frame: {
    top: 328,
    left: 17,
    paddingBottom: Padding.p_2xs,
    paddingLeft: Padding.p_2xs,
    height: 110,
    position: "absolute",
  },
  buttons3: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader1: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    width: 327,
  },
  label4: {
    color: Color.colorSet1Cloud80,
  },
  selectionChips: {
    backgroundColor: Color.colorSet1Cloud10,
    borderColor: Color.colorSet1Cloud40,
  },
  label5: {
    color: Color.universalBlack100,
  },
  selectionChips1: {
    borderColor: Color.colorGray_700,
    marginLeft: 12,
  },
  frameContainer: {
    width: 491,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameInner: {
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
    top: "55.22%",
    bottom: "36.09%",
    left: "27.22%",
    right: "24.46%",
    width: "48.32%",
    maxWidth: "100%",
    height: "8.7%",
  },
  cardProcessShipmentInner: {
    height: "29.13%",
    bottom: "70.87%",
  },
  rectangleView: {
    height: "17.83%",
    top: "29.13%",
    bottom: "53.04%",
  },
  uicolorsmainIcon: {
    height: "99.04%",
    bottom: "0.96%",
  },
  remboursser: {
    top: "4.31%",
  },
  uicolorsmainParent: {
    height: "10.1%",
    top: "32.61%",
    bottom: "57.29%",
  },
  text: {
    left: "16.21%",
    textAlign: "left",
  },
  text1: {
    textAlign: "right",
    color: Color.colorSet1Cloud20,
    top: "52.17%",
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text2: {
    top: "7.39%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text3: {
    left: "83.49%",
    textAlign: "right",
  },
  atebyDiaoureGallet: {
    color: Color.colorSet1Cloud10,
    top: "14.78%",
    fontSize: FontSize.typographyBody2_size,
    left: "5.81%",
    textAlign: "left",
  },
  atebyDiaoureGallet1: {
    left: "77.98%",
    color: Color.colorSet1Cloud10,
    top: "14.78%",
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
    top: "59.57%",
  },
  docteur: {
    top: "33.48%",
  },
  lineView: {
    top: "28.89%",
    bottom: "70.63%",
  },
  cardProcessShipmentChild1: {
    top: "46.71%",
    bottom: "52.8%",
    display: "none",
  },
  cardProcessShipmentChild2: {
    height: "20.87%",
    top: "72.17%",
    bottom: "6.96%",
  },
  vuesaxboldroutingIcon: {
    height: 22,
    width: 24,
    display: "none",
    position: "absolute",
  },
  details: {
    lineHeight: 39,
    fontSize: FontSize.size_7xl,
    textAlign: "center",
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    display: "none",
    color: Color.universalBlack100,
    position: "absolute",
  },
  vuesaxboldroutingParent: {
    top: "73.91%",
    left: "31.5%",
    width: 0,
    height: 0,
    position: "absolute",
  },
  vuesaxboldtruckFastIcon: {
    height: "5.22%",
    top: "56.96%",
    bottom: "37.83%",
    left: "28.44%",
    right: "67.89%",
    width: "3.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  cardProcessShipment: {
    height: 207,
    width: 327,
  },
  cardProcessShipmentWrapper: {
    paddingRight: Padding.p_3xs,
    marginTop: 10,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frame1: {
    paddingLeft: Padding.p_10xs,
    paddingRight: Padding.p_6xs,
    height: 347,
    width: 327,
  },
  lightStatus: {
    top: 432,
    width: 395,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
    justifyContent: "center",
    height: 353,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "8.68%",
    top: "55.21%",
    bottom: "36.11%",
    left: "27.22%",
    right: "24.46%",
    width: "48.32%",
    maxWidth: "100%",
  },
  cardProcessShipmentChild4: {
    height: "29.11%",
    bottom: "70.89%",
  },
  cardProcessShipmentChild5: {
    height: "17.84%",
    top: "29.11%",
    bottom: "53.05%",
  },
  uicolorsmainIcon1: {
    height: "91.35%",
    bottom: "8.65%",
  },
  remboursser1: {
    top: "3.85%",
  },
  uicolorsmainGroup: {
    height: "10.95%",
    top: "32.63%",
    bottom: "56.42%",
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
    left: "53.21%",
    textAlign: "right",
  },
  atebyDiaoureGallet4: {
    color: Color.colorSet1Cloud10,
    left: "5.81%",
    textAlign: "left",
  },
  atebyDiaoureGallet5: {
    left: "84.1%",
    color: "#f75183",
    textAlign: "right",
  },
  atebyDiaoureGallet7: {
    top: "59.58%",
  },
  docteur1: {
    top: "33.47%",
  },
  cardProcessShipmentChild6: {
    top: "28.84%",
    bottom: "70.63%",
  },
  cardProcessShipmentChild7: {
    top: "46.68%",
    bottom: "52.79%",
    display: "none",
  },
  cardProcessShipmentChild8: {
    height: "20.89%",
    top: "72.16%",
    bottom: "6.95%",
  },
  vuesaxboldroutingIcon1: {
    left: "0%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  details1: {
    top: "-29.29%",
  },
  vuesaxboldroutingGroup: {
    height: "10.42%",
    bottom: "12.63%",
  },
  vuesaxboldtruckFastIcon1: {
    height: "5.21%",
    bottom: "37.84%",
  },
  cardProcessShipment1: {
    height: 190,
    width: 327,
  },
  airMoistureAndTemperature: {
    top: 750,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
    justifyContent: "center",
    height: 353,
  },
  cardProcessShipmentChild10: {
    top: "55.2%",
    bottom: "36.1%",
    left: "27.22%",
    right: "24.46%",
    width: "48.32%",
    maxWidth: "100%",
    height: "8.7%",
  },
  cardProcessShipmentChild11: {
    height: "29.15%",
    bottom: "70.85%",
  },
  cardProcessShipmentChild12: {
    height: "17.85%",
    top: "29.15%",
    bottom: "52.99%",
  },
  uicolorsmainIcon2: {
    height: "85.1%",
    bottom: "14.9%",
  },
  uicolorsmainContainer: {
    height: "11.75%",
    top: "32.6%",
    bottom: "55.65%",
  },
  text8: {
    left: "16.21%",
    textAlign: "left",
  },
  text9: {
    textAlign: "right",
    left: "77.68%",
  },
  text10: {
    left: "5.81%",
    textAlign: "left",
  },
  text11: {
    left: "78.9%",
    textAlign: "right",
  },
  atebyDiaoureGallet8: {
    color: Color.colorGold,
    left: "5.81%",
    textAlign: "left",
  },
  atebyDiaoureGallet9: {
    left: "90.21%",
    color: Color.colorSet1Cloud10,
    textAlign: "right",
  },
  atebyDiaoureGallet11: {
    top: "59.55%",
  },
  docteur2: {
    top: "33.5%",
  },
  cardProcessShipmentChild13: {
    top: "28.87%",
    bottom: "70.56%",
  },
  cardProcessShipmentChild14: {
    top: "46.67%",
    bottom: "52.77%",
    display: "none",
  },
  cardProcessShipmentChild15: {
    height: "20.85%",
    top: "72.15%",
    bottom: "7.01%",
  },
  details2: {
    top: "-29.19%",
  },
  vuesaxboldroutingContainer: {
    height: "10.45%",
    bottom: "12.6%",
  },
  vuesaxboldtruckFastIcon2: {
    height: "5.2%",
    bottom: "37.85%",
  },
  cardProcessShipment2: {
    height: 177,
    width: 327,
  },
  view: {
    top: 1068,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
    justifyContent: "center",
    height: 353,
  },
  contentContainer6: {
    display: "none",
  },
  viewAllButtons: {
    width: 46,
    height: 28,
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorSet1Cloud20,
    borderRadius: Border.br_6xs,
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
    alignSelf: "stretch",
    textAlign: "left",
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
  },
  textContainer: {
    width: 178,
  },
  accountNumber: {
    color: Color.statusSuccessGreen50,
    textAlign: "right",
    marginLeft: 8,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  boxShipment: {
    borderRadius: Border.br_7xs,
    width: 360,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_5xs,
    marginTop: 16,
    borderWidth: 1,
    borderColor: Color.colorSet1Cloud10,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: Padding.p_2xs,
  },
  high: {
    color: "#fc0202",
  },
  accountNumber1: {
    color: Color.colorGold,
    textAlign: "right",
    marginLeft: 8,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  cropStatus: {
    marginLeft: -202,
    top: 1357,
    width: 392,
    height: 350,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
    justifyContent: "center",
  },
  barBottomItemActive: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
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
    backgroundColor: Color.universalWhite,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    width: "5.39%",
    right: "59.52%",
    left: "35.09%",
    height: 20,
  },
  iconSettings: {
    bottom: 19,
    left: 277,
    width: 24,
    overflow: "hidden",
    height: 24,
    position: "absolute",
  },
  vectorIcon1: {
    width: "5.42%",
    right: "34.76%",
    left: "59.82%",
    height: 18,
  },
  cocoboldhomeIcon: {
    bottom: 20,
    left: 31,
    width: 24,
    overflow: "hidden",
    height: 24,
    position: "absolute",
  },
  settingsNavBarChild: {
    marginLeft: -125.7,
    bottom: 8,
    width: 6,
    height: 6,
  },
  settingsNavBar: {
    height: 65,
    width: 330,
  },
  optimumGrowth: {
    top: 1617,
    left: 6,
    width: 367,
    height: 80,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    backgroundColor: Color.universalWhite,
    overflow: "hidden",
    justifyContent: "center",
    position: "absolute",
  },
  rectangle1: {
    borderBottomRightRadius: Border.br_13xl,
    backgroundColor: Color.colorSet1Cloud40,
    height: 347,
    top: 0,
  },
  vuesaxlinearsearchNormalIcon: {
    width: 24,
    height: 24,
  },
  label21: {
    color: Color.universalBlack50,
    fontFamily: FontFamily.sansBodyMicro,
    textAlign: "left",
    flex: 1,
  },
  textAlignmentBase: {
    marginLeft: 8,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  systemQrCode: {
    width: 24,
    overflow: "hidden",
    display: "none",
    height: 24,
  },
  trailingIcon7: {
    marginLeft: 8,
    width: 24,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer7: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  contentContainer7: {
    height: 44,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.universalWhite,
    borderWidth: 1,
    borderColor: Color.colorSet1Cloud10,
    borderStyle: "solid",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  helperText: {
    lineHeight: 14,
    marginTop: 4,
    fontFamily: FontFamily.sansBodyMicro,
    fontSize: FontSize.sansNoteHelper_size,
    color: Color.universalWhite,
    alignSelf: "stretch",
    display: "none",
    textAlign: "left",
  },
  searchBar: {
    top: 204,
    left: 28,
    width: 328,
    backgroundColor: Color.colorSet1Cloud40,
    position: "absolute",
  },
  vuesaxboldsearchNormalIcon: {
    top: 213,
    left: 37,
    width: 25,
    display: "none",
    height: 24,
    position: "absolute",
  },
  rectangle: {
    height: 347,
    top: 0,
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  notification: {
    left: 320,
    top: 145,
    position: "absolute",
  },
  gameIconsdeliveryDrone: {
    width: 49,
    height: 47,
    overflow: "hidden",
  },
  droneCameraFeed: {
    color: Color.colorSet1Cloud10,
    alignSelf: "stretch",
  },
  online: {
    color: Color.colorSet1Cloud40,
  },
  droneCameraFeedParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  successfullySent: {
    paddingBottom: Padding.p_6xs,
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
  },
  groupWrapper: {
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
  text12: {
    color: "#c2e630",
  },
  successfullyReceived: {
    alignSelf: "stretch",
  },
  successfullyReceivedWrapper: {
    height: 115,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameLineargradient: {
    paddingLeft: Padding.p_sm,
    paddingTop: 17,
    marginLeft: 1,
    paddingBottom: Padding.p_xs,
    alignItems: "flex-end",
  },
  frameGroup: {
    marginTop: -72,
    top: "50%",
    right: 26,
    height: 144,
    paddingBottom: Padding.p_14xl,
    flexDirection: "row",
    position: "absolute",
  },
  boxDeliveryStats: {
    marginLeft: -166.5,
    top: 265,
    backgroundColor: Color.colorSet1Cloud100,
    height: 122,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_smi,
    paddingBottom: Padding.p_xs,
    width: 330,
    borderRadius: Border.br_sm,
    left: "50%",
    overflow: "hidden",
  },
  hugeiconsenergyEllipse: {
    top: 275,
    left: 231,
    height: 43,
    overflow: "hidden",
    width: 43,
    position: "absolute",
  },
  avatarsWrapper: {
    paddingRight: Padding.p_xs,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
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
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "flex-end",
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
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
  },
  text13: {
    top: "5.88%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
    left: "0%",
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
    left: -16,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  homepageScrollingOverview: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 733,
    width: "100%",
    flex: 1,
  },
});

export default HomepageScrollingOverview;
