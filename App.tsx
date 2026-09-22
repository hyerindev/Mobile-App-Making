import type { TextStyle, ImageStyle } from "react-native";
import { View, ScrollView, Text, Image } from "react-native";

const IMAGES_JS = [
  require("./assets/js-1.png"),
  require("./assets/js-2.png"),
  require("./assets/js-3.png"),
  require("./assets/js-4.png"),
];
const IMAGES_MOVIE = [
  require("./assets/movie-1.png"),
  require("./assets/movie-2.png"),
  require("./assets/movie-3.png"),
  require("./assets/movie-4.png"),
  require("./assets/movie-5.png"),
  require("./assets/movie-6.png"),
  require("./assets/movie-7.png"),
  require("./assets/movie-8.png"),
  require("./assets/movie-9.png"),
];

const textStyle: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
  color: "white",
};
const imageStyle: ImageStyle = {
  width: 200,
  height: 300,
};

const App = () => {
  return (
    <ScrollView
      contentContainerStyle={{ gap: 24, padding: 10, paddingVertical: 50 }}
      style={{ backgroundColor: "black" }}
    >
      <View style={{ width: "100%", height: 300, backgroundColor: "red" }} />
      <View style={{ gap: 8 }}>
        <Text style={textStyle}>주술회전</Text>
        <ScrollView horizontal contentContainerStyle={{ gap: 8 }}>
          {IMAGES_JS.map((item, index) => (
            <Image key={index} source={item} style={imageStyle} />
          ))}
        </ScrollView>
      </View>
      <View style={{ gap: 8 }}>
        <Text style={textStyle}>박스오피스</Text>
        <ScrollView horizontal contentContainerStyle={{ gap: 8 }}>
          {IMAGES_MOVIE.map((item, index) => (
            <Image key={index} source={item} style={imageStyle} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default App;
