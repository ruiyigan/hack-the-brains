import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const AppLogo = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.appLogo}
      onPress={() => navigation.navigate("OnBoarding3")}
    >
      <Image
        style={styles.hackTheBrainsLogo1}
        contentFit="cover"
        source={require("../assets/hack-the-brains-logo-1.png")}
      />
      <Text style={[styles.agrismart, styles.agrismartFlexBox]}>AgriSmart</Text>
      <Text style={[styles.tapAnywhereTo, styles.agrismartFlexBox]}>
        Tap anywhere to begin
      </Text>
      <View style={styles.statusBar}>
        <View style={styles.icons}>
          <View style={styles.top}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("../assets/signal1.png")}
            />
            <Text style={styles.text}>9:30</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  agrismartFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  hackTheBrainsLogo1: {
    top: 163,
    left: 65,
    width: 251,
    height: 267,
    position: "absolute",
  },
  agrismart: {
    top: 509,
    left: 80,
    fontSize: 36,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.universalBlack,
    width: 223,
    height: 41,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  tapAnywhereTo: {
    top: 656,
    left: 107,
    fontSize: FontSize.size_2xs,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.neutral2,
    width: 165,
    height: 21,
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
    textAlign: "left",
    position: "absolute",
  },
  top: {
    width: 340,
    height: 17,
  },
  icons: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  statusBar: {
    top: 0,
    left: -18,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    position: "absolute",
    overflow: "hidden",
  },
  appLogo: {
    backgroundColor: Color.universalWhite,
    flex: 1,
    width: "100%",
    height: 733,
    overflow: "hidden",
  },
});

export default AppLogo;
