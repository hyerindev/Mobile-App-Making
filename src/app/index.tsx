import type { TextStyle } from "react-native";
import { Text, View } from "react-native";

const stBigBlue: TextStyle = {
  color: "blue",
  fontWeight: "bold",
  fontSize: 30,
};
const stRed: TextStyle = {
  color: "red",
};

const Index = () => {
  return (
    <View>
      <Text style={stRed}>just red</Text>
      <Text style={stBigBlue}>just bigBlue</Text>
      <Text style={[stBigBlue, stRed]}>bigBlue, then red</Text>
      <Text style={[stBigBlue, stRed, { fontSize: 20 }]}>
        bigBlue, then red, then 20
      </Text>
    </View>
  );
};

export default Index;
