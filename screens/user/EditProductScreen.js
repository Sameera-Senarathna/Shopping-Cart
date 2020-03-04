import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View, Alert} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../../components/HeaderButton";
import * as productAction from '../../store/actions/products';

const EditProductScreen = (props) => {

    console.log("EditProductScreen Component Rendering ++++++");

    const productId = typeof props.route.params !== "undefined" ? props.route.params.productId : undefined;

    const dispatch = useDispatch();

    props.navigation.setOptions({
        title: productId ? 'Edit Product' : 'Add Product',
        headerRight: () => (
            <HeaderButton iconName="md-save" onPress={submitHandler}/>
        )
    });


    const editedProduct = useSelector(state => {
        return state.products.userProducts.find(prod => prod.id === productId);
    });

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.image : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

    const submitHandler = () => {
        console.log("Submitting");
        if(productId) {
            dispatch(productAction.updateProduct(productId, title, description, imageUrl));
        } else {
            dispatch(productAction.createProduct(title, description, imageUrl, +price));
        }

        props.navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} value={title} onChangeText={value => setTitle(value)}/>
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput style={styles.input} value={imageUrl} onChangeText={value => setImageUrl(value)}/>
                </View>
                {editedProduct ? null : <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput style={styles.input} value={price} onChangeText={value => setPrice(value)}/>
                </View>}
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input} value={description} onChangeText={value => setDescription(value)}/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export default EditProductScreen;