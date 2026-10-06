import { useAudioPlayer } from "expo-audio";
import { useState } from "react";
import type { ViewStyle } from "react-native";
import { ImageBackground, View } from "react-native";

const IMAGE = {
  keyboard: require("@/assets/keyboard.png"),
} as const;
const SOUNDS = [
  require("@/assets/note00.mp3"),
  require("@/assets/note01.mp3"),
  require("@/assets/note02.mp3"),
  require("@/assets/note03.mp3"),
  require("@/assets/note04.mp3"),
  require("@/assets/note05.mp3"),
  require("@/assets/note06.mp3"),
  require("@/assets/note07.mp3"),
  require("@/assets/note08.mp3"),
  require("@/assets/note09.mp3"),
  require("@/assets/note10.mp3"),
  require("@/assets/note11.mp3"),
  require("@/assets/note12.mp3"),
] as const;
const WHITE_KEYS = [0, 2, 4, 5, 7, 9, 11, 12] as const;

const pianoStyle: ViewStyle = {
  flex: 1,
  margin: 5,
};
const onWhite: string = "rgba(100, 100, 100, 0.3)";

const Index = () => {
  const players = SOUNDS.map((src) => useAudioPlayer(src));
  const [k00, setk00] = useState<string>("transparent");

  function play(i: number) {
    console.log("Playing Sound: " + i);
    players[i].seekTo(0);
    players[i].play();
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ width: "100%", height: "100%" }} resizeMode="stretch" source={IMAGE["keyboard"]}>
        {WHITE_KEYS.map((i) => (
          <View key={i} style={pianoStyle} onTouchStart={() => play(i)} />
        ))}
      </ImageBackground>
    </View>
  );
};

export default Index;
