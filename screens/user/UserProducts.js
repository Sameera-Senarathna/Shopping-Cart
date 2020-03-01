import React from "react";
import {Button, FlatList} from "react-native";
import {useSelector, useDispatch} from "react-redux";

import ProductItem from "../../components/ProductItem";
import HeaderButton from "../../components/HeaderButton";
import Colors from "../../constants/Colors";
import * as productAction from "../../store/actions/products";


const UserProductScreen = ({navigation}) => {

    navigation.setOptions({
        title: 'Your Products',
        headerLeft: () => (
            <HeaderButton iconName="md-menu" onPress={()=>{navigation.toggleDrawer()}}/>
        )
    });

    const userProduct_s = useSelector(state => state.products.userProducts);

    const dispatch = useDispatch();

    return (
        <FlatList keyExtractor={item => item.id} data={userProduct_s}
                  renderItem={itemDate => <ProductItem
                      image={itemDate.item.image}
                      title={itemDate.item.title}
                      price={itemDate.item.price}
                      onSelect={() => {}}
                  >
                      <Button
                          color={Colors.primary}
                          title="Edit"
                          onPress={() => {}}
                      />
                      <Button
                          color={Colors.primary}
                          title="Delete"
                          onPress={() => {dispatch(productAction.deleteProduct(itemDate.item.id))}}
                      />
                  </ProductItem>
                  }
        />
    );
};

export default UserProductScreen;