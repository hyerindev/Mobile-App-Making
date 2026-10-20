import type { ViewStyle } from "react-native";
import { View } from "react-native";

const stCircle: ViewStyle = {
  width: 200,
  height: 200,
  borderRadius: 100,
  backgroundColor: "red",
  borderWidth: 1,
};

const Index = () => {
  return (
    <View>
      <View style={stCircle} />
    </View>
  );
};

export default Index;
