import Colors from './colors';
import { StyleSheet } from 'react-native';
import Metrics from './Metrics';
const { width, height } = Metrics
export default StyleSheet.create({
    screen: {
        padding: 30
    },
    formControl: {
        height: 50,
        borderColor: Colors.gray,
        borderWidth: 1,
        width: width - 40,
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 5
    },
    // buttons
    btn: {
        height: 50,
        backgroundColor: Colors.white,
        width: width - 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnPrimary: {
        backgroundColor: Colors.primary
    },
    btnSecondary: {
        backgroundColor: Colors.secondary
    },
    btnWarning: {
        backgroundColor: Colors.warning
    },
    btnDanger: {
        backgroundColor: Colors.danger
    },
    // text
    textWhite: {
        color: Colors.white
    },
    textPrimary: {
        color: Colors.primary
    },
    textDanger: {
        color: Colors.danger
    },
    textWarning: {
        color: Colors.warning
    },
    textSuccess: {
        color: Colors.success
    },
    textCenter: {
        textAlign: 'center'
    },
    textBold: {
        fontWeight: 'bold'
    },
    textTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    iconSize: 24,
    iconStyle: {
        color: Colors.primary,
        paddingLeft: 20,
        paddingRight: 20
    },
    profileIconSize: 30,
    standardFontSize: 12,
})