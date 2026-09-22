import { useState } from "react";
import { View, Image, Button } from "react-native";

const IMAGES = {
  cat: require("./assets/cat-icon.png"),
};

const App = () => {
  const [width, setWidth] = useState<number>(100);

  return (
    <View style={{ padding: 12, paddingTop: 36, gap: 24 }}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Button title="크게" onPress={() => setWidth((prev) => prev + 10)} />
        <Button title="작게" onPress={() => setWidth((prev) => prev - 10)} />
      </View>
      <Image source={IMAGES["cat"]} style={{ width: width, height: width }} resizeMode="contain" />
    </View>
  );
};

export default App;
