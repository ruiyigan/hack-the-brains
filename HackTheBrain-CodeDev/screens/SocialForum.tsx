import * as React from "react";
import {
  Pressable,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SocialForum = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.socialForum}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <TouchableHighlight
            style={styles.iconBackward}
            underlayColor="#fff"
            onPress={() => navigation.navigate("AidMainPage")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon--backward.png")}
            />
          </TouchableHighlight>
          <Image
            style={styles.iconMore}
            contentFit="cover"
            source={require("../assets/icon--more.png")}
          />
          <Image
            style={styles.iconNotification}
            contentFit="cover"
            source={require("../assets/icon--notification.png")}
          />
          <Image
            style={styles.iconCheckDone}
            contentFit="cover"
            source={require("../assets/icon--check-done.png")}
          />
        </View>
        <View style={styles.frame2}>
          <Image
            style={styles.iconDescription}
            contentFit="cover"
            source={require("../assets/icon--description.png")}
          />
          <Text style={styles.description}>Description</Text>
        </View>
      </View>
      <View style={styles.frame3}>
        <Text style={styles.yourDatasSecurity}>
          Your data's security is our top priority. Controlly offers robust
          security measures to protect your information.
        </Text>
        <View style={styles.frame4}>
          <View style={styles.iconDescription}>
            <View style={styles.vector} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
          <Text style={styles.description}>{`Image `}</Text>
        </View>
      </View>
      <View style={styles.frame5}>
        <View style={styles.frame6}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-13.png")}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/frame-77.png")}
          />
        </View>
        <Pressable
          style={styles.comment}
          onPress={() => navigation.navigate("SocialForumPostingComment")}
        >
          <Image
            style={styles.commentIcon}
            contentFit="cover"
            source={require("../assets/comment.png")}
          />
          <Text style={styles.tapToPost}>Tap to post your comment</Text>
        </Pressable>
        <View style={styles.frame7}>
          <Image
            style={styles.iconDescription}
            contentFit="cover"
            source={require("../assets/icon--comment.png")}
          />
          <Text style={styles.description}>Forum</Text>
        </View>
        <View style={styles.frame8}>
          <View style={styles.comment1}>
            <View style={styles.frame9}>
              <Image
                style={styles.frameInner}
                contentFit="cover"
                source={require("../assets/ellipse-20.png")}
              />
              <View style={styles.frame10}>
                <Text style={styles.pyotrK}>Pyotr K - 2hrs ago</Text>
              </View>
            </View>
            <View style={styles.frame11}>
              <Text style={styles.implementingPracticesLike}>
                 Implementing practices like crop rotation and cover cropping
                helps sequester carbon, improve soil health and reduce water
                usage.
              </Text>
              <View style={styles.divider} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.comment2}>
        <View style={styles.frame12}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/ellipse-201.png")}
          />
          <View style={styles.frame13}>
            <Text style={styles.annaBrown}>Anna Brown - 5hrs ago</Text>
            <Text style={styles.considerVerticalFarming}>
              Consider vertical farming which can reduce land cleared for
              conventional farming.
            </Text>
          </View>
        </View>
        <View style={styles.divider1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: -12,
    marginLeft: -163.5,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconBackward: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 24,
    height: 24,
  },
  iconMore: {
    position: "absolute",
    marginTop: -12,
    marginLeft: 139.5,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconNotification: {
    position: "absolute",
    marginTop: -12,
    marginLeft: 99.5,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconCheckDone: {
    position: "absolute",
    marginTop: -12,
    marginLeft: 59.5,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frame1: {
    position: "relative",
    top: 0,
    width: 327,
    height: 24,
    overflow: "hidden",
    marginLeft: 26,
  },
  iconDescription: {
    position: "relative",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  description: {
    position: "relative",
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textColor,
    textAlign: "left",
    marginLeft: 8,
  },
  frame2: {
    width: 124,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 24,
    marginTop: 20,
  },
  frame: {
    width: 353,
    height: 68,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  yourDatasSecurity: {
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.neutral2,
    textAlign: "left",
    width: 325,
    height: 72,
    marginLeft: 24,
  },
  vector: {
    position: "absolute",
    height: "22.92%",
    width: "22.92%",
    top: "26.25%",
    right: "25.83%",
    bottom: "50.83%",
    left: "51.25%",
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.textColor,
    borderWidth: 1.5,
  },
  vectorIcon: {
    position: "absolute",
    height: "75%",
    width: "75%",
    top: "12.5%",
    right: "12.5%",
    bottom: "12.5%",
    left: "12.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frame4: {
    width: 85,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 24,
    marginTop: 32,
  },
  frame3: {
    width: 349,
    height: 128,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 16,
  },
  frameChild: {
    position: "relative",
    borderRadius: Border.br_base,
    width: 120,
    height: 80,
  },
  frameItem: {
    position: "relative",
    borderRadius: Border.br_base,
    width: 120,
    height: 80,
    overflow: "hidden",
    marginLeft: 16,
  },
  frame6: {
    width: 256,
    height: 80,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 24,
  },
  commentIcon: {
    position: "relative",
    borderRadius: Border.br_13xl,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  tapToPost: {
    position: "relative",
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.blue,
    textAlign: "left",
    marginLeft: 8,
  },
  comment: {
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    backgroundColor: Color.universalWhite,
    width: 380,
    height: 56,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_5xs,
    marginTop: 9,
  },
  frame7: {
    width: 84,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 24,
    marginTop: 9,
  },
  frameInner: {
    position: "relative",
    width: 48,
    height: 48,
  },
  pyotrK: {
    position: "relative",
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.neutral2,
    textAlign: "left",
    width: 230,
  },
  frame10: {
    width: 297,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: -48,
  },
  frame9: {
    width: 297,
    height: 48,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: 249,
  },
  implementingPracticesLike: {
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_300,
    textAlign: "left",
    width: 263,
    height: 80,
    marginLeft: 64,
  },
  divider: {
    position: "relative",
    backgroundColor: Color.neutral3,
    width: 327,
    height: 1,
    marginTop: -4,
  },
  frame11: {
    width: 327,
    height: 80,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -16,
  },
  comment1: {
    width: 327,
    height: 117,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame8: {
    width: 351,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 9,
  },
  frame5: {
    width: 495,
    height: 304,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 16,
  },
  annaBrown: {
    position: "relative",
    fontSize: FontSize.sansBodyBodyCopy_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.neutral2,
    textAlign: "left",
  },
  considerVerticalFarming: {
    position: "relative",
    fontSize: FontSize.typographyBody2_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textColor,
    textAlign: "left",
    width: 263,
    marginTop: 8,
  },
  frame13: {
    width: 263,
    height: 92,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 16,
  },
  frame12: {
    width: 327,
    height: 92,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  divider1: {
    position: "relative",
    backgroundColor: Color.neutral3,
    width: 327,
    height: 1,
    marginTop: 16,
  },
  comment2: {
    width: 327,
    height: 109,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 24,
    marginTop: 16,
  },
  socialForum: {
    position: "relative",
    backgroundColor: Color.universalWhite,
    flex: 1,
    width: "100%",
    height: 851,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 52,
    paddingBottom: Padding.p_2xs,
  },
});

export default SocialForum;
