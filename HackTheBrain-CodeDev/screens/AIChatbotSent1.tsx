import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, Padding, FontSize, Color } from "../GlobalStyles";

const AIChatbotSent1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.aiChatbotSent1, styles.iconLayout1]}>
      <Text style={styles.agrismartAi}>AgriSmart Ai</Text>
      <View style={[styles.aiChatbotSent1Child, styles.chatbotLayout]} />
      <View style={[styles.aiChatbotSent1Item, styles.chatbotLayout]} />
      <View style={styles.coolAbleToBringMeThereParent}>
        <Text
          style={[styles.coolAbleTo, styles.jasonTypo]}
        >{`Cool! Able to bring me 
there?`}</Text>
        <Pressable
          style={[styles.materialSymbolsLightsendOu, styles.iconLayout]}
          onPress={() => navigation.navigate("AIChatbotSent")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/materialsymbolslightsendoutline.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.chatleft, styles.chatleftPosition]}>
        <Text style={[styles.hiJasonHow, styles.jasonTypo]}>
          Hi HackerBrain1, how may i help you?
        </Text>
      </View>
      <View style={[styles.chatleft1, styles.chatleftPosition]}>
        <Text style={[styles.hiJasonHow, styles.jasonTypo]}>
          Check initiating.... Light status is good
        </Text>
      </View>
      <View style={[styles.chatright, styles.chatleftPosition]}>
        <Text style={[styles.hiJasonHow2, styles.jasonTypo]}>
          Able to check light status?
        </Text>
      </View>
      <Image
        style={styles.buttonLargeIcon}
        contentFit="cover"
        source={require("../assets/button--large--icon.png")}
      />
      <View style={styles.navigation}>
        <Text style={[styles.search, styles.searchPosition]}>Chatbot</Text>
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
          style={[styles.iconCancel, styles.searchPosition]}
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
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  chatbotLayout: {
    height: 2,
    borderRadius: Border.br_9xs,
    width: 327,
    left: 24,
    position: "absolute",
  },
  jasonTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  chatleftPosition: {
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    position: "absolute",
  },
  searchPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  agrismartAi: {
    top: 108,
    fontSize: FontSize.typographyBody2_size,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    lineHeight: 24,
    left: 121,
    color: Color.textColor,
    position: "absolute",
  },
  aiChatbotSent1Child: {
    top: 184,
  },
  aiChatbotSent1Item: {
    top: 723,
  },
  coolAbleTo: {
    top: 14,
    left: 16,
    color: Color.universalBlack,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  materialSymbolsLightsendOu: {
    left: 239,
    top: 22,
    position: "absolute",
  },
  coolAbleToBringMeThereParent: {
    top: 741,
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
    height: 63,
    left: 24,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
  },
  hiJasonHow: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 24,
    color: Color.textColor,
  },
  chatleft: {
    top: 210,
    backgroundColor: Color.neutral3,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_base,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    left: 24,
  },
  chatleft1: {
    top: 354,
    backgroundColor: Color.neutral3,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_base,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    left: 24,
  },
  hiJasonHow2: {
    color: Color.universalWhite,
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 24,
  },
  chatright: {
    top: 282,
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_base,
    backgroundColor: Color.blue,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    left: 121,
  },
  buttonLargeIcon: {
    top: 756,
    right: 24,
    borderRadius: Border.br_xs,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    marginTop: -14,
    marginLeft: -36.5,
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.textColor,
  },
  iconBackward: {
    left: 0,
    top: 2,
    position: "absolute",
  },
  iconCancel: {
    marginTop: -12,
    marginLeft: 139.5,
    display: "none",
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  navigation: {
    top: 60,
    height: 28,
    width: 327,
    left: 24,
    position: "absolute",
  },
  image2Icon: {
    top: 88,
    left: 8,
    width: 100,
    height: 74,
    position: "absolute",
  },
  aiChatbotSent1: {
    flex: 1,
    height: 851,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
    width: "100%",
  },
});

export default AIChatbotSent1;
