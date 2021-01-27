import React, { useState } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './constants';
import { enableScreens } from "react-native-screens";
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './navigations';
import {
    store,
    persistor
} from 'utils/redux'
enableScreens();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.primary,
        accent: Colors.accent,
    },
};
const App = () => {
    return (
        <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider theme={theme}>
                    <StatusBar backgroundColor={Colors.primary}></StatusBar>
                    <Routes />
                </PaperProvider>
            </PersistGate>
        </StoreProvider>

    )
}
export default App;
