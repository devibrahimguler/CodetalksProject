import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Input.styles";

const Input = ({ placeholder, value, onChangeText, isSecure = false }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={isSecure}
                placeholderTextColor={"white"}
            />
        </View>
    );
}

export default Input;