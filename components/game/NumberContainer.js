import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import Title from "../ui/Title";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 36,
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});

export default NumberContainer;
