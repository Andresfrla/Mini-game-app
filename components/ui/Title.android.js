import { StyleSheet, Text, Platform } from "react-native";
function Title ({children}) {
    return <Text style={styles.title}>{children}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: 'white',
        textAlign: "center",
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderWidth: 2,
        padding: 12,
        borderColor: 'white',
        marginTop: 24,
        maxWidth: '80%',
        width: 300,
    },
})

export default Title;