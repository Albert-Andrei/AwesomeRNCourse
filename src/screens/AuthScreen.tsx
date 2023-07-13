import React, { FC } from "react";
import { Text, View } from "react-native";
import Slides, { Slide } from "../components/Slides";

const data: Slide[] = [
  { text: "some text", color: "#03a9f4" },
  { text: "Other text", color: "#009688" },
  { text: "Hello world", color: "#e22e8e" },
];

const AuthScreen: FC = () => {
  return <Slides data={data} />;
};

export default AuthScreen;
