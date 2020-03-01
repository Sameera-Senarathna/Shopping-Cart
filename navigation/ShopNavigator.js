import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator}  from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrdersScreen";

import Colors from '../constants/Colors';
import UserProductScreen from "../screens/user/UserProducts";


const Stack_1 = createStackNavigator();
const Stack_2 = createStackNavigator();
const Stack_3 = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProductNavigator = () => {
  return (
      <Stack_1.Navigator screenOptions={{
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
          <Stack_1.Screen name="ProductOverviewScreen" component={ProductOverviewScreen}/>
          <Stack_1.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>
          <Stack_1.Screen name="CartScreen" component={CartScreen}/>
      </Stack_1.Navigator>
  );
};

const OrderNavigation = () => {
    return (
        <Stack_2.Navigator screenOptions={{
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
            <Stack_2.Screen name="OrderScreen" component={OrderScreen}/>
        </Stack_2.Navigator>
    );
};

const UserOrderNavigator = () => {
    return (
        <Stack_3.Navigator screenOptions={{
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
            <Stack_2.Screen name="UserProduct" component={UserProductScreen}/>
        </Stack_3.Navigator>
    );
};

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="ProductNavigator">
                <Drawer.Screen name="Products" component={ProductNavigator}  options={{ drawerIcon: () => (
                        <Ionicons name="md-list" size={23} />
                    ) }} />
                <Drawer.Screen name="Your Orders" component={OrderNavigation} options={{ drawerIcon: () => (
                        <Ionicons name="md-cart" size={23} />
                    ) }} />
                <Drawer.Screen name="User Product" component={UserOrderNavigator} options={{ drawerIcon: () => (
                        <Ionicons name="md-create" size={23} />
                    ) }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;