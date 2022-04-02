import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import FormFilm  from "./FormFilm";
import  Home  from "./Home";
import Login from "./Login";
import Search from "./Search";

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {

  return (
        <NavigationContainer>
        <Tabs.Navigator initialRouteName="Login">
          <Tabs.Screen
            name="Login"
            component={Login}
          />
          <Tabs.Screen 
            name="Home"
            component={Home}
            initialParams={{ title: "", resume: "", notes: "", link: ""}} />
          <Tabs.Screen
            name="Form"
            component={FormFilm}
          />
          <Tabs.Screen
            name="search"
            component={Search}
          />
        </Tabs.Navigator>
        </NavigationContainer>
  );
};

export default NavigationTabs;
