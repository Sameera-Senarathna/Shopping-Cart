import React from 'react';
import {FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from "react-redux";

import ProductItem from "../../components/ProductItem";
import * as cartAction from '../../store/actions/cart';
import HeaderButton from "../../components/HeaderButton";


const ProductOverviewScreen = ({navigation}) => {

    const products = useSelector(state => state.products.availableProduct);
    const dispatch = useDispatch();

    //Set Navigation Header
    navigation.setOptions(
        {
            title: 'All Products',
            headerLeft: () => (
                <HeaderButton iconName="md-menu" onPress={()=>{navigation.toggleDrawer()}}/>
            ),
            headerRight: () => (
                <HeaderButton iconName="md-cart" onPress={()=>{navigation.navigate('CartScreen')}}/>
            )
        }
    );

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.image}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        navigation.navigate('ProductDetailScreen', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })
                    }}
                    onAddToCart={() => {
                        dispatch(cartAction.addToCart(itemData.item))
                    }}
                />
            }
        />
    );

};

export default ProductOverviewScreen;