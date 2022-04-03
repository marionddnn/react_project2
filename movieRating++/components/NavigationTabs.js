import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from "./Home";
import Login from "./Login";
import SearchList from "./SearchList";
import Detail from "./Detail";

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
          <Nav.Screen
            name="Recherche"
            component={SearchList}
          />
          <Nav.Screen
            name="Detail"
            component={Detail}
          />
        </Nav.Navigator>
        </NavigationContainer>
  );
};

export default NavigationTabs;