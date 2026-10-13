import type { ReactElement } from "react";
import { Text, View } from "react-native";

const N: string[] = ["Ewha", "June", "Jane", "Nick"];
const P: number[] = [1234, 3347, 1111, 1212];

const L: ReactElement[] = [];

for (let i = 0; i < N.length; i++) {
  const a = (
    <Text key={N[i]} style={{ fontSize: 20 }}>
      {N[i]} : {P[i]}
    </Text>
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
