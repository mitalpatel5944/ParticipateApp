import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Participate, Detail } from './screens'
import { colors, fonts } from './theme';
const Tab = createBottomTabNavigator();
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';


const Stack = createStackNavigator();

function ParticipateStack() {
    return (
        <Stack.Navigator screenOptions={({ route, navigation }) => ({
            headerShown: false,

        })}
        // mode={'card'}
        >
            <Stack.Screen name="Participate" component={Participate} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}

// const getTabBarVisibility = (route) => {
//     const routeName = route.state
//         ? route.state.routes[route.state.index].name
//         : '';

//     if (routeName === 'Participate') {
//         return true;
//     }

//     return false;

// }

function getTabBarVisibility(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Participate';
    console.log("routeName", routeName);
    switch (routeName) {
        case 'Participate':
            return true
        case 'Videoes':
            return true
        case 'Learning':
            return true
        case 'Profile':
            return true
        default:
            return false
    }
}


function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator

                initialRouteName="Participate"
                tabBarOptions={{
                    activeTintColor: colors.blue,
                    labelStyle: { fontFamily: fonts.pbo },
                }}
            >
                <Tab.Screen
                    name="Participate"
                    options={({ route }) => ({

                    })}
                    component={ParticipateStack}
                    options={({ route }) => ({
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: 'Participate',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="trophy" color={color} size={size} />
                        ),

                    })}
                />
                <Tab.Screen
                    name="Video"
                    component={Participate}
                    options={{
                        tabBarLabel: 'Videoes',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="video" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Learning"
                    component={Participate}
                    options={{
                        tabBarLabel: 'Learning',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="book" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Participate}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default Router