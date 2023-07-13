import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import ReviewScreen from "./ReviewScreen";
import SettingsScreen from "./SettingsScreen";

const ReviewStack = createStackNavigator();

const ReviewStackScreens: FC = () => {
  return (
    <ReviewStack.Navigator
      initialRouteName="ReviewScreens"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ReviewStack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("SettingsScreen")}>
              <Text
                style={{
                  fontSize: 16,
                  color: "rgba(0, 122, 255, 1)",
                  marginRight: 15,
                }}
              >
                Settings
              </Text>
            </Pressable>
          ),
        })}
      />

      <ReviewStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: true,
        }}
      />
    </ReviewStack.Navigator>
  );
};

export default ReviewStackScreens;
