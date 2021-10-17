import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import tailwind from "tailwind-rn";

const Login = () => {
  return (
    <View style={tailwind("flex items-center justify-center h-full")}>
      <View
        style={tailwind(
          "rounded border border-2  border-gray-500 w-10/12  items-center border-opacity-20"
        )}
      >
        <TextInput
          placeholder="user name"
          style={tailwind(
            "border border-gray-500 border-opacity-20 h-10 w-10/12 my-10"
          )}
        />
        <TextInput
          placeholder="user Password"
          style={tailwind(
            "border border-gray-500 border-opacity-20 h-10 w-10/12 my-10"
          )}
        />
        <Button title="Login" style={tailwind("my-10")}/>
      </View>
    </View>
  );
};

export default Login;
