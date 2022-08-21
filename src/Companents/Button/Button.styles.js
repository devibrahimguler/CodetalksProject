import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        backgroundColor: "#FEA040",
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    button: {
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
    },
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
        },
        button: {
            ...base_style.button,
        },
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "white",
        },
        button: {
            ...base_style.button,
            color: "#FEA040",
        },
    }),
};