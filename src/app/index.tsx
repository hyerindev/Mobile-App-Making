import { useState } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { Button, Text, View } from "react-native";

const stCircle: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: "rgb(0, 200, 255)",
  borderWidth: 1,
  margin: 2,
};
const stText: TextStyle = {
  textAlign: "center",
  fontSize: 20,
  margin: 5,
};
const stDice: ViewStyle = {
  backgroundColor: "rgb(255, 240, 200)",
  padding: 10,
};

const Circle = () => {
  return <View style={stCircle} />;
};
const Blank = () => {
  return <View style={[stCircle, { backgroundColor: undefined, borderWidth: 0 }]} />;
};

///////////////////////////

const Dice = (props: { num: number }) => {
  if (props.num == 1) {
    return (
      <View style={stDice}>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
      </View>
    );
  } else if (props.num == 2) {
    return (
      <View style={stDice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 3) {
    return (
      <View style={stDice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 4) {
    return (
      <View style={stDice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 5) {
    return (
      <View style={stDice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  } else if (props.num == 6) {
    return (
      <View style={stDice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  }
};

///////////////////////////////////////////

const Index = () => {
  const [N, setN] = useState<number>(1);

  return (
    <View style={{ flex: 1 }}>
      <Text style={stText}>Dice</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Dice num={N} />
      </View>
      <View style={{ marginHorizontal: 100, marginVertical: 30 }}>
        <Button
          title="Roll"
          onPress={() => {
            setN(Math.floor(Math.random() * 6 + 1));
          }}
        />
      </View>
    </View>
  );
};

export default Index;
