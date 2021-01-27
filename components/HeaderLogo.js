import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import { Metrics } from '@constants'
const { height, width } = Metrics
export default ({ style }) => (
    <View style={styles.banner}>
        <Image source={require('assets/logo.png')} resizeMode='contain' style={{ ...styles.logo }} />
    </View>
)

const styles = StyleSheet.create({
    banner: {
        width: width,
        height: height * .30,
        justifyContent: 'center',
    },
    logo: {
        width: undefined,
        height: height * .30
    }
})