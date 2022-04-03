import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormFilm  from "./FormFilm";
import  Home  from "./Home";
import Login from "./Login";
import Search from "./Search";

const Nav = createNativeStackNavigator();

const NavigationTabs = () => {

  return (
        <NavigationContainer>
        <Nav.Navigator initialRouteName="Login">
          <Nav.Screen
            name="Login"
            component={Login}
          />
          <Nav.Screen
            name="Accueil"
            component={Home}
            initialParams={{ title: "", resume: "", notes: "", link: ""}} />
        </Nav.Navigator>
        </NavigationContainer>
  );
};

export default NavigationTabs;