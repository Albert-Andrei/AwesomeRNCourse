import React, { FC } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import Button from "./Button";
import { CommonActions, useNavigation } from "@react-navigation/core";

const SCREEN_WIDTH = Dimensions.get("window").width;

export type Slide = { text: string; color: string };

interface SlidesProps {
  data: Slide[];
}

const Slides: FC<SlidesProps> = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}
    >
      {data.map((slide, index) => (
        <View
          key={slide.text}
          style={[styles.slide, { backgroundColor: slide.color }]}
        >
          <Text style={styles.text}>{slide.text}</Text>

          {index === data?.length - 1 && (
            <Button
              text="Let's gooo"
              onPress={() =>
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: "MainStack" }],
                  })
                )
              }
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default Slides;

const styles = StyleSheet.create({
  slide: {
    width: SCREEN_WIDTH,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});
