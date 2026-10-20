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

const diceFaces = [
  [false, false, false, false, true, false, false, false, false],
  [true, false, false, false, false, false, false, false, true],
  [true, false, false, false, true, false, false, false, true],
  [true, false, true, false, false, false, true, false, true],
  [true, false, true, false, true, false, true, false, true],
  [true, false, true, true, false, true, true, false, true],
] as const;

const Dice = ({ num }: { num: number }) => {
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
  const [N, setN] = useState<number>(1);

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
          setN(Math.floor(Math.random() * 6 + 1));
        }}
      />
    </View>
  );
};

export default Index;
