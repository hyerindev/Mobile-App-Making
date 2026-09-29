import { Drawer } from "expo-router/drawer";

const RootLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="about" options={{ title: "About" }} />
      <Drawer.Screen name="hello" options={{ title: "Hello" }} />
      <Drawer.Screen name="gugudan" options={{ title: "구구단" }} />
    </Drawer>
  );
};

export default RootLayout;
