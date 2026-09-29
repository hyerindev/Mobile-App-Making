import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About", headerShown: false }} />
      <Stack.Screen name="hello" options={{ title: "Hello" }} />
      <Stack.Screen name="gugudan" options={{ title: "구구단" }} />
    </Stack>
  );
};

export default RootLayout;
