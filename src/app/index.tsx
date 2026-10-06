import { useAudioPlayer } from "expo-audio";
import type { ViewStyle } from "react-native";
import { ImageBackground, View } from "react-native";

const IMAGE = {
  keyboard: require("@/assets/keyboard.png"),
};
const AUDIO_SOURCES = {
  p00: require("@/assets/note00.mp3"),
  p01: require("@/assets/note01.mp3"),
  p02: require("@/assets/note02.mp3"),
  p03: require("@/assets/note03.mp3"),
  p04: require("@/assets/note04.mp3"),
  p05: require("@/assets/note05.mp3"),
  p06: require("@/assets/note06.mp3"),
  p07: require("@/assets/note07.mp3"),
  p08: require("@/assets/note08.mp3"),
  p09: require("@/assets/note09.mp3"),
  p10: require("@/assets/note10.mp3"),
  p11: require("@/assets/note11.mp3"),
  p12: require("@/assets/note12.mp3"),
};

const pianoStyle: ViewStyle = {
  flex: 1,
  margin: 5,
  backgroundColor: "rgba(100, 100, 100, 0.3)",
};

const Index = () => {
  const players = Object.entries(AUDIO_SOURCES).reduce(
    (acc, [key, source]) => {
      acc[key] = useAudioPlayer(source);
      return acc;
    },
    {} as Record<string, ReturnType<typeof useAudioPlayer>>,
  );

  function play(note: keyof typeof players) {
    console.log("Playing Sound: " + note);
    players[note].seekTo(0);
    players[note].play();
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ width: "100%", height: "100%" }} resizeMode="stretch" source={IMAGE["keyboard"]}>
        <View style={pianoStyle} onTouchStart={() => play("p00")} />
        <View style={pianoStyle} onTouchStart={() => play("p02")} />
        <View style={pianoStyle} onTouchStart={() => play("p04")} />
        <View style={pianoStyle} onTouchStart={() => play("p05")} />
        <View style={pianoStyle} onTouchStart={() => play("p07")} />
        <View style={pianoStyle} onTouchStart={() => play("p09")} />
        <View style={pianoStyle} onTouchStart={() => play("p11")} />
        <View style={pianoStyle} onTouchStart={() => play("p12")} />
      </ImageBackground>
    </View>
  );
};

export default Index;
