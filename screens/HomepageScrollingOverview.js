import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const HomepageScrollingOverview = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageScrollingOverview}>
      <View style={[styles.cropStatus, styles.cropStatusSpaceBlock]}>
        <View style={styles.frame}>
          <View>
            <View style={[styles.sectionHeader, styles.sectionSpaceBlock]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Crop status
                </Text>
              </View>
              <View style={[styles.viewAllButtons, styles.buttonsBg]}>
                <View
                  style={[
                    styles.contentContainer,
                    styles.contentContainerSpaceBlock,
                  ]}
                >
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout1}
                      resizeMode="cover"
                      source={require("../assets/leading-icon1.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon1.png")}
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
                  style={[styles.accountName, styles.label20Clr]}
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
                <Text style={[styles.accountName, styles.label20Clr]}>
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
              <Text style={[styles.accountNumber1, styles.accountTypo1]}>
                Mild issue
              </Text>
              <Text style={[styles.accountNumber2, styles.accountTypo]}>
                + $1353,8
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <View style={styles.frame}>
          <View>
            <View style={[styles.sectionHeader, styles.sectionSpaceBlock]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Soil moisture and pH level
                </Text>
              </View>
              <View style={[styles.buttons, styles.buttonsBg]}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout1}
                      resizeMode="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.goalsInner}>
              <View
                style={[styles.frameWrapper, styles.rectangleFramePosition]}
              >
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
              style={[
                styles.cardProcessShipmentWrapper,
                styles.cropStatusSpaceBlock,
              ]}
            >
              <View style={styles.cardProcessShipment}>
                <View style={styles.cardProcessShipmentChild} />
                <Image
                  style={[
                    styles.cardProcessShipmentItem,
                    styles.iconCardLayout,
                  ]}
                  resizeMode="cover"
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
                    resizeMode="cover"
                    source={require("../assets/uicolorsmain3.png")}
                  />
                  <Text style={[styles.remboursser, styles.remboursserTypo]}>
                    Good
                  </Text>
                </View>
                <Text style={[styles.text, styles.textTypo5]}>From</Text>
                <Text style={[styles.text1, styles.textPosition1]}>To</Text>
                <Text style={[styles.text2, styles.textPosition]}>
                  Soil moiature
                </Text>
                <Text style={[styles.text3, styles.textTypo4]}>pH level</Text>
                <Text style={[styles.atebyDiaoureGallet, styles.atebyTypo3]}>
                  39%
                </Text>
                <Text style={[styles.atebyDiaoureGallet1, styles.atebyTypo3]}>
                  7
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
                <View
                  style={[
                    styles.vuesaxboldroutingParent,
                    styles.vuesaxboldroutingPosition,
                  ]}
                >
                  <Image
                    style={[
                      styles.vuesaxboldroutingIcon,
                      styles.iconCardLayout,
                    ]}
                    resizeMode="cover"
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
                  resizeMode="cover"
                  source={require("../assets/vuesaxboldtruckfast.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.lightStatus, styles.rectangleFramePosition]}>
        <View style={styles.frame}>
          <View>
            <View style={[styles.sectionHeader, styles.sectionSpaceBlock]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Light status
                </Text>
              </View>
              <View style={[styles.buttons, styles.buttonsBg]}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout1}
                      resizeMode="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.goalsInner}>
              <View
                style={[styles.frameWrapper, styles.rectangleFramePosition]}
              >
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
              style={[
                styles.cardProcessShipmentWrapper,
                styles.cropStatusSpaceBlock,
              ]}
            >
              <View style={styles.cardProcessShipment1}>
                <View style={styles.cardProcessShipmentChild} />
                <Image
                  style={[styles.groupIcon, styles.iconCardLayout]}
                  resizeMode="cover"
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
                    resizeMode="cover"
                    source={require("../assets/uicolorsmain4.png")}
                  />
                  <Text style={[styles.remboursser1, styles.remboursserTypo]}>
                    {" "}
                    . Good
                  </Text>
                </View>
                <Text style={[styles.text4, styles.textTypo3]}>From</Text>
                <Text style={[styles.text5, styles.textTypo3]}>To</Text>
                <Text style={[styles.text6, styles.textTypo2]}>Power</Text>
                <Text style={[styles.text7, styles.textTypo2]}>Mode</Text>
                <Text style={[styles.atebyDiaoureGallet4, styles.atebyTypo1]}>
                  On
                </Text>
                <Text style={[styles.atebyDiaoureGallet5, styles.atebyTypo1]}>
                  Normal
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
                <View style={styles.vuesaxboldroutingGroup}>
                  <Image
                    style={styles.vuesaxboldroutingIcon1}
                    resizeMode="cover"
                    source={require("../assets/vuesaxboldrouting1.png")}
                  />
                  <Text style={styles.detailsTypo}>Dispens</Text>
                </View>
                <Image
                  style={[
                    styles.vuesaxboldtruckFastIcon1,
                    styles.vuesaxboldtruckIconPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/vuesaxboldtruckfast1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.airMoistureAndTemperature, styles.viewSpaceBlock]}>
        <View style={styles.frame}>
          <View>
            <View style={[styles.sectionHeader, styles.sectionSpaceBlock]}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.titleTypo]}>
                  Air moisture and temperature
                </Text>
              </View>
              <View style={[styles.buttons, styles.buttonsBg]}>
                <View style={styles.contentContainerSpaceBlock}>
                  <View style={styles.container}>
                    <Image
                      style={styles.iconLayout1}
                      resizeMode="cover"
                      source={require("../assets/leading-icon.png")}
                    />
                    <View
                      style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                    >
                      <Text style={styles.label}>Label</Text>
                    </View>
                    <Image
                      style={[styles.trailingIcon, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/trailing-icon.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.goalsInner}>
              <View
                style={[styles.frameWrapper, styles.rectangleFramePosition]}
              >
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
              style={[
                styles.cardProcessShipmentWrapper,
                styles.cropStatusSpaceBlock,
              ]}
            >
              <View style={styles.cardProcessShipment2}>
                <View style={styles.cardProcessShipmentChild} />
                <Image
                  style={[
                    styles.cardProcessShipmentChild10,
                    styles.iconCardLayout,
                  ]}
                  resizeMode="cover"
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
                    resizeMode="cover"
                    source={require("../assets/uicolorsmain5.png")}
                  />
                  <Text style={[styles.remboursser, styles.remboursserTypo]}>
                    Moderate
                  </Text>
                </View>
                <Text style={[styles.text8, styles.textTypo1]}>From</Text>
                <Text style={[styles.text9, styles.textTypo1]}>To</Text>
                <Text style={[styles.text10, styles.textTypo]}>Air</Text>
                <Text style={[styles.text11, styles.textTypo]}>
                  Temperature in degrees
                </Text>
                <Text style={[styles.atebyDiaoureGallet8, styles.atebyTypo]}>
                  35%
                </Text>
                <Text style={[styles.atebyDiaoureGallet9, styles.atebyTypo]}>
                  29.5
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
                      styles.vuesaxboldroutingIcon,
                      styles.iconCardLayout,
                    ]}
                    resizeMode="cover"
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
                  resizeMode="cover"
                  source={require("../assets/vuesaxboldtruckfast2.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.stayConnected, styles.rectangleFramePosition]}>
        <View style={styles.frame4}>
          <View style={[styles.sectionHeader4, styles.sectionSpaceBlock]}>
            <View style={styles.container4}>
              <Text style={[styles.title, styles.titleTypo]}>
                Be up to date
              </Text>
            </View>
            <View style={[styles.buttons3, styles.buttons3Position]}>
              <View style={styles.contentContainerSpaceBlock}>
                <View style={styles.container}>
                  <Image
                    style={styles.iconLayout1}
                    resizeMode="cover"
                    source={require("../assets/leading-icon.png")}
                  />
                  <View
                    style={[styles.textAlignmentMicro, styles.textSpaceBlock]}
                  >
                    <Text style={styles.label}>Label</Text>
                  </View>
                  <Image
                    style={[styles.trailingIcon, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/trailing-icon1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={[styles.frameWrapper1, styles.rectangleFramePosition]}>
              <View style={styles.selectionChipsParent}>
                <View style={[styles.buttons4, styles.buttonsBorder]}>
                  <View style={styles.contentContainer5}>
                    <View style={styles.labelContainer5}>
                      <View style={styles.leadingIcon5}>
                        <Image
                          style={styles.iconButtons}
                          resizeMode="cover"
                          source={require("../assets/icon-buttons.png")}
                        />
                      </View>
                      <View style={styles.textAlignmentSmall}>
                        <Text style={[styles.label19, styles.label19Clr]}>
                          Overview
                        </Text>
                      </View>
                      <View style={styles.trailingIcon5}>
                        <Image
                          style={styles.faIconsolidlongArrowAltR}
                          resizeMode="cover"
                          source={require("../assets/fa-iconsolidlongarrowaltright.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.buttons5, styles.buttonsBorder]}>
                  <Pressable
                    style={styles.contentContainer5}
                    onPress={() =>
                      navigation.navigate("HomepageScrollingAnalytics")
                    }
                  >
                    <View style={styles.labelContainer6}>
                      <View style={styles.leadingIcon6}>
                        <Image
                          style={styles.iconButtons}
                          resizeMode="cover"
                          source={require("../assets/icon-buttons1.png")}
                        />
                      </View>
                      <View
                        style={[
                          styles.textAlignmentSmall1,
                          styles.sectionSpaceBlock,
                        ]}
                      >
                        <Text
                          style={[styles.label20, styles.label20Clr]}
                        >{`Analytics &
report`}</Text>
                      </View>
                      <View style={styles.trailingIcon6}>
                        <Image
                          style={styles.faIconsolidlongArrowAltR}
                          resizeMode="cover"
                          source={require("../assets/fa-iconsolidlongarrowaltright.png")}
                        />
                      </View>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
            <Image
              style={styles.materialSymbolsoverviewOutlIcon}
              resizeMode="cover"
              source={require("../assets/materialsymbolsoverviewoutline.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.navTopBarOpen, styles.rectangleFramePosition]}>
        <View style={[styles.rectangle, styles.rectangleFramePosition]}>
          <View style={[styles.rectangle1, styles.rectangleFramePosition]} />
          <View style={styles.searchBar}>
            <View style={styles.contentContainer7}>
              <View style={styles.labelContainer7}>
                <View style={styles.leadingIcon6}>
                  <Image
                    style={styles.vuesaxlinearsearchNormalIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearsearchnormal.png")}
                  />
                </View>
                <View
                  style={[styles.textAlignmentBase, styles.sectionSpaceBlock]}
                >
                  <Text style={[styles.label21, styles.accountTypo1]}>
                    Search
                  </Text>
                </View>
                <View style={styles.trailingIcon7}>
                  <Image
                    style={styles.systemQrCode}
                    resizeMode="cover"
                    source={require("../assets/system--qr-code.png")}
                  />
                </View>
              </View>
            </View>
            <Text style={[styles.helperText, styles.label19Clr]}>
              Helper text for status and guidance
            </Text>
          </View>
          <Image
            style={styles.vuesaxboldsearchNormalIcon}
            resizeMode="cover"
            source={require("../assets/icon--eyes.png")}
          />
        </View>
        <View style={styles.slider}>
          <View style={[styles.rectangle2, styles.rectangleLayout]} />
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
        </View>
        <Pressable
          style={styles.notification}
          onPress={() => navigation.navigate("Notification1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/notification.png")}
          />
        </Pressable>
        <View style={styles.boxDeliveryStats}>
          <View style={[styles.frameGroup, styles.frameGroupPosition]}>
            <LinearGradient
              style={[styles.groupWrapper, styles.groupWrapperLayout]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"]}
              useAngle={true}
              angle={180}
            >
              <View style={styles.successfullyLayout}>
                <View
                  style={[styles.successfullySent, styles.successfullyLayout]}
                >
                  <Image
                    style={styles.gameIconsdeliveryDrone}
                    resizeMode="cover"
                    source={require("../assets/gameiconsdeliverydrone.png")}
                  />
                  <View style={styles.droneCameraFeedParent}>
                    <Text style={[styles.droneCameraFeed, styles.labelTypo]}>
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
              useAngle={true}
              angle={180}
            >
              <View style={styles.successfullyReceivedWrapper}>
                <View style={styles.successfullyReceived}>
                  <Image
                    style={styles.assetIllustrationBigBox}
                    resizeMode="cover"
                    source={require("../assets/asset--illustration--big-box.png")}
                  />
                  <Text style={[styles.droneCameraFeed, styles.labelTypo]}>
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
          resizeMode="cover"
          source={require("../assets/hugeiconsenergyellipse.png")}
        />
        <View style={styles.welcomeHeader}>
          <View style={styles.welcomeHeaderInner}>
            <View style={styles.container}>
              <View style={styles.avatarsWrapper}>
                <Image
                  style={styles.assetIllustrationBigBox}
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
      <View style={[styles.iphoneX11ProBlack, styles.rectangleFramePosition]}>
        <Image
          style={[styles.bgIcon, styles.iconCardLayout]}
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
            source={require("../assets/wifi2.png")}
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
        style={[styles.barBottomHome, styles.iconCardLayout]}
        resizeMode="cover"
        source={require("../assets/bar--bottom--home.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("ControlIrrigationPlot1Colu")}
      >
        <Image
          style={[styles.icon1, styles.iconCardLayout]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconSettings, styles.iconPosition]}
        onPress={() => navigation.navigate("Settings1")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--settings.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("AidMainPage")}
      >
        <Image
          style={[styles.icon1, styles.iconCardLayout]}
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
        style={[
          styles.homepageScrollingOverviewChild,
          styles.frameGroupPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.barHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cropStatusSpaceBlock: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
  },
  sectionSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  titleTypo: {
    color: Color.universalBlack100,
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  buttonsBg: {
    backgroundColor: Color.colorSet1Cloud20,
    borderRadius: Border.br_6xs,
    display: "none",
    alignItems: "center",
  },
  contentContainerSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_203xl,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
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
  selectionBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "flex-end",
    borderRadius: Border.br_2203xl,
    alignItems: "center",
  },
  labelTypo: {
    lineHeight: 20,
    fontSize: FontSize.chipLabel_size,
    fontWeight: "600",
  },
  label20Clr: {
    color: Color.colorSet1Cloud90,
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  accountTypo: {
    color: Color.statusSuccessGreen50,
    marginLeft: 8,
    textAlign: "right",
    fontSize: FontSize.inputValue_size,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
    lineHeight: 24,
  },
  accountTypo1: {
    fontSize: FontSize.inputValue_size,
    lineHeight: 24,
  },
  viewSpaceBlock: {
    height: 353,
    width: 375,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lg,
    justifyContent: "center",
    backgroundColor: Color.commonWhiteStatesMain,
    overflow: "hidden",
  },
  rectangleFramePosition: {
    left: 0,
    position: "absolute",
  },
  iconCardLayout: {
    maxWidth: "100%",
    overflow: "hidden",
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
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  remboursserTypo: {
    fontFamily: FontFamily.titilliumWeb,
    left: "18.99%",
    color: Color.colorSet1Cloud90,
    fontSize: FontSize.chipLabel_size,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  textTypo5: {
    color: Color.colorSet1Cloud20,
    top: "52.15%",
    fontSize: FontSize.inputHelper_size,
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
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
    top: "7.4%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.inputHelper_size,
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
    position: "absolute",
  },
  atebyTypo3: {
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
    position: "absolute",
  },
  atebyTypo2: {
    left: "75.23%",
    textAlign: "center",
    color: Color.colorSet1Cloud10,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
    position: "absolute",
  },
  docteurTypo: {
    color: Color.colorSet1Cloud100,
    left: "5.81%",
    fontSize: FontSize.inputValue_size,
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
    lineHeight: 24,
    position: "absolute",
  },
  lineViewPosition: {
    borderTopWidth: 1,
    left: "-0.15%",
    right: "-0.15%",
    width: "100.31%",
    height: "0.56%",
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
    textAlign: "center",
    fontWeight: "600",
    display: "none",
    color: Color.universalBlack100,
    fontFamily: FontFamily.sansBodyBodyCopy,
    position: "absolute",
  },
  vuesaxboldtruckIconPosition: {
    left: "28.44%",
    right: "67.89%",
    width: "3.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo3: {
    top: "52.17%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.inputHelper_size,
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
    position: "absolute",
  },
  textTypo2: {
    top: "7.39%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.inputHelper_size,
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
    position: "absolute",
  },
  atebyTypo1: {
    top: "14.78%",
    color: Color.colorSet1Cloud10,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
    position: "absolute",
  },
  cardChildPosition1: {
    height: "0.48%",
    borderTopWidth: 1,
    left: "-0.15%",
    right: "-0.15%",
    width: "100.31%",
    borderColor: Color.colorSet1Cloud10,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo1: {
    top: "52.16%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.inputHelper_size,
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
    position: "absolute",
  },
  textTypo: {
    top: "7.37%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.inputHelper_size,
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
    position: "absolute",
  },
  atebyTypo: {
    top: "14.79%",
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
    position: "absolute",
  },
  cardChildPosition: {
    height: "0.53%",
    borderTopWidth: 1,
    left: "-0.15%",
    right: "-0.15%",
    width: "100.31%",
    borderColor: Color.colorSet1Cloud10,
    borderStyle: "solid",
    position: "absolute",
  },
  buttons3Position: {
    zIndex: 0,
    justifyContent: "center",
  },
  buttonsBorder: {
    width: 155,
    borderColor: Color.colorSet1Cloud10,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_6xs,
    alignItems: "center",
    justifyContent: "center",
  },
  label19Clr: {
    color: Color.commonWhiteStatesMain,
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  rectangleLayout: {
    height: 4,
    borderRadius: Border.br_11xs,
    width: 16,
  },
  frameGroupPosition: {
    top: "50%",
    position: "absolute",
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
    fontSize: FontSize.size_10xl,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
  },
  jackSpowLayout: {
    height: 30,
    width: 132,
    color: Color.colorSet1Cloud90,
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  sidePosition: {
    top: 17,
    height: 11,
    position: "absolute",
  },
  vectorPosition: {
    bottom: "1.79%",
    position: "absolute",
  },
  iconPosition: {
    top: 1846,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  title: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
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
    marginLeft: 2,
    flexDirection: "row",
  },
  trailingIcon: {
    marginLeft: 2,
  },
  contentContainer: {
    display: "none",
  },
  viewAllButtons: {
    width: 46,
    display: "none",
    height: 28,
    justifyContent: "center",
  },
  sectionHeader: {
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    width: 327,
  },
  label1: {
    color: Color.colorSet1Cloud80,
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  selectionChips: {
    backgroundColor: Color.colorSet1Cloud10,
    borderColor: Color.colorSet1Cloud40,
  },
  label2: {
    textAlign: "left",
    color: Color.universalBlack100,
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  selectionChips1: {
    borderColor: Color.colorGray_100,
    marginLeft: 12,
  },
  selectionChipsParent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  chips: {
    width: 491,
  },
  chipsWrapper: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  accountName: {
    fontSize: FontSize.inputValue_size,
    lineHeight: 24,
    alignSelf: "stretch",
    textAlign: "left",
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
    fontFamily: FontFamily.sansBodyBodyCopy,
  },
  textContainer: {
    width: 178,
  },
  accountNumber: {
    marginLeft: 8,
    textAlign: "right",
  },
  boxShipment: {
    borderRadius: Border.br_7xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_5xs,
    paddingLeft: Padding.p_2xs,
    borderColor: Color.colorSet1Cloud10,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  high: {
    color: "#fc0202",
  },
  accountNumber1: {
    marginLeft: 8,
    textAlign: "right",
    color: Color.colorGold,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
  },
  accountNumber2: {
    marginLeft: 8,
    textAlign: "right",
    flex: 1,
  },
  frame: {
    paddingLeft: Padding.p_10xs,
    paddingRight: Padding.p_6xs,
    height: 347,
    width: 327,
  },
  cropStatus: {
    marginLeft: -186.5,
    top: 1490,
    width: 382,
    height: 350,
    paddingRight: Padding.p_9xs,
    paddingLeft: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.commonWhiteStatesMain,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  buttons: {
    display: "none",
    justifyContent: "center",
  },
  frameWrapper: {
    top: 0,
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
    top: "55.2%",
    bottom: "36.1%",
    left: "27.22%",
    right: "24.46%",
    width: "48.32%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    height: "8.7%",
  },
  cardProcessShipmentInner: {
    height: "29.15%",
    bottom: "70.85%",
  },
  rectangleView: {
    height: "17.85%",
    top: "29.15%",
    bottom: "52.99%",
  },
  uicolorsmainIcon: {
    height: "85.1%",
    bottom: "14.9%",
  },
  remboursser: {
    top: "3.85%",
  },
  uicolorsmainParent: {
    height: "11.75%",
    top: "32.6%",
    bottom: "55.65%",
  },
  text: {
    left: "16.21%",
    textAlign: "left",
  },
  text1: {
    color: Color.colorSet1Cloud20,
    top: "52.15%",
    fontSize: FontSize.inputHelper_size,
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
    position: "absolute",
  },
  text2: {
    top: "7.4%",
    color: Color.colorSet1Cloud20,
    fontSize: FontSize.inputHelper_size,
    fontWeight: "600",
    fontFamily: FontFamily.sansBodyBodyCopy,
    position: "absolute",
  },
  text3: {
    left: "79.51%",
    textAlign: "right",
  },
  atebyDiaoureGallet: {
    top: "14.8%",
    fontSize: FontSize.typographyBody2_size,
    left: "5.81%",
    textAlign: "left",
    color: Color.colorGold,
  },
  atebyDiaoureGallet1: {
    left: "90.21%",
    color: Color.colorSet1Cloud10,
    top: "14.8%",
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
    top: "59.55%",
    textAlign: "center",
  },
  docteur: {
    top: "33.5%",
  },
  lineView: {
    top: "28.87%",
    bottom: "70.56%",
  },
  cardProcessShipmentChild1: {
    top: "46.67%",
    bottom: "52.77%",
    display: "none",
  },
  cardProcessShipmentChild2: {
    height: "20.85%",
    top: "72.15%",
    bottom: "7.01%",
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
    top: "-29.19%",
    left: "-387.5%",
    lineHeight: 39,
    fontSize: FontSize.size_7xl,
  },
  vuesaxboldroutingParent: {
    height: "10.45%",
    bottom: "12.6%",
  },
  vuesaxboldtruckFastIcon: {
    height: "5.2%",
    bottom: "37.85%",
    top: "56.95%",
    left: "28.44%",
    right: "67.89%",
    width: "3.67%",
  },
  cardProcessShipment: {
    height: 177,
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
  view: {
    top: 1149,
    left: 2,
    position: "absolute",
  },
  groupIcon: {
    top: "55.22%",
    bottom: "36.09%",
    left: "27.22%",
    right: "24.46%",
    width: "48.32%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    height: "8.7%",
  },
  cardProcessShipmentChild4: {
    height: "29.13%",
    bottom: "70.87%",
  },
  cardProcessShipmentChild5: {
    height: "17.83%",
    top: "29.13%",
    bottom: "53.04%",
  },
  uicolorsmainIcon1: {
    height: "99.04%",
    bottom: "0.96%",
  },
  remboursser1: {
    top: "4.31%",
  },
  uicolorsmainGroup: {
    height: "10.1%",
    top: "32.61%",
    bottom: "57.29%",
  },
  text4: {
    left: "16.21%",
    textAlign: "left",
  },
  text5: {
    left: "77.68%",
    textAlign: "right",
  },
  text6: {
    left: "5.81%",
    textAlign: "left",
  },
  text7: {
    left: "83.49%",
    textAlign: "right",
  },
  atebyDiaoureGallet4: {
    left: "5.81%",
    textAlign: "left",
  },
  atebyDiaoureGallet5: {
    left: "78.29%",
    textAlign: "right",
  },
  atebyDiaoureGallet7: {
    top: "59.57%",
    textAlign: "center",
  },
  docteur1: {
    top: "33.48%",
  },
  cardProcessShipmentChild6: {
    top: "28.89%",
    bottom: "70.63%",
  },
  cardProcessShipmentChild7: {
    top: "46.71%",
    bottom: "52.8%",
    display: "none",
  },
  cardProcessShipmentChild8: {
    height: "20.87%",
    top: "72.17%",
    bottom: "6.96%",
  },
  vuesaxboldroutingIcon1: {
    height: 22,
    width: 24,
    display: "none",
    position: "absolute",
  },
  vuesaxboldroutingGroup: {
    top: "73.91%",
    left: "31.5%",
    width: 0,
    height: 0,
    position: "absolute",
  },
  vuesaxboldtruckFastIcon1: {
    height: "5.22%",
    top: "56.96%",
    bottom: "37.83%",
    left: "28.44%",
    right: "67.89%",
    width: "3.67%",
  },
  cardProcessShipment1: {
    height: 207,
    width: 327,
  },
  lightStatus: {
    top: 442,
    height: 353,
    width: 375,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_9xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lg,
    justifyContent: "center",
    backgroundColor: Color.commonWhiteStatesMain,
    overflow: "hidden",
  },
  cardProcessShipmentChild10: {
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
  cardProcessShipmentChild11: {
    height: "29.11%",
    bottom: "70.89%",
  },
  cardProcessShipmentChild12: {
    height: "17.84%",
    top: "29.11%",
    bottom: "53.05%",
  },
  uicolorsmainIcon2: {
    height: "91.35%",
    bottom: "8.65%",
  },
  uicolorsmainContainer: {
    height: "10.95%",
    top: "32.63%",
    bottom: "56.42%",
  },
  text8: {
    left: "16.21%",
    textAlign: "left",
  },
  text9: {
    left: "77.68%",
    textAlign: "right",
  },
  text10: {
    left: "5.81%",
    textAlign: "left",
  },
  text11: {
    left: "53.52%",
    textAlign: "right",
  },
  atebyDiaoureGallet8: {
    color: Color.colorSet1Cloud10,
    left: "5.81%",
    textAlign: "left",
  },
  atebyDiaoureGallet9: {
    left: "84.1%",
    color: "#f75183",
    textAlign: "right",
  },
  atebyDiaoureGallet11: {
    top: "59.58%",
    textAlign: "center",
  },
  docteur2: {
    top: "33.47%",
  },
  cardProcessShipmentChild13: {
    top: "28.84%",
    bottom: "70.63%",
  },
  cardProcessShipmentChild14: {
    top: "46.68%",
    bottom: "52.79%",
    display: "none",
  },
  cardProcessShipmentChild15: {
    height: "20.89%",
    top: "72.16%",
    bottom: "6.95%",
  },
  details2: {
    top: "-29.29%",
    left: "-387.5%",
    lineHeight: 39,
    fontSize: FontSize.size_7xl,
  },
  vuesaxboldroutingContainer: {
    height: "10.42%",
    bottom: "12.63%",
  },
  vuesaxboldtruckFastIcon2: {
    height: "5.21%",
    bottom: "37.84%",
    top: "56.95%",
    left: "28.44%",
    right: "67.89%",
    width: "3.67%",
  },
  cardProcessShipment2: {
    height: 190,
    width: 327,
  },
  airMoistureAndTemperature: {
    top: 795,
    left: -3,
    position: "absolute",
  },
  container4: {
    zIndex: 1,
    alignItems: "flex-end",
    height: 24,
    width: 43,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  buttons3: {
    marginLeft: -12,
    display: "none",
    backgroundColor: Color.colorSet1Cloud20,
    borderRadius: Border.br_6xs,
    alignItems: "center",
  },
  sectionHeader4: {
    alignItems: "baseline",
    paddingHorizontal: Padding.p_78xl,
    width: 327,
  },
  iconButtons: {
    width: 28,
    borderRadius: Border.br_2203xl,
    height: 28,
  },
  leadingIcon5: {
    paddingLeft: Padding.p_8xl,
    paddingTop: Padding.p_6xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label19: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.chipLabel_size,
    fontWeight: "600",
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
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  trailingIcon5: {
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer5: {
    paddingBottom: Padding.p_7xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  contentContainer5: {
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_29xl,
    paddingBottom: Padding.p_9xs,
    height: 48,
    borderRadius: Border.br_203xl,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  buttons4: {
    backgroundColor: Color.colorDeepskyblue,
  },
  leadingIcon6: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  label20: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.chipLabel_size,
    fontWeight: "600",
  },
  textAlignmentSmall1: {
    marginLeft: 8,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
  },
  trailingIcon6: {
    marginLeft: 8,
    alignSelf: "stretch",
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer6: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons5: {
    marginLeft: 18,
    backgroundColor: Color.commonWhiteStatesMain,
    width: 155,
  },
  frameWrapper1: {
    top: 0,
    width: 327,
  },
  materialSymbolsoverviewOutlIcon: {
    top: 11,
    left: 18,
    height: 24,
    width: 24,
    position: "absolute",
  },
  frameParent: {
    marginTop: 5,
    height: 48,
    alignSelf: "stretch",
  },
  frame4: {
    paddingBottom: Padding.p_2xs,
    height: 110,
    paddingLeft: Padding.p_2xs,
  },
  stayConnected: {
    top: 328,
    height: 108,
    paddingTop: Padding.p_sm,
    width: 375,
    paddingHorizontal: Padding.p_3xs,
    left: 0,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.commonWhiteStatesMain,
    overflow: "hidden",
  },
  rectangle1: {
    borderBottomRightRadius: Border.br_13xl,
    backgroundColor: Color.colorSet1Cloud40,
    top: 0,
    width: 375,
    height: 347,
  },
  vuesaxlinearsearchNormalIcon: {
    height: 24,
    width: 24,
  },
  label21: {
    color: Color.universalBlack50,
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
    flex: 1,
  },
  textAlignmentBase: {
    marginLeft: 8,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    flex: 1,
  },
  systemQrCode: {
    height: 24,
    width: 24,
    display: "none",
    overflow: "hidden",
  },
  trailingIcon7: {
    width: 24,
    marginLeft: 8,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer7: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  contentContainer7: {
    padding: Padding.p_5xs,
    height: 44,
    borderRadius: Border.br_5xs,
    borderColor: Color.colorSet1Cloud10,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  helperText: {
    lineHeight: 14,
    marginTop: 4,
    fontSize: FontSize.inputHelper_size,
    color: Color.commonWhiteStatesMain,
    alignSelf: "stretch",
    display: "none",
    textAlign: "left",
  },
  searchBar: {
    top: 204,
    left: 27,
    width: 321,
    backgroundColor: Color.colorSet1Cloud40,
    position: "absolute",
  },
  vuesaxboldsearchNormalIcon: {
    top: 213,
    left: 36,
    height: 24,
    width: 24,
    display: "none",
    position: "absolute",
  },
  rectangle: {
    top: 0,
    width: 375,
    height: 347,
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
  notification: {
    left: 320,
    top: 145,
    width: 28,
    height: 28,
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
    textAlign: "left",
    fontFamily: FontFamily.sansBodyBodyCopy,
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
    position: "absolute",
    top: 0,
    justifyContent: "flex-end",
    alignItems: "center",
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
    right: 26,
    height: 144,
    paddingBottom: 33,
    zIndex: 0,
    justifyContent: "center",
    flexDirection: "row",
  },
  boxDeliveryStats: {
    marginLeft: -165.5,
    top: 272,
    backgroundColor: Color.colorSet1Cloud100,
    width: 330,
    height: 122,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingRight: 13,
    paddingBottom: Padding.p_xs,
    borderRadius: Border.br_sm,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  hugeiconsenergyEllipse: {
    top: 282,
    left: 239,
    height: 43,
    width: 43,
    position: "absolute",
    overflow: "hidden",
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
    height: 30,
  },
  jackSpow: {
    marginTop: -10,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
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
    height: 56,
    position: "absolute",
  },
  navTopBarOpen: {
    top: -80,
    height: 403,
    width: 375,
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
    width: 17,
    height: 11,
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
    overflow: "hidden",
  },
  barBottomHome: {
    top: 1829,
    right: -47,
    left: -11,
    borderRadius: Border.br_base,
    height: 75,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "32.27%",
    top: "97.16%",
    right: "62.96%",
    width: "4.77%",
    height: "1.05%",
  },
  icon2: {
    overflow: "hidden",
  },
  iconSettings: {
    left: 304,
  },
  vector1: {
    left: "57.33%",
    top: "97.27%",
    right: "37.87%",
    width: "4.8%",
    height: "0.95%",
  },
  cocoboldhomeIcon: {
    left: 26,
    overflow: "hidden",
  },
  homepageScrollingOverviewChild: {
    marginTop: 926,
    marginLeft: -152.5,
    width: 6,
    height: 6,
    left: "50%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutral1,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  barHomeIndicator: {
    marginLeft: -192.5,
    bottom: -14,
    height: 40,
    width: 375,
    left: "50%",
    position: "absolute",
  },
  homepageScrollingOverview: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 1904,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomepageScrollingOverview;
