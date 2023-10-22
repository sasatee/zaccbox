
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/loginScreen';
import register from "./screens/registerScreen";
import { Provider } from 'react-redux';
import store from './Redux/Store';
import LogOutScreen from './screens/HomeScreen';








const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>



      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="home" component={LogOutScreen}/>
          <Stack.Screen name="Register" component={register} />


      </Stack.Navigator>
      </Provider>




    </NavigationContainer>
  );
}






