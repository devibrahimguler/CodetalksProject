import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import auth from "@react-native-firebase/auth";

import Login from "./Page/Login";
import Register from "./Page/Register";
import Room from "./Page/Room";
import Talks from "./Page/Talks";

const Stack = createNativeStackNavigator();

const EntryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackVisible: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={Login} options={{
        headerTitle: "Odalar",
        headerBackVisible: false,
        gestureEnabled: false,
        headerBackButtonMenuEnabled: false,     
      }}  />
      <Stack.Screen name="RegisterScreen" component={Register} options={{
        headerTitle: "Odalar",
        headerBackVisible: false,
        gestureEnabled: false,
        headerBackButtonMenuEnabled: false,     
      }}  />
    </Stack.Navigator>
  );
}

const InnerStack = ({ navigation }) => {

  const onClosing = () => {
    auth().signOut();
    navigation.navigate("SignInPage");
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#FE6F00",
      }}
    >
      <Stack.Screen name="RoomScreen" component={Room} options={{
        headerTitle: "Odalar",
        headerBackVisible: false,
        gestureEnabled: false,
        headerBackButtonMenuEnabled: false,     
      }} />
      <Stack.Screen name="TalksScreen" component={Talks} options={{
        headerBackButtonMenuEnabled: false,
        headerRight: () => <Icon name={"logout"} size={20} color={"#FE6F00"} onPress={onClosing} />
      }} />
    </Stack.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
           !auth().currentUser ? "SignInPage" : "InnerPage" 
        }
      >
        <Stack.Screen name="SignInPage" component={EntryStack} options={{
          headerShown: false,
          headerBackVisible: false,
          gestureEnabled: false,
          headerBackButtonMenuEnabled: false,
        }} />
        <Stack.Screen name="InnerPage" component={InnerStack} options={{
          headerShown: false,
          headerBackVisible: false,
          gestureEnabled: false,
          headerBackButtonMenuEnabled: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;