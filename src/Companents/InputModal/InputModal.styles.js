import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        height: deviceSize.height / 3,
        backgroundColor: "white",
        padding: 15,
        marginHorizontal:10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    input_container:{
        flex: 1,
    },
    modal:{
        justifyContent: "flex-end",
        margin:0,
    },
});