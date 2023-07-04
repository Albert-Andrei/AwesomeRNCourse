import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e90ff",
    borderRadius: 10,
    marginTop: 20,
  },
});
