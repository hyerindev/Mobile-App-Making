import type { TextStyle } from "react-native";

const body1: TextStyle = {
  margin: 10,
  fontSize: 20,
};
const body2: TextStyle = {
  padding: 10,
  fontSize: 30,
};

const inputEnabled: TextStyle = {
  margin: 10,
  padding: 10,
  borderWidth: 1,
  fontSize: 30,
};
const inputDisabled: TextStyle = {
  padding: 10,
  textAlign: "center",
  backgroundColor: "lightgray",
  fontSize: 30,
};

export { body1, body2, inputDisabled, inputEnabled };
