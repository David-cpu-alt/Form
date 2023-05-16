import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import images from "./images";
import { TouchableOpacity } from "react-native";
const Form = ({ title, value, setValue, iconeyes, placeholder }) => {
  const [press, setPress] = useState(false);
  return (
    <View style={{ marginBottom: 30, marginTop: 30 }}>
      <Text style={{ marginLeft: 30 }}>{title}</Text>
      {/* TextInput view */}
      <View
        style={[
          styles.textinput,
          { flexDirection: "row", alignItems: "center" },
        ]}
      >
        <TextInput
          value={value}
          onChangeText={(value) => setValue(value)}
          style={{ flex: 1 }}
          secureTextEntry={press}
          placeholder={placeholder}
          placeholderTextColor="brown"
        />
        {iconeyes ? (
          <TouchableOpacity onPress={() => setPress(!false)}>
            <Image
              source={images.iconeyes}
              style={{ height: 20, width: 10, marginRight: 10 }}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Textinput ending  */}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textinput: {
    height: 50,
    width: 300,
    backgroundColor: "white",
    marginHorizontal: 10,
    alignSelf: "center",
    borderWidth: 1,
  },
});
