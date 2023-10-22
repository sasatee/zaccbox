// import { useState } from "react";
// import { useEffect } from "react";
// import { StyleSheet,Text,View,Image,Button } from "react-native";

// import React from 'react'
// import * as Google from "expo-auth-session/providers/google"

// const GoogleComponent = () => {


//   const [accessToken,setAccessToken] = useState()
// const [request,response,promptAsync] = Google.useAuthRequest({
//   androidClientId:"955535789883-n9daldv7v7aen0lu379qn6ful4idu23o.apps.googleusercontent.com",
//   expoClientId:"955535789883-cea274aj1v75gars5ccmnu5i74gvmmr8.apps.googleusercontent.com"

// });


// useEffect(()=>{


//   if(response?.type ==="success"){
//     setAccessToken(response.authentication.accessToken)
//   }
       
// },[response]);


// const getUserData = async () => {
//   let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
//     headers: { Authorization: `Bearer ${accessToken}` }
//   });

//   userInfoResponse.json().then(data => {
//     console.log(data);
//     setUserInfo(data);
//   });
// };

//   const showUserData = () =>{
//     if(userInfo){
//       return(
//         <View style={style.userInfo}>
//           <Image source ={{uri:userInfo.picture}} style={style.profilePic}/>
//           <Text>Welcome,{userInfo.name}</Text>
//           <Text>{userInfo.email}</Text>
//         </View>
//       )
//     }
//   }

//   return (
//     <View style={style.container}>
//       <Button title={accessToken? "Get user data":"Login"} onPress={accessToken? getUserData: ()=>promptAsync({useProxy: true,showInRecents:true})}/>
//     </View>
//   )
// }



// const style = StyleSheet.create({
//   container:{
//     //flex:1,
//     backgroundColor:"#fff",
//     alignItems:"center",
//     justifyContent:"center"
//   },
//   profilePic:{
//     width:50,
//     height:50
//   },
//   userInfo:{
//     alignItems:"center",
//     justifyContent:"center"
//   }
// })

// export default GoogleComponent








// firebase







import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";


export default function GoogleComponent ({promptAsync})  {
    const navigation = useNavigation()
  return (
    <SafeAreaView
    style={{alignItems:"center",justifyContent:"center"}}>


        <TouchableOpacity style={{

            backgroundColor:"#4285f4",
            width:"90%",
            padding:10,
            borderRadius:15,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            gap:15,
            marginTop:80,
            marginBottom:150

        }}
                          onPress={()=>promptAsync()}



        >
            <AntDesign name="google" sizw={30} color="white"/>
            <Text style={{fontWeight:"bold",color:"white",fontSize:17}}>
                Sign in With Google
            </Text>

        </TouchableOpacity>
    </SafeAreaView>
  )
}











