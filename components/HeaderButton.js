import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const HeaderButton = (props)=> {
    return (
        <TouchableOpacity style={styles.button} onPress={()=>{props.onPress()}}>
            <Ionicons name={props.iconName} size={35} color='white' />
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    button: {
        marginRight: 10,
        marginLeft: 10
    }
});

export default HeaderButton;