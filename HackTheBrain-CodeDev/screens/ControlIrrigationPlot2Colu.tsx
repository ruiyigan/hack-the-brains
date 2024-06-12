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

const ControlIrrigationPlot2Colu = () => {
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
          style={[styles.buttonFab, styles.buttonFabPosition]}
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
        <Text style={styles.irrigation}>Irrigation</Text>
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
            source={require("../assets/cocoboldhome1.png")}
          />
        </Pressable>
        <Image
          style={styles.controlNavBarChild}
          contentFit="cover"
          source={require("../assets/ellipse-51.png")}
        />
      </View>
      <Pressable
        style={styles.sunny11}
        onPress={() => navigation.navigate("ControlIrrigationPlot2Colu2")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/sunny-1-1.png")}
        />
      </Pressable>
      <View style={styles.hackTheBrainOnboard11Parent}>
        <Image
          style={styles.hackTheBrainOnboard11}
          contentFit="cover"
          source={require("../assets/hack-the-brain-onboard-1-1.png")}
        />
        <Image
          style={[styles.groupChild, styles.slidePosition]}
          contentFit="cover"
          source={require("../assets/ellipse-781.png")}
        />
      </View>
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
      <View style={[styles.textfield, styles.textfieldLayout]}>
        <View style={styles.content}>
          <View style={[styles.input, styles.inputFlexBox]}>
            <View
              style={[
                styles.adornStartContainer,
                styles.adornContainerSpaceBlock,
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
          <View style={[styles.underline, styles.underlineLayout]} />
        </View>
        <View style={[styles.formhelpertext, styles.formhelpertextSpaceBlock]}>
          <Text style={[styles.helperText, styles.labelLayout]}>
            Helper text
          </Text>
        </View>
      </View>
      <View style={styles.switch}>
        <View style={[styles.slide, styles.slidePosition]}>
          <View style={styles.slide1} />
        </View>
        <View style={[styles.knob, styles.knobPosition]}>
          <Image
            style={styles.knobIcon}
            contentFit="cover"
            source={require("../assets/knob.png")}
          />
        </View>
      </View>
      <View
        style={[styles.controlIrrigationPlot2ColuChild, styles.controlPosition]}
      />
      <Text style={[styles.text, styles.textTypo]}>Plot:</Text>
      <Text style={[styles.atebyDiaoureGallet, styles.atebyTypo1]}>#2</Text>
      <Text style={[styles.text1, styles.textTypo]}>Next Irrigation:</Text>
      <Text style={[styles.atebyDiaoureGallet1, styles.atebyTypo1]}>
        07/06/2024 10:00
      </Text>
      <View
        style={[styles.controlIrrigationPlot2ColuItem, styles.controlPosition]}
      />
      <View style={styles.uicolorsmainParent}>
        <Image
          style={[styles.uicolorsmainIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/uicolorsmain2.png")}
        />
        <Text style={[styles.remboursser, styles.chip1Typo]}> Good</Text>
      </View>
      <Text style={[styles.docteur, styles.labelTypo2]}>Status</Text>
      <Text style={[styles.docteur1, styles.labelClr]}>
        Water Frequency Per Day
      </Text>
      <Text style={[styles.docteur2, styles.labelClr]}>On/Off Valve</Text>
      <Text style={[styles.docteur3, styles.labelClr]}>
        Water Quantity Per Session
      </Text>
      <View style={styles.textfield1}>
        <View style={styles.input1}>
          <Text style={[styles.templabel, styles.labelLayout]}>Label</Text>
          <View style={[styles.input2, styles.input2SpaceBlock]}>
            <View
              style={[
                styles.adornStartContainer1,
                styles.adornContainerSpaceBlock,
              ]}
            >
              <Image
                style={styles.icon4}
                contentFit="cover"
                source={require("../assets/icon1.png")}
              />
            </View>
            <Text style={[styles.label1, styles.labelClr]}>13 Litres</Text>
            <Image
              style={styles.adornEndContainer}
              contentFit="cover"
              source={require("../assets/adorn-end-container1.png")}
            />
          </View>
          <View style={[styles.underline1, styles.input2SpaceBlock]} />
        </View>
        <View style={styles.formhelpertextSpaceBlock}>
          <Text style={[styles.helperText, styles.labelLayout]}>
            Helper text
          </Text>
        </View>
      </View>
      <View style={styles.slider}>
        <View style={styles.slider1}>
          <View style={[styles.sliderrail, styles.sliderrailPosition]} />
          <View style={[styles.slidertrack, styles.slidertrackPosition]} />
          <View style={styles.marks}>
            <View style={[styles.slidermark, styles.recLayout]}>
              <View style={[styles.rec, styles.recLayout]} />
              <View style={[styles.rec1, styles.recLayout]} />
            </View>
            <View style={[styles.slidermark, styles.recLayout]}>
              <View style={[styles.rec, styles.recLayout]} />
              <View style={[styles.rec1, styles.recLayout]} />
            </View>
            <View style={[styles.slidermark, styles.recLayout]}>
              <View style={[styles.rec, styles.recLayout]} />
              <View style={[styles.rec1, styles.recLayout]} />
            </View>
            <View style={[styles.slidermark, styles.recLayout]}>
              <View style={[styles.rec, styles.recLayout]} />
              <View style={[styles.rec1, styles.recLayout]} />
            </View>
            <View style={[styles.slidermark, styles.recLayout]}>
              <View style={[styles.rec, styles.recLayout]} />
            </View>
            <View style={[styles.slidermark, styles.recLayout]}>
              <View style={[styles.rec, styles.recLayout]} />
            </View>
            <View style={[styles.slidermark, styles.recLayout]}>
              <View style={[styles.rec, styles.recLayout]} />
            </View>
          </View>
          <Image
            style={[styles.sliderthumbIcon, styles.selectLayout]}
            contentFit="cover"
            source={require("../assets/-sliderthumb.png")}
          />
          <View style={styles.sliderlabel}>
            <View style={[styles.tooltip, styles.inputFlexBox]}>
              <Text style={[styles.text2, styles.labelClr]}>20</Text>
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
            <Text style={[styles.text3, styles.text3Typo]}>0</Text>
          </View>
          <View style={styles.slidervalueLabel1}>
            <Text style={[styles.text3, styles.text3Typo]}>12</Text>
          </View>
        </View>
      </View>
      <View style={styles.slider2}>
        <View style={[styles.sliderrail1, styles.sliderrailPosition]} />
        <View style={[styles.slidertrack1, styles.slidertrackPosition]} />
        <View style={styles.marks}>
          <View style={[styles.slidermark, styles.recLayout]}>
            <View style={[styles.rec11, styles.recLayout]} />
            <View style={[styles.rec1, styles.recLayout]} />
          </View>
          <View style={[styles.slidermark, styles.recLayout]}>
            <View style={[styles.rec11, styles.recLayout]} />
            <View style={[styles.rec1, styles.recLayout]} />
          </View>
          <View style={[styles.slidermark, styles.recLayout]}>
            <View style={[styles.rec11, styles.recLayout]} />
            <View style={[styles.rec1, styles.recLayout]} />
          </View>
          <View style={[styles.slidermark, styles.recLayout]}>
            <View style={[styles.rec11, styles.recLayout]} />
            <View style={[styles.rec1, styles.recLayout]} />
          </View>
          <View style={[styles.slidermark, styles.recLayout]}>
            <View style={[styles.rec11, styles.recLayout]} />
          </View>
          <View style={[styles.slidermark, styles.recLayout]}>
            <View style={[styles.rec11, styles.recLayout]} />
          </View>
          <View style={[styles.slidermark, styles.recLayout]}>
            <View style={[styles.rec11, styles.recLayout]} />
          </View>
        </View>
        <Image
          style={[styles.sliderthumbIcon, styles.selectLayout]}
          contentFit="cover"
          source={require("../assets/-sliderthumb1.png")}
        />
        <View style={styles.sliderlabel}>
          <View style={[styles.tooltip, styles.inputFlexBox]}>
            <Text style={[styles.text2, styles.labelClr]}>20</Text>
          </View>
          <Image
            style={styles.arrowIcon}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
        </View>
        <Text style={[styles.atebyDiaoureGallet2, styles.atebyTypo]}>1</Text>
        <Text style={[styles.atebyDiaoureGallet3, styles.atebyTypo]}>8</Text>
      </View>
      <Image
        style={[styles.controlIrrigationPlot2ColuInner, styles.textfieldLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <Text style={[styles.docteur4, styles.labelClr]}>Notifications</Text>
      <View style={[styles.select, styles.selectLayout]}>
        <View style={styles.input3}>
          <View style={[styles.container, styles.activeFlexBox]}>
            <Image
              style={styles.adornStartContainer2}
              contentFit="cover"
              source={require("../assets/adorn-start-container1.png")}
            />
            <View
              style={[styles.autocompletetag, styles.adornContainerSpaceBlock]}
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
              style={[styles.arrowdropdownfilledIcon, styles.buttonFabPosition]}
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
            <Text style={[styles.label2, styles.labelLayout]}>Column</Text>
          </View>
        </View>
        <View style={[styles.formhelpertext, styles.formhelpertextSpaceBlock]}>
          <Text style={styles.helperText2}>Helper text</Text>
        </View>
      </View>
      <View style={[styles.select1, styles.selectLayout]}>
        <View style={styles.input1}>
          <Text style={[styles.label3, styles.labelClr]}>Column</Text>
          <View style={[styles.content1, styles.input2SpaceBlock]}>
            <Image
              style={styles.adornStartContainer2}
              contentFit="cover"
              source={require("../assets/adorn-start-container2.png")}
            />
            <View
              style={[styles.autocompletetag, styles.adornContainerSpaceBlock]}
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
            <Text style={[styles.value1, styles.valueTypo]}>4</Text>
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
              style={[styles.arrowdropdownfilledIcon, styles.buttonFabPosition]}
              contentFit="cover"
              source={require("../assets/arrowdropdownfilled2.png")}
            />
            <View style={[styles.minWidth13, styles.minLayout]} />
          </View>
          <View style={[styles.default, styles.input2SpaceBlock]} />
        </View>
        <View style={styles.formhelpertextSpaceBlock}>
          <Text style={styles.helperText2}>Helper text</Text>
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
        <Pressable
          style={styles.paginationitemIconLayout}
          onPress={() => navigation.navigate("ControlIrrigationPlot2Colu1")}
        >
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.text3Typo]}>1</Text>
          </View>
        </Pressable>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase1, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.text3Typo]}>2</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.text3Typo]}>3</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.text3Typo]}>4</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.text3Typo]}>5</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.text3Typo]}>6</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.text3Typo]}>7</Text>
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
                <View style={[styles.container1, styles.recLayout]} />
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
                <View style={[styles.container1, styles.recLayout]} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFabPosition: {
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
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
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  textfieldLayout: {
    height: 27,
    position: "absolute",
  },
  inputFlexBox: {
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  adornContainerSpaceBlock: {
    paddingRight: Padding.p_5xs,
    display: "none",
    flexDirection: "row",
  },
  labelTypo1: {
    letterSpacing: 0,
    fontFamily: FontFamily.typographyBody2,
  },
  underlineLayout: {
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
  },
  formhelpertextSpaceBlock: {
    paddingTop: Padding.p_10xs,
    alignSelf: "stretch",
    display: "none",
  },
  labelLayout: {
    lineHeight: 12,
    fontSize: FontSize.sansNoteHelper_size,
    letterSpacing: 0,
  },
  knobPosition: {
    left: 20,
    position: "absolute",
  },
  controlPosition: {
    left: "6.92%",
    right: "5.88%",
    width: "87.2%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorAquamarine_100,
    top: "27.84%",
    height: "2.09%",
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    fontSize: FontSize.sansNoteHelper_size,
    position: "absolute",
  },
  atebyTypo1: {
    color: Color.colorSet1Cloud10,
    top: "29.93%",
    height: "2.47%",
    fontFamily: FontFamily.nunitoBold,
    fontSize: FontSize.typographyBody2_size,
    fontWeight: "700",
    position: "absolute",
  },
  chip1Typo: {
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    textAlign: "left",
  },
  labelTypo2: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
  },
  labelClr: {
    color: Color.universalWhite,
    textAlign: "left",
  },
  input2SpaceBlock: {
    marginTop: 4.5,
    alignSelf: "stretch",
  },
  sliderrailPosition: {
    opacity: 0.38,
    height: 2,
    top: 20,
    borderRadius: Border.br_81xl,
    right: 0,
    left: 0,
    position: "absolute",
  },
  slidertrackPosition: {
    marginTop: -1,
    top: "50%",
    height: 2,
    borderRadius: Border.br_81xl,
    width: 48,
    left: 0,
    position: "absolute",
  },
  recLayout: {
    width: 2,
    height: 2,
  },
  selectLayout: {
    height: 12,
    position: "absolute",
  },
  text3Typo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.typographyBody2,
    letterSpacing: 0,
  },
  atebyTypo: {
    fontSize: FontSize.size_4xs,
    top: "45.24%",
    width: "6.64%",
    color: Color.colorSet1Cloud10,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
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
    backgroundColor: Color.colorDarkcyan,
    left: 302,
    paddingHorizontal: Padding.p_9xs,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    flexDirection: "row",
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
    top: 0,
    height: 44,
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
  irrigation: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.universalBlack,
    textAlign: "right",
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  active: {
    top: 106,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorAquamarine_100,
    left: 20,
    position: "absolute",
    borderRadius: Border.br_xs,
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
    left: 151,
    top: 688,
    width: 37,
    height: 37,
    position: "absolute",
  },
  hackTheBrainOnboard11: {
    top: 1,
    left: 4,
    height: 48,
    width: 48,
    position: "absolute",
  },
  groupChild: {
    width: 51,
    height: 51,
  },
  hackTheBrainOnboard11Parent: {
    top: 681,
    left: 87,
    width: 52,
    height: 51,
    position: "absolute",
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
    height: 1,
    width: 32,
    paddingRight: Padding.p_5xs,
    alignItems: "center",
  },
  label: {
    color: Color.textSecondary,
    fontFamily: FontFamily.typographyBody2,
    lineHeight: 24,
    flex: 1,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
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
    textAlign: "left",
  },
  formhelpertext: {
    paddingHorizontal: Padding.p_sm,
  },
  textfield: {
    left: 229,
    width: 104,
    top: 549,
  },
  slide1: {
    width: 34,
    height: 14,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorAquamarine_100,
  },
  slide: {
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  knobIcon: {
    width: 20,
    height: 20,
  },
  knob: {
    padding: Padding.p_4xs,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  switch: {
    top: 395,
    left: 293,
    width: 58,
    height: 38,
    position: "absolute",
  },
  controlIrrigationPlot2ColuChild: {
    height: "45.69%",
    top: "24.63%",
    bottom: "29.68%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorSet1Cloud90,
  },
  text: {
    width: "6.92%",
    left: "12.54%",
    textAlign: "left",
  },
  atebyDiaoureGallet: {
    width: "4.53%",
    left: "12.26%",
    textAlign: "left",
  },
  text1: {
    width: "21.86%",
    left: "69.87%",
    textAlign: "right",
  },
  atebyDiaoureGallet1: {
    width: "31.2%",
    left: "60.53%",
    textAlign: "right",
  },
  controlIrrigationPlot2ColuItem: {
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
    position: "absolute",
  },
  docteur1: {
    width: "43.74%",
    top: "54.7%",
    lineHeight: 21,
    height: "2.59%",
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: "11.73%",
  },
  docteur2: {
    width: "22.14%",
    top: "49.47%",
    left: "11.7%",
    lineHeight: 21,
    height: "2.59%",
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  docteur3: {
    width: "47.46%",
    top: "59.74%",
    lineHeight: 21,
    height: "2.59%",
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: "11.73%",
  },
  templabel: {
    opacity: 0,
    color: Color.textSecondary,
    fontFamily: FontFamily.typographyBody2,
    textAlign: "left",
  },
  adornStartContainer1: {
    height: 1,
    width: 32,
    paddingRight: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.universalWhite,
  },
  label1: {
    fontSize: FontSize.typographyBody2_size,
    color: Color.universalWhite,
    letterSpacing: 0,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    flex: 1,
  },
  input2: {
    alignItems: "center",
    flexDirection: "row",
  },
  underline1: {
    borderColor: Color.componentsInputStandardEnabledBorder,
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
    display: "none",
  },
  input1: {
    alignSelf: "stretch",
  },
  textfield1: {
    top: 450,
    left: 296,
    width: 71,
    position: "absolute",
  },
  sliderrail: {
    backgroundColor: Color.primaryMain,
  },
  slidertrack: {
    top: "50%",
    backgroundColor: Color.primaryMain,
  },
  rec: {
    backgroundColor: Color.primaryMain,
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rec1: {
    opacity: 0.8,
    borderRadius: Border.br_81xl,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.universalWhite,
  },
  slidermark: {
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
  text2: {
    lineHeight: 22,
    fontFamily: FontFamily.typographySubtitle2,
    fontSize: FontSize.typographyBody2_size,
    color: Color.universalWhite,
    letterSpacing: 0,
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
  text3: {
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
  sliderrail1: {
    backgroundColor: Color.colorAquamarine_100,
  },
  slidertrack1: {
    top: "50%",
    backgroundColor: Color.colorAquamarine_100,
  },
  rec11: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorAquamarine_100,
    top: 0,
    left: 0,
    position: "absolute",
  },
  atebyDiaoureGallet2: {
    left: "-2.21%",
  },
  atebyDiaoureGallet3: {
    left: "95.58%",
  },
  slider2: {
    top: 497,
    left: 238,
    width: 113,
    height: 42,
    position: "absolute",
  },
  controlIrrigationPlot2ColuInner: {
    top: 465,
    left: 288,
    borderRadius: Border.br_8xs,
    width: 69,
  },
  docteur4: {
    width: "21.6%",
    top: "64.9%",
    lineHeight: 21,
    height: "2.59%",
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: "12.26%",
  },
  adornStartContainer2: {
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
    justifyContent: "center",
    top: "50%",
    color: Color.universalWhite,
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
    flex: 1,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    display: "none",
  },
  minWidth6: {
    zIndex: 5,
  },
  arrowdropdownfilledIcon: {
    marginTop: -12,
    zIndex: 6,
    top: "50%",
    height: 24,
    width: 24,
  },
  autocompletecloseIcon: {
    zIndex: 7,
    right: 24,
  },
  container: {
    paddingHorizontal: 0,
    zIndex: 0,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  label2: {
    color: Color.textSecondary,
    fontFamily: FontFamily.typographyBody2,
    textAlign: "left",
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
  input3: {
    borderRadius: StyleVariable.borderRadius,
    borderColor: Color.componentsInputOutlinedEnabledBorder,
    borderWidth: 1,
    paddingVertical: 0,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    display: "none",
  },
  helperText2: {
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
  label3: {
    fontFamily: FontFamily.sansBodyMicroSemiBold,
    fontWeight: "600",
    lineHeight: 12,
    fontSize: FontSize.sansNoteHelper_size,
    letterSpacing: 0,
  },
  value1: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.nunitoBold,
    zIndex: 3,
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
  select1: {
    top: 366,
    left: 46,
    width: 159,
  },
  paginationitemIcon: {
    display: "none",
  },
  label4: {
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
  },
  handleShape: {
    borderRadius: Border.br_5xl,
    padding: Padding.p_2xs,
    justifyContent: "center",
    backgroundColor: Color.colorAquamarine_100,
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
    top: 419,
  },
  switchDark1: {
    top: 549,
  },
  controlIrrigationPlot2Colu: {
    height: 851,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.universalWhite,
  },
});

export default ControlIrrigationPlot2Colu;
