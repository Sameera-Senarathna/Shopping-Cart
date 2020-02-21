import React from "react";
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import {useSelector} from "react-redux";
import Colors from "../../constants/Colors";

const ProductDetailScreen = ({route, navigation}) => {

    const { productId } = route.params;

    const selectedProduct = useSelector(state => state.products.availableProduct.find(prod => prod.id === productId));

    navigation.setOptions({title: selectedProduct.title}); // Set Title of the Component

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.image}} />
            <View style={styles.action}>
                <Button color={Colors.primary} title="Add to Cart" onPress={()=>{}}/>
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
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 10
    },
    action: {
        marginVertical: 10,
        alignItems: 'center'
    }

});

export default ProductDetailScreen;