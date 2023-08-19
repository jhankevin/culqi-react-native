import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export const CulqiForm = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Número de tarjeta" />
      <Text>Culqi</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
