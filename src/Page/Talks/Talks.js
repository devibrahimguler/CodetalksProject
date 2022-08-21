import React, {useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import styles from "./Talks.style";

import MessageCard from "../../Companents/Card/MessageCard";
import FloatingButton from "../../Companents/FloatingButton";
import InputModal from "../../Companents/InputModal";
import parseContentData from "../../Utils/parseContentData";

const Talks = ({ navigation, route }) => {
    const [data, setData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState("");

    const { ref } = route.params;
    
    useEffect(()=>{
        firestore()
        .collection("Room")
        .doc(ref.ref._documentPath._parts[1])
        .collection("Talks")
        .onSnapshot(snapshot=>{
            const parseData = parseContentData(snapshot.docs);
            setData(parseData);
        });
        navigation.setOptions({ headerTitle: ref.data().course});
    },[]);
    

    const renderMessage = ({item}) => <MessageCard data={item._data} />;
    

    function handleVisible() {
        setIsVisible(isVisible ? false : true)
    }

    function addData() {

        const object = { 
            user : auth().currentUser.email.split("@")[0],
            message : value,
            time : new Date().toISOString(),
        };

        firestore()
        .collection("Room")
        .doc(ref.ref._documentPath._parts[1])
        .collection("Talks")
        .add(object);

        handleVisible();
        setValue("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>{ref.data().course} odası kuruldu!</Text>
            </View>
            <FlatList 
                data={data} 
                renderItem={renderMessage}
            />
            <FloatingButton 
            icon={"plus"} 
            onPress={handleVisible} 
            />
            <InputModal
                value={value}
                onChangeText={setValue}
                isVisible={isVisible}
                onClose={handleVisible}
                placeholder={"Mesajın..."}
                onSend={addData}
            />
        </View>
    );
}

export default Talks;