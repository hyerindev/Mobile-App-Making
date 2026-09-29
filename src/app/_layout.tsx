import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, Text } from "react-native";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <Text style={{ fontSize: 24 }}>🏠</Text>;
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: () => {
            return <Image source={require("@/assets/cat-icon.png")} style={{ width: 24, height: 24 }} />;
          },
        }}
      />
      <Tabs.Screen
        name="hello"
        options={{
          title: "Hello",
          tabBarIcon: () => {
            return <Ionicons name="book" size={24} color="gray" />;
          },
        }}
      />
      <Tabs.Screen
        name="gugudan"
        options={{
          title: "구구단",
          tabBarIcon: () => {
            return <Ionicons name="calculator" size={24} color="gray" />;
          },
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
