import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import tailwind from "tailwind-rn";
import Axios from "axios";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [userpassword, setuserpassword] = useState("");

  const LoginUser = () => {
    if (username != "" && userpassword != "") {
      Axios.get("http://127.0.0.1:3001/Login", {
        params: { username: username, userpassword: userpassword },
      }).then((response) => {
        console.log(response.data.userNumber);
        if (response.data.userNumber > 0) {
          navigation.navigate("Main");
        } else {
          alert("wrong username or password");
          Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "confirm",
              },
            ],
            { cancelable: false }
          );
        }
      });
    }else{
      alert("Must Filled up username and password field");
    }
  };

  return (
    <View style={tailwind("flex items-center justify-center h-full")}>
      <Text style={tailwind("text-lg font-bold")}>
        Audit Commission Inventory
      </Text>
      <View style={tailwind("w-10/12  items-center")}>
        <TextInput
          placeholder="user name"
          onChangeText={(username) => setUsername(username)}
          style={tailwind(
            "rounded border border-gray-500 border-opacity-20 h-10 w-10/12 my-5 p-2"
          )}
        />
        <TextInput
          placeholder="user Password"
          secureTextEntry={true}
          onChangeText={(userpassword) => {
            setuserpassword(userpassword);
          }}
          style={tailwind(
            "rounded border border-gray-500 border-opacity-20 h-10 w-10/12 my-5 p-2"
          )}
        />
        <Button title="Login" onPress={() => LoginUser()} />
      </View>
    </View>
  );
};

export default Login;
