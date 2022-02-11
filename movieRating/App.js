import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, View, Text, TextInput, ScrollView, Image } from "react-native";
import { NavigationContainer, useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";

const Film = ({title, resume, notes, link}) => {
  return (
    <View style={{ flexDirection: "column", margin : "1rem" }}>
      <Text style={{ fontSize: 32, background: "#CCCF56", padding : "1rem", color : "white", border : "2px solid #3F3175" }}>Titre : {title}</Text>
      <Text style={{ fontSize: 22, background: "#3F3175", padding : "1rem", color : "white" }}>Résumé : {resume}</Text>
      <Text style={{ fontSize: 20, background: "#E9EAB3", padding : "1rem", color : "#3F3175", borderRight : "2px solid #3F3175", borderLeft : "2px solid #3F3175" }}>Note : {notes}</Text>
      <Text style={{ fontSize: 15, background: "#CCCF56", padding : "1rem", color : "#3F3175", border : "2px solid #3F3175"}}>Lien : {link}</Text>
      {/*<Image source={{uri:image}} style={{ width: 400, height: 400 }}/>*/}
    </View>
  );
}

const Title = () => {
  return (
    <Text style={{ fontSize: 30, background : "#CCCF56", color : "#fff", padding: "0.5rem", textAlign : "center"}}>Movie Rating App</Text>
  );
}

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
   <><Title></Title><ScrollView style={{ flexDirection: "row", flexWrap: "wrap"}}>
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

const FormFilm = () => {
  
  const [resume, setResume] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [link, setLink] = useState("");

  const navigation = useNavigation();
 
  return (
  <View style={{display: "flex", margin:"2rem", padding:"2rem", background:"rgb(252, 252, 244)", justifyContent:"center"}}>

    <View>

      <Text style={{ fontSize: 32, margin:"2rem" }}>Movie Rating App Form</Text>

      <View style={{display: "flex", width : "fit-content", marginBottom : "1rem", background:"rgb(252, 252, 244)", justifyContent:"center"}}>

      <Button 
        color="#CCCF56" title="choisir image">
      </Button>

      </View>

      <View  style={{background:"rgb(235, 225, 142)", width : "fit-content", margin : "1rem"}}>

        <TextInput
          onChangeText={setTitle}
          style={{background:"#fff", width : "fit-content", margin : "1rem"}}
          value ={title}
          placeholder="Titre"/>

        <TextInput
          style={{background:"#fff", width : "fit-content", margin : "1rem"}}
          placeholder="Résumé"
          onChangeText={setResume}
          value ={resume}/>

        <TextInput
          style={{background:"#fff", width : "fit-content", margin : "1rem"}}
          placeholder="Notes"
          onChangeText={setNotes}
          value ={notes}/>

        <TextInput
          style={{background:"#fff", width : "fit-content", margin : "1rem"}}
          value={link}
          onChangeText={setLink}
          placeholder="IMBD link"/>

      </View>

      {/*<View style={{display: "flex", width : "fit-content", marginBottom : "1rem", background:"rgb(252, 252, 244)", justifyContent:"center"}}>

        <Button color="#CCCF56" title="Valider" onPress={addFilmToList}></Button>

      </View>*/}

      <View style={{display: "flex", width : "fit-content", background:"rgb(252, 252, 244)", justifyContent:"center"}}>

        <Button color="#CCCF56" title="Ajouter et revenir à la home"
          onPress={() => {
            navigation.navigate({
              name : "Home", 
              params: {title: title, resume: resume, notes:notes, link:link } 
          });
          }}>
        </Button>

      </View>
    
    
    </View>


  </View>

  );
}

const Tabs = createBottomTabNavigator();

const App = () => {


  return (
      <NavigationContainer>
      <Tabs.Navigator initialRouteName="Form">
        <Tabs.Screen 
          name="Home"
          component={Home}
          initialParams={{ title: "", resume: "", notes: "", link: ""}} />
        <Tabs.Screen
          name="Form"
          component={FormFilm}
        />
      </Tabs.Navigator>
      </NavigationContainer>
  );
};

export default App;
