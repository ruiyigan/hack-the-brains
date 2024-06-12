import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
} from "../GlobalStyles";

const ControlIrrigationPlot2Colu2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.controlIrrigationPlot2Colu}>
      <View style={styles.navigation}>
        <View style={styles.title}>
          <Text style={styles.dashboard}>Control</Text>
          <Image
            style={styles.iconDashboard}
            contentFit="cover"
            source={require("../assets/icon--dashboard.png")}
          />
        </View>
        <Image
          style={styles.buttonFab}
          contentFit="cover"
          source={require("../assets/button--fab.png")}
        />
      </View>
      <LinearGradient
        style={styles.blur}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0.7)", "#fff"]}
      />
      <View style={[styles.active, styles.activeFlexBox]}>
        <Text style={styles.sunlight}>Sunlight</Text>
      </View>
      <View style={styles.controlNavBar}>
        <View style={styles.barBottomHome}>
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
          <Image
            style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active.png")}
          />
          <Image
            style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
            contentFit="cover"
            source={require("../assets/bar--bottom--item--active.png")}
          />
        </View>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector23.png")}
        />
        <Pressable
          style={styles.iconSettings}
          onPress={() => navigation.navigate("Settings1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon--settings6.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("AidMainPage")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
        <Pressable
          style={styles.cocoboldhome}
          onPress={() => navigation.navigate("HomepageScrollingOverview")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/cocoboldhome2.png")}
          />
        </Pressable>
        <Image
          style={styles.controlNavBarChild}
          contentFit="cover"
          source={require("../assets/ellipse-51.png")}
        />
      </View>
      <Image
        style={styles.sunny11}
        contentFit="cover"
        source={require("../assets/sunny-1-1.png")}
      />
      <Pressable
        style={styles.hackTheBrainOnboard11}
        onPress={() => navigation.navigate("ControlIrrigationPlot2Colu1")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/hack-the-brain-onboard-1-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.controlIrrigationPlot2ColuChild, styles.slidePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-781.png")}
      />
      <Image
        style={[styles.soil1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/soil-1.png")}
      />
      <Image
        style={[styles.pesticide1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pesticide-1.png")}
      />
      <View style={styles.textfield}>
        <View style={styles.content}>
          <View style={[styles.input, styles.inputFlexBox]}>
            <View
              style={[
                styles.adornStartContainer,
                styles.autocompletetagSpaceBlock,
              ]}
            >
              <Image
                style={styles.icon4}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
            <Text style={[styles.label, styles.labelTypo1]} />
            <Image
              style={styles.adornEndContainer}
              contentFit="cover"
              source={require("../assets/adorn-end-container.png")}
            />
          </View>
          <View style={[styles.underline, styles.defaultLayout]} />
        </View>
        <View style={[styles.formhelpertext, styles.formhelpertextSpaceBlock]}>
          <Text style={[styles.helperText, styles.labelTypo]}>Helper text</Text>
        </View>
      </View>
      <View style={styles.switch}>
        <View style={[styles.slide, styles.slidePosition]}>
          <View style={styles.slide1} />
        </View>
        <View style={styles.knob}>
          <Image
            style={styles.knobIcon}
            contentFit="cover"
            source={require("../assets/knob.png")}
          />
        </View>
      </View>
      <View
        style={[styles.controlIrrigationPlot2ColuItem, styles.controlPosition]}
      />
      <Text style={[styles.text, styles.textTypo]}>Plot:</Text>
      <Text style={[styles.atebyDiaoureGallet, styles.value1Typo]}>#2</Text>
      <View
        style={[styles.controlIrrigationPlot2ColuInner, styles.controlPosition]}
      />
      <View style={styles.uicolorsmainParent}>
        <Image
          style={[styles.uicolorsmainIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/uicolorsmain3.png")}
        />
        <Text style={[styles.remboursser, styles.chip1Typo]}> Good</Text>
      </View>
      <Text style={styles.docteur}>Status</Text>
      <Text style={[styles.docteur1, styles.docteurTypo]}>
        Shading Strength
      </Text>
      <Text style={[styles.docteur2, styles.docteurTypo]}>
        Open/Close Shading
      </Text>
      <View style={styles.slider}>
        <View style={styles.slider1}>
          <View style={[styles.sliderrail, styles.sliderrailPosition]} />
          <View style={[styles.slidertrack, styles.slidertrackPosition]} />
          <View style={styles.marks}>
            <View style={styles.slidermark}>
              <View style={[styles.rec, styles.recLayout1]} />
              <View style={[styles.rec1, styles.recLayout]} />
            </View>
            <View style={styles.slidermark}>
              <View style={[styles.rec, styles.recLayout1]} />
              <View style={[styles.rec1, styles.recLayout]} />
            </View>
            <View style={styles.slidermark}>
              <View style={[styles.rec, styles.recLayout1]} />
              <View style={[styles.rec1, styles.recLayout]} />
            </View>
            <View style={styles.slidermark}>
              <View style={[styles.rec, styles.recLayout1]} />
              <View style={[styles.rec1, styles.recLayout]} />
            </View>
            <View style={styles.slidermark}>
              <View style={[styles.rec, styles.recLayout1]} />
            </View>
            <View style={styles.slidermark}>
              <View style={[styles.rec, styles.recLayout1]} />
            </View>
            <View style={styles.slidermark}>
              <View style={[styles.rec, styles.recLayout1]} />
            </View>
          </View>
          <Image
            style={[styles.sliderthumbIcon, styles.selectLayout]}
            contentFit="cover"
            source={require("../assets/-sliderthumb.png")}
          />
          <View style={styles.sliderlabel}>
            <View style={[styles.tooltip, styles.inputFlexBox]}>
              <Text style={styles.text1}>20</Text>
            </View>
            <Image
              style={styles.arrowIcon}
              contentFit="cover"
              source={require("../assets/arrow.png")}
            />
          </View>
        </View>
        <View style={styles.values}>
          <View style={styles.slidervalueLabel}>
            <Text style={[styles.text2, styles.text2Typo]}>0</Text>
          </View>
          <View style={styles.slidervalueLabel1}>
            <Text style={[styles.text2, styles.text2Typo]}>12</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.docteur3, styles.docteurTypo]}>Notifications</Text>
      <View style={[styles.select, styles.selectLayout]}>
        <View style={styles.input1}>
          <View style={[styles.container, styles.activeFlexBox]}>
            <Image
              style={styles.adornStartContainer1}
              contentFit="cover"
              source={require("../assets/adorn-start-container1.png")}
            />
            <View
              style={[styles.autocompletetag, styles.autocompletetagSpaceBlock]}
            >
              <View style={styles.chipLayout}>
                <View style={styles.avatar}>
                  <Text style={styles.op}>OP</Text>
                  <View style={styles.minLayout1} />
                  <View style={[styles.border, styles.selectLayout]}>
                    <View style={styles.badge}>
                      <View style={styles.minWidth1} />
                    </View>
                  </View>
                </View>
                <View style={styles.typographySpaceBlock}>
                  <Text style={[styles.chip1, styles.chip1Typo]}>Chip</Text>
                </View>
                <Image
                  style={styles.cancelfilledIcon}
                  contentFit="cover"
                  source={require("../assets/cancelfilled1.png")}
                />
              </View>
              <View style={[styles.chip2, styles.chipLayout]}>
                <View style={styles.avatar}>
                  <Text style={styles.op}>OP</Text>
                  <View style={styles.minLayout1} />
                  <View style={[styles.border, styles.selectLayout]}>
                    <View style={styles.badge}>
                      <View style={styles.minWidth1} />
                    </View>
                  </View>
                </View>
                <View style={styles.typographySpaceBlock}>
                  <Text style={[styles.chip1, styles.chip1Typo]}>Chip</Text>
                </View>
                <Image
                  style={styles.cancelfilledIcon}
                  contentFit="cover"
                  source={require("../assets/cancelfilled1.png")}
                />
              </View>
              <View style={[styles.chip2, styles.chipLayout]}>
                <View style={styles.avatar}>
                  <Text style={styles.op}>OP</Text>
                  <View style={styles.minLayout1} />
                  <View style={[styles.border, styles.selectLayout]}>
                    <View style={styles.badge}>
                      <View style={styles.minWidth1} />
                    </View>
                  </View>
                </View>
                <View style={styles.typographySpaceBlock}>
                  <Text style={[styles.chip1, styles.chip1Typo]}>Chip</Text>
                </View>
                <Image
                  style={styles.cancelfilledIcon}
                  contentFit="cover"
                  source={require("../assets/cancelfilled1.png")}
                />
              </View>
            </View>
            <View style={styles.minHeight} />
            <Text style={[styles.value, styles.valueTypo]}>1</Text>
            <Text style={[styles.placeholder, styles.labelTypo1]}>
              Placeholder
            </Text>
            <View style={[styles.minWidth6, styles.minLayout]} />
            <Image
              style={styles.arrowdropdownfilledIcon}
              contentFit="cover"
              source={require("../assets/arrowdropdownfilled.png")}
            />
            <Image
              style={[
                styles.autocompletecloseIcon,
                styles.autocompletecloseIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/autocompleteclose2.png")}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={[styles.label1, styles.labelTypo]}>Column</Text>
          </View>
        </View>
        <View style={[styles.formhelpertext, styles.formhelpertextSpaceBlock]}>
          <Text style={styles.helperText1}>Helper text</Text>
        </View>
      </View>
      <View style={[styles.select1, styles.selectLayout]}>
        <View style={styles.input2}>
          <Text style={[styles.label2, styles.textTypo]}>Column</Text>
          <View style={[styles.content1, styles.defaultSpaceBlock]}>
            <Image
              style={styles.adornStartContainer1}
              contentFit="cover"
              source={require("../assets/adorn-start-container2.png")}
            />
            <View
              style={[styles.autocompletetag, styles.autocompletetagSpaceBlock]}
            >
              <View style={styles.chipLayout}>
                <View style={styles.avatar}>
                  <Text style={styles.op}>OP</Text>
                  <View style={styles.minLayout1} />
                  <View style={[styles.border, styles.selectLayout]}>
                    <View style={styles.badge}>
                      <View style={styles.minWidth1} />
                    </View>
                  </View>
                </View>
                <View style={styles.typographySpaceBlock}>
                  <Text style={[styles.chip1, styles.chip1Typo]}>Chip</Text>
                </View>
                <Image
                  style={styles.cancelfilledIcon}
                  contentFit="cover"
                  source={require("../assets/cancelfilled2.png")}
                />
              </View>
              <View style={[styles.chip2, styles.chipLayout]}>
                <View style={styles.avatar}>
                  <Text style={styles.op}>OP</Text>
                  <View style={styles.minLayout1} />
                  <View style={[styles.border, styles.selectLayout]}>
                    <View style={styles.badge}>
                      <View style={styles.minWidth1} />
                    </View>
                  </View>
                </View>
                <View style={styles.typographySpaceBlock}>
                  <Text style={[styles.chip1, styles.chip1Typo]}>Chip</Text>
                </View>
                <Image
                  style={styles.cancelfilledIcon}
                  contentFit="cover"
                  source={require("../assets/cancelfilled2.png")}
                />
              </View>
              <View style={[styles.chip2, styles.chipLayout]}>
                <View style={styles.avatar}>
                  <Text style={styles.op}>OP</Text>
                  <View style={styles.minLayout1} />
                  <View style={[styles.border, styles.selectLayout]}>
                    <View style={styles.badge}>
                      <View style={styles.minWidth1} />
                    </View>
                  </View>
                </View>
                <View style={styles.typographySpaceBlock}>
                  <Text style={[styles.chip1, styles.chip1Typo]}>Chip</Text>
                </View>
                <Image
                  style={styles.cancelfilledIcon}
                  contentFit="cover"
                  source={require("../assets/cancelfilled2.png")}
                />
              </View>
            </View>
            <View style={styles.minHeight} />
            <Text style={[styles.value1, styles.valueTypo]}>1</Text>
            <Text style={[styles.placeholder, styles.labelTypo1]}>
              Placeholder
            </Text>
            <Image
              style={[
                styles.autocompletecloseIcon1,
                styles.autocompletecloseIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/autocompleteclose3.png")}
            />
            <Image
              style={styles.arrowdropdownfilledIcon}
              contentFit="cover"
              source={require("../assets/arrowdropdownfilled3.png")}
            />
            <View style={[styles.minWidth13, styles.minLayout]} />
          </View>
          <View style={[styles.default, styles.defaultSpaceBlock]} />
        </View>
        <View style={styles.formhelpertextSpaceBlock}>
          <Text style={styles.helperText1}>Helper text</Text>
        </View>
      </View>
      <View style={[styles.pagination, styles.typographySpaceBlock]}>
        <Image
          style={[styles.paginationitemIcon, styles.buttonbaseLayout]}
          contentFit="cover"
          source={require("../assets/paginationitem.png")}
        />
        <Image
          style={styles.paginationitemIconLayout}
          contentFit="cover"
          source={require("../assets/paginationitem1.png")}
        />
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label3, styles.text2Typo]}>1</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase1, styles.buttonbaseLayout]}>
            <Text style={[styles.label3, styles.text2Typo]}>2</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label3, styles.text2Typo]}>3</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label3, styles.text2Typo]}>4</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label3, styles.text2Typo]}>5</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label3, styles.text2Typo]}>6</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label3, styles.text2Typo]}>7</Text>
          </View>
        </View>
        <Image
          style={styles.paginationitemIconLayout}
          contentFit="cover"
          source={require("../assets/paginationitem2.png")}
        />
        <Image
          style={[styles.paginationitemIcon3, styles.paginationitemIconLayout]}
          contentFit="cover"
          source={require("../assets/paginationitem3.png")}
        />
      </View>
      <View style={[styles.switchDark, styles.switchFlexBox]}>
        <View style={styles.handle}>
          <View style={styles.target}>
            <View style={styles.stateLayer}>
              <View style={styles.handleShape}>
                <View style={styles.container1} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.switchDark1, styles.switchFlexBox]}>
        <View style={styles.handle}>
          <View style={styles.target}>
            <View style={styles.stateLayer}>
              <View style={styles.handleShape}>
                <View style={styles.container1} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.slider2}>
        <View style={[styles.sliderrail1, styles.rec11Layout]} />
        <View style={[styles.slidertrack1, styles.rec11Layout]} />
        <View style={styles.marks}>
          <View style={styles.slidermark}>
            <View style={[styles.rec11, styles.rec11Layout]} />
            <View style={[styles.rec12, styles.recLayout]} />
          </View>
          <View style={styles.slidermark}>
            <View style={[styles.rec11, styles.rec11Layout]} />
            <View style={[styles.rec12, styles.recLayout]} />
          </View>
          <View style={styles.slidermark}>
            <View style={[styles.rec11, styles.rec11Layout]} />
            <View style={[styles.rec12, styles.recLayout]} />
          </View>
          <View style={styles.slidermark}>
            <View style={[styles.rec11, styles.rec11Layout]} />
            <View style={[styles.rec12, styles.recLayout]} />
          </View>
          <View style={styles.slidermark}>
            <View style={[styles.rec11, styles.rec11Layout]} />
          </View>
          <View style={styles.slidermark}>
            <View style={[styles.rec11, styles.rec11Layout]} />
          </View>
          <View style={styles.slidermark}>
            <View style={[styles.rec11, styles.rec11Layout]} />
          </View>
        </View>
        <Image
          style={[styles.sliderthumbIcon, styles.selectLayout]}
          contentFit="cover"
          source={require("../assets/-sliderthumb2.png")}
        />
        <View style={styles.sliderlabel}>
          <View style={[styles.tooltip, styles.inputFlexBox]}>
            <Text style={styles.text1}>20</Text>
          </View>
          <Image
            style={styles.arrowIcon}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
        </View>
        <Text style={[styles.atebyDiaoureGallet1, styles.atebyTypo]}>0%</Text>
        <Text style={[styles.atebyDiaoureGallet2, styles.atebyTypo]}>100%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeFlexBox: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  barItemLayout: {
    height: 64,
    width: 82,
    borderRadius: Border.br_base,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  slidePosition: {
    opacity: 0.5,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  inputFlexBox: {
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  autocompletetagSpaceBlock: {
    paddingRight: Padding.p_5xs,
    display: "none",
    flexDirection: "row",
  },
  labelTypo1: {
    letterSpacing: 0,
    fontFamily: FontFamily.typographyBody2,
  },
  defaultLayout: {
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
  },
  formhelpertextSpaceBlock: {
    paddingTop: Padding.p_10xs,
    alignSelf: "stretch",
    display: "none",
  },
  labelTypo: {
    lineHeight: 12,
    fontSize: FontSize.sansNoteHelper_size,
    letterSpacing: 0,
    textAlign: "left",
  },
  controlPosition: {
    left: "6.92%",
    right: "5.88%",
    width: "87.2%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
  },
  value1Typo: {
    fontFamily: FontFamily.nunitoBold,
    color: Color.universalBlack,
    fontWeight: "700",
  },
  chip1Typo: {
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    textAlign: "left",
  },
  docteurTypo: {
    lineHeight: 21,
    height: "2.59%",
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    color: Color.universalBlack,
    textAlign: "left",
    position: "absolute",
  },
  sliderrailPosition: {
    opacity: 0.38,
    top: 20,
    right: 0,
  },
  slidertrackPosition: {
    marginTop: -1,
    top: "50%",
    width: 48,
  },
  recLayout1: {
    backgroundColor: Color.primaryMain,
    height: 2,
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
  },
  recLayout: {
    opacity: 0.8,
    width: 2,
    height: 2,
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  selectLayout: {
    height: 12,
    position: "absolute",
  },
  text2Typo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.typographyBody2,
    letterSpacing: 0,
  },
  chipLayout: {
    maxHeight: 24,
    minHeight: 24,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.actionSelected,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  valueTypo: {
    zIndex: 3,
    fontSize: FontSize.sansNoteHelper_size,
    letterSpacing: 0,
    lineHeight: 24,
    textAlign: "left",
    flex: 1,
  },
  minLayout: {
    height: 0,
    width: 24,
  },
  autocompletecloseIconPosition: {
    marginTop: -10,
    top: "50%",
    width: 20,
    height: 20,
    display: "none",
    position: "absolute",
  },
  defaultSpaceBlock: {
    marginTop: 4.5,
    alignSelf: "stretch",
  },
  typographySpaceBlock: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
  },
  buttonbaseLayout: {
    height: 26,
    width: 26,
    overflow: "hidden",
  },
  paginationitemIconLayout: {
    marginLeft: 6,
    height: 26,
    width: 26,
    overflow: "hidden",
  },
  switchFlexBox: {
    paddingVertical: Padding.p_11xs,
    justifyContent: "flex-end",
    height: 25,
    left: 302,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGold,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rec11Layout: {
    backgroundColor: Color.colorNavajowhite_200,
    height: 2,
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
  },
  atebyTypo: {
    fontSize: FontSize.size_4xs,
    top: "45.24%",
    fontFamily: FontFamily.nunitoBold,
    color: Color.universalBlack,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  dashboard: {
    fontSize: FontSize.title24Bold_size,
    lineHeight: 29,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textColor,
    textAlign: "left",
    fontWeight: "500",
  },
  iconDashboard: {
    marginLeft: 8,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  title: {
    top: 4,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  buttonFab: {
    display: "none",
    width: 44,
    borderRadius: Border.br_xs,
    right: 0,
    top: 0,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  navigation: {
    top: 60,
    left: 24,
    height: 44,
    right: 24,
    position: "absolute",
  },
  blur: {
    top: 668,
    width: 375,
    height: 144,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
  },
  sunlight: {
    fontFamily: FontFamily.poppinsBold,
    textAlign: "right",
    color: Color.universalBlack,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  active: {
    top: 106,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorGold,
    paddingVertical: Padding.p_5xs,
    left: 20,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  barBottomItemActive: {
    left: 0,
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
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    bottom: 0,
    height: 65,
    right: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  vectorIcon: {
    width: "5.37%",
    right: "59.45%",
    left: "35.17%",
    height: 20,
    bottom: 22,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  iconSettings: {
    left: 277,
    bottom: 19,
    height: 24,
    width: 24,
    position: "absolute",
  },
  icon1: {
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "59.74%",
    right: "34.86%",
    width: "5.4%",
    height: 18,
    bottom: 22,
    position: "absolute",
  },
  cocoboldhome: {
    left: 31,
    bottom: 20,
    height: 24,
    width: 24,
    position: "absolute",
  },
  controlNavBarChild: {
    marginLeft: -45.7,
    bottom: 8,
    width: 6,
    height: 6,
    left: "50%",
    position: "absolute",
  },
  controlNavBar: {
    right: 16,
    bottom: 11,
    left: 29,
    height: 65,
    position: "absolute",
  },
  sunny11: {
    top: 688,
    left: 151,
    width: 37,
    height: 37,
    position: "absolute",
  },
  hackTheBrainOnboard11: {
    left: 91,
    height: 48,
    width: 48,
    top: 682,
    position: "absolute",
  },
  controlIrrigationPlot2ColuChild: {
    left: 144,
    width: 51,
    height: 51,
    top: 682,
    opacity: 0.5,
  },
  soil1Icon: {
    top: 687,
    left: 202,
  },
  pesticide1Icon: {
    top: 685,
    left: 253,
  },
  icon4: {
    display: "none",
    height: 24,
    width: 24,
  },
  adornStartContainer: {
    width: 32,
    height: 1,
    alignItems: "center",
  },
  label: {
    color: Color.textSecondary,
    fontFamily: FontFamily.typographyBody2,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    letterSpacing: 0,
    textAlign: "left",
    flex: 1,
  },
  adornEndContainer: {
    height: 1,
    display: "none",
    width: 24,
  },
  input: {
    paddingVertical: Padding.p_base,
    zIndex: 0,
    alignSelf: "stretch",
  },
  underline: {
    width: "100.45%",
    right: "-0.23%",
    left: "-0.23%",
    borderColor: Color.colorGray_400,
    zIndex: 1,
    bottom: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  content: {
    borderTopLeftRadius: StyleVariable.borderRadius1,
    borderTopRightRadius: StyleVariable.borderRadius1,
    backgroundColor: Color.colorGray_500,
    alignSelf: "stretch",
    display: "none",
    overflow: "hidden",
  },
  helperText: {
    color: Color.textSecondary,
    fontFamily: FontFamily.typographyBody2,
    alignSelf: "stretch",
  },
  formhelpertext: {
    paddingHorizontal: Padding.p_sm,
  },
  textfield: {
    top: 549,
    left: 229,
    width: 104,
    height: 27,
    position: "absolute",
  },
  slide1: {
    backgroundColor: Color.colorAquamarine_100,
    width: 34,
    height: 14,
    borderRadius: Border.br_81xl,
  },
  slide: {
    padding: Padding.p_xs,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
  },
  knobIcon: {
    width: 20,
    height: 20,
  },
  knob: {
    padding: Padding.p_4xs,
    left: 20,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  switch: {
    top: 395,
    left: 293,
    width: 58,
    height: 38,
    position: "absolute",
  },
  controlIrrigationPlot2ColuItem: {
    height: "45.69%",
    top: "24.63%",
    bottom: "29.68%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.orange,
  },
  text: {
    height: "2.09%",
    width: "6.92%",
    top: "27.84%",
    left: "12.54%",
    color: Color.colorGray_100,
    fontSize: FontSize.sansNoteHelper_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    textAlign: "left",
    position: "absolute",
  },
  atebyDiaoureGallet: {
    height: "2.47%",
    width: "4.53%",
    top: "29.93%",
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.nunitoBold,
    left: "12.26%",
    textAlign: "left",
    position: "absolute",
  },
  controlIrrigationPlot2ColuInner: {
    height: "5.05%",
    top: "35.35%",
    bottom: "59.6%",
    backgroundColor: Color.statusSuccessGreenBG,
  },
  uicolorsmainIcon: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mid,
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  remboursser: {
    height: "87.14%",
    width: "51.93%",
    top: "4.15%",
    left: "18.96%",
    fontFamily: FontFamily.titilliumWebSemiBold,
    color: Color.colorSet1Cloud90,
    fontWeight: "600",
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    position: "absolute",
  },
  uicolorsmainParent: {
    height: "2.83%",
    width: "21.07%",
    top: "36.45%",
    right: "7.46%",
    bottom: "60.72%",
    left: "71.48%",
    position: "absolute",
  },
  docteur: {
    height: "2.96%",
    width: "12.54%",
    top: "36.7%",
    lineHeight: 24,
    fontFamily: FontFamily.sansBodyMicro,
    color: Color.colorSet1Cloud100,
    left: "12.26%",
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    position: "absolute",
  },
  docteur1: {
    width: "43.74%",
    top: "57.76%",
    left: "11.7%",
    lineHeight: 21,
    height: "2.59%",
  },
  docteur2: {
    width: "36.13%",
    top: "52.06%",
    left: "11.7%",
    lineHeight: 21,
    height: "2.59%",
  },
  sliderrail: {
    height: 2,
    backgroundColor: Color.primaryMain,
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
  },
  slidertrack: {
    top: "50%",
    height: 2,
    backgroundColor: Color.primaryMain,
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
  },
  rec: {
    width: 2,
    height: 2,
    top: 0,
  },
  rec1: {
    backgroundColor: Color.universalWhite,
  },
  slidermark: {
    width: 2,
    height: 2,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  marks: {
    justifyContent: "space-between",
    top: 20,
    right: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  sliderthumbIcon: {
    marginTop: -6,
    left: 38,
    width: 12,
    top: "50%",
    borderRadius: Border.br_81xl,
  },
  text1: {
    lineHeight: 22,
    fontFamily: FontFamily.typographySubtitle2,
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    letterSpacing: 0,
    textAlign: "left",
    fontWeight: "500",
  },
  tooltip: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.grey600,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    overflow: "hidden",
  },
  arrowIcon: {
    width: 12,
    height: 6,
  },
  sliderlabel: {
    marginTop: -45,
    left: 23,
    top: "50%",
    display: "none",
    alignItems: "center",
    position: "absolute",
  },
  slider1: {
    height: 42,
    alignSelf: "stretch",
    display: "none",
  },
  text2: {
    color: Color.textSecondary,
  },
  slidervalueLabel: {
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    flex: 1,
  },
  slidervalueLabel1: {
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  values: {
    alignSelf: "stretch",
    display: "none",
    flexDirection: "row",
  },
  slider: {
    top: 491,
    left: 227,
    width: 74,
    height: 4,
    position: "absolute",
  },
  docteur3: {
    width: "21.6%",
    top: "64.2%",
    left: "12.21%",
    lineHeight: 21,
    height: "2.59%",
  },
  adornStartContainer1: {
    height: 1,
    zIndex: 0,
    display: "none",
    width: 24,
  },
  op: {
    marginTop: -4,
    marginLeft: -9,
    fontSize: FontSize.sansBodyMicro_size,
    lineHeight: 10,
    display: "flex",
    maxWidth: 18,
    width: 18,
    textAlign: "center",
    color: Color.universalWhite,
    justifyContent: "center",
    top: "50%",
    fontFamily: FontFamily.typographyBody2,
    zIndex: 0,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  minLayout1: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    width: 18,
    zIndex: 1,
    height: 18,
  },
  minWidth1: {
    width: 8,
    height: 8,
    borderRadius: Border.br_81xl,
  },
  badge: {
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
    backgroundColor: Color.successMain,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    right: -6,
    bottom: -6,
    zIndex: 2,
    width: 12,
    borderRadius: Border.br_81xl,
    display: "none",
    backgroundColor: Color.universalWhite,
  },
  avatar: {
    backgroundColor: Color.componentsAvatarFill,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  chip1: {
    lineHeight: 18,
    color: Color.textPrimary,
    fontFamily: FontFamily.typographyBody2,
    letterSpacing: 0,
  },
  cancelfilledIcon: {
    width: 16,
    height: 16,
    opacity: 0.26,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  chip2: {
    display: "none",
    marginLeft: 8,
  },
  autocompletetag: {
    zIndex: 1,
  },
  minHeight: {
    width: 0,
    zIndex: 2,
    height: 24,
  },
  value: {
    color: Color.textPrimary,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
  },
  placeholder: {
    color: Color.textDisabled,
    zIndex: 4,
    fontFamily: FontFamily.typographyBody2,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    letterSpacing: 0,
    textAlign: "left",
    flex: 1,
    display: "none",
  },
  minWidth6: {
    zIndex: 5,
  },
  arrowdropdownfilledIcon: {
    marginTop: -12,
    zIndex: 6,
    top: "50%",
    right: 0,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  autocompletecloseIcon: {
    zIndex: 7,
    right: 24,
    marginTop: -10,
  },
  container: {
    paddingHorizontal: 0,
    zIndex: 0,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  label1: {
    color: Color.textSecondary,
    fontFamily: FontFamily.typographyBody2,
  },
  labelContainer: {
    left: 12,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    height: 2,
    zIndex: 1,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.universalWhite,
  },
  input1: {
    borderRadius: StyleVariable.borderRadius,
    borderColor: Color.componentsInputOutlinedEnabledBorder,
    borderWidth: 1,
    paddingVertical: 0,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    display: "none",
  },
  helperText1: {
    lineHeight: 20,
    fontSize: FontSize.sansNoteHelper_size,
    color: Color.textSecondary,
    fontFamily: FontFamily.typographyBody2,
    letterSpacing: 0,
    alignSelf: "stretch",
    textAlign: "left",
  },
  select: {
    top: 340,
    left: 44,
    width: 162,
  },
  label2: {
    lineHeight: 12,
    fontSize: FontSize.sansNoteHelper_size,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.universalBlack,
  },
  value1: {
    fontFamily: FontFamily.nunitoBold,
    color: Color.universalBlack,
    fontWeight: "700",
  },
  autocompletecloseIcon1: {
    right: 26,
    zIndex: 5,
  },
  minWidth13: {
    zIndex: 7,
  },
  content1: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  default: {
    borderColor: Color.colorGray_700,
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
    display: "none",
  },
  input2: {
    alignSelf: "stretch",
  },
  select1: {
    top: 366,
    left: 46,
    width: 159,
  },
  paginationitemIcon: {
    display: "none",
  },
  label3: {
    top: "11.54%",
    left: "34.62%",
    color: Color.textPrimary,
    position: "absolute",
  },
  buttonbase: {
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  buttonbase1: {
    backgroundColor: Color.actionSelected,
    width: 26,
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  paginationitemIcon3: {
    display: "none",
  },
  pagination: {
    top: 642,
    left: 45,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  container1: {
    borderRadius: Border.br_4xl,
    width: 2,
    height: 2,
  },
  handleShape: {
    borderRadius: Border.br_5xl,
    padding: Padding.p_2xs,
    justifyContent: "center",
    backgroundColor: Color.orange,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  stateLayer: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    borderRadius: Border.br_81xl,
    alignItems: "center",
  },
  target: {
    marginTop: -22,
    right: -12,
    padding: Padding.p_11xs,
    justifyContent: "center",
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  handle: {
    height: 28,
    width: 44,
  },
  switchDark: {
    top: 439,
  },
  switchDark1: {
    top: 543,
  },
  sliderrail1: {
    opacity: 0.38,
    top: 20,
    right: 0,
  },
  slidertrack1: {
    top: "50%",
    marginTop: -1,
    width: 48,
  },
  rec11: {
    width: 2,
    top: 0,
  },
  rec12: {
    backgroundColor: Color.universalBlack,
  },
  atebyDiaoureGallet1: {
    width: "15.58%",
    left: "-2.21%",
  },
  atebyDiaoureGallet2: {
    width: "27.79%",
    left: "95.58%",
  },
  slider2: {
    top: 482,
    left: 237,
    width: 113,
    height: 42,
    position: "absolute",
  },
  controlIrrigationPlot2Colu: {
    height: 851,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.universalWhite,
  },
});

export default ControlIrrigationPlot2Colu2;
