import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { MaskedTextInput } from "react-native-mask-text";

const Input = ({ mask, style, onFocus, onBlur, brandColor, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };
  const stylesFocused = [styles.inputFocused, { borderColor: brandColor }];
  if (mask) {
    return (
      <View>
        <MaskedTextInput
          mask={mask}
          style={[styles.input, isFocused && stylesFocused, style]}
          placeholderTextColor="#858A91"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </View>
    );
  }
  return (
    <View>
      <TextInput
        style={[styles.input, isFocused && stylesFocused, style]}
        placeholderTextColor="#858A91"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderColor: "#D1D1D1",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    color: "#151618",
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#0066FF",
    borderWidth: 1.5,
  },
  inputCreditCard: {
    letterSpacing: 2,
  },
});
