import { useAudioPlayer } from "expo-audio";
import { Text, View } from "react-native";

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

const Index = () => {
  const players = Object.entries(AUDIO_SOURCES).reduce(
    (acc, [key, source]) => {
      acc[key] = useAudioPlayer(source);
      return acc;
    },
    {} as Record<string, ReturnType<typeof useAudioPlayer>>,
  );

  return (
    <View>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
};

export default Index;
