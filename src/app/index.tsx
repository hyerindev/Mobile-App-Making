import type { ViewStyle } from "react-native";
import { View } from "react-native";

const stCircle: ViewStyle = {
  width: 300,
  height: 200,
  borderRadius: 50,
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
