import { SafeAreaView, StyleSheet } from "react-native";
import FirstCodeExample from "./src/practice/FirstCodeExample";
import SecondCodeExample from "./src/practice/SecondCodeExample";
import ThirdCodeExample from "./src/practice/ThirdCodeExample";
import FourthCodeExample from "./src/practice/FourthCodeExample";

export default function App() {
  // Initialize Firebase

  return (
    // <SafeAreaView style={styles.container}>
    //   {/* #1 First code example */}
    //   {/* <FirstCodeExample /> */}

    //   {/* #2 Swipe card code example */}
    //   {/* <SecondCodeExample /> */}

    //   {/* #3 One time password example */}
    //   {/* <ThirdCodeExample /> */}
    // </SafeAreaView>

    // #4 React navigation map app
    // To view other examples comment the <FourthCodeExample />
    // and uncomment the <SafeAreaView>
    <FourthCodeExample />
  );
}

const styles = StyleSheet.create({
  container: {},
});
