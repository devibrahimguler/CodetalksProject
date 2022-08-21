import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal:15,
        borderRadius: 10,
        backgroundColor: "white",
    },
    header_container: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    time: {
        color: "gray",
        fontStyle: "italic",
    },
    message: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 12,
    },
});