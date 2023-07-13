import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "./MapScreen";
import DeckScreens from "./DeckScreen";
import ReviewStackScreens from "../Review/ReviewStackScreens";
import { Button } from "react-native";

const TabStack = createBottomTabNavigator();

const MainScreens: FC = () => {
  return (
    <TabStack.Navigator initialRouteName="Home">
      <TabStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={MapScreen}
      />
      <TabStack.Screen
        options={{
          headerShown: false,
        }}
        name="Discover"
        component={DeckScreens}
      />
      <TabStack.Screen
        options={{
          headerShown: false,
        }}
        name="Review"
        component={ReviewStackScreens}
      />
    </TabStack.Navigator>
  );
};

export default MainScreens;
