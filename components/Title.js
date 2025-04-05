import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Title ({children}) {
    return <Text style={styles.title}>{children}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.accent,
        textAlign: "center",
        borderWidth: 2,
        padding: 12,
        borderColor: Colors.accent,
    },
})

export default Title;