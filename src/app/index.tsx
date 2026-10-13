import type { ReactElement } from "react";
import { ScrollView, Text } from "react-native";

const L: ReactElement[] = [];

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    L.push(
      <Text key={`${i}_${j}`}>
        {i} × {j} = {i * j}
      </Text>,
    );
  }
}

const Index = () => {
  return (
    <ScrollView style={{ marginTop: 30, marginBottom: 30 }}>{L}</ScrollView>
  );
};

export default Index;
