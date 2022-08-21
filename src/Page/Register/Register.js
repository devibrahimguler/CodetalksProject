import React from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import styles from "./Register.style";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";

import Input from "../../Companents/Input";
import Button from "../../Companents/Button";

const initialFormValues = {
    usermail: "",
    password: "",
    repassword: "",
};

const Register = ({ navigation }) => {

    const handleSignIn = () => {
        navigation.navigate("LoginScreen");
    }

    const handleSignUp = (val) => {
        if(val.password == val.repassword) {
            auth().createUserWithEmailAndPassword(val.usermail, val.password)
            .then(()=> {
                Alert.alert(val.usermail, "Kayıt Başarılı!");
                navigation.navigate("InnerPage");
            })
            .catch(error => {
                Alert.alert("Kayıt Başarısız!", "Kullanıcı Mevcut!");
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.logo_container}>
                    <Text style={styles.logo}>codetalks</Text>
                </View>
                <View style={styles.inner_container} >
                    <Formik
                        initialValues={initialFormValues}
                        onSubmit={handleSignUp}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <>
                                <Input
                                    value={values.usermail}
                                    onChangeText={handleChange('usermail')}
                                    placeholder={"e-postanızı giriniz.."}
                                />
                                <Input
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    isSecure={true}
                                    placeholder={"şifrenizi giriniz.."}
                                />
                                <Input
                                    value={values.repassword}
                                    onChangeText={handleChange("repassword")}
                                    isSecure={true}
                                    placeholder={"şifrenizi tekrar giriniz.."}
                                />
                                <Button
                                    title={"Kayıt Ol"}
                                    onPress={handleSubmit}
                                />
                            </>
                        )}
                    </Formik>
                    <Button title={"Geri"} thema="secondary" onPress={handleSignIn} />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Register;