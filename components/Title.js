import { StyleSheet, Text } from "react-native";

function Title ({children}) {
    return <Text style={styles.title}>{children}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#ddb52f',
        textAlign: "center",
        borderWidth: 2,
        padding: 12,
        borderColor: '#ddb52f',
    },
})

export default Title;