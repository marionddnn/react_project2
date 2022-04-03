import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import Film from "./Film";

const {
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button,
  Text,
  Pressable,
} = require("react-native");

const SearchList = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [FilmList, setFilmList] = useState([]);
  const [search, setSearch] = useState("");

  const {liste} = route.params;

  const searchFilm = () => {
      const listeFilm = [];
      setSearch();
      liste.map((f) => {
        if (f.title.includes(search)) {
           listeFilm.push(f);
        }
        setFilmList(listeFilm);
      });
      
  }


  useEffect(() => {
    
  }, []);

  return (
    <ScrollView>
      <TextInput
        onSubmitEditing={searchFilm}
        onChangeText={setSearch}
        style={{background:"#fff", width : "100%", padding : "1rem"}}
        value ={search}
        placeholder="Rechercher un film"/>
        <Button title="submit" onPress={searchFilm}></Button>
    <View>
    {FilmList.map((film) => (
          <View>
              <Film
                key={film.id}
                title={film.title}
                resume={film.resume}
                notes={film.notes}
                link={film.link}
                image={film.image}
            ></Film>
        </View>))}
    </View>
    </ScrollView>
  );
};

export default SearchList;
