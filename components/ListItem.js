import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { List } from 'react-native-paper';
import { Colors, Metrics } from '@constants'
const ListItem = (props) => {
    const {
        item,
        style,
        value,
        onPress
    } = props
    return (
        <TouchableOpacity onPress={() => onPress(item)} style={{
            backgroundColor: Colors.white,
            padding: 2,
            marginBottom: 1,
            borderBottomColor: Colors.gray,
            borderBottomWidth: StyleSheet.hairlineWidth
        }}>
            <List.Item
                titleStyle={{
                    margin: 0,
                    fontSize: Metrics.font.rg,
                    color: Colors.darkGray,
                    fontWeight: value !== item.title ? '200' : 'bold'
                }}
                style={style}
                descriptionStyle={{ height: 0 }}
                title={item.title}
            />
        </TouchableOpacity>
    )
}
export default ListItem
