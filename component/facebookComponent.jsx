// //
// // import { useState, useEffect } from "react";
// // import { Button, Image, StyleSheet, Text, View } from "react-native";
// // import * as Facebook from "expo-auth-session/providers/facebook";
// // import * as WebBrowser from "expo-web-browser";
// //
// // // WebBrowser.maybeCompleteAuthSession();
// //
// // // export default function App() {
// // //   const [user, setUser] = useState(null);
// // //   const [request, response, promptAsync] = Facebook.useAuthRequest({
// // //     clientId: "3584540145115902", // test_app
// // //   });
// // //
// // //   useEffect(() => {
// // //     if (response && response.type === "success" && response.authentication) {
// // //       (async () => {
// // //         const userInfoResponse = await fetch(
// // //           `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
// // //         );
// // //         const userInfo = await userInfoResponse.json();
// // //         setUser(userInfo);
// // //         console.log(JSON.stringify(response, null, 2));
// // //       })();
// // //
// // //
// // //     }
// // //   }, [response]);
// // //
// // //   const handlePressAsync = async () => {
// // //     const result = await promptAsync();
// // //     if (result.type !== "success") {
// // //       alert("something went wrong");
// // //       return;
// // //     }
// // //   };
// // //
// // //   return (
// // //     <View style={styles.container}>
// // //       {user ? (
// // //         <Profile user={user} />
// // //       ) : (
// // //         <Button
// // //           disabled={!request}
// // //           title="Sign in with Facebook"
// // //           onPress={handlePressAsync}
// // //         />
// // //       )}
// // //     </View>
// // //   );
// // // }
// // //
// // // function Profile({ user }) {
// // //   return (
// // //     <View style={styles.profile}>
// // //       <Image source={{ uri: user.picture.data.url }} style={styles.image} />
// // //       <Text style={styles.name}>{user.name}</Text>
// // //       <Text>ID: {user.id}</Text>
// // //     </View>
// // //   );
// // // }
// // //
// // // const styles = StyleSheet.create({
// // //   container: {
// // //    // flex: 1,
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },
// // //   profile: {
// // //     alignItems: "center",
// // //   },
// // //   name: {
// // //     fontSize: 20,
// // //   },
// // //   image: {
// // //     width: 100,
// // //     height: 100,
// // //     borderRadius: 50,
// // //   },
// // // });
//
//
//
import {
  AccessToken,
  AuthenticationToken,
  LoginButton,
} from 'react-native-fbsdk-next';
import { Profile } from "react-native-fbsdk-next";
import {View} from "react-native"


export default FacebookAuth =()=> {

  return (
      <View>
        <LoginButton
            onLoginFinished={
              (error, result) => {
                if (error) {
                  console.log("login has error: " + result.error);
                } else if (result.isCancelled) {
                  console.log("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log(data.accessToken.toString())
                      }
                  )
                }
              }
            }
            onLogoutFinished={() => console.log("logout.")}/>





      </View>
);


  const currentProfile = Profile.getCurrentProfile().then(
      function(currentProfile) {
        if (currentProfile) {
          console.log("The current logged user is: " +
              currentProfile.name
              + ". His profile id is: " +
              currentProfile.userID
          );
        }
      }
  );


}


