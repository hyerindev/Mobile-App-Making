import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Apps" }} />
      <Stack.Screen name="hello" options={{ title: "Hello" }} />
      <Stack.Screen name="gugudan" options={{ title: "구구단" }} />
    </Stack>
  );
};

export default Layout;
