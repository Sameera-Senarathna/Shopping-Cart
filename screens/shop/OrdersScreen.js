import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useSelector } from "react-redux";
import HeaderButton from "../../components/HeaderButton";

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
            renderItem={itemData =>  <Text>{itemData.item.totalAmount}</Text>} />
    );
}

const styles = StyleSheet.create({

});

export default OrderScreen;