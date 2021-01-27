import React from 'react'
import { View, StyleSheet, StatusBar, Image } from 'react-native'
import Banner from 'assets/banner.png'
const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: -100,
        zIndex: 1,
        opacity: 0.5
    }
})

const BottomImage = () => {
    return (
        <View style={styles.bottom}>
            <Image source={Banner}  ></Image>
        </View>
    )
}

export default BottomImage
