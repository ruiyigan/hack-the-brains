import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.settings2}>
      <View style={styles.frame}>
        <View style={styles.navigation}>
          <Text style={styles.search}>Edit profile</Text>
          <Pressable
            style={styles.iconBackward}
            onPress={() => navigation.navigate("Settings1")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon--backward.png")}
            />
          </Pressable>
          <Image
            style={styles.iconCancel}
            contentFit="cover"
            source={require("../assets/icon--cancel.png")}
          />
        </View>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Text style={styles.tapToUpload}>Tap to upload new image</Text>
          <Text style={styles.name}>Name</Text>
        </View>
        <View style={styles.frame3}>
          <View style={styles.textFieldPrimaryText}>
            <Text style={styles.text}>HackerBrain1</Text>
            <Image
              style={styles.iconUser}
              contentFit="cover"
              source={require("../assets/icon--user.png")}
            />
          </View>
          <Text style={styles.email}>Email</Text>
        </View>
        <View style={styles.frame3}>
          <View style={styles.textFieldPrimaryText1}>
            <Text style={styles.text1}>
              <Text style={styles.hackerbrain1}>HackerBrain1</Text>
              <Text style={styles.gmailcom}>@gmail.com</Text>
            </Text>
            <Image
              style={styles.iconUser}
              contentFit="cover"
              source={require("../assets/icon--mail.png")}
            />
          </View>
          <Text style={styles.email}>Phone number</Text>
        </View>
        <View style={styles.frame3}>
          <View style={styles.textFieldPrimaryText2}>
            <Text style={styles.text}>+65 9988 7766</Text>
            <Image
              style={styles.iconUser}
              contentFit="cover"
              source={require("../assets/icon--phone.png")}
            />
          </View>
          <Text style={styles.password}>Password</Text>
        </View>
        <View style={styles.frame6}>
          <Pressable
            style={styles.changePassword}
            onPress={() => navigation.navigate("ForgotPasswordConcealed")}
          >
            <Text style={styles.changePassword1}>Change password</Text>
          </Pressable>
          <Pressable
            style={styles.buttonPrimaryTextAble}
            onPress={() => navigation.navigate("SettingsEditedSuccessfully")}
          >
            <View style={styles.text3}>
              <Text style={styles.button}>Save changes</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    position: "absolute",
    marginTop: -14,
    marginLeft: -46.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textColor,
    textAlign: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconBackward: {
    position: "absolute",
    left: 0,
    top: 2,
    width: 24,
    height: 24,
  },
  iconCancel: {
    position: "absolute",
    marginTop: -12,
    marginLeft: 139.5,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
    display: "none",
  },
  navigation: {
    position: "relative",
    width: 327,
    height: 28,
  },
  frameIcon: {
    position: "relative",
    width: 209,
    height: 94,
    overflow: "hidden",
    marginTop: 5,
  },
  frame: {
    width: 327,
    height: 127,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  tapToUpload: {
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.secondary,
    textAlign: "center",
    height: 20,
    marginLeft: 76,
  },
  name: {
    position: "relative",
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textColor,
    textAlign: "left",
    marginTop: 32,
  },
  frame2: {
    width: 257,
    height: 76,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    position: "absolute",
    top: 12,
    left: 64,
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textColor,
    textAlign: "left",
  },
  iconUser: {
    position: "absolute",
    top: 12,
    left: 24,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    position: "relative",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    backgroundColor: Color.universalWhite,
    width: 327,
    height: 48,
    overflow: "hidden",
  },
  email: {
    position: "relative",
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textColor,
    textAlign: "left",
    marginTop: 24,
  },
  frame3: {
    width: 327,
    height: 96,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 16,
  },
  hackerbrain1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  gmailcom: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  text1: {
    position: "absolute",
    top: 12,
    left: 64,
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    color: Color.textColor,
    textAlign: "left",
  },
  textFieldPrimaryText1: {
    position: "relative",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    backgroundColor: Color.universalWhite,
    width: 327,
    height: 48,
    overflow: "hidden",
  },
  textFieldPrimaryText2: {
    position: "relative",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    backgroundColor: Color.universalWhite,
    width: 327,
    height: 48,
    overflow: "hidden",
  },
  password: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.textColor,
    textAlign: "left",
    height: 24,
    marginLeft: 131,
    marginTop: 24,
  },
  changePassword1: {
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.blue,
    textAlign: "left",
  },
  changePassword: {
    height: 20,
    marginLeft: 106,
  },
  button: {
    position: "relative",
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.universalWhite,
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -58,
    top: "50%",
    left: "50%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  buttonPrimaryTextAble: {
    position: "relative",
    borderRadius: Border.br_base,
    backgroundColor: "#1fefa4",
    width: 327,
    height: 48,
    overflow: "hidden",
    marginTop: 17,
  },
  frame6: {
    width: 327,
    height: 85,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 16,
  },
  frame1: {
    width: 327,
    height: 513,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 13,
  },
  settings2: {
    position: "relative",
    backgroundColor: Color.universalWhite,
    flex: 1,
    width: "100%",
    height: 851,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_5xl,
    paddingTop: 60,
    paddingRight: 29,
    paddingBottom: 20,
  },
});

export default Settings;
