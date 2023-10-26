import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/createSlice/UserSlice';

import { useNavigation } from '@react-navigation/native';
import {auth} from "../firebaseConfig";


import {
signOut
} from "firebase/auth";



const LogoutScreen = () => {
    const navigation = useNavigation()

    const userData = useSelector((state)=>state.user.data);
    const apiKey = userData? userData.API_key:null;
  const dispatch = useDispatch();

  const handleLogout = () => {
  
    dispatch(logout());

    
    navigation.navigate('Login');
  };

  useEffect(() => {
    const logoutInterval = setInterval(() => {
      handleLogout();
    }, 5000); // 5 seconds

    
    return () => {
      clearInterval(logoutInterval);
    };
  }, []);

  return (
    <View>
        <Text>User details : {JSON.stringify(userData)}</Text>
        <Text>{`API key:${JSON.stringify(apiKey)}`}</Text>
      <Text>Are you sure you want to log out?</Text>
      <Button title="Logout" onPress={handleLogout} />
        <Button title="sign Out" onPress={async ()=>await signOut(auth)}/>
    </View>
  );
};

export default LogoutScreen;
