import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import { Movies } from '../screens/Movies';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import profile from '../asssets/profile.jpg'


const Tab = createBottomTabNavigator();

export function BottomNavigator () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 50,
          backgroundColor: "#1A1C29",
          borderTopWidth: .2,
          borderTopColor: "#ABB1CC"
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={28} color="#ABB1CC" />
          ),
        }}
      />
       <Tab.Screen
        name="Search"
        component={Movies}
        options={{
          tabBarIcon: ({color}) => (
            <View>
              <FontAwesome name="search" size={25} color="#ABB1CC"/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Movies}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="download" size={28} color="#ABB1CC" />
          ),
        }}
      /> 
      <Tab.Screen
        name="Profile"
        component={Movies}
        options={{
          tabBarIcon: ({color}) => (
            <Image 
                source={profile}
                style={{
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: "#ABB1CC"
                }}>
            </Image>
          ),
        }}
      /> 
    </Tab.Navigator>
  );
};
