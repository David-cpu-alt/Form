import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Form from "./Form";

const Home = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    const data = {
      phone,
      password,
      age,
    };
    navigation.navigate("Aboutme", { data });
    console.log(data);
  };

  return (
    <ScrollView style={{ backgroundColor: "white", marginTop: 40, flex: 1 }}>
      <Form
        title="Enter phone number or e-mail address"
        value={phone}
        setValue={setPhone}
        iconeyes={true}
        placeholder="Enter phone number"
      />
      <Form
        title="Enter Password"
        value={password}
        setValue={setPassword}
        iconeyes={true}
        placeholder="Enter your  password"
      />

      <Form
        title="Enter Age"
        value={age}
        setValue={setAge}
        placeholder=" Enter your Age"
      />

      <TouchableOpacity
        // onpress={() => navigation.navigate("Aboutme", { data })}
        onPress={() => handleSubmit()}
        style={styles.button}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}> Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 300,
    backgroundColor: "blue",
    alignSelf: "center",
    alignItems: "center",
    paddingTop: 10,
  },
});
