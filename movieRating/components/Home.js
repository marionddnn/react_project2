import { useState } from "react";
import { ScrollView, Image } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import Film from "./Film";

const Home = () => {
    const route = useRoute();
    const initialList =  [
      {
        id : 0,
        title : "film 1", 
        resume : "juste un résumé",
        notes :"20/10",
        link: "lien",
      },
      {
        id : 1,
        title : "film 2", 
        resume : "juste un 2eme résumé",
        notes :"0/10",
        link: "lien",
      }
  ];
  
    const [filmList, setFilmToList] = useState(initialList);
  
    const addFilmToList = () => {
      const {title, resume, notes, link} = route.params;
      let id = filmList.length;
      setFilmToList([...filmList, {id: id, title: title, resume: resume, notes: notes, link: link}]);
    };
  
    useFocusEffect(() => {
      if (!route.params) return;
      addFilmToList();
      route.params = null;
    });
  
    return (
    <>
    <ScrollView style={{ flexDirection: "row", flexWrap: "wrap"}}>
        {filmList.map((film) => (
          <Film
            key={film.id}
            title={film.title}
            resume={film.resume}
            notes={film.notes}
            link={film.link}
          ></Film>
        ))}
      </ScrollView>
    </>
  
    );
}

export default Home;