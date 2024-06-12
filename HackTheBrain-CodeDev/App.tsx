const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLogo from "./screens/AppLogo";
import HomepageScrollingAnalytics from "./screens/HomepageScrollingAnalytics";
import AIChatbotSent from "./screens/AIChatbotSent";
import AIChatbotSent1 from "./screens/AIChatbotSent1";
import AIChatbot from "./screens/AIChatbot";
import SocialForumPostingComment from "./screens/SocialForumPostingComment";
import SocialForum from "./screens/SocialForum";
import AidMainPage from "./screens/AidMainPage";
import SettingsEditedSuccessfully from "./screens/SettingsEditedSuccessfully";
import Settings from "./screens/Settings";
import Settings1 from "./screens/Settings1";
import SearchFeature from "./screens/SearchFeature";
import NotificationCleared from "./screens/NotificationCleared";
import Notification1 from "./screens/Notification1";
import HomepageScrollingOverview from "./screens/HomepageScrollingOverview";
import PasswordResetSuccess from "./screens/PasswordResetSuccess";
import ForgotPassword from "./screens/ForgotPassword";
import ForgotPasswordConcealed from "./screens/ForgotPasswordConcealed";
import ForgotPassword1 from "./screens/ForgotPassword1";
import SignInWithGmail from "./screens/SignInWithGmail";
import SignInWithOutlook from "./screens/SignInWithOutlook";
import SignInWithFacebook from "./screens/SignInWithFacebook";
import SignIn from "./screens/SignIn";
import SignInPasswordHidden from "./screens/SignInPasswordHidden";
import OnBoarding from "./screens/OnBoarding";
import OnBoarding1 from "./screens/OnBoarding1";
import OnBoarding2 from "./screens/OnBoarding2";
import OnBoarding3 from "./screens/OnBoarding3";
import SocialForumPostedComment from "./screens/SocialForumPostedComment";
import SignUpPasswordConcealed from "./screens/SignUpPasswordConcealed";
import SignUpPassword from "./screens/SignUpPassword";
import AccountRegisteredSuccessfull from "./screens/AccountRegisteredSuccessfull";
import ControlIrrigationPlot2Colu from "./screens/ControlIrrigationPlot2Colu";
import ControlIrrigationPlot2Colu1 from "./screens/ControlIrrigationPlot2Colu1";
import ControlIrrigationPlot2Colu2 from "./screens/ControlIrrigationPlot2Colu2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "TitilliumWeb-SemiBold": require("./assets/fonts/TitilliumWeb-SemiBold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AppLogo"
              component={AppLogo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageScrollingAnalytics"
              component={HomepageScrollingAnalytics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AIChatbotSent"
              component={AIChatbotSent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AIChatbotSent1"
              component={AIChatbotSent1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AIChatbot"
              component={AIChatbot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SocialForumPostingComment"
              component={SocialForumPostingComment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SocialForum"
              component={SocialForum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AidMainPage"
              component={AidMainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsEditedSuccessfully"
              component={SettingsEditedSuccessfully}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings1"
              component={Settings1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchFeature"
              component={SearchFeature}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationCleared"
              component={NotificationCleared}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageScrollingOverview"
              component={HomepageScrollingOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordResetSuccess"
              component={PasswordResetSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswordConcealed"
              component={ForgotPasswordConcealed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword1"
              component={ForgotPassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInWithGmail"
              component={SignInWithGmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInWithOutlook"
              component={SignInWithOutlook}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInWithFacebook"
              component={SignInWithFacebook}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInPasswordHidden"
              component={SignInPasswordHidden}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnBoarding1"
              component={OnBoarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnBoarding2"
              component={OnBoarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnBoarding3"
              component={OnBoarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SocialForumPostedComment"
              component={SocialForumPostedComment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPasswordConcealed"
              component={SignUpPasswordConcealed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPassword"
              component={SignUpPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountRegisteredSuccessfull"
              component={AccountRegisteredSuccessfull}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ControlIrrigationPlot2Colu"
              component={ControlIrrigationPlot2Colu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ControlIrrigationPlot2Colu1"
              component={ControlIrrigationPlot2Colu1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ControlIrrigationPlot2Colu2"
              component={ControlIrrigationPlot2Colu2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
