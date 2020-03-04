import React from "react";
import { Button, FlatList, Alert } from "react-native";
import {useSelector, useDispatch} from "react-redux";

import ProductItem from "../../components/ProductItem";
import HeaderButton from "../../components/HeaderButton";
import Colors from "../../constants/Colors";
import * as productAction from "../../store/actions/products";


const UserProductScreen = (props) => {

    props.navigation.setOptions({
        title: 'Your Products',
        headerLeft: () => (
            <HeaderButton iconName="md-menu" onPress={()=>{props.navigation.toggleDrawer()}}/>
        ),
        headerRight: () => (
            <HeaderButton iconName="md-create" onPress={()=>{props.navigation.navigate('EditProduct')} } />
        )
    });

    const editProductHandler =  (id) => {
        props.navigation.navigate('EditProduct', { productId: id });
    };

    const deleteHandler = (id) => {
        Alert.alert('Are You Sure ? ', 'Do you ready want to delete this item',[
            {text: 'No', style: 'default'},
            {text: 'Yes', style: 'destructive', onPress:() => {
                    dispatch(productAction.deleteProduct(id));
                }
            }
        ]);
    };

    const userProduct_s = useSelector(state => state.products.userProducts);

    const dispatch = useDispatch();

    return (
        <FlatList keyExtractor={item => item.id} data={userProduct_s}
                  renderItem={itemDate => <ProductItem
                      image={itemDate.item.image}
                      title={itemDate.item.title}
                      price={itemDate.item.price}
                      onSelect={() => {
                          editProductHandler(itemDate.item.id);
                      }}
                  >
                      <Button
                          color={Colors.primary}
                          title="Edit"
                          onPress={() => {
                              editProductHandler(itemDate.item.id);
                          }}
                      />
                      <Button
                          color={Colors.primary}
                          title="Delete"
                          onPress={deleteHandler.bind(this, itemDate.item.id)}
                      />
                  </ProductItem>
                  }
        />
    );
};

export default UserProductScreen;