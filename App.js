import React, {useState} from 'react';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import {AppLoading} from 'expo';
import * as Font from 'expo-font';

import { composeWithDevTools } from 'redux-devtools-extension'

import AppNavigation from "./navigation/ShopNavigator";

import ProductReducer from "./store/reducers/products";
import CardReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
    products: ProductReducer,
    cart: CardReducer
});

const store = createStore(rootReducer, composeWithDevTools());

const fetchFont = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading startAsync={fetchFont} onFinish={() => {
            setFontLoaded(true);
        }}/>
    }

    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
}
