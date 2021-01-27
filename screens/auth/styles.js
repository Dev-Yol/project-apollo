import { StyleSheet, StatusBar } from 'react-native';
import { Metrics, Colors } from '@constants'
export default
    StyleSheet.create({
        screen: {
            backgroundColor: Colors.primary,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: Metrics.height,
        },
        logo: {
            marginTop: Metrics.lg,
            paddingTop: Metrics.sbHeight,
        },
        container: {
            paddingTop: Metrics.lg
        },
        textContainer: {
            flexDirection: 'row',
            alignSelf: 'flex-end',
        },
        centered: {
            alignItems: 'center'
        }

    })
