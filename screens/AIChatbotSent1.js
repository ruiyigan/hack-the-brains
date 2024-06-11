import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const AIChatbotSent1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aiChatbotSent2, styles.iconLayout1]}>
      <Text style={[styles.agrismartAi, styles.textFlexBox]}>AgriSmart Ai</Text>
      <View style={[styles.aiChatbotSent2Child, styles.chatbotLayout]} />
      <View style={[styles.aiChatbotSent2Item, styles.chatbotLayout]} />
      <View
        style={[styles.writeAMessageParent, styles.buttonLargeIconPosition]}
      >
        <Text style={[styles.writeAMessage, styles.textFlexBox]}>
          Write a message
        </Text>
        <Image
          style={[styles.materialSymbolsLightsendOuIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolslightsendoutline1.png")}
        />
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
      <View style={[styles.chatleft2, styles.chatleftPosition]}>
        <Pressable
          onPress={() => navigation.navigate("HomepageScrollingOverview")}
        >
          <Text
            style={[styles.sureJustClickOntoThisMes, styles.jasonTypo]}
          >{`Sure, just click onto this message and 
it will direct you there!`}</Text>
        </Pressable>
      </View>
      <View style={[styles.chatright, styles.chatrightPosition]}>
        <Text style={[styles.hiJasonHow2, styles.jasonTypo]}>
          Able to check light status?
        </Text>
      </View>
      <View style={[styles.chatright1, styles.chatrightPosition]}>
        <Text style={[styles.hiJasonHow2, styles.jasonTypo]}>
          Cool! Able to bring me there?
        </Text>
      </View>
      <Image
        style={[styles.buttonLargeIcon, styles.buttonLargeIconPosition]}
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
      <View style={styles.statusBar}>
        <View style={styles.icons}>
          <View style={styles.top}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("../assets/signal4.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>9:30</Text>
          </View>
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
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  chatbotLayout: {
    height: 2,
    borderRadius: Border.br_9xs,
    width: 327,
    left: 24,
    position: "absolute",
  },
  buttonLargeIconPosition: {
    height: 48,
    top: 668,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  chatleftPosition: {
    padding: Padding.p_base,
    backgroundColor: Color.neutral3,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  jasonTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  chatrightPosition: {
    backgroundColor: Color.blue,
    borderBottomLeftRadius: Border.br_base,
    borderBottomRightRadius: Border.br_9xs,
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
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textColor,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.typographyBody2_size,
    left: 121,
  },
  aiChatbotSent2Child: {
    top: 184,
  },
  aiChatbotSent2Item: {
    top: 650,
  },
  writeAMessage: {
    top: 14,
    left: 16,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    color: "#9592a1",
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
  },
  materialSymbolsLightsendOuIcon: {
    top: 10,
    left: 239,
    position: "absolute",
    overflow: "hidden",
  },
  writeAMessageParent: {
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
    left: 24,
    top: 668,
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
  },
  chatleft1: {
    top: 354,
  },
  sureJustClickOntoThisMes: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 24,
    color: Color.textColor,
  },
  chatleft2: {
    top: 498,
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
    left: 121,
    backgroundColor: Color.blue,
    borderBottomLeftRadius: Border.br_base,
    borderBottomRightRadius: Border.br_9xs,
  },
  chatright1: {
    top: 426,
    left: 86,
  },
  buttonLargeIcon: {
    right: 24,
    borderRadius: Border.br_xs,
    width: 48,
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
  icon: {
    height: "100%",
    overflow: "hidden",
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
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: "5.88%",
    left: "0%",
    fontSize: FontSize.sansBodyBodySmallSemiBold_size,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_200,
  },
  top: {
    width: 340,
    height: 17,
  },
  icons: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  statusBar: {
    top: 1,
    left: -15,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    position: "absolute",
    overflow: "hidden",
  },
  aiChatbotSent2: {
    flex: 1,
    height: 733,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
    width: "100%",
  },
});

export default AIChatbotSent1;
