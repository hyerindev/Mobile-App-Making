import type { ReactElement } from "react";
import { Text, View } from "react-native";

const L: ReactElement[] = [];

for (let i = 0; i < 10; i++) {
  L.push(
    <Text>
      {i} {i * i}
    </Text>,
  );
}

const Index = () => {
  return <View style={{ marginTop: 30 }}>{L}</View>;
};

export default Index;
