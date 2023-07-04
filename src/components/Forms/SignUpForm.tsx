import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../Button";

interface SignUpFormProps {
  onBack: () => void;
}

const SignUpForm = ({ onBack }: SignUpFormProps) => {
  const [number, onChangeNumber] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={onBack}>
        <Text>{"< Back"}</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text>Enter Phone number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={onChangeNumber}
          placeholder="Phone number here"
          keyboardType="numeric"
        />
        <Button text="Sign Up" onPress={() => {}} />
      </View>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  back: {
    marginLeft: 20,
    marginTop: 32,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10,
    marginTop: 20,
  },
  form: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
