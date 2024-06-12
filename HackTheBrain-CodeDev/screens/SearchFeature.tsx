import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SearchFeature = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.searchFeature}>
      <Pressable
        style={[styles.chatbotSelection, styles.socialForumBoxLayout]}
        onPress={() => navigation.navigate("AIChatbot")}
      >
        <View style={[styles.cardMemberActive, styles.barSearchTypingBorder]}>
          <Text style={[styles.tienTom, styles.uiUxPosition]}>Chatbot</Text>
          <Text style={[styles.uiUx, styles.uiUxTypo]} />
          <Image
            style={[styles.iconCheck, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon--check.png")}
          />
          <Image
            style={styles.avatarOnline}
            contentFit="cover"
            source={require("../assets/avatar--online.png")}
          />
        </View>
        <Image
          style={[styles.tablermessageChatbotIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/tablermessagechatbot.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.socialForumBox, styles.socialForumBoxLayout]}
        onPress={() => navigation.navigate("SocialForum")}
      >
        <View style={[styles.cardMemberActive, styles.barSearchTypingBorder]}>
          <Text style={[styles.tienTom, styles.uiUxPosition]}>
            Social forum
          </Text>
          <Text style={[styles.uiUx, styles.uiUxTypo]} />
          <Image
            style={[styles.iconCheck, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon--check.png")}
          />
          <Image
            style={styles.avatarOnline}
            contentFit="cover"
            source={require("../assets/avatar--online1.png")}
          />
        </View>
        <Image
          style={[styles.socialForumIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/social-forum-icon.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.editProfileSettings, styles.socialForumBoxLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={[styles.cardMemberActive, styles.barSearchTypingBorder]}>
          <Text style={[styles.tienTom, styles.uiUxPosition]}>
            Edit Profile
          </Text>
          <Text style={[styles.uiUx, styles.uiUxTypo]} />
          <Image
            style={[styles.iconCheck, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon--check.png")}
          />
          <Image
            style={styles.avatarOnline}
            contentFit="cover"
            source={require("../assets/avatar--online.png")}
          />
        </View>
        <Image
          style={[styles.iconSettings, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon--settings4.png")}
        />
      </Pressable>
      <View style={[styles.barSearchTyping, styles.iconCheckPosition]}>
        <View style={styles.text}>
          <Text style={[styles.search, styles.searchTypo]}>Search</Text>
          <View style={styles.indicator} />
        </View>
      </View>
      <Text style={[styles.recent3, styles.recent3Typo]}>Recent (3)</Text>
      <View style={styles.navigation}>
        <Text style={[styles.search1, styles.search1Position]}>Add member</Text>
        <Image
          style={[styles.iconBackward, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon--backward.png")}
        />
        <Image
          style={[styles.iconCancel, styles.search1Position]}
          contentFit="cover"
          source={require("../assets/icon--cancel.png")}
        />
      </View>
      <Pressable
        style={styles.vuesaxlineararrowLeft}
        onPress={() => navigation.navigate("HomepageScrollingOverview")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  socialForumBoxLayout: {
    height: 80,
    width: 327,
  },
  barSearchTypingBorder: {
    borderWidth: 1,
    borderColor: Color.blue,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  uiUxPosition: {
    textAlign: "left",
    left: 84,
    position: "absolute",
  },
  uiUxTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconCheckPosition: {
    right: 24,
    position: "absolute",
  },
  searchTypo: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    lineHeight: 24,
  },
  recent3Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.textColor,
  },
  search1Position: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tienTom: {
    fontSize: FontSize.typographyBody2_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textColor,
    lineHeight: 24,
    textAlign: "left",
    left: 84,
    top: 16,
  },
  uiUx: {
    top: 44,
    fontSize: FontSize.sansNoteHelper_size,
    lineHeight: 20,
    color: Color.neutral2,
    textAlign: "left",
    left: 84,
    position: "absolute",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconCheck: {
    display: "none",
    right: 24,
    position: "absolute",
    top: "50%",
    width: 24,
    marginTop: -12,
  },
  avatarOnline: {
    top: 18,
    width: 44,
    height: 44,
    display: "none",
    left: 24,
    position: "absolute",
  },
  cardMemberActive: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 80,
    width: 327,
    backgroundColor: Color.universalWhite,
    borderColor: Color.blue,
    borderStyle: "solid",
    borderRadius: Border.br_base,
  },
  tablermessageChatbotIcon: {
    left: 45,
    top: 16,
    width: 24,
    position: "absolute",
  },
  chatbotSelection: {
    top: 416,
    left: 24,
    position: "absolute",
  },
  socialForumIcon: {
    height: "24.87%",
    width: "6.73%",
    top: "19.25%",
    right: "79.76%",
    bottom: "55.88%",
    left: "13.52%",
    position: "absolute",
  },
  socialForumBox: {
    top: 320,
    left: 24,
    position: "absolute",
  },
  iconSettings: {
    left: 41,
    top: 16,
    width: 24,
    position: "absolute",
  },
  editProfileSettings: {
    top: 224,
    left: 24,
    position: "absolute",
  },
  search: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.textColor,
  },
  indicator: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.blue,
    width: 2,
    height: 20,
    marginLeft: 4,
  },
  text: {
    top: 12,
    flexDirection: "row",
    alignItems: "center",
    left: 24,
    position: "absolute",
  },
  barSearchTyping: {
    top: 112,
    height: 48,
    borderWidth: 1,
    borderColor: Color.blue,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    overflow: "hidden",
    left: 24,
  },
  recent3: {
    top: 184,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "left",
    lineHeight: 24,
    left: 24,
    position: "absolute",
  },
  search1: {
    marginTop: -14,
    marginLeft: -60.5,
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.textColor,
  },
  iconBackward: {
    top: 2,
    left: 0,
    position: "absolute",
  },
  iconCancel: {
    marginLeft: 139.5,
    display: "none",
    height: 24,
    width: 24,
    overflow: "hidden",
    marginTop: -12,
    left: "50%",
  },
  navigation: {
    top: 60,
    height: 28,
    display: "none",
    width: 327,
    left: 24,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  vuesaxlineararrowLeft: {
    left: "7.74%",
    top: "7.88%",
    right: "84.81%",
    bottom: "88.67%",
    width: "7.46%",
    height: "3.44%",
    position: "absolute",
  },
  searchFeature: {
    flex: 1,
    height: 851,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.universalWhite,
  },
});

export default SearchFeature;
