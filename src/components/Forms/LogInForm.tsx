import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../Button";

interface LogInFormProps {
  onNext: () => void;
  onBack: () => void;
}

const LogInForm = ({ onBack, onNext }: LogInFormProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={onBack}>
        <Text>{"< Back"}</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text>Enter Phone number</Text>
        <TextInput />
        <Button text="Log In" onPress={onNext} />
      </View>
    </View>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  back: {
    marginLeft: 20,
    marginTop: 32,
  },
  form: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
