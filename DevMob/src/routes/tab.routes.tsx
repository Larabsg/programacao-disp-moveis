import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Login from "../modules/login/screens/Login";
import Home from "../modules/home/screens/Home";
import Profile from "../modules/profile/screens/Profile";
// import Profile from "";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>

            <Tab.Screen 
                name="HomeTab" 
                component={Home}
                options={{
                    title: "Home", 
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#FF5364'
                }} 
                />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#FF5364',
                }}
            />
            
        </Tab.Navigator>
    )
}

export default TabRoutes;