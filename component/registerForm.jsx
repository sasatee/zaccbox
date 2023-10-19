import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,TouchableOpacity ,Text} from 'react-native';
import { useDispatch ,useSelector} from 'react-redux';
import { signUpUser } from '../Redux/createSlice/UserSlice';
import { useFetchDataQuery, useFetchProductByIdQuery } from '../Services/ApiCall';
import { Getproduct } from '../Redux/createSlice/ProductSlice/ProductSlice';


const RegisterForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [lastname, setlastname] = useState('');
  const [firstname,setfirstname] = useState("");
  const [companyName,setcompanyName] = useState("");


  const dispatch = useDispatch()




  // dispatch(Getproduct())

  // const {data} = useFetchDataQuery();
  // console.log(JSON.stringify(data))

// const res = useFetchProductByIdQuery("7");

// console.log(JSON.stringify(res))



  const handleUserSignUp = () => {
    console.table(emailAddress,lastname,firstname,companyName)
    dispatch(signUpUser({lastname,firstname,emailAddress,companyName}))
  };

  return (
    <>
   
    <View style={styles.container}>

    <TextInput
        style={styles.input}
        placeholder="Company Name"
        onChangeText={(text) => setcompanyName(text)}
        value={companyName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => setEmailAddress(text)}
        value={emailAddress}
      />
          <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => setfirstname(text)}
        value={firstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setlastname(text)}
        value={lastname}
      />
   
    </View>
    <TouchableOpacity style={styles.button} onPress={handleUserSignUp} >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    

    </>


    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    margin:30,
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop:100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RegisterForm;
