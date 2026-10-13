import type { ReactElement } from "react";
import type { TextStyle } from "react-native";
import { Text, View } from "react-native";

const textStyle: TextStyle = {
  fontSize: 20,
  borderWidth: 1,
  borderColor: "gray",
  flex: 1,
  padding: 5,
  margin: 2,
};

const N: string[] = ["Ewha", "June", "Jane", "Nick"];
const P: number[] = [1234, 3347, 1111, 1212];

const L: ReactElement[] = [];

for (let i = 0; i < N.length; i++) {
  const a = (
    <View style={{ flexDirection: "row" }}>
      <Text style={textStyle}>{N[i]}</Text>
      <Text style={textStyle}>{P[i]}</Text>
    </View>
  );
  L.push(a);
}

const Index = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 40 }}>Phone Book</Text>
      {L}
    </View>
  );
};

export default Index;
