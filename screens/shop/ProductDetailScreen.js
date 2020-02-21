import React from "react";
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';

const ProductDetailScreen = ({route, navigation}) => {

    const { productId } = route.params;
    const { productTitle } = route.params;

    navigation.setOptions({title: productTitle}); // Set Title of the Component

    return (
        <View>
            <Text>Item ID : {productId}</Text>
            <Text>Item Name : {productTitle}</Text>
        </View>
    );

};

const styles = StyleSheet.create({

});

export default ProductDetailScreen;