import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
  UIManager,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { CardDataType } from "../types/Card";

interface DeckProps {
  data: CardDataType[];
  renderCard: (item: CardDataType) => React.ReactNode;
  emptyList: React.ReactNode;
  onSwipeLeft: (item: CardDataType) => void;
  onSwipeRight: (item: CardDataType) => void;
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Deck = ({
  data,
  renderCard,
  emptyList,
  onSwipeLeft,
  onSwipeRight,
}: DeckProps) => {
  const [index, setIndex] = useState(0);

  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe("right");
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe("left");
        } else {
          revertPosition();
        }
      },
    })
  ).current;
  LayoutAnimation.spring();

  useEffect(() => {
    setIndex(0);
  }, [data]);

  const forceSwipe = (direction: "left" | "right") => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(position, {
      toValue: {
        x,
        y: 0,
      },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction: "left" | "right") => {
    const item = data[index];
    direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({ x: 0, y: 0 });
    setIndex((prev) => prev + 1);
  };

  const revertPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return { ...position.getLayout(), transform: [{ rotate: rotate }] };
  };

  const renderCards = () => {
    if (index >= data.length) {
      return emptyList;
    }

    return data
      ?.map((item: CardDataType, i: number) => {
        if (i < index) {
          return null;
        }

        if (i === index) {
          return (
            <Animated.View
              key={item.id}
              style={[getCardStyle(), styles.card]}
              {...panResponder.panHandlers}
            >
              {renderCard(item)}
            </Animated.View>
          );
        }

        return (
          <Animated.View
            key={item.id}
            style={[
              styles.card,
              {
                top: 5 * (i - index),
                width: `${100 - i}%`,
              },
            ]}
          >
            {renderCard(item)}
          </Animated.View>
        );
      })
      .reverse();
  };

  return <View style={styles.container}>{renderCards()}</View>;
};

export default Deck;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "absolute",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});
