import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Settings1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settings2, styles.iconLayout1]}>
      <Text style={[styles.tapToUpload, styles.searchTypo]}>
        Tap to upload new image
      </Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      <Text style={[styles.phoneNumber, styles.nameTypo]}>Phone number</Text>
      <Text style={[styles.password, styles.nameTypo]}>Password</Text>
      <View style={[styles.textFieldPrimaryText, styles.textLayout]}>
        <Text style={[styles.text, styles.textPosition]}>HackerBrain1</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--user.png")}
        />
      </View>
      <View style={[styles.textFieldPrimaryText1, styles.textLayout]}>
        <Text style={styles.textPosition}>
          <Text style={styles.hackerbrain1}>HackerBrain1</Text>
          <Text style={styles.textTypo}>@gmail.com</Text>
        </Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--mail.png")}
        />
      </View>
      <View style={[styles.textFieldPrimaryText2, styles.textLayout]}>
        <Text style={[styles.text, styles.textPosition]}>+65 9988 7766</Text>
        <Image
          style={[styles.iconUser, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--phone.png")}
        />
      </View>
      <Pressable
        style={styles.changePassword}
        onPress={() => navigation.navigate("ForgotPasswordConcealed")}
      >
        <Text style={[styles.changePassword1, styles.textTypo]}>
          Change password
        </Text>
      </Pressable>
      <Pressable
        style={[styles.buttonPrimaryTextAble, styles.textLayout]}
        onPress={() => navigation.navigate("SettingsEditedSuccessfully")}
      >
        <View style={[styles.text3, styles.text3Position]}>
          <Text style={styles.button}>Save changes</Text>
        </View>
      </Pressable>
      <View style={styles.navigation}>
        <Text style={[styles.search, styles.text3Position]}>Edit profile</Text>
        <Pressable
          style={[styles.iconBackward, styles.iconLayout]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon--backward.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconCancel, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/icon--cancel.png")}
        />
      </View>
      <Image
        style={styles.avatarsIcon}
        contentFit="cover"
        source={require("../assets/avatars2.png")}
      />
      <View style={styles.statusBar}>
        <View style={styles.icons}>
          <View style={styles.top}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("../assets/signal3.png")}
            />
            <Text style={styles.text4}>9:30</Text>
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
  searchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  nameTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    position: "absolute",
  },
  textLayout: {
    height: 48,
    borderRadius: Border.br_base,
    width: 327,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    left: 64,
    top: 12,
    textAlign: "left",
    color: Color.textColor,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text3Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  tapToUpload: {
    marginLeft: -90,
    top: 200,
    color: Color.secondary,
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  name: {
    top: 252,
    textAlign: "left",
    color: Color.textColor,
    left: 24,
    fontWeight: "700",
  },
  email: {
    top: 364,
    textAlign: "left",
    color: Color.textColor,
    left: 24,
    fontWeight: "700",
  },
  phoneNumber: {
    top: 476,
    textAlign: "left",
    color: Color.textColor,
    left: 24,
    fontWeight: "700",
  },
  password: {
    top: 588,
    left: 155,
    textAlign: "left",
    color: Color.textColor,
  },
  text: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconUser: {
    top: 12,
    width: 24,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  textFieldPrimaryText: {
    top: 292,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    borderRadius: Border.br_base,
    backgroundColor: Color.universalWhite,
  },
  hackerbrain1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  textFieldPrimaryText1: {
    top: 404,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    borderRadius: Border.br_base,
    backgroundColor: Color.universalWhite,
  },
  textFieldPrimaryText2: {
    top: 516,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 48,
    borderRadius: Border.br_base,
    backgroundColor: Color.universalWhite,
  },
  changePassword1: {
    color: Color.blue,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.typographyBody2_size,
  },
  changePassword: {
    left: 130,
    top: 628,
    position: "absolute",
  },
  button: {
    color: Color.universalWhite,
    lineHeight: 24,
    fontSize: FontSize.sansBodyBodyCopy_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text3: {
    marginLeft: -58,
    flexDirection: "row",
    marginTop: -12,
    top: "50%",
  },
  buttonPrimaryTextAble: {
    top: 665,
    backgroundColor: "#1fefa4",
  },
  search: {
    marginTop: -14,
    marginLeft: -46.5,
    fontSize: FontSize.headlines18Bold_size,
    lineHeight: 28,
    color: Color.textColor,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    marginLeft: 139.5,
    display: "none",
    marginTop: -12,
    top: "50%",
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
  avatarsIcon: {
    top: 93,
    left: 139,
    width: 94,
    height: 94,
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
  text4: {
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  statusBar: {
    top: -1,
    left: -17,
    backgroundColor: Color.colorMediumaquamarine,
    width: 414,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    position: "absolute",
    overflow: "hidden",
  },
  settings2: {
    flex: 1,
    height: 733,
    overflow: "hidden",
    backgroundColor: Color.universalWhite,
    width: "100%",
  },
});

export default Settings1;
