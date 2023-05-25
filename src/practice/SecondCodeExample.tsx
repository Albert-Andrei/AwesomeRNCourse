import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import Deck from "../components/Deck";
import { CardData } from "../data/CardData";
import { CardDataType } from "../types/Card";

const SecondCodeExample = () => {
  const renderCard = (item: CardDataType) => {
    return (
      <View key={item.id} style={styles.card}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text>{item?.text}</Text>
          <Text>Some random text that can be customized</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              View Now!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Deck
        data={CardData}
        renderCard={renderCard}
        emptyList={
          <View style={styles.content}>
            <Text style={styles.empty}>No more cards 😞</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Reset</Text>
            </TouchableOpacity>
          </View>
        }
        onSwipeLeft={() => {}}
        onSwipeRight={() => {}}
      />
    </View>
  );
};

export default SecondCodeExample;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    backgroundColor: "white",
  },
  content: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  button: {
    width: "80%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e90ff",
    borderRadius: 10,
    marginTop: 20,
  },
  empty: {
    width: "100%",
    textAlign: "center",
    marginTop: 200,
    fontSize: 30,
  },
});
