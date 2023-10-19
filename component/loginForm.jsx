import React, { useState } from 'react';
import { View, TextInput, StyleSheet,TouchableOpacity ,Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../Redux/createSlice/UserSlice';
import { useNavigation } from '@react-navigation/native';
 import LogOutScreen from "../screens/HomeScreen"







const LoginForm = () => {

    //state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 // redux states  
   const {loading,error} = useSelector((state)=>state.user);
   const dispatch = useDispatch();
    const navigation = useNavigation();

  const handleUserLogin = () => {



    let userCredentials = {
      username,password
  }
  dispatch(signInUser(userCredentials)).then((result)=>{
      if(result.payload){
          setUsername('');
          setPassword('');
          navigation.navigate("home")

      }
  })

  };


  return (
    <>
   
  
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUsername(text)} 
        value={username}
 
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)} 
        value={password}
      />
   

      <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={handleUserLogin} >
      <Text style={styles.buttonText}> {loading?"Loading...":"Login"} </Text>
    

      
      </TouchableOpacity>
      </View>
      


    </>


    
  );
};

const styles = StyleSheet.create({

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop:100,
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginForm;
