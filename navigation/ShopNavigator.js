import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
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
                    fontWeight: 'bold',
                    fontFamily: 'open-sans-bold'
                },
                headerBackTitleStyle: {
                    fontFamily: 'open-sans-bold'
                }
            }}
            >
                <Stack.Screen name="ProductOverviewScreen" component={ProductOverviewScreen}/>
                <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>
                <Stack.Screen name="CartScreen" component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;