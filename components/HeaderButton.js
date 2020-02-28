import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";


const HeaderButton = (props)=> {
    return (
        <TouchableOpacity style={styles.button} onPress={()=>{props.openCart()}}>
            <Ionicons name="md-cart" size={35} color='white' />
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    button: {
        marginRight: 10
    }
});

export default HeaderButton;