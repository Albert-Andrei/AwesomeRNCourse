import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

const Ball = () => {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.spring(position, {
      toValue: { x: 200, y: 200 },
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

export default Ball;

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black",
  },
});
