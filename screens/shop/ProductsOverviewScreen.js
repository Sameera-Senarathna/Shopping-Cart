import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/ProductItem";
import * as cartAction from '../../store/actions/cart';


const ProductOverviewScreen = ({navigation}) => {

    const products = useSelector(state => state.products.availableProduct);
    const dispatch = useDispatch();

    //Set Navigation Header
    navigation.setOptions({title: 'All Products'});

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={ itemData =>
                <ProductItem
                    image={itemData.item.image}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={()=>{
                        navigation.navigate('ProductDetailScreen', {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })
                    }}
                    onAddToCart={()=>{
                        dispatch(cartAction.addToCart(itemData.item))
                    }}
                />
            }
        />
    );

};

export default ProductOverviewScreen;