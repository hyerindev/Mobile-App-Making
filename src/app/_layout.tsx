import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="about" options={{ title: "About" }} />
      <Tabs.Screen name="tools" options={{ title: "Tools", headerShown: false }} />
    </Tabs>
  );
};

export default Layout;
