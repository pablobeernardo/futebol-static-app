import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomePage from "./View/Components/pages/home-page";
import DetailPage from "./View/Components/pages/detail-page";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage}/>
                <Stack.Screen name="detail" component={DetailPage}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}