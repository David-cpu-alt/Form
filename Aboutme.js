import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Aboutme = ({ navigation }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [errorV, setErrorV] = useState("");
  const [pe, setPe] = useState(false);
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (name.trim() === "" || password.trim() === "") {
      setErrorV(true);
    } else if (name.length < 5 || password.length < 5) {
      setError(false);
    } else {
      setError(false);
      const data = { name, password };
      navigation.navigate("Success", { data });
      console.log(data, "data i want to pass");
    }
  };

  const handlename = (text) => {
    setName(text);
    if (text.length < 3) {
      setErrorV("nnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    } else {
      setErrorV("");
    }
  };
  const handlepassword = (text) => {
    setPassword(text);
    if (text.length < 3) {
      setErrorV("incorrect password");
    } else {
      setErrorV("");
    }
  };
  // const data = route.params.data.phone;
  return (
    <View style={{ marginHorizontal: 30, marginTop: 40 }}>
      {/* Name view */}
      <View style={{ marginBottom: 10 }}>
        <Text> Name</Text>
        <View style={styles.textinput}>
          <TextInput
            placeholder="Enter your name "
            placeholderTextColor={"blue"}
            value={name}
            onChangeText={handlename}
            keyboardType="default"
          />
        </View>
      </View>
      {/* Name view ending  */}
      {/* Password View starting  */}
      <View style={{ marginBottom: 10 }}>
        <Text> Password</Text>
        <View style={styles.textinput}>
          <TextInput
            placeholder="Enter your password "
            placeholderTextColor={"blue"}
            value={password}
            onChangeText={handlepassword}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <Text> </Text>
      {/* Password View Starting */}
      {/* {error ? <Text> please name must be up to 10 letters </Text> : null}
      {error ? <Text> password must be up to 5 letters</Text> : null} */}
      <Text>{errorV}</Text>
      <TouchableOpacity onPress={() => handleSubmit("")} style={styles.ctn}>
        <Text style={{ color: "white", fontSize: 18 }}>submit </Text>
      </TouchableOpacity>
    </View>
    // Parent view ending
  );
};

export default Aboutme;

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    width: 300,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
  },
  ctn: {
    height: 50,
    width: 100,
    backgroundColor: "blue",
    alignSelf: "center",
    paddingTop: 10,
    alignItems: "center",
  },
});
