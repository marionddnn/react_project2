import { useState } from "react";
import { Button, View, Text, TextInput,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FormFilm = () => {
  const [resume, setResume] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [link, setLink] = useState("");

  const navigation = useNavigation();
   
  return (
    <>
    <ScrollView>
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

          <View style={{display: "flex", width : "fit-content", background:"rgb(252, 252, 244)", justifyContent:"center"}}>

            <Button color="#CCCF56" title="Ajouter et revenir à la home"
              onPress={() => {
                navigation.navigate({
                  name : "List", 
                  params: {title: title, resume: resume, notes:notes, link:link, image:"" } 
              });
            }}>
            </Button>

          </View>
        
        
        </View>
    
    </View>

  </ScrollView>
  </>
    
  );
}


export default FormFilm;
  
