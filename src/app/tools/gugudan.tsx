import { body2, inputDisabled } from "@/styles/text";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const Gugudan = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  return (
    <View style={{ overflow: "visible", flexDirection: "row", gap: 5 }}>
      <View style={{ overflow: "visible", width: 80, gap: 20 }}>
        <Text style={inputDisabled}>{a}</Text>
        <Button title="+" onPress={() => setA((prev) => prev + 1)} />
        <Button title="-" onPress={() => setA((prev) => prev - 1)} />
      </View>
      <Text style={body2}>×</Text>
      <View style={{ overflow: "visible", width: 80, gap: 20 }}>
        <Text style={inputDisabled}>{b}</Text>
        <Button title="+" onPress={() => setB((prev) => prev + 1)} />
        <Button title="-" onPress={() => setB((prev) => prev - 1)} />
      </View>
      <Text style={body2}>＝</Text>
      <Text style={{ ...inputDisabled, height: 60 }}>{a * b}</Text>
    </View>
  );
};

export default Gugudan;
