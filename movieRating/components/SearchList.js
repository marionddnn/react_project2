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

const Search = () => {
  const navigation = useNavigation();
  const [FilmList, setFilmList] = useState([]);
  const [search, setSearch] = useState("");

  const transformFilm = (film, index) => {
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
  }

  useEffect(() => {
    
  }, []);

  return (
    <ScrollView>
    <View>
        <Text>{nbResults}</Text>
        <TextInput
        onSubmitEditing={searchFilm}
        onChangeText={setSearch}
        style={{background:"#fff", width : "fit-content", margin : "1rem"}}
        value ={search}
        placeholder="Rechercher un film"/>
        <Button title="submit" onPress={searchFilm}></Button>
        <FlatList style={{ flexDirection: "row", width:"100%"}}
            data={FilmList}
            renderItem={({ item }) => (
            <Pressable style={{width:"10%"}} title={item.title} onPress={() => 
                navigation.navigate({
                    name :"Accueil", 
                    params: {title: item.title, resume: item.description, notes:"", link:"https://www.imdb.com/title/"+item.id, image : item.image } })}>
                <img style={{ width: "100%"}} src={item.image}></img>
            </Pressable>
            )}
            keyExtractor={(item) => item.id}
        />
    </View>
    </ScrollView>
  );
};

export default Search;
