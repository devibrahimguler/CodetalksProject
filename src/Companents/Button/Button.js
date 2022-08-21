import React from "react";
import { View, TouchableOpacity , Text} from "react-native";
import styles from "./Button.styles";

const Button = ( { title, thema = "primary", onPress}) => {
    return (
        <View style={styles[thema].container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles[thema].button}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;