import { StyleSheet, Text } from "react-native";
function Title ({children}) {
    return <Text style={styles.title}>{children}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: 'white',
        textAlign: "center",
        borderWidth: 2,
        padding: 12,
        borderColor: 'white',
        marginTop: 24,
    },
})

export default Title;