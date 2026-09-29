import { body1 } from "@/styles/text";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ gap: 8, marginTop: 24 }}>
      <Text style={body1}>Onboarding Home Screen</Text>
      <Button title="시작하기" onPress={() => router.replace("/main")} />
    </View>
  );
};

export default Index;
