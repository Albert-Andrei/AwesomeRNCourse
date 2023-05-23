import { View, Animated, PanResponder } from "react-native";
import { CardDataType } from "../data/CardData";
import { useRef } from "react";

interface DeckProps {
  data: CardDataType[];
  renderCard: (item: CardDataType) => React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const Deck = ({ data, renderCard, onSwipeLeft, onSwipeRight }: DeckProps) => {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {},
    })
  ).current;

  const renderCards = () => {
    return data?.map((item: any) => renderCard(item));
  };

  return (
    <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
      {renderCards()}
    </Animated.View>
  );
};

export default Deck;
