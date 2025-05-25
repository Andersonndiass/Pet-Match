import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Pages/Splash';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Main from './Pages/Main';   
import Post1 from './Pages/post-1';  

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Post-1" component={Post1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}