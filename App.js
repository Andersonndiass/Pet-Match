import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Pages/Splash';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Main from './Pages/Main';   
import Post1 from './Pages/post-1';  
import MeusDados from './Pages/MeusDados';   
import Market from './Pages/Market';  
import Menu from './Pages/menu';  
import Profile from './Pages/Profile';  
import Sobre from './Pages/Sobre';  
import Segunranca from './Pages/Segunranca';  


const Stack = createStackNavigator();

export default function App() {  
  return (
    <NavigationContainer>   
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Post-1" component={Post1} />
        <Stack.Screen name="MeusDados" component={MeusDados} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Segunranca" component={Segunranca} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}