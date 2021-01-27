import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'components'
import { Colors, Metrics } from "@constants"
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
    iconStyle: {
        paddingHorizontal: Metrics.rg
    },
});

const HeaderIcon = ({ navigation, icon = "arrow-back-outline" }) => {
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.iconStyle} onPress={goBack}>
                <Icon color={Colors.darkGray} name={icon} size={Metrics.icon.rg} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderIcon



