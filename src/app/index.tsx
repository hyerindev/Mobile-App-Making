import { useRef, useState } from "react";
import type { TextStyle } from "react-native";
import { Button, Text, TextInput, View } from "react-native";

const inputStyle: TextStyle = {
  fontSize: 20,
  borderWidth: 1,
  flex: 1,
  padding: 5,
  margin: 2,
};
const textStyle: TextStyle = {
  ...inputStyle,
  borderColor: "gray",
};

const Index = () => {
  const nameRef = useRef<string>("");
  const phoneRef = useRef<string>("");
  const [dummy, setDummy] = useState<
    { name: string; phone: number | string }[]
  >([
    { name: "Ewha", phone: 1234 },
    { name: "June", phone: 3347 },
    { name: "Jane", phone: 1111 },
    { name: "Nick", phone: 1212 },
  ]);

  function addItem() {
    setDummy((prev) => [
      ...prev,
      { name: nameRef.current, phone: phoneRef.current },
    ]);
  }

  function popItem() {
    setDummy((prev) => {
      const temp = [...prev];
      temp.pop();
      return temp;
    });
  }

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 40 }}>Phone Book</Text>
      <View style={{ margin: 10, flexDirection: "row", gap: 4 }}>
        <TextInput
          style={inputStyle}
          onChangeText={(input) => (nameRef.current = input)}
        />
        <TextInput
          style={inputStyle}
          onChangeText={(input) => (phoneRef.current = input)}
        />
        <Button title="Add" onPress={addItem} />
        <Button title="POP" onPress={popItem} />
      </View>
      {dummy.map(({ name, phone }, index) => (
        <View key={name + index} style={{ flexDirection: "row" }}>
          <Text style={textStyle}>{name}</Text>
          <Text style={textStyle}>{phone}</Text>
        </View>
      ))}
    </View>
  );
};

export default Index;
