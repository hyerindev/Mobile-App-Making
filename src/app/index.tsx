import { body1 } from "@/styles/text";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ gap: 10 }}>
      <Text style={body1}>Home Screen</Text>
      <Button title="About" onPress={() => router.navigate("/about")} />
      <Button title="Hello" onPress={() => router.navigate("/hello")} />
    </View>
  );
};

export default Index;
