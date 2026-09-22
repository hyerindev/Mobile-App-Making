import { View, ScrollView } from "react-native";

const App = () => {
  return (
    <View style={{ paddingTop: 30 }}>
      <ScrollView horizontal style={{ margin: 10 }}>
        <View style={{ backgroundColor: "red", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "blue", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "lightgray", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "yellow", width: 100, height: 100 }} />
      </ScrollView>
    </View>
  );
};

export default App;
