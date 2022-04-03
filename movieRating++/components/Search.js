import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const {
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button,
  Text,
  Pressable,
} = require("react-native");

const baseUrl = "https://imdb-api.com/en/API/SearchMovie/k_73jom5w9/";

const Search = () => {
  const navigation = useNavigation();
  const [FilmList, setFilmList] = useState([]);
  const [search, setSearch] = useState("");
  const [nbResults, setNbResults] = useState("");

  const transformFilm = (film) => {
    return {
      description: film.description,
      id: film.id,
      image: film.image,
      resultType: film.resultType,
      title: film.title,
      image : film.image,
    };
  };

  const searchFilm = () => {
      setSearch();
      fetchFilms();
  }

  const fetchFilms = async () => {
    let res = await fetch(baseUrl + search);
    let json = await res.json();
    json.results !== null && json.results.length !== 0 ? (setFilmList(json.results.map(transformFilm)), setNbResults(json.results.length)) : setNbResults("Aucun résultats");
  };

  useEffect(() => {
    
  }, []);

  return (
    <View>
        <Text>{nbResults}</Text>
        <TextInput
        onSubmitEditing={searchFilm}
        onChangeText={setSearch}
        style={{background:"#fff", width : "100%", margin : "1rem"}}
        value ={search}
        placeholder="Rechercher un film"/>
        <Button title="submit" onPress={searchFilm}></Button>
        <FlatList style={{ flexDirection: "row", width:"100%"}}
            data={FilmList}
            renderItem={({ item }) => (
            <Pressable style={{width:"100%"}} title={item.title} onPress={() => 
                navigation.navigate({
                    name :"List", 
                    params: {title: item.title, resume: item.description, notes:"", link:"https://www.imdb.com/title/"+item.id, image : item.image } })}>
                <img style={{ width: "100%"}} src={item.image}></img>
            </Pressable>
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
  );
};

export default Search;
