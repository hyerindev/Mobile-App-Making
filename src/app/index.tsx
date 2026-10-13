import type { ReactElement } from "react";
import { useState } from "react";
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

const N: string[] = ["Ewha", "June", "Jane", "Nick"];
const P: (number | string)[] = [1234, 3347, 1111, 1212];

const Index = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [refresh, setRefresh] = useState<number>(0);

  function add_item() {
    N.push(name);
    P.push(phone);
    console.log(N, P);
    setRefresh(refresh + 1);
  }

  var L: ReactElement[] = [];

  for (let i = 0; i < N.length; i++) {
    const a = (
      <View key={N[i]} style={{ flexDirection: "row" }}>
        <Text style={textStyle}>{N[i]}</Text>
        <Text style={textStyle}>{P[i]}</Text>
      </View>
    );
    L.push(a);
  }

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 40 }}>Phone Book</Text>
      <View style={{ margin: 10, flexDirection: "row" }}>
        <TextInput style={inputStyle} onChangeText={setName} />
        <TextInput style={inputStyle} onChangeText={setPhone} />
        <Button title="   Add   " onPress={add_item} />
      </View>
      {L}
    </View>
  );
};

export default Index;
