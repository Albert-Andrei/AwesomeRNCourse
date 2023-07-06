import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../Button";
import axios from "axios";

interface LogInFormProps {
  onNext: () => void;
  onBack: () => void;
}

const LogInForm = ({ onBack, onNext }: LogInFormProps) => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumberChange] = useState("");
  const [code, setCodeChange] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://verifyonetimepassword-2wujcjhf4q-uc.a.run.app",
        {
          phone: phoneNumber,
          code: code,
        }
      );

      if (data) {
        //  Register token here
        setPhoneNumberChange("");
        setCodeChange("");
      } else {
        setError("Something went wrong");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={onBack}>
        <Text>{"< Back"}</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        {loading ? (
          <Text style={styles.text}>Loading ...</Text>
        ) : (
          <>
            <Text style={styles.header}>Log In</Text>
            <Text style={styles.text}>Enter Phone number</Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumberChange}
              placeholder="Phone number here"
              keyboardType="numeric"
            />
            <Text style={styles.text}>Enter Code</Text>
            <TextInput
              style={styles.input}
              value={code}
              onChangeText={setCodeChange}
              placeholder="Phone number here"
              keyboardType="numeric"
            />
            {error ? <Text style={styles.error}>{error}</Text> : <></>}
            <Button text="Sign Up" onPress={handleSubmit} />
          </>
        )}
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
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    borderRadius: 10,
    marginTop: 10,
  },
  form: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 50,
    color: "#151515",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "left",
    width: "80%",
    color: "#151515",
  },
  error: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "red",
    marginTop: 10,
  },
});
