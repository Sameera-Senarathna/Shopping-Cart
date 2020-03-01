import React from "react";
import {Button, FlatList} from "react-native";
import {useSelector} from "react-redux";

import ProductItem from "../../components/ProductItem";
import HeaderButton from "../../components/HeaderButton";
import Colors from "../../constants/Colors";
import * as cartAction from "../../store/actions/cart";

const UserProductScreen = ({navigation}) => {

    navigation.setOptions({
        title: 'Your Products',
        headerLeft: () => (
            <HeaderButton iconName="md-menu" onPress={()=>{navigation.toggleDrawer()}}/>
        )
    });

    const userProducts = useSelector(state => state.products.userProducts);

    return (
        <FlatList keyExtractor={item => item.id} data={userProducts}
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
                          onPress={() => {}}
                      />
                  </ProductItem>
                  }
        />
    );
};

export default UserProductScreen;