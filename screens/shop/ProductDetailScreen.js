import React from "react";
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import Colors from "../../constants/Colors";

import * as cartAction from '../../store/actions/cart';

const ProductDetailScreen = ({route, navigation}) => {

    const { productId } = route.params;

    const selectedProduct = useSelector(state => state.products.availableProduct.find(prod => prod.id === productId));

    // Set Header of the Navigation
    navigation.setOptions({title: selectedProduct.title});

    const dispatch = useDispatch();

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.image}} />
            <View style={styles.action}>
                <Button color={Colors.primary} title="Add to Cart" onPress={()=>{
                    dispatch(cartAction.addToCart(selectedProduct));
                }}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#800',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-bold'
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 10,
        fontFamily: 'open-sans'
    },
    action: {
        marginVertical: 10,
        alignItems: 'center'
    }

});

export default ProductDetailScreen;