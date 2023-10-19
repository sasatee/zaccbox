// import { View, Button, SafeAreaView,StyleSheet, Text, TouchableOpacity } from "react-native";
// import React, { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import LoginForm from "../component/loginForm";
// import FacebookAuth from "../component/facebookComponent";

// const Login = () => {
//   const navigation = useNavigation();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//   }, []);
//   return (
//     <SafeAreaView>
//       <View style={{ paddingTop: 100 }}>
//         <LoginForm  />
//         <FacebookAuth style={{borderColor:"red"}}/>
//         <Text>sfsfsfsfs</Text>

//       </View>
//       <View style={styles.container}>
//         <TouchableOpacity>

//           <Button
//             title="Go to register" style={{color:"blue",width:50,height:50}}
//             onPress={() => navigation.navigate("Register")}>

//             </Button>
//             </TouchableOpacity>
//       </View>
//       <View style={styles.container}>
//       <View style={{ paddingTop: 100 }}>
//         <Button style={{width:50,height:100}}
//           title="Go to logOut"
//           onPress={() => navigation.navigate("home")}></Button>
//       </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center"
//   }

// })

// export default Login;
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../component/loginForm";
import FacebookAuth from "../component/facebookComponent";



const Login = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ margin: 50 }}>
      <View>
        <LoginForm style={{ paddingTop: 20 }} />
        
      </View>
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity>
          <Button
            title="Go to register"
            color="blue" // Set text color to black
            onPress={() => navigation.navigate("Register")}
          />
        </TouchableOpacity>
      </View>

      {/* facebook */}
      <View style={{ paddingTop: 20 }}>
        <FacebookAuth/>
      
      </View>

      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity>
          <Button
            title="Go to logout"
            color="black" // Set text color to black
            onPress={() => navigation.navigate("home")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <View style={{ paddingTop: 20 }}>
    //     <LoginForm />
    //     <FacebookAuth style={{ borderColor: "red" }} />

    //   </View>

    //   <View style={styles.buttonContainer}>
    //   <View style={{ paddingTop:5 }}>
    //     <TouchableOpacity>

    //       <Button
    //         title="Go to register"
    //         color="black" // Set text color to black
    //         onPress={() => navigation.navigate("Register")}
    //       />
    //     </TouchableOpacity>
    //     </View>
    //   </View>

    //   <View style={styles.buttonContainer}>
    //     <View style={{ paddingTop:5 }}>
    //       <TouchableOpacity>
    //       <Button
    //         title="Go to logOut"
    //         color="black" // Set text color to black
    //         onPress={() => navigation.navigate("home")}
    //       />

    //       </TouchableOpacity>

    //     </View>
    //   </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Login;
