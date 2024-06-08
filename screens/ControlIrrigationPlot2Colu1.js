import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  Border,
  Padding,
  FontSize,
  StyleVariable,
} from "../GlobalStyles";

const ControlIrrigationPlot2Colu1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.controlIrrigationPlot2Colu}>
      <View style={[styles.barStatus, styles.blurLayout]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={[styles.capIcon, styles.sliderLayout]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.opLayout]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={styles.navigation}>
        <View style={styles.title}>
          <Text style={[styles.dashboard, styles.timeTypo]}>Control</Text>
          <Image
            style={styles.iconDashboard}
            resizeMode="cover"
            source={require("../assets/icon--dashboard.png")}
          />
        </View>
        <Image
          style={[styles.buttonFab, styles.activeLayout]}
          resizeMode="cover"
          source={require("../assets/button--fab.png")}
        />
      </View>
      <LinearGradient
        style={[styles.blur, styles.blurLayout]}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0.7)", "#fff"]}
        useAngle={true}
        angle={180}
      />
      <View style={styles.barHomeIndicator}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.active, styles.activeFlexBox]}>
        <Text style={styles.irrigation}>Irrigation</Text>
      </View>
      <View style={styles.sunny11Parent}>
        <Pressable
          style={styles.sunny11}
          onPress={() => navigation.navigate("ControlIrrigationPlot2Colu")}
        >
          <Image
            style={styles.iconLayout2}
            resizeMode="cover"
            source={require("../assets/sunny-1-1.png")}
          />
        </Pressable>
        <View style={styles.hackTheBrainOnboard11Parent}>
          <Image
            style={styles.hackTheBrainOnboard11}
            resizeMode="cover"
            source={require("../assets/group-1000003272.png")}
          />
          <Image
            style={[styles.groupChild, styles.slidePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-781.png")}
          />
        </View>
        <Image
          style={[styles.soil1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/soil-1.png")}
        />
        <Image
          style={[styles.pesticide1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/pesticide-1.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleWrapper, styles.groupInnerPosition]}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
        </View>
        <View style={styles.textfield}>
          <View style={styles.content}>
            <View style={[styles.input, styles.inputFlexBox]}>
              <View
                style={[
                  styles.adornStartContainer,
                  styles.adornContainerSpaceBlock,
                ]}
              >
                <Image
                  style={styles.icon1}
                  resizeMode="cover"
                  source={require("../assets/icon.png")}
                />
              </View>
              <Text style={styles.label} />
              <Image
                style={styles.adornEndContainer}
                resizeMode="cover"
                source={require("../assets/adorn-end-container.png")}
              />
            </View>
            <View style={[styles.underline, styles.underlineLayout]} />
          </View>
          <View
            style={[styles.formhelpertext, styles.formhelpertextSpaceBlock]}
          >
            <Text style={[styles.helperText, styles.labelLayout]}>
              Helper text
            </Text>
          </View>
        </View>
        <View style={[styles.switch, styles.switchLayout]}>
          <View style={[styles.slide, styles.slidePosition]}>
            <View style={styles.slide1} />
          </View>
          <View style={styles.knob}>
            <Image
              style={styles.knobIcon}
              resizeMode="cover"
              source={require("../assets/knob1.png")}
            />
          </View>
        </View>
        <View style={[styles.switch1, styles.switchLayout]}>
          <View style={[styles.slide, styles.slidePosition]}>
            <View style={styles.slide1} />
          </View>
          <View style={styles.knob}>
            <Image
              style={styles.knobIcon}
              resizeMode="cover"
              source={require("../assets/knob1.png")}
            />
          </View>
        </View>
        <Text style={[styles.text, styles.textTypo]}>Plot:</Text>
        <Text style={[styles.atebyDiaoureGallet, styles.atebyTypo1]}>#2</Text>
        <Text style={[styles.text1, styles.textTypo]}>Next Irrigation:</Text>
        <Text style={[styles.atebyDiaoureGallet1, styles.atebyTypo1]}>
          07/06/2024 16:00
        </Text>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={styles.uicolorsmainParent}>
          <Image
            style={[styles.uicolorsmainIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/uicolorsmain1.png")}
          />
          <Text style={[styles.remboursser, styles.chip1Typo]}>
            In Progress
          </Text>
        </View>
        <Text style={[styles.docteur, styles.labelTypo]}>Status</Text>
        <Text style={[styles.docteur1, styles.docteurTypo]}>
          Water Frequency Per Day
        </Text>
        <Text style={[styles.docteur2, styles.docteurTypo]}>On/Off Valve</Text>
        <Text style={[styles.docteur3, styles.docteurTypo]}>
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
                  style={styles.icon1}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
              <Text style={[styles.label1, styles.labelTypo]}>13 Litres</Text>
              <Image
                style={styles.adornEndContainer}
                resizeMode="cover"
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
        <View style={[styles.slider, styles.sliderLayout]}>
          <View style={styles.slider1}>
            <View style={[styles.sliderrail, styles.sliderrailPosition]} />
            <View style={[styles.slidertrack, styles.slidertrackPosition]} />
            <View style={[styles.marks, styles.marksPosition]}>
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
              style={[styles.sliderthumbIcon, styles.border1Layout]}
              resizeMode="cover"
              source={require("../assets/-sliderthumb.png")}
            />
            <View style={styles.sliderlabel}>
              <View style={[styles.tooltip, styles.inputFlexBox]}>
                <Text style={styles.text2}>20</Text>
              </View>
              <Image
                style={styles.arrowIcon}
                resizeMode="cover"
                source={require("../assets/arrow.png")}
              />
            </View>
          </View>
          <View style={styles.values}>
            <View style={styles.slidervalueLabel}>
              <Text style={[styles.text3, styles.textLayout]}>0</Text>
            </View>
            <View style={styles.slidervalueLabel1}>
              <Text style={[styles.text3, styles.textLayout]}>12</Text>
            </View>
          </View>
        </View>
        <View style={styles.slider2}>
          <View style={[styles.sliderrail1, styles.sliderrailPosition]} />
          <View style={[styles.slidertrack1, styles.slidertrackPosition]} />
          <View style={[styles.marks, styles.marksPosition]}>
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
            style={[styles.sliderthumbIcon, styles.border1Layout]}
            resizeMode="cover"
            source={require("../assets/-sliderthumb2.png")}
          />
          <View style={styles.sliderlabel}>
            <View style={[styles.tooltip, styles.inputFlexBox]}>
              <Text style={styles.text2}>20</Text>
            </View>
            <Image
              style={styles.arrowIcon}
              resizeMode="cover"
              source={require("../assets/arrow.png")}
            />
          </View>
          <Text style={[styles.atebyDiaoureGallet2, styles.atebyTypo]}>1</Text>
          <Text style={[styles.atebyDiaoureGallet3, styles.atebyTypo]}>8</Text>
        </View>
        <View style={[styles.rectangleView, styles.underlineBorder]} />
        <Text style={[styles.docteur4, styles.docteurTypo]}>Notifications</Text>
        <View style={[styles.select, styles.selectPosition]}>
          <View style={styles.input3}>
            <View style={[styles.container, styles.activeFlexBox]}>
              <Image
                style={styles.adornStartContainer2}
                resizeMode="cover"
                source={require("../assets/adorn-start-container.png")}
              />
              <View
                style={[
                  styles.autocompletetag,
                  styles.adornContainerSpaceBlock,
                ]}
              >
                <View style={styles.chipLayout}>
                  <View style={styles.avatar}>
                    <Text style={[styles.op, styles.opLayout]}>OP</Text>
                    <View style={styles.minLayout1} />
                    <View style={[styles.border1, styles.border1Layout]}>
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
                    resizeMode="cover"
                    source={require("../assets/cancelfilled.png")}
                  />
                </View>
                <View style={[styles.chip2, styles.chipLayout]}>
                  <View style={styles.avatar}>
                    <Text style={[styles.op, styles.opLayout]}>OP</Text>
                    <View style={styles.minLayout1} />
                    <View style={[styles.border1, styles.border1Layout]}>
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
                    resizeMode="cover"
                    source={require("../assets/cancelfilled.png")}
                  />
                </View>
                <View style={[styles.chip2, styles.chipLayout]}>
                  <View style={styles.avatar}>
                    <Text style={[styles.op, styles.opLayout]}>OP</Text>
                    <View style={styles.minLayout1} />
                    <View style={[styles.border1, styles.border1Layout]}>
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
                    resizeMode="cover"
                    source={require("../assets/cancelfilled.png")}
                  />
                </View>
              </View>
              <View style={styles.minHeight} />
              <Text style={[styles.value, styles.valueTypo]}>1</Text>
              <Text style={styles.placeholder}>Placeholder</Text>
              <View style={[styles.minWidth6, styles.minLayout]} />
              <Image
                style={styles.arrowdropdownfilledIcon}
                resizeMode="cover"
                source={require("../assets/arrowdropdownfilled.png")}
              />
              <Image
                style={[
                  styles.autocompletecloseIcon,
                  styles.autocompletecloseIconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/autocompleteclose.png")}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={[styles.label2, styles.labelLayout]}>Column</Text>
            </View>
          </View>
          <View
            style={[styles.formhelpertext, styles.formhelpertextSpaceBlock]}
          >
            <Text style={[styles.helperText2, styles.textLayout]}>
              Helper text
            </Text>
          </View>
        </View>
        <View style={[styles.select1, styles.selectPosition]}>
          <View style={styles.input1}>
            <Text style={[styles.label3, styles.labelTypo]}>Column</Text>
            <View style={[styles.content1, styles.input2SpaceBlock]}>
              <Image
                style={styles.adornStartContainer2}
                resizeMode="cover"
                source={require("../assets/adorn-start-container1.png")}
              />
              <View
                style={[
                  styles.autocompletetag,
                  styles.adornContainerSpaceBlock,
                ]}
              >
                <View style={styles.chipLayout}>
                  <View style={styles.avatar}>
                    <Text style={[styles.op, styles.opLayout]}>OP</Text>
                    <View style={styles.minLayout1} />
                    <View style={[styles.border1, styles.border1Layout]}>
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
                    resizeMode="cover"
                    source={require("../assets/cancelfilled1.png")}
                  />
                </View>
                <View style={[styles.chip2, styles.chipLayout]}>
                  <View style={styles.avatar}>
                    <Text style={[styles.op, styles.opLayout]}>OP</Text>
                    <View style={styles.minLayout1} />
                    <View style={[styles.border1, styles.border1Layout]}>
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
                    resizeMode="cover"
                    source={require("../assets/cancelfilled1.png")}
                  />
                </View>
                <View style={[styles.chip2, styles.chipLayout]}>
                  <View style={styles.avatar}>
                    <Text style={[styles.op, styles.opLayout]}>OP</Text>
                    <View style={styles.minLayout1} />
                    <View style={[styles.border1, styles.border1Layout]}>
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
                    resizeMode="cover"
                    source={require("../assets/cancelfilled1.png")}
                  />
                </View>
              </View>
              <View style={styles.minHeight} />
              <Text style={[styles.value1, styles.valueTypo]}>4</Text>
              <Text style={styles.placeholder}>Placeholder</Text>
              <Image
                style={[
                  styles.autocompletecloseIcon1,
                  styles.autocompletecloseIconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/autocompleteclose1.png")}
              />
              <Image
                style={styles.arrowdropdownfilledIcon}
                resizeMode="cover"
                source={require("../assets/arrowdropdownfilled2.png")}
              />
              <View style={[styles.minWidth13, styles.minLayout]} />
            </View>
            <View style={[styles.default, styles.input2SpaceBlock]} />
          </View>
          <View style={styles.formhelpertextSpaceBlock}>
            <Text style={[styles.helperText2, styles.textLayout]}>
              Helper text
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.pagination, styles.typographySpaceBlock]}>
        <Image
          style={[styles.paginationitemIcon, styles.buttonbaseLayout]}
          resizeMode="cover"
          source={require("../assets/paginationitem.png")}
        />
        <Image
          style={styles.paginationitemIconLayout}
          resizeMode="cover"
          source={require("../assets/paginationitem1.png")}
        />
        <Pressable
          style={styles.paginationitemIconLayout}
          onPress={() => navigation.navigate("ControlIrrigationPlot1Colu")}
        >
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.textLayout]}>1</Text>
          </View>
        </Pressable>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase1, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.textLayout]}>2</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.textLayout]}>3</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.textLayout]}>4</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.textLayout]}>5</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.textLayout]}>6</Text>
          </View>
        </View>
        <View style={styles.paginationitemIconLayout}>
          <View style={[styles.buttonbase, styles.buttonbaseLayout]}>
            <Text style={[styles.label4, styles.textLayout]}>7</Text>
          </View>
        </View>
        <Image
          style={styles.paginationitemIconLayout}
          resizeMode="cover"
          source={require("../assets/paginationitem2.png")}
        />
        <Image
          style={[styles.paginationitemIcon3, styles.paginationitemIconLayout]}
          resizeMode="cover"
          source={require("../assets/paginationitem3.png")}
        />
      </View>
      <View style={styles.barBottomChat}>
        <Image
          style={[styles.barBottomItemActive, styles.barItemLayout]}
          resizeMode="cover"
          source={require("../assets/bar--bottom--item--active.png")}
        />
        <Pressable
          style={[styles.barBottomItemInactiv, styles.barItemLayout]}
          onPress={() => navigation.navigate("HomepageScrollingOverview")}
        >
          <Image
            style={[styles.iconHome, styles.marksPosition]}
            resizeMode="cover"
            source={require("../assets/icon--home.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.barBottomItemInactiv1, styles.barItemLayout]}
          onPress={() => navigation.navigate("AidMainPage")}
        >
          <Image
            style={[styles.icon3, styles.barItemLayout1]}
            resizeMode="cover"
            source={require("../assets/bar--bottom--item--inactive.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.barBottomItemInactiv2, styles.barItemLayout]}
          onPress={() => navigation.navigate("Settings1")}
        >
          <Image
            style={[styles.icon3, styles.barItemLayout1]}
            resizeMode="cover"
            source={require("../assets/bar--bottom--item--inactive1.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.riremoteControlLineIcon}
        resizeMode="cover"
        source={require("../assets/riremotecontrolline1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blurLayout: {
    width: 375,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  sliderLayout: {
    height: 4,
    position: "absolute",
  },
  opLayout: {
    width: 18,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  timeTypo: {
    color: Color.neutral1,
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
  },
  activeLayout: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  activeFlexBox: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  slidePosition: {
    opacity: 0.5,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  groupInnerPosition: {
    left: "0%",
    right: "1.21%",
    width: "98.79%",
    position: "absolute",
  },
  groupItemPosition: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
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
  underlineLayout: {
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
  },
  formhelpertextSpaceBlock: {
    paddingTop: Padding.p_10xs,
    alignSelf: "stretch",
    display: "none",
  },
  labelLayout: {
    lineHeight: 12,
    fontSize: FontSize.inputHelper_size,
    letterSpacing: 0,
  },
  switchLayout: {
    height: 38,
    width: 58,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorSet1Cloud20,
    top: "7.01%",
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "600",
    fontSize: FontSize.inputHelper_size,
    position: "absolute",
  },
  atebyTypo1: {
    color: Color.colorSet1Cloud10,
    top: "11.59%",
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chip1Typo: {
    fontSize: FontSize.chipLabel_size,
    textAlign: "left",
  },
  labelTypo: {
    fontFamily: FontFamily.sansBodyBodyCopy,
    textAlign: "left",
  },
  docteurTypo: {
    lineHeight: 21,
    color: Color.commonWhiteStatesMain,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
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
    left: 0,
    right: 0,
    position: "absolute",
  },
  slidertrackPosition: {
    marginTop: -1,
    height: 2,
    width: 48,
    borderRadius: Border.br_81xl,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  marksPosition: {
    top: 20,
    position: "absolute",
  },
  recLayout: {
    width: 2,
    height: 2,
    borderRadius: Border.br_81xl,
  },
  border1Layout: {
    height: 12,
    width: 12,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 20,
    fontFamily: FontFamily.inputHelper,
    letterSpacing: 0,
  },
  atebyTypo: {
    fontSize: FontSize.size_4xs,
    top: "45.24%",
    color: Color.colorSet1Cloud10,
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  underlineBorder: {
    borderColor: Color.colorGray_300,
    position: "absolute",
  },
  selectPosition: {
    top: 140,
    height: 12,
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
    fontFamily: FontFamily.sansBodyBodyCopy,
    fontSize: FontSize.inputHelper_size,
    letterSpacing: 0,
    textAlign: "left",
    lineHeight: 24,
    flex: 1,
  },
  minLayout: {
    height: 0,
    width: 24,
  },
  autocompletecloseIconPosition: {
    marginTop: -10,
    height: 20,
    width: 20,
    display: "none",
    top: "50%",
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
  barItemLayout: {
    width: 82,
    height: 64,
    top: 0,
    position: "absolute",
  },
  barItemLayout1: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.neutral1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    width: 1,
    opacity: 0.4,
    right: 0,
    top: 4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    height: 7,
    backgroundColor: Color.neutral1,
  },
  battery: {
    top: 17,
    right: 14,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -11.5,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    left: 0,
    top: "50%",
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 12,
    left: 21,
    height: 21,
  },
  barStatus: {
    marginLeft: -187.5,
    height: 44,
    left: "50%",
    top: 0,
  },
  dashboard: {
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    textAlign: "left",
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
    right: 0,
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  navigation: {
    top: 60,
    left: 24,
    right: 24,
    height: 44,
    position: "absolute",
  },
  blur: {
    top: 668,
    height: 144,
    backgroundColor: "transparent",
    left: 0,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.neutral1,
    left: "50%",
    position: "absolute",
  },
  barHomeIndicator: {
    height: 40,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  irrigation: {
    color: Color.universalBlack,
    textAlign: "right",
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
  },
  active: {
    top: 138,
    left: 30,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorSet1Cloud20,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  sunny11: {
    left: 64,
    top: 7,
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
    width: 52,
    height: 51,
    left: 0,
    top: 0,
    position: "absolute",
  },
  soil1Icon: {
    top: 6,
    left: 115,
  },
  pesticide1Icon: {
    left: 166,
    top: 4,
  },
  sunny11Parent: {
    top: 642,
    left: 85,
    width: 206,
    height: 51,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorSet1Cloud90,
    position: "absolute",
  },
  rectangleWrapper: {
    bottom: "0%",
    left: "0%",
    right: "1.21%",
    top: "0%",
    width: "98.79%",
    height: "100%",
  },
  icon1: {
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
    fontFamily: FontFamily.inputHelper,
    letterSpacing: 0,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
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
    zIndex: 1,
    borderColor: Color.colorGray_300,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
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
    fontFamily: FontFamily.inputHelper,
    alignSelf: "stretch",
    textAlign: "left",
  },
  formhelpertext: {
    paddingHorizontal: Padding.p_sm,
  },
  textfield: {
    top: 349,
    left: 203,
    width: 104,
    height: 27,
    position: "absolute",
  },
  slide1: {
    width: 34,
    height: 14,
    backgroundColor: Color.colorSet1Cloud20,
    borderRadius: Border.br_81xl,
  },
  slide: {
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  knobIcon: {
    height: 20,
    width: 20,
  },
  knob: {
    padding: Padding.p_4xs,
    left: 20,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  switch: {
    top: 195,
    left: 267,
  },
  switch1: {
    top: 319,
    left: 265,
  },
  text: {
    left: "6.34%",
    textAlign: "left",
  },
  atebyDiaoureGallet: {
    left: "6.04%",
    textAlign: "left",
  },
  text1: {
    left: "71.3%",
    textAlign: "right",
  },
  atebyDiaoureGallet1: {
    left: "60.73%",
    textAlign: "right",
  },
  groupInner: {
    height: "11.05%",
    top: "23.45%",
    bottom: "65.5%",
    backgroundColor: Color.statusSuccessGreenBG,
    left: "0%",
    right: "1.21%",
    width: "98.79%",
  },
  uicolorsmainIcon: {
    borderRadius: Border.br_mid,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  remboursser: {
    left: "11.39%",
    fontFamily: FontFamily.titilliumWeb,
    color: Color.colorSet1Cloud90,
    fontWeight: "600",
    top: "0%",
    fontSize: FontSize.chipLabel_size,
    position: "absolute",
  },
  uicolorsmainParent: {
    height: "6.2%",
    width: "23.87%",
    top: "25.88%",
    right: "3.02%",
    bottom: "67.92%",
    left: "73.11%",
    position: "absolute",
  },
  docteur: {
    top: "26.42%",
    lineHeight: 24,
    color: Color.colorSet1Cloud100,
    left: "6.04%",
    fontSize: FontSize.inputValue_size,
    position: "absolute",
  },
  docteur1: {
    top: "66.58%",
    color: Color.commonWhiteStatesMain,
    left: "5.44%",
    lineHeight: 21,
  },
  docteur2: {
    top: "55.8%",
    color: Color.commonWhiteStatesMain,
    left: "5.44%",
    lineHeight: 21,
  },
  docteur3: {
    top: "77.36%",
    color: Color.commonWhiteStatesMain,
    left: "5.44%",
    lineHeight: 21,
  },
  templabel: {
    opacity: 0,
    color: Color.textSecondary,
    fontFamily: FontFamily.inputHelper,
    textAlign: "left",
  },
  adornStartContainer1: {
    height: 1,
    width: 32,
    paddingRight: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  label1: {
    color: Color.commonWhiteStatesMain,
    fontSize: FontSize.typographyBody2_size,
    fontWeight: "600",
    letterSpacing: 0,
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
    height: 1,
    borderStyle: "solid",
    display: "none",
  },
  input1: {
    alignSelf: "stretch",
  },
  textfield1: {
    top: 267,
    left: 260,
    width: 71,
    position: "absolute",
  },
  sliderrail: {
    backgroundColor: Color.primaryMain,
  },
  slidertrack: {
    backgroundColor: Color.primaryMain,
  },
  rec: {
    backgroundColor: Color.primaryMain,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rec1: {
    opacity: 0.8,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  slidermark: {
    overflow: "hidden",
  },
  marks: {
    justifyContent: "space-between",
    flexDirection: "row",
    left: 0,
    right: 0,
  },
  sliderthumbIcon: {
    marginTop: -6,
    left: 38,
    top: "50%",
  },
  text2: {
    lineHeight: 22,
    color: Color.commonWhiteStatesMain,
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.inputHelper,
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
    height: 6,
    width: 12,
  },
  sliderlabel: {
    marginTop: -45,
    left: 23,
    display: "none",
    alignItems: "center",
    top: "50%",
    position: "absolute",
  },
  slider1: {
    height: 42,
    alignSelf: "stretch",
    display: "none",
  },
  text3: {
    fontSize: FontSize.typographyBody2_size,
    color: Color.textSecondary,
    textAlign: "center",
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
    top: 291,
    left: 201,
    width: 74,
  },
  sliderrail1: {
    backgroundColor: Color.colorSet1Cloud20,
  },
  slidertrack1: {
    backgroundColor: Color.colorSet1Cloud20,
  },
  rec11: {
    backgroundColor: Color.colorSet1Cloud20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  atebyDiaoureGallet2: {
    left: "-2.22%",
  },
  atebyDiaoureGallet3: {
    left: "95.56%",
  },
  slider2: {
    top: 278,
    left: 226,
    width: 90,
    height: 42,
    position: "absolute",
  },
  rectangleView: {
    top: 282,
    left: 252,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    width: 69,
    height: 27,
    borderWidth: 1,
    borderStyle: "solid",
  },
  docteur4: {
    top: "88.14%",
    color: Color.commonWhiteStatesMain,
    left: "6.04%",
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
    fontSize: FontSize.avatarInitialsSm_size,
    lineHeight: 10,
    display: "flex",
    maxWidth: 18,
    justifyContent: "center",
    color: Color.commonWhiteStatesMain,
    fontFamily: FontFamily.inputHelper,
    zIndex: 0,
    alignItems: "center",
    textAlign: "center",
    top: "50%",
    left: "50%",
  },
  minLayout1: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: 18,
    zIndex: 1,
    width: 18,
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
  border1: {
    right: -6,
    bottom: -6,
    zIndex: 2,
    display: "none",
    backgroundColor: Color.commonWhiteStatesMain,
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
    fontFamily: FontFamily.inputHelper,
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
    fontWeight: "600",
  },
  placeholder: {
    color: Color.textDisabled,
    zIndex: 4,
    fontFamily: FontFamily.inputHelper,
    letterSpacing: 0,
    display: "none",
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    flex: 1,
  },
  minWidth6: {
    zIndex: 5,
  },
  arrowdropdownfilledIcon: {
    marginTop: -12,
    zIndex: 6,
    height: 24,
    top: "50%",
    right: 0,
    width: 24,
    position: "absolute",
    overflow: "hidden",
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
    fontFamily: FontFamily.inputHelper,
    textAlign: "left",
  },
  labelContainer: {
    left: 12,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    height: 2,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  input3: {
    borderRadius: StyleVariable.borderRadius,
    borderColor: Color.componentsInputOutlinedEnabledBorder,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    alignSelf: "stretch",
    display: "none",
    borderWidth: 1,
    borderStyle: "solid",
  },
  helperText2: {
    fontSize: FontSize.inputHelper_size,
    lineHeight: 20,
    color: Color.textSecondary,
    alignSelf: "stretch",
    textAlign: "left",
  },
  select: {
    left: 18,
    width: 162,
  },
  label3: {
    color: Color.commonWhiteStatesMain,
    fontWeight: "600",
    lineHeight: 12,
    fontSize: FontSize.inputHelper_size,
    letterSpacing: 0,
  },
  value1: {
    color: Color.colorGray_200,
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
    borderColor: Color.colorGray_500,
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
    display: "none",
  },
  select1: {
    width: 159,
    left: 20,
  },
  groupParent: {
    height: "45.69%",
    width: "88.27%",
    top: "24.63%",
    right: "4.8%",
    bottom: "29.68%",
    left: "6.93%",
    position: "absolute",
  },
  paginationitemIcon: {
    display: "none",
  },
  label4: {
    top: "11.54%",
    left: "34.62%",
    color: Color.textPrimary,
    fontSize: FontSize.typographyBody2_size,
    textAlign: "center",
    position: "absolute",
  },
  buttonbase: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonbase1: {
    backgroundColor: Color.actionSelected,
    width: 26,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  paginationitemIcon3: {
    display: "none",
  },
  pagination: {
    top: 590,
    left: 41,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  barBottomItemActive: {
    left: 82,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  iconHome: {
    left: 29,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  barBottomItemInactiv: {
    borderRadius: Border.br_base,
    overflow: "hidden",
    left: 0,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  barBottomItemInactiv1: {
    left: 164,
  },
  barBottomItemInactiv2: {
    left: 246,
  },
  barBottomChat: {
    top: 715,
    left: 22,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    width: 327,
    height: 64,
    borderRadius: Border.br_base,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.commonWhiteStatesMain,
  },
  vectorIcon: {
    height: "2.22%",
    width: "4.8%",
    top: "90.76%",
    right: "36.8%",
    bottom: "7.02%",
    left: "58.4%",
  },
  riremoteControlLineIcon: {
    top: 734,
    left: 133,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  controlIrrigationPlot2Colu: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.commonWhiteStatesMain,
  },
});

export default ControlIrrigationPlot2Colu1;
