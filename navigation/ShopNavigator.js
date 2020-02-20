import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";

import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primary
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}
            >
                <Stack.Screen name="ProductOverviewScreen" component={ProductOverviewScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;