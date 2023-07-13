import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import MainScreens from "../screens/Main/MainScreens";
import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const MainStack = createStackNavigator();

const FourthCodeExample: FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="AuthScreen"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <MainStack.Screen
          name="MainStack"
          component={MainScreens}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default FourthCodeExample;
