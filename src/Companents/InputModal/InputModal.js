import React from "react";
import { View, TextInput } from "react-native";
import Modal from "react-native-modal";
import styles from "./InputModal.styles";

import Button from "../Button";

const InputModal = ({ isVisible, onClose, onSend, placeholder, value, onChangeText, }) => {
    return (
        <Modal
            style={styles.modal}
            isVisible={isVisible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        multiline
                    />
                </View>
                <Button title={"Gönder"} onPress={onSend} />
            </View>
        </Modal>
    );
}

export default InputModal;