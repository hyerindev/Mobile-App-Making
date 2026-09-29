import { textStyle } from "@/styles/text";
import { Button, Text, View } from "react-native";

const Hello = () => {
  return (
    <View>
      <Text style={textStyle}>Hello, Navigation</Text>
      <Button title="Hello" />
    </View>
  );
};

export default Hello;
