
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import login from './screens/loginScreen';
// import register from "./screens/registerScreen";
// import { Provider } from 'react-redux';
// import store from './Redux/Store';
// import LogOutScreen from './screens/HomeScreen';








// const Stack = createNativeStackNavigator();


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Provider store={store}>



//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={login} />
//         <Stack.Screen name="home" component={LogOutScreen}/>
//           <Stack.Screen name="Register" component={register} />


//       </Stack.Navigator>
//       </Provider>




//     </NavigationContainer>
//   );
// }



// import { useState } from "react";
// import { useEffect } from "react";
// import { StyleSheet,Text,View,Image,Button } from "react-native";

// import React from 'react'
// import * as Google from "expo-auth-session/providers/google"

// const App = () => {


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
//     flex:1,
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

// export default App



//facebook
import { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "3584540145115902", // test_app
  });

  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
        console.log(JSON.stringify(response, null, 2));
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    if (result.type !== "success") {
      alert("something went wrong");
      return;
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <Profile user={user} />
      ) : (
        <Button
          disabled={!request}
          title="Sign in with Facebook"
          onPress={handlePressAsync}
        />
      )}
    </View>
  );
}
 
function Profile({ user }) {
  return (
    <View style={styles.profile}>
      <Image source={{ uri: user.picture.data.url }} style={styles.image} />
      <Text style={styles.name}>{user.name}</Text>
      <Text>ID: {user.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});