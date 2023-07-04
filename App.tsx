import { SafeAreaView, StyleSheet } from "react-native";
import FirstCodeExample from "./src/practice/FirstCodeExample";
import SecondCodeExample from "./src/practice/SecondCodeExample";
import ThirdCodeExample from "./src/practice/ThirdCodeExample";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* #1 First code example */}
      {/* <FirstCodeExample /> */}

      {/* #2 Swipe card code example */}
      {/* <SecondCodeExample /> */}

      {/* #3 One time password example */}
      <ThirdCodeExample />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
