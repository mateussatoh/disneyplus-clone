import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import { Movies } from "../../screens/Movies";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import profile from "../../assets/profile.jpg";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomNavigator() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: "#1A1C29",
          borderTopWidth: 0.2,
          borderTopColor: "#4d5268",
        },
        showLabel: false,
      }}
    >
      <Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={35} color="#fff" />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Movies}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome name="search" size={25} color="#ABB1CC" />
            </View>
          ),
        }}
      />
      <Screen
        name="Downloads"
        component={Movies}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="download" size={28} color="#ABB1CC" />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Movies}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={profile}
              style={{
                height: 32,
                width: 32,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                borderWidth: 1.5,
                borderColor: "#ABB1CC",
              }}
            ></Image>
          ),
        }}
      />
    </Navigator>
  );
}
