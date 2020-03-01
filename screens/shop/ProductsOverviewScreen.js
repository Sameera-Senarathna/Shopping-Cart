import React from 'react';
import {Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import ProductItem from "../../components/ProductItem";
import * as cartAction from '../../store/actions/cart';
import HeaderButton from "../../components/HeaderButton";
import Colors from "../../constants/Colors";


const ProductOverviewScreen = ({navigation}) => {

    const products = useSelector(state => state.products.availableProduct);
    const dispatch = useDispatch();

    //Set Navigation Header
    navigation.setOptions(
        {
            title: 'All Products',
            headerLeft: () => (
                <HeaderButton iconName="md-menu" onPress={() => {
                    navigation.toggleDrawer()
                }}/>
            ),
            headerRight: () => (
                <HeaderButton iconName="md-cart" onPress={() => {
                    navigation.navigate('CartScreen')
                }}/>
            )
        }
    );

    const selectItemHandler = (id, title) => {
        navigation.navigate('ProductDetailScreen', {
            productId: id,
            productTitle: title
        })
    };

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.image}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {
                        selectItemHandler(itemData.item.id, itemData.item.title);
                    }}
                >
                    <Button
                        color={Colors.primary}
                        title="View Details"
                        onPress={() => {
                            selectItemHandler(itemData.item.id, itemData.item.title);
                        }}
                    />
                    <Button
                        color={Colors.primary}
                        title="To Cart"
                        onPress={() => {
                            dispatch(cartAction.addToCart(itemData.item));
                        }}
                    />
                </ProductItem>
            }
        />
    );

};

export default ProductOverviewScreen;