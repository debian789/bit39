import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import TabBarIcon from "../components/TabBarIcon";
import CodesComponent from "../components/codes/CodesComponent";
import WordsComponent from "../components/words/WordsComponent";

const codes = createStackNavigator(
  {
    Codes: CodesComponent
  },
  {
    initialRouteName: "Codes",
    defaultNavigationOptions: {
      header: null
    }
  }
);

codes.navigationOptions = {
  tabBarLabel: "Codigo",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const words = createStackNavigator(
  {
    Words: WordsComponent
  },
  {
    initialRouteName: "Words",
    defaultNavigationOptions: {
      header: null
    }
  }
);

words.navigationOptions = {
  tabBarLabel: "Palabras",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const welcome = createStackNavigator(
  {
    welcome: createMaterialTopTabNavigator(
      {
        codes,
        words
      },
      {
        initialRouteName: "codes",
        tabBarPosition: "bottom",
        showIcon: true,
        lazy: true
      }
    )
  },
  {
    initialRouteName: "welcome",
    defaultNavigationOptions: {
      title: "BIP 39",
      headerRight: (
        <Icon
          style={{
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            paddingTop: 6,
            marginRight: 15,
            flex: 1
          }}
          name="md-help-circle"
          size={25}
        />
      ),
      headerLeft: (
        <Icon
          style={{
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            paddingTop: 6,
            marginLeft: 15,
            flex: 1
          }}
          name="md-key"
          size={25}
        />
      ),
      headerStyle: {
        backgroundColor: "#2196f3"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      shadowColor: "transparent"
    }
  }
);

export default welcome;
