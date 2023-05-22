import { View, Animated } from "react-native";
import { CardDataType } from "../data/CardData";

interface DeckProps {
  data: CardDataType[];
  renderCard: (item: CardDataType) => any;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const Deck = ({ data, renderCard, onSwipeLeft, onSwipeRight }: DeckProps) => {
  const renderCards = () => {
    return data?.map((item: any) => renderCard(item));
  };

  return <View>{renderCards()}</View>;
};

export default Deck;
