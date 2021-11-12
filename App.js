
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./screens/Login";
import Tabs from "./navigation/tab"
import Home from "./screens/Home"
import Regitster from "./screens/Regitster"
const Stack = createNativeStackNavigator();
function MyStack() {
  return ( 
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
        <Stack.Screen
        name="Register" component={Regitster}
      > 
      </Stack.Screen>
      <Stack.Screen
        name="Login" component={Login}
      > 
      </Stack.Screen>
      <Stack.Screen
        name="Tabs" component={Tabs} 
      > 
      </Stack.Screen>
      
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer 

    >
      <MyStack></MyStack>
    </NavigationContainer>
  )
}
export default App;