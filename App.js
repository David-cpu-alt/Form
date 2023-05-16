import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const App = () => {
  const list_Header_Component = () => {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginBottom: 10,
                  marginHorizontal: 10,
                  marginTop: 10,
                }}
              >
                <Text> {item.Title}</Text>
                {/* Text input */}
                <View>
                  <TextInput style={styles.TextInput} />
                </View>

                {/* Text input ending  */}
              </View>
            );
          }}
        />
      </View>
    );
  };
  const data = [
    {
      id: 1,
      Title: "Mobile number or e-mail",
    },
    {
      id: 2,
      Title: "Password",
    },
    {
      id: 3,
      Title: "First namae",
    },
    {
      id: 4,
      Title: "last name",
    },
    { id: 5, Title: "Age" },
  ];
  const little = [{ id: 1, text: "submit" }];
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginLeft: 10, fontSize: 20 }}>
        {" "}
        FORM CLASS
      </Text>
      <FlatList
        ListHeaderComponent={list_Header_Component}
        data={little}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.submit}>
              <Text style={{ color: "white", fontSize: 18 }}> {item.text}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
    // justifyContent: "center",
  },
  TextInput: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    marginTop: 5,
  },
  submit: {
    height: 50,
    width: "95%",
    backgroundColor: "#0000FE",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    paddingTop: 10,
  },
});

// import { StyleSheet, Text, View, ScrollView } from "react-native";
// import React, { useState } from "react";
// import Home from "./Home";
// import Aboutme from "./Aboutme";
// import Success from "./Success";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const App = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name={"Home"}
//           component={Home}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Aboutme"
//           component={Aboutme}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name={"Success"}
//           component={Success}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;
