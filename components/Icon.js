import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'
import { Metrics, Colors } from '@constants'
const Icon = ({ name, colored, color = Colors.darkGray, lg, sm, jumbo, size, type }) => {
    let _size = sm ? Metrics.icon.sm : lg ? Metrics.icon.xl : jumbo ? Metrics.icon.jumbo : Metrics.icon.rg;
    if (size) {
        _size = size
    }
    if (colored) color = Colors.danger;
    let renderIcon = () => {
        switch (type) {
            case 'ad':
                return <AntDesign {...{ name, size: _size, color }} />
            case 'en':
                return <Entypo {...{ name, size: _size, color }} />
            case 'ev':
                return <EvilIcons {...{ name, size: _size, color }} />
            case 'fr':
                return <Feather {...{ name, size: _size, color }} />
            case 'fa':
                return <FontAwesome {...{ name, size: _size, color }} />
            case 'ft':
                return <Fontisto {...{ name, size: _size, color }} />
            case 'fd':
                return <Foundation {...{ name, size: _size, color }} />
            case 'mi':
                return <MaterialIcons {...{ name, size: _size, color }} />
            case 'mdi':
                return <MaterialCommunityIcons {...{ name, size: _size, color }} />
            case 'oc':
                return <Octicons {...{ name, size: _size, color }} />
            case 'zo':
                return <Zocial {...{ name, size: _size, color }} />
            case 'sp':
                return <SimpleLineIcons {...{ name, size: _size, color }} />

            default:
                return <Ionicon {...{ name, size: _size, color }} />
        }
    }
    return (
        renderIcon()
    )
}

export default Icon
