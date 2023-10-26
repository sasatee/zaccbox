import { View, Text, SafeAreaView} from 'react-native'
import React from 'react';
import RegisterForm from '../component/registerForm';


const Signup = () => {
  return (
    <SafeAreaView>
    <View style={{paddingTop:100}}>
    <RegisterForm />

    </View>

   
  
      
  </SafeAreaView>
  )
}

export default Signup