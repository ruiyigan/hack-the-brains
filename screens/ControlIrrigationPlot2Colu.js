import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Border,
  FontFamily,
  FontSize,
  Color,
  StyleVariable,
} from "../GlobalStyles";

const ControlIrrigationPlot2Colu = () => {
  const navigation = useNavigation();

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
          source={require("../assets/button--fab1.png")}
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
      <View style={[styles.controlNavBarParent, styles.sliderlabelPosition]}>
        <View style={styles.barPosition}>
          <View style={[styles.barBottomHome, styles.barLayout]}>
            <Pressable
              style={[styles.barBottomItemActive, styles.barItemLayout]}
              onPress={() => navigation.navigate("HomepageScrollingOverview")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active1.png")}
              />
            </Pressable>
            <Image
              style={[styles.barBottomItemInactiv, styles.barItemLayout]}
              contentFit="cover"
              source={require("../assets/bar--bottom--item--active1.png")}
            />
            <Pressable
              style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
              onPress={() => navigation.navigate("AidMainPage")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active1.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/bar--bottom--item--active1.png")}
              />
            </Pressable>
          </View>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
          <Image
            style={styles.iconSettings}
            contentFit="cover"
            source={require("../assets/icon--settings2.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector12.png")}
          />
          <Image
            style={styles.cocoboldhomeIcon}
            contentFit="cover"
            source={require("../assets/cocoboldhome1.png")}
          />
          <Image
            style={styles.controlNavBarChild}
            contentFit="cover"
            source={require("../assets/ellipse-51.png")}
          />
        </View>
        <Pressable
          style={styles.sunny11}
          onPress={() => navigation.navigate("ControlIrrigationPlot2Colu1")}
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
      </View>
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
          style={[styles.uicolorsmainIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/uicolorsmain4.png")}
        />
        <Text style={[styles.remboursser, styles.chip1Typo]}> Good</Text>
      </View>
      <Text style={[styles.docteur, styles.docteurPosition]}>Status</Text>
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
          <View style={[styles.marks, styles.marksFlexBox]}>
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
          <View style={[styles.sliderlabel, styles.sliderlabelPosition]}>
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
        <View style={[styles.marks, styles.marksFlexBox]}>
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
        <View style={[styles.sliderlabel, styles.sliderlabelPosition]}>
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
              source={require("../assets/adorn-start-container.png")}
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
                  source={require("../assets/cancelfilled.png")}
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
                  source={require("../assets/cancelfilled.png")}
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
                  source={require("../assets/cancelfilled.png")}
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
              source={require("../assets/autocompleteclose.png")}
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
              source={require("../assets/autocompleteclose1.png")}
            />
            <Image
              style={[styles.arrowdropdownfilledIcon, styles.buttonFabPosition]}
              contentFit="cover"
              source={require("../assets/arrowdropdownfilled1.png")}
            />
            <View style={[styles.minWidth13, styles.minLayout]} />
          </View>
          <View style={[styles.default, styles.input2SpaceBlock]} />
        </View>
        <View style={styles.formhelpertextSpaceBlock}>
          <Text style={styles.helperText2}>Helper text</Text>
        </View>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.icons, styles.marksFlexBox]}>
          <View style={styles.top}>
            <Image
              style={[styles.signalIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/signal3.png")}
            />
            <Text style={[styles.text6, styles.chip1Typo]}>9:30</Text>
          </View>
        </View>
      </View>
      <View style={[styles.switch1, styles.switchPosition]}>
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
      <View style={[styles.switch2, styles.switchPosition]}>
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
          onPress={() => navigation.navigate("ControlIrrigationPlot1Colu")}
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
  sliderlabelPosition: {
    left: 23,
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
    right: "5.87%",
    width: "87.21%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorSet1Cloud20,
    top: "27.83%",
    height: "2.09%",
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
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
  iconPosition: {
    maxHeight: "100%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chip1Typo: {
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    textAlign: "left",
  },
  docteurPosition: {
    left: "12.26%",
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
  marksFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  recLayout: {
    width: 2,
    height: 2,
    borderRadius: Border.br_81xl,
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
  switchPosition: {
    left: 291,
    height: 38,
    width: 58,
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
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 4,
    position: "absolute",
  },
  buttonFab: {
    width: 44,
    display: "none",
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
    backgroundColor: Color.colorSet1Cloud20,
    left: 20,
    position: "absolute",
    borderRadius: Border.br_xs,
  },
  icon: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  barBottomItemActive: {
    left: 0,
  },
  barBottomItemInactiv: {
    left: 82,
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
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    height: 65,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.universalWhite,
  },
  vectorIcon: {
    width: "5.37%",
    right: "59.52%",
    left: "35.1%",
    height: 20,
    maxWidth: "100%",
    bottom: 22,
    position: "absolute",
    overflow: "hidden",
  },
  iconSettings: {
    bottom: 19,
    left: 277,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    width: "5.43%",
    right: "34.78%",
    left: "59.79%",
    height: 18,
    maxWidth: "100%",
    bottom: 22,
    position: "absolute",
    overflow: "hidden",
  },
  cocoboldhomeIcon: {
    bottom: 20,
    left: 31,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  controlNavBarChild: {
    marginLeft: -44.2,
    bottom: 8,
    width: 6,
    height: 6,
    left: "50%",
    position: "absolute",
  },
  barPosition: {
    height: 65,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  sunny11: {
    left: 128,
    top: 7,
    width: 37,
    height: 37,
    position: "absolute",
  },
  hackTheBrainOnboard11: {
    left: 4,
    height: 48,
    width: 48,
    top: 1,
    position: "absolute",
  },
  groupChild: {
    width: 51,
    height: 51,
  },
  hackTheBrainOnboard11Parent: {
    left: 64,
    width: 52,
    height: 51,
    top: 0,
    position: "absolute",
  },
  soil1Icon: {
    top: 6,
    left: 179,
  },
  pesticide1Icon: {
    left: 230,
    top: 4,
  },
  controlNavBarParent: {
    right: 22,
    bottom: 6,
    height: 156,
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
    borderColor: Color.colorGray_300,
    zIndex: 1,
    bottom: 0,
    borderTopWidth: 1,
    position: "absolute",
  },
  content: {
    borderTopLeftRadius: StyleVariable.borderRadius1,
    borderTopRightRadius: StyleVariable.borderRadius1,
    backgroundColor: Color.colorGray_400,
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
    top: 549,
    left: 229,
    width: 104,
  },
  slide1: {
    width: 34,
    height: 14,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorSet1Cloud20,
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
    height: 38,
    width: 58,
    position: "absolute",
  },
  controlIrrigationPlot2ColuChild: {
    height: "45.69%",
    top: "24.62%",
    bottom: "29.69%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorSet1Cloud90,
  },
  text: {
    width: "6.92%",
    left: "12.53%",
    textAlign: "left",
  },
  atebyDiaoureGallet: {
    width: "4.53%",
    left: "12.26%",
    textAlign: "left",
  },
  text1: {
    width: "21.87%",
    left: "69.87%",
    textAlign: "right",
  },
  atebyDiaoureGallet1: {
    width: "31.21%",
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
    bottom: "0%",
    borderRadius: Border.br_mid,
    left: "0%",
    height: "100%",
    width: "100%",
  },
  remboursser: {
    height: "87.02%",
    width: "51.81%",
    top: "4.33%",
    left: "18.98%",
    fontFamily: FontFamily.titilliumWebSemiBold,
    color: Color.colorSet1Cloud90,
    fontWeight: "600",
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    position: "absolute",
  },
  uicolorsmainParent: {
    height: "2.84%",
    width: "21.08%",
    top: "36.45%",
    right: "7.45%",
    bottom: "60.71%",
    left: "71.47%",
    position: "absolute",
  },
  docteur: {
    height: "2.96%",
    width: "12.53%",
    top: "36.7%",
    lineHeight: 24,
    fontFamily: FontFamily.sansBodyMicro,
    color: Color.colorSet1Cloud100,
    fontSize: FontSize.sansBodyBodyCopy_size,
    position: "absolute",
  },
  docteur1: {
    width: "43.74%",
    top: "55.05%",
    lineHeight: 21,
    height: "2.59%",
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: "11.74%",
  },
  docteur2: {
    width: "22.13%",
    top: "50.12%",
    lineHeight: 21,
    height: "2.59%",
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: "11.74%",
  },
  docteur3: {
    width: "47.47%",
    top: "59.97%",
    lineHeight: 21,
    height: "2.59%",
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: "11.74%",
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
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
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
    top: 425,
    left: 286,
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
    top: 0,
    left: 0,
    position: "absolute",
  },
  rec1: {
    opacity: 0.8,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.universalWhite,
  },
  slidermark: {
    overflow: "hidden",
  },
  marks: {
    top: 20,
    justifyContent: "space-between",
    right: 0,
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
    top: "50%",
    display: "none",
    alignItems: "center",
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
    backgroundColor: Color.colorSet1Cloud20,
  },
  slidertrack1: {
    top: "50%",
    backgroundColor: Color.colorSet1Cloud20,
  },
  rec11: {
    backgroundColor: Color.colorSet1Cloud20,
    top: 0,
    left: 0,
    position: "absolute",
  },
  atebyDiaoureGallet2: {
    left: "-2.22%",
  },
  atebyDiaoureGallet3: {
    left: "95.56%",
  },
  slider2: {
    top: 398,
    left: 252,
    width: 90,
    height: 42,
    position: "absolute",
  },
  controlIrrigationPlot2ColuInner: {
    top: 438,
    left: 279,
    borderRadius: Border.br_8xs,
    width: 69,
  },
  docteur4: {
    width: "21.61%",
    top: "64.9%",
    lineHeight: 21,
    height: "2.59%",
    color: Color.universalWhite,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
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
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
  },
  placeholder: {
    color: Color.textDisabled,
    zIndex: 4,
    fontFamily: FontFamily.typographyBody2,
    lineHeight: 24,
    flex: 1,
    fontSize: FontSize.sansBodyBodyCopy_size,
    display: "none",
    textAlign: "left",
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
    fontFamily: FontFamily.sansBodyBodySmallSemiBold,
    fontWeight: "600",
    lineHeight: 12,
    fontSize: FontSize.sansNoteHelper_size,
    letterSpacing: 0,
  },
  value1: {
    color: Color.colorGray_500,
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
    borderColor: Color.colorGray_600,
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
    display: "none",
  },
  select1: {
    top: 310,
    left: 46,
    width: 159,
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    bottom: "17.06%",
    left: "83.28%",
  },
  text6: {
    top: "5.88%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
    left: "0%",
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
    alignItems: "center",
  },
  statusBar: {
    left: -19,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    top: 1,
    position: "absolute",
    overflow: "hidden",
  },
  switch1: {
    top: 469,
  },
  switch2: {
    top: 359,
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
    top: 532,
    left: 45,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  controlIrrigationPlot2Colu: {
    height: 733,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.universalWhite,
  },
});

export default ControlIrrigationPlot2Colu;
