import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Container = ({ children, style }) => {
    style = {
        ...style,
        flex: 1,
    }
    return (
        <KeyboardAwareScrollView style={style} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            {children}
        </KeyboardAwareScrollView>
    )
}

export default Container;