import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="about" options={{ title: "About" }} />
      <Tabs.Screen name="hello" options={{ title: "Hello" }} />
      <Tabs.Screen name="gugudan" options={{ title: "구구단" }} />
    </Tabs>
  );
};

export default RootLayout;
