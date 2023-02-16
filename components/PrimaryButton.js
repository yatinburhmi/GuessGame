import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnercontainer, styles.pressed]
            : styles.btnInnercontainer
        }
        android_ripple={{ color: "640233" }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnInnercontainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
