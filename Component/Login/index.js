import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import tailwind from "tailwind-rn";

const Login = () => {
  return (
    <View style={tailwind("flex items-center justify-center h-full")}>
      <Text style={tailwind("text-lg font-bold")}>Audit Commission Inventory</Text>
      <View
        style={tailwind(
          "w-10/12  items-center"
        )}
      >
        <TextInput
          placeholder="user name"
          style={tailwind(
            "rounded border border-gray-500 border-opacity-20 h-10 w-10/12 my-5 p-2"
          )}
        />
        <TextInput
          placeholder="user Password"
          style={tailwind(
            "rounded border border-gray-500 border-opacity-20 h-10 w-10/12 my-5 p-2"
          )}
        />
        <Button title="Login" />
      </View>
    </View>
  );
};

export default Login;
