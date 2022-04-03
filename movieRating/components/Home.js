import { useState } from "react";
import { ScrollView, Image, View, Text, TextInput, Button } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Film from "./Film";
import Detail from "./Detail";
import FormFilm from "./FormFilm";
import Search from "./Search";
import List from "./List";

const Tabs = createBottomTabNavigator();

const Home = () => {
  
    return (
    <>
    <Tabs.Navigator initialRouteName="Detail">
          <Tabs.Screen
            name="Detail"
            component={Detail}
          />
          <Tabs.Screen
            name="List"
            component={List}
          />
           <Tabs.Screen
            name="Ajouter un film"
            component={FormFilm}
          />
          <Tabs.Screen
            name="Rechercher sur IMBD"
            component={Search}
          />
        </Tabs.Navigator>
    </>
  
    );
}

export default Home;