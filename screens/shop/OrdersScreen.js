import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useSelector } from "react-redux";

import HeaderButton from "../../components/HeaderButton";
import OrderItem from "../../components/OrderItem";

const OrderScreen = ({navigation}) => {

    const order = useSelector(state => state.orders.orders);

    navigation.setOptions({
        title: 'Your Orders',
        headerLeft: () => (
            <HeaderButton iconName="md-menu" onPress={()=>{navigation.toggleDrawer()}}/>
        )
    });

    return (
        <FlatList
            keyExtractor={item => item.id}
            data={order}
            renderItem={itemData =>  <OrderItem amount={itemData.item.totalAmount} date={itemData.item.readableDate} items={itemData.item.items}/>} />
    );
}

const styles = StyleSheet.create({

});

export default OrderScreen;