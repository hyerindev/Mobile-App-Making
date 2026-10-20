import { useState } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { Button, ScrollView, Text, View } from "react-native";

const circleStyle: ViewStyle = {
  width: "30%",
  height: "30%",
  borderRadius: "50%",
  borderWidth: 1,
  backgroundColor: "rgb(0, 200, 255)",
};
const Circle = () => {
  return <View style={circleStyle} />;
};
const Blank = () => {
  return <View style={{ ...circleStyle, opacity: 0 }} />;
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

const textStyle: TextStyle = {
  textAlign: "center",
  fontSize: 20,
  lineHeight: 30,
};

const Index = () => {
  const [a, setA] = useState<DiceNumber>(1);
  const [b, setB] = useState<DiceNumber>(1);
  const [history, setHistory] = useState<string[]>([]);

  function handlePress() {
    const nextNumberList: DiceNumber[] = [];
    for (let index = 0; index < 2; index++)
      nextNumberList.push(Math.floor(Math.random() * 6 + 1) as DiceNumber);

    setA(nextNumberList[0]);
    setB(nextNumberList[1]);

    setHistory((prev) => [
      ...prev,
      `${nextNumberList[0]}+${nextNumberList[1]}=${nextNumberList[0] + nextNumberList[1]}`,
    ]);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        gap: 24,
        paddingTop: 30,
      }}
    >
      <Text style={textStyle}>{`Double Dice\n${a + b}`}</Text>
      <View style={{ flexDirection: "row", gap: 24 }}>
        <Dice num={a} />
        <Dice num={b} />
      </View>
      <View style={{ width: 160 }}>
        <Button title="Roll" onPress={handlePress} />
      </View>
      <Text style={{ ...textStyle, marginBottom: -24 }}>History</Text>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <Text style={textStyle}>{history.map((item) => `${item}\n`)}</Text>
      </ScrollView>
    </View>
  );
};

export default Index;
