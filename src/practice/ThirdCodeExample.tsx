import React, { useState } from "react";
import SignUpForm from "../components/Forms/SignUpForm";
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/Button";
import LogInForm from "../components/Forms/LogInForm";

type StageType = "main" | "logIn" | "signUp" | "auth";

const ThirdCodeExample = () => {
  const [stage, setStage] = useState<StageType>("auth");

  const getContent = () => {
    if (stage === "auth") {
      return (
        <>
          <Text style={styles.text}>Welcome to Awesome Course</Text>
          <Button text="Log In" onPress={() => setStage("logIn")} />
          <Button text="Sign Up" onPress={() => setStage("signUp")} />
        </>
      );
    }

    if (stage === "signUp") {
      return (
        <SignUpForm
          onBack={() => setStage("auth")}
          onNext={() => setStage("logIn")}
        />
      );
    }

    if (stage === "logIn") {
      return (
        <LogInForm
          onBack={() => setStage("auth")}
          onNext={() => setStage("main")}
        />
      );
    }

    if (stage === "main") {
      return <Text style={styles.text}>Welcome 🏠 </Text>;
    }
  };

  return <View style={styles.container}>{getContent()}</View>;
};

export default ThirdCodeExample;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 50,
    color: "#151515",
  },
});
