import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }}>
      <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="hello" options={{ title: "Hello" }} />
      <Stack.Screen
        name="gugudan"
        options={{ title: "구구단", headerStyle: { backgroundColor: "red" }, headerTintColor: "black" }}
      />
    </Stack>
  );
};

export default RootLayout;
