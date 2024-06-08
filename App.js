const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ControlIrrigationPlot2Colu from "./screens/ControlIrrigationPlot2Colu";
import ForgotPassword from "./screens/ForgotPassword";
import PasswordResetSuccess from "./screens/PasswordResetSuccess";
import AppLogo from "./components/AppLogo";
import ForgotPasswordConcealed from "./screens/ForgotPasswordConcealed";
import SignUpPassword from "./screens/SignUpPassword";
import AccountRegisteredSuccessfull from "./screens/AccountRegisteredSuccessfull";
import OnBoarding from "./screens/OnBoarding";
import OnBoarding1 from "./screens/OnBoarding1";
import ControlIrrigationPlot2Colu1 from "./screens/ControlIrrigationPlot2Colu1";
import SignInWithGmail from "./screens/SignInWithGmail";
import SignInWithOutlook from "./screens/SignInWithOutlook";
import SignInWithFacebook from "./screens/SignInWithFacebook";
import ForgotPasswordConcealed1 from "./screens/ForgotPasswordConcealed1";
import SignUpPasswordConcealed from "./screens/SignUpPasswordConcealed";
import SignIn from "./screens/SignIn";
import OnBoarding2 from "./screens/OnBoarding2";
import OnBoarding3 from "./screens/OnBoarding3";
import SignInPasswordHidden from "./screens/SignInPasswordHidden";
import Settings from "./screens/Settings";
import SearchFeature from "./screens/SearchFeature";
import ControlIrrigationPlot1Colu from "./screens/ControlIrrigationPlot1Colu";
import Notification from "./screens/Notification";
import Settings1 from "./screens/Settings1";
import SocialForum from "./screens/SocialForum";
import HomepageScrollingAnalytics from "./screens/HomepageScrollingAnalytics";
import Notification1 from "./screens/Notification1";
import AidMainPage from "./screens/AidMainPage";
import HomepageScrollingOverview from "./screens/HomepageScrollingOverview";
import AIChatbot from "./screens/AIChatbot";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ControlIrrigationPlot2Colu"
              component={ControlIrrigationPlot2Colu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PasswordResetSuccess"
              component={PasswordResetSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswordConcealed"
              component={ForgotPasswordConcealed}
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
              name="ControlIrrigationPlot2Colu1"
              component={ControlIrrigationPlot2Colu1}
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
              name="ForgotPasswordConcealed1"
              component={ForgotPasswordConcealed1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPasswordConcealed"
              component={SignUpPasswordConcealed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
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
              name="SignInPasswordHidden"
              component={SignInPasswordHidden}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchFeature"
              component={SearchFeature}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ControlIrrigationPlot1Colu"
              component={ControlIrrigationPlot1Colu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings1"
              component={Settings1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SocialForum"
              component={SocialForum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageScrollingAnalytics"
              component={HomepageScrollingAnalytics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AidMainPage"
              component={AidMainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageScrollingOverview"
              component={HomepageScrollingOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AIChatbot"
              component={AIChatbot}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
