import { body1 } from "@/styles/text";
import { Image, Text, View } from "react-native";

const IMAGES = {
  cat: require("@/assets/cat-icon.png"),
};

const About = () => {
  return (
    <View>
      <Text style={body1}>This is About the app.</Text>
      <Image source={IMAGES["cat"]} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default About;
