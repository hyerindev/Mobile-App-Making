import { useState } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { Button, Text, View } from "react-native";

const stCircle: ViewStyle = {
  width: "30%",
  height: "30%",
  borderRadius: "50%",
  borderWidth: 1,
  backgroundColor: "rgb(0, 200, 255)",
};
const stDice: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 4,
  justifyContent: "center",
  alignContent: "center",

  width: 160,
  height: 160,
  padding: 10,

  backgroundColor: "rgb(255, 240, 200)",
};
const stText: TextStyle = {
  textAlign: "center",
  margin: 5,
  fontSize: 20,
};

const Circle = () => {
  return <View style={stCircle} />;
};
const Blank = () => {
  return <View style={{ ...stCircle, opacity: 0 }} />;
};

///////////////////////////

const Dice = (props: { num: number }) => {
  if (props.num == 1) {
    return (
      <View style={stDice}>
        <Blank />
        <Blank />
        <Blank />
        <Blank />
        <Circle />
        <Blank />
        <Blank />
        <Blank />
        <Blank />
      </View>
    );
  } else if (props.num == 2) {
    return (
      <View style={stDice}>
        <Circle />
        <Blank />
        <Blank />
        <Blank />
        <Blank />
        <Blank />
        <Blank />
        <Blank />
        <Circle />
      </View>
    );
  } else if (props.num == 3) {
    return (
      <View style={stDice}>
        <Circle />
        <Blank />
        <Blank />
        <Blank />
        <Circle />
        <Blank />
        <Blank />
        <Blank />
        <Circle />
      </View>
    );
  } else if (props.num == 4) {
    return (
      <View style={stDice}>
        <Circle />
        <Blank />
        <Circle />
        <Blank />
        <Blank />
        <Blank />
        <Circle />
        <Blank />
        <Circle />
      </View>
    );
  } else if (props.num == 5) {
    return (
      <View style={stDice}>
        <Circle />
        <Blank />
        <Circle />
        <Blank />
        <Circle />
        <Blank />
        <Circle />
        <Blank />
        <Circle />
      </View>
    );
  } else if (props.num == 6) {
    return (
      <View style={stDice}>
        <Circle />
        <Blank />
        <Circle />
        <Circle />
        <Blank />
        <Circle />
        <Circle />
        <Blank />
        <Circle />
      </View>
    );
  }
};

///////////////////////////////////////////

const Index = () => {
  const [N, setN] = useState<number>(1);

  return (
    <View style={{ flex: 1, gap: 30, paddingTop: 30, paddingHorizontal: 100 }}>
      <Text style={stText}>Dice</Text>
      <Dice num={N} />
      <Button
        title="Roll"
        onPress={() => {
          setN(Math.floor(Math.random() * 6 + 1));
        }}
      />
    </View>
  );
};

export default Index;
