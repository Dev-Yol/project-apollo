import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Metrics, Colors } from "@constants";
export default ({ style }) => {
    return (
        <View style={{ ...styles.divider, style }}></View>
    )
}
const styles = StyleSheet.create({
    divider: {
        borderWidth: Metrics.hairLine,
        backgroundColor: Colors.lightGray,
        alignSelf: 'stretch',
        opacity: 0.3,
        width: '100%'
    }
})

