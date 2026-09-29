import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="hello" options={{ title: "Hello" }} />
      <Stack.Screen name="gugudan" options={{ title: "구구단" }} />
    </Stack>
  );
};

export default RootLayout;
