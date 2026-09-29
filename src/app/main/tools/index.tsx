import { body1 } from "@/styles/text";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const Index = () => {
  return (
    <View>
      <Text style={body1}>Apps made in Class</Text>
      <View style={{ gap: 8 }}>
        <Button title="Hello" onPress={() => router.navigate("/main/tools/hello")} />
        <Button title="구구단" onPress={() => router.navigate("/main/tools/gugudan")} />
      </View>
    </View>
  );
};

export default Index;
