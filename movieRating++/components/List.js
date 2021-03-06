import { useState } from "react";
import { ScrollView, Image, View, Text, TextInput, Button, Pressable } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import Film from "./Film";

const List = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const initialList =  [
      {
        id : 0,
        title : "film 1", 
        resume : "juste un résumé",
        notes :"20/10",
        link: "lien",
        image:"",
      },
      {
        id : 1,
        title : "film 2", 
        resume : "juste un 2eme résumé",
        notes :"0/10",
        link: "lien",
        image:"",
      }
  ];
  
    const [filmList, setFilmToList] = useState(initialList);
    const [note, setNote] = useState("");

    const addFilmToList = () => {
      const {title, resume, notes, link, image} = route.params;
      let id = filmList.length;
      setFilmToList([...filmList, {id: id, title: title, resume: resume, notes: notes, link: link, image: image}]);
    };

    const setNotesFilm = (film) => {
        const filmUpdate = filmList.map((f) => {
          if (f.id === film.id) {
              return {...f, notes: note};
          } else return f;
        });
        setFilmToList(filmUpdate);
    };
  
    useFocusEffect(() => {
      if (!route.params) return;
      addFilmToList();
      route.params = null;
    });
  
    return (
    <>
    <ScrollView>
        <Button title="rechercher dans ma liste" onPress={() => 
            navigation.navigate({
                name :"Recherche", 
                params: {liste : filmList } })}>
        </Button>
        {filmList.map((film) => (
          <View>
        <Pressable onPress={() => 
            navigation.navigate({
                name :"Detail", 
                params: {title: film.title, resume: film.resume, notes: film.notes, link: film.link, image : film.image } })}>
                 <Film
                    key={film.id}
                    title={film.title}
                    resume={film.resume}
                    notes={film.notes}
                    link={film.link}
                    image={film.image}
                ></Film>
        </Pressable>
          <Text>Ajouter/modifier une note :</Text>
           <TextInput
            style={{background:"#fff", width : "100%", padding : "1rem"}}
            placeholder="Notes"
            onChangeText={setNote}
            onSubmitEditing={() => setNotesFilm(film)}
            value ={note}/>
            <Button title="envoyer" onPress={() => setNotesFilm(film)}></Button>
          </View>
        ))}
      </ScrollView>
    </>
  
    );
}

export default List;