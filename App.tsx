import { SafeAreaView, StyleSheet } from "react-native";
import FirstCodeExample from "./src/practice/FirstCodeExample";
import SecondCodeExample from "./src/practice/SecondCodeExample";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* #1 First code example */}
      {/* <FirstCodeExample /> */}

      {/* #2 Swipe card code example */}
      <SecondCodeExample />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
