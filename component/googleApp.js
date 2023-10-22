

import React, {useEffect, useState} from "react";
import * as Google from "expo-auth-session/providers/google"
import * as webBrowser from "expo-web-browser"
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential
} from "firebase/auth";
import GoogleComponent from "./googleComponent";
import {auth} from "../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import {ActivityIndicator, View} from "react-native";






webBrowser.maybeCompleteAuthSession();


function Navigation() {
   const navigation = useNavigation()
    return navigation.navigate("home")

}

export default  GoogleApp=()=>{
    const navigation = useNavigation()

    const [userInfo,setUserInfo] = useState();
    const [loading,setloading] = useState(false)
    const [request,response,promptAsync]= Google.useAuthRequest({
        iosClientId:"745932678832-j54tv0dmrp1g4e2n5166hkjf9n6lv7q0.apps.googleusercontent.com",
        androidClientId:"745932678832-rguukkn19u8ti566rvc3ln8pe21e150i.apps.googleusercontent.com",
        //webClientId:"745932678832-tu5152r0l3pb8o3ajrkenbpmve3b35r7.apps.googleusercontent.com"

    });
    const checkLocalUser = async ()=>{
        try{
            setloading(true)
            const userJSON =await AsyncStorage.getItem("@user");
            const userData = userJSON ? JSON.parse(userJSON):null;

            console.log("local storage",userData);
            setUserInfo(userData);

        }catch (e) {
            alert(e.message);

        }finally {
            setloading(false)
        }
    }


    useEffect(() => {
        if(response?.type=="success"){
            const {id_token} = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth,credential)
            //console.log(response)
        }


    }, [response]);

    useEffect(() => {
        checkLocalUser();
        const unsub = onAuthStateChanged(auth,async(user)=>{
            if(user){
                console.log(JSON.stringify(user,null,2));
                setUserInfo(user);
                await AsyncStorage.setItem("@user",JSON.stringify(user))

            }else{
                console.log("user is not authenticated")
            }
        });

        return()=>unsub();
    }, []);


  if(loading)return(
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <ActivityIndicator size={"large"}/>
  </View>
  )

    return userInfo?   <GoogleComponent promptAsync={promptAsync}/>:null;

}


