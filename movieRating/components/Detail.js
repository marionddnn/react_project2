import { useState } from "react";
import { ScrollView, Image, View, Text, TextInput, Button } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import Film from "./Film";

const Detail = () => {
    const route = useRoute();
    const [film, setFilm] = useState({});

    const displayFilm = () => {
      const {title, resume, notes, link, image} = route.params;
      let id = 0;
      setFilm({id: id, title: title, resume: resume, notes: notes, link: link, image: image});
    };
  
    useFocusEffect(() => {
      if (!route.params) return;
      displayFilm();
      route.params = null;
    });
  
    return (
    <>
    <ScrollView style={{ flexDirection: "row", flexWrap: "wrap"}}>
          <View>
          <Film
            key={film.id}
            title={film.title}
            resume={film.resume}
            notes={film.notes}
            link={film.link}
            image={film.image}
          ></Film>
          </View>
      </ScrollView>
    </>
  
    );
}

export default Detail;