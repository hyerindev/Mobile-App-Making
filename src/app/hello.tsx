import { inputStyle, textStyle } from "@/styles/text";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Hello = () => {
  const [greet, setGreet] = useState("Hi");
  const [name, setName] = useState("Name");

  return (
    <View>
      <Text style={textStyle}>
        {greet}, {name}
      </Text>
      <TextInput style={inputStyle} onChangeText={setName} />
      <View style={{ flexDirection: "row-reverse", gap: 10, margin: 10 }}>
        <Button title="Nice" onPress={() => setGreet("Nice to meet you")} />
        <Button title="Hello" onPress={() => setGreet("Hello")} />
      </View>
    </View>
  );
};

export default Hello;
