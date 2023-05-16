import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Success = ({ route }) => {
  const name = route.params.data.name;
  console.log(name);

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50, fontWeight: "bold" }}> </Text>
      <Text style={{ color: "red" }}> Welcome {name}</Text>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
