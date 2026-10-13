import { Image, Text, View } from "react-native";

const L = [<Text>Hello</Text>, <Text>Ewha</Text>];

for (let i = 0; i < 10; i++) {
  L.push(<Text>count {i}</Text>);
}

for (let i = 0; i < 3; i++) {
  L.push(
    <Image
      style={{ width: 100, height: 100 }}
      source={require("@/assets/cat-icon.png")}
    />,
  );
}

const Index = () => {
  return <View style={{ marginTop: 30 }}>{L}</View>;
};

export default Index;
