import React from "react";
import { Text, View } from "react-native";
import styles from "./MessageCard.style";
import { formatDistance, parseISO } from "date-fns";

const MessageCard = ({ data }) => {
    const formattedDate = formatDistance(parseISO(data.time), new Date(), { addSuffix: true });

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.username}>{data.user}</Text>
                <Text style={styles.time}>{formattedDate}</Text>
            </View>
            <Text style={styles.message}>{data.message}</Text>
        </View>
    );
}

export default MessageCard;