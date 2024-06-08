import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, Padding, FontSize } from "../GlobalStyles";

const AIChatbot = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aiChatbot, styles.iconLayout1]}>
      <View style={[styles.barStatus, styles.borderPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
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
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barHomeIndicator, styles.capIconPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Text style={[styles.agrismartAi, styles.jasonTypo]}>AgriSmart Ai</Text>
      <View style={[styles.aiChatbotChild, styles.chatbotLayout]} />
      <View style={[styles.aiChatbotItem, styles.chatbotLayout]} />
      <View
        style={[styles.writeAMessageParent, styles.buttonLargeIconPosition]}
      >
        <Text style={[styles.writeAMessage, styles.jasonTypo]}>
          Write a message
        </Text>
        <Image
          style={[styles.iconCamera, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--camera.png")}
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
        resizeMode="cover"
        source={require("../assets/button--large--icon1.png")}
      />
      <View style={styles.navigation}>
        <Text style={[styles.search, styles.timeTypo]}>Chatbot</Text>
        <Pressable
          style={[styles.iconBackward, styles.iconLayout]}
          onPress={() => navigation.navigate("AidMainPage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon--backward.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconCancel, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--cancel.png")}
        />
      </View>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.neutral1,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    color: Color.neutral1,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  jasonTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
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
    top: 708,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  chatleftPosition: {
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.neutral3,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderTopLeftRadius: Border.br_base,
    left: 24,
    position: "absolute",
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
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.neutral1,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    top: 2,
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
    lineHeight: 24,
    fontSize: FontSize.inputValue_size,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    left: 0,
    width: 54,
  },
  timeStyle: {
    left: 21,
    height: 21,
    width: 54,
    top: 12,
    position: "absolute",
  },
  barStatus: {
    marginLeft: -187.5,
    width: 375,
    height: 44,
    left: "50%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 17,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
  },
  barHomeIndicator: {
    bottom: 0,
    height: 40,
    left: 0,
  },
  agrismartAi: {
    top: 108,
    fontWeight: "700",
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
    position: "absolute",
    left: 121,
    color: Color.neutral1,
    lineHeight: 24,
  },
  aiChatbotChild: {
    top: 184,
  },
  aiChatbotItem: {
    top: 690,
  },
  writeAMessage: {
    top: 14,
    left: 16,
    lineHeight: 20,
    color: "#9592a1",
    fontSize: FontSize.typographyBody2_size,
    textAlign: "left",
    position: "absolute",
  },
  iconCamera: {
    left: 223,
    top: 12,
    height: 24,
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
    top: 708,
    backgroundColor: Color.commonWhiteStatesMain,
  },
  hiJasonHow: {
    color: Color.neutral1,
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.inputValue_size,
  },
  chatleft: {
    top: 210,
  },
  chatleft1: {
    top: 354,
  },
  sureJustClickOntoThisMes: {
    color: Color.neutral1,
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.inputValue_size,
  },
  chatleft2: {
    top: 498,
  },
  hiJasonHow2: {
    color: Color.commonWhiteStatesMain,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.inputValue_size,
    lineHeight: 24,
  },
  chatright: {
    top: 282,
    left: 121,
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
    left: "50%",
  },
  icon: {
    height: "100%",
  },
  iconBackward: {
    left: 0,
    top: 2,
  },
  iconCancel: {
    marginTop: -12,
    marginLeft: 139.5,
    display: "none",
    top: "50%",
    height: 24,
    left: "50%",
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
  aiChatbot: {
    flex: 1,
    height: 812,
    backgroundColor: Color.commonWhiteStatesMain,
    width: "100%",
  },
});

export default AIChatbot;
