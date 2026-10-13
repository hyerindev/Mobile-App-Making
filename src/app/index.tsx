import { Text, View } from "react-native";

const name = "Ewha";
let element = <Text>Hello {name}</Text>;

for (let i = 0; i < 5; i++) {
  element = <View style={{ borderWidth: 1, padding: 10 }}>{element}</View>;
}

const Index = () => {
  return <View style={{ marginTop: 30 }}>{element}</View>;
};

export default Index;
