import { TextInput, View, Button } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";




const Login = () => {

  const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
    <View>
      <TextInput
      onChangeText={setEmail}
      placeholder="Entrez votre email"
      value={email}
      />
      <TextInput
      onChangeText={setPassword}
      placeholder="Entrez votre mot de passe"
      value={password}
      />
      <Button title="Login"
          onPress={() => {
            navigation.navigate({
              name : "Accueil", 
          });
        }}>
      </Button>
    </View>
    );
  }

export default Login;