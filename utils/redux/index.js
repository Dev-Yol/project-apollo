import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import appReducer from './reducer'
import signUpReducer from './signUpReducer'
import AsyncStorage from '@react-native-community/async-storage'
import { createOffline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/src/defaults';
import { composeWithDevTools } from 'redux-devtools-extension';



const {
    middleware: offlineMiddleware,
    enhanceReducer: offlineEnhanceReducer,
    enhanceStore: offlineEnhanceStore
} = createOffline({
    ...offlineConfig,
    persist: false
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whiteList :[]
}
const rootReducer = persistReducer(persistConfig, offlineEnhanceReducer(combineReducers({ appReducer, signUpReducer })));
export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            offlineMiddleware
        ),
        offlineEnhanceStore
    )
)

export const persistor = persistStore(store)