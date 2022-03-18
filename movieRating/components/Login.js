import { TextInput, View } from "react-native";
import { useState } from "react";

const Login = () => {

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
    </View>
    );
  }

export default Login;