import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });
import { AmplifyTheme } from "aws-amplify-react-native";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};

const MyButton = Object.assign({}, AmplifyTheme.button, {
  backgroundColor: "#2F4847",
  borderRadius: 28,
  width: "50%",
  marginLeft: "25%",
});
const MyHeaderText = Object.assign({}, AmplifyTheme.sectionHeaderText, {
  color: "#2F4847",
});
const MyHFooterText = Object.assign({}, AmplifyTheme.sectionFooterLink, {
  color: "#2F4847",
});
const MyTheme = Object.assign({}, AmplifyTheme, {
  button: MyButton,
  sectionHeaderText: MyHeaderText,
  sectionFooterLink: MyHFooterText,
});

export default withAuthenticator(App, { theme: MyTheme });
