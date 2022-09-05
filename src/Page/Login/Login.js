import React from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import auth from "@react-firebase/auth";
import styles from "./Login.styles";
import { Formik } from "formik";

import Input from "../../Companents/Input";
import Button from "../../Companents/Button";

const initialFormValues = {
    usermail: "",
    password: "",
};

const Login = ({ navigation }) => {

    function handleSignIn(val) {
        
        
        auth().signInWithEmailAndPassword(val.usermail, val.password)
        .then(() => {
            navigation.navigate("InnerPage");
        })
        .catch(() => {
            Alert.alert("Giriş Yapılamadı", "Kullanıcı yada Şifre Yanlış!");
        })
        
    }

    function signUp() {
        navigation.navigate("RegisterScreen");
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
                        onSubmit={handleSignIn}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <>
                                <Input
                                    value={values.usermail}
                                    onChangeText={handleChange("usermail")}
                                    placeholder={"e-postanızı giriniz.."}
                                />
                                <Input
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    isSecure={true}
                                    placeholder={"şifrenizi giriniz.."}
                                />
                                <Button
                                    title={"Giriş Yap"}
                                    onPress={handleSubmit}
                                />
                            </>
                        )}
                    </Formik>
                    <Button
                        title={"Kayıt Ol"}
                        thema="secondary"
                        onPress={signUp}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Login;