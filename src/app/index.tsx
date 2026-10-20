import { Button, Text, TextInput, View } from "react-native";

const Ask = (props) => {
  return (
    <View>
      <Text>Question #{props.num}</Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Text>Enter your {props.thing}</Text>
        <TextInput
          style={{ flex: 1, marginHorizontal: 10, borderBottomWidth: 1 }}
        />
        <Button title="OK" />
      </View>
    </View>
  );
};

const Index = () => {
  return (
    <View style={{ padding: 10 }}>
      <Ask num={1} thing="name" />
      <Ask num={2} thing="age" />
    </View>
  );
};

export default Index;
