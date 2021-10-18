import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AddScreen from './Add';

const Tab = createMaterialBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Add" component={AddScreen} options={{
            tabBarLabel:'Add QR Code',
            tabBarIcon:({color})=>(
                <MaterialCommunityIcon name="qrcode" color={color} size={26}/>
            )
        }}/>
        
    </Tab.Navigator>
  );
};

export default Main;
