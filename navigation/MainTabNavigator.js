import React from "react";
import { Platform, Button } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
// import HomeScreen from '../screens/HomeScreen';
import CodesComponent from "../components/codes/CodesComponent";
import WordsComponent from "../components/words/WordsComponent";
//import WordsScreen from '../screens/WordsScreen';
//import SettingsScreen from '../screens/SettingsScreen';

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

const words = createStackNavigator({
  Words: WordsComponent
},
{
  initialRouteName: "Words",
  defaultNavigationOptions: {
    header: null
  }
});

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
      //  showIcon: true,
        lazy: true
      }
    )
  },
  {
    initialRouteName: "welcome",
    defaultNavigationOptions: {
      title: 'BIP 39',
      // header: null,
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
      headerStyle: {
        backgroundColor: '#2196f3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      shadowColor: 'transparent' 
    }
  }
);

export default welcome;

