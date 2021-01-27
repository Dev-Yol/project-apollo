import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Colors, Metrics } from '@constants'
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
    },
    view: {
        padding: Metrics.lg,
        justifyContent: 'center',
    }
})
export default ({ containerStyle, style, children }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ ...styles.container, ...style }} contentContainerStyle={{ ...styles.view, ...containerStyle }}>
            {children}
        </ScrollView>
    )
}
