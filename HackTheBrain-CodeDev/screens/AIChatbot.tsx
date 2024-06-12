import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AIChatbot = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.aiChatbot, styles.iconLayout1]}>
      <View style={[styles.frame, styles.frameLayout2]}>
        <View style={[styles.frame1, styles.frameLayout2]}>
          <Text style={styles.agrismartAi}>AgriSmart Ai</Text>
          <View style={[styles.navigation, styles.navigationPosition]}>
            <Text style={styles.search}>Chatbot</Text>
            <Pressable
              style={[styles.iconBackward, styles.iconLayout]}
              onPress={() => navigation.navigate("AidMainPage")}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/icon--backward.png")}
              />
            </Pressable>
            <Image
              style={[styles.iconCancel, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--cancel.png")}
            />
          </View>
          <Image
            style={styles.image2Icon}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </View>
        <View style={[styles.frame2, styles.frameLayout1]}>
          <View style={[styles.frameChild, styles.frameLayout1]} />
        </View>
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <View style={styles.frame4}>
          <View style={styles.chatleft}>
            <Text style={[styles.hiJasonHow, styles.hiJasonHowTypo]}>
              Hi HackerBrain1, how may i help you?
            </Text>
          </View>
        </View>
        <View style={[styles.frame5, styles.frameLayout]}>
          <View style={[styles.frame6, styles.frameLayout]}>
            <View
              style={[styles.ableToCheckLightStatusParent, styles.frameLayout]}
            >
              <Text style={[styles.ableToCheck, styles.hiJasonHowTypo]}>
                Able to check light status?
              </Text>
              <Pressable
                style={[styles.materialSymbolsLightsendOu, styles.iconLayout]}
                onPress={() => navigation.navigate("AIChatbotSent1")}
              >
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/materialsymbolslightsendoutline1.png")}
                />
              </Pressable>
            </View>
            <Image
              style={[styles.buttonLargeIcon, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/button--large--icon.png")}
            />
          </View>
        </View>
        <View style={[styles.frame7, styles.frameLayout1]}>
          <View style={[styles.frameChild, styles.frameLayout1]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  frameLayout2: {
    width: 343,
    overflow: "hidden",
  },
  navigationPosition: {
    width: 327,
    left: 16,
    top: 0,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  frameLayout1: {
    height: 2,
    position: "absolute",
  },
  framePosition: {
    left: 8,
    position: "absolute",
  },
  hiJasonHowTypo: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 24,
  },
  frameLayout: {
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  agrismartAi: {
    top: 48,
    left: 113,
    fontSize: FontSize.typographyBody2_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    lineHeight: 24,
    color: Color.textColor,
    position: "absolute",
  },
  search: {
    marginTop: -14,
    marginLeft: -36.5,
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    top: "50%",
    color: Color.textColor,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  iconBackward: {
    top: 2,
    left: 0,
  },
  iconCancel: {
    marginTop: -12,
    marginLeft: 139.5,
    display: "none",
    left: "50%",
    top: "50%",
    width: 24,
    overflow: "hidden",
  },
  navigation: {
    height: 28,
    position: "absolute",
  },
  image2Icon: {
    top: 28,
    width: 100,
    height: 74,
    left: 0,
    position: "absolute",
  },
  frame1: {
    height: 102,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_9xs,
    width: 327,
    left: 16,
    top: 0,
  },
  frame2: {
    top: 124,
    left: 0,
    width: 343,
    overflow: "hidden",
  },
  frame: {
    top: 60,
    height: 126,
    left: 8,
    position: "absolute",
  },
  hiJasonHow: {
    color: Color.textColor,
    fontSize: FontSize.sansBodyBodyCopy_size,
  },
  chatleft: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.neutral3,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
    left: 16,
    top: 0,
    position: "absolute",
  },
  frame4: {
    width: 345,
    height: 56,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  ableToCheck: {
    top: 14,
    color: Color.universalBlack,
    left: 16,
    position: "absolute",
  },
  materialSymbolsLightsendOu: {
    left: 239,
    top: 10,
  },
  ableToCheckLightStatusParent: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    width: 263,
    left: 0,
    top: 0,
    backgroundColor: Color.universalWhite,
  },
  buttonLargeIcon: {
    right: 0,
    borderRadius: Border.br_xs,
    width: 48,
    top: 0,
  },
  frame6: {
    width: 332,
    left: 16,
    top: 0,
  },
  frame5: {
    top: 578,
    width: 348,
    left: 0,
  },
  frame7: {
    top: 560,
    left: 0,
    width: 343,
    overflow: "hidden",
  },
  frame3: {
    top: 210,
    height: 641,
    width: 348,
    overflow: "hidden",
  },
  aiChatbot: {
    flex: 1,
    height: 851,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
});

export default AIChatbot;
