import { useAudioPlayer } from "expo-audio";
import { useState } from "react";
import { ImageBackground, View } from "react-native";

const IMAGES = {
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

const Index = () => {
  const players = SOUNDS.map((src) => useAudioPlayer(src));
  const [pressed, setPressed] = useState<ReadonlySet<number>>(() => new Set());

  function play(i: number) {
    console.log("Playing Sound: " + i);
    players[i].seekTo(0);
    players[i].play();
  }
  function handleTouchStart(i: number) {
    play(i);
    setPressed((prev) => new Set(prev).add(i));
  }
  function handleTouchEnd(i: number) {
    setPressed((prev) => {
      const next = new Set(prev);
      next.delete(i);
      return next;
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ width: "100%", height: "100%" }} resizeMode="stretch" source={IMAGES["keyboard"]}>
        {WHITE_KEYS.map((i) => (
          <View
            key={i}
            style={{ flex: 1, margin: 5, backgroundColor: pressed.has(i) ? "rgba(100, 100, 100, 0.3)" : "transparent" }}
            onTouchStart={() => handleTouchStart(i)}
            onTouchEnd={() => handleTouchEnd(i)}
          />
        ))}
      </ImageBackground>
    </View>
  );
};

export default Index;
