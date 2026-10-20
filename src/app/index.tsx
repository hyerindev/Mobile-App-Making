import { useState } from "react";
import type { ViewStyle } from "react-native";
import { Button, Text, View } from "react-native";

const stCircle: ViewStyle = {
  width: "30%",
  height: "30%",
  borderRadius: "50%",
  borderWidth: 1,
  backgroundColor: "rgb(0, 200, 255)",
};
const Circle = () => {
  return <View style={stCircle} />;
};
const Blank = () => {
  return <View style={{ ...stCircle, opacity: 0 }} />;
};

///////////////////////////

type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6;

const diceFaces = [
  [false, false, false, false, true, false, false, false, false],
  [true, false, false, false, false, false, false, false, true],
  [true, false, false, false, true, false, false, false, true],
  [true, false, true, false, false, false, true, false, true],
  [true, false, true, false, true, false, true, false, true],
  [true, false, true, true, false, true, true, false, true],
] as const;

const Dice = ({ num }: { num: DiceNumber }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
        alignContent: "center",

        width: 160,
        height: 160,
        padding: 10,

        backgroundColor: "rgb(255, 240, 200)",
      }}
    >
      {diceFaces[num - 1].map((item, index) =>
        item ? <Circle key={index} /> : <Blank key={index} />,
      )}
    </View>
  );
};

///////////////////////////////////////////

const Index = () => {
  const [N, setN] = useState<DiceNumber>(1);

  return (
    <View style={{ flex: 1, gap: 30, paddingTop: 30, paddingHorizontal: 100 }}>
      <Text
        style={{
          textAlign: "center",
          margin: 5,
          fontSize: 20,
        }}
      >
        Dice
      </Text>
      <Dice num={N} />
      <Button
        title="Roll"
        onPress={() => {
          setN(Math.floor(Math.random() * 6 + 1) as DiceNumber);
        }}
      />
    </View>
  );
};

export default Index;
