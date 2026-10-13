import type { ReactElement } from "react";
import { Text, View } from "react-native";

const rows: ReactElement[] = [];

for (let r = 2; r <= 6; r += 4) {
  const cols: ReactElement[] = [];

  for (let d = r; d < r + 4; d++) {
    const lines: ReactElement[] = [];
    lines.push(
      <Text key={0} style={{ fontSize: 18, fontWeight: "bold" }}>
        {d}단
      </Text>,
    );

    for (let k = 1; k <= 9; k++) {
      lines.push(
        <Text key={k} style={{ fontSize: 14 }}>
          {d} × {k} = {d * k}
        </Text>,
      );
    }
    cols.push(
      <View key={d} style={{ flex: 1, borderWidth: 1, margin: 2, padding: 5 }}>
        {lines}
      </View>,
    );
  }
  rows.push(
    <View key={r} style={{ flexDirection: "row" }}>
      {cols}
    </View>,
  );
}

const Index = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 40 }}>구구단</Text>
      {rows}
    </View>
  );
};

export default Index;
