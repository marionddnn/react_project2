import { View, Text, Image, Linking, Pressable  } from "react-native";

const Film = ({title, resume, notes, link, image}) => {
    return (
      <View style={{ flexDirection: "column", margin : "1rem" }}>
        <Text style={{ fontSize: 32, background: "#CCCF56", padding : "1rem", color : "white", border : "2px solid #3F3175" }}>Titre : {title}</Text>
        <Text style={{ fontSize: 22, background: "#3F3175", padding : "1rem", color : "white" }}>Résumé : {resume}</Text>
        <Text style={{ fontSize: 20, background: "#E9EAB3", padding : "1rem", color : "#3F3175", borderRight : "2px solid #3F3175", borderLeft : "2px solid #3F3175" }}>Note : {notes}</Text>
        <Pressable 
        onPress={() => Linking.openURL(link)}
        style={{ fontSize: 15, background: "#CCCF56", padding : "1rem", color : "#3F3175", border : "2px solid #3F3175"}}>
        {({ pressed }) =>
          <Text style={{
            textDecorationLine: 'underline',
            color: pressed ? 'red' : 'blue'
          }}>Lien IMBD</Text>
        }
      </Pressable>
      <Image
        style={{ width: "100%", height: 500, background: "#CCCF56", padding : "1rem", color : "#3F3175", border : "2px solid #3F3175" }}
        source={{
          uri: image,
        }}
      />
      </View>
    );
}

export default Film;