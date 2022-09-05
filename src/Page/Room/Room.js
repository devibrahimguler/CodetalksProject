import React from "react";
import { View, FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";
import styles from "./Room.style";

import CourseCard from "../../Companents/Card/CourseCard";
import FloatingButton from "../../Companents/FloatingButton";
import InputModal from "../../Companents/InputModal";

const Room = ({ navigation }) => {
    const [data, setData] = React.useState([]);
    const [isVisible, setIsVisible] = React.useState(false);
    const [value, setValue] = React.useState(false);

    const renderCourse = ({ item }) => <CourseCard title={item.data().course} onPress={() => hendleTalks(item)} />;

    React.useEffect(()=>{
        firestore().collection("Room")
        .onSnapshot(snapshot=>{
            setData(snapshot.docs);
        });
    },[]);

    function hendleTalks(ref) {
        navigation.navigate("TalksScreen", { ref: ref });
    }

    function handleVisible() {
        setIsVisible(isVisible ? false : true)
        setValue("");
    }

    function addData() {
        if (value != "") {
            const object = { course: value };
            firestore().collection("Room").add(object);
            handleVisible();
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.inner_container}
                data={data}
                renderItem={renderCourse}
                numColumns={2}
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
                placeholder={"Oda adı..."}
                onSend={addData}
            />
        </View>
    );
}

export default Room;