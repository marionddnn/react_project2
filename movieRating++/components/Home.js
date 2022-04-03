import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FormFilm from "./FormFilm";
import Search from "./Search";
import List from "./List";

const Tabs = createBottomTabNavigator();

const Home = () => {
  
    return (
    <>
    <Tabs.Navigator initialRouteName="List">
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