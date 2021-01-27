import React from 'react';
import { ScrollView, View, Modal, StyleSheet, TouchableHighlight } from 'react-native';
import { Colors, Metrics } from '@constants';
import { Icon, Spacer } from './'
const { height, width } = Metrics
const Style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    bottomSheetContent: {
        // height: height - (height * 0.1),
        // maxHeight: height - (height * 0.1),
        marginTop: (height * 0.1),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopColor: Colors.gray,
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    bottomSheet: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 0,
        width: width,
        padding: 0
    },
    modalHeader: {
        height: 50,
        paddingHorizontal: Metrics.md,
        width: '100%',
        // justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalIcon: {
        alignItems: 'flex-end'
    },
    backIcon: {
        alignItems: 'flex-start'
    },
    headerText: {
        width: '92%'
    },

})
const BottomSheet = ({ visible, setVisible, onClose, children, fh, backButton, onBack }) => {
    let variantStyles = {}
    if (fh) {
        variantStyles.height = height
        variantStyles.maxHeight = height
        variantStyles.width = width
    }
    return (
        <View style={Style.centeredView}>
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    onClose && onclose()
                }}
                style={Style.bottomSheet}>
                <View style={Style.centeredView}>
                    <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                        <View style={{ ...Style.bottomSheetContent, ...variantStyles }}>
                            <View style={Style.modalHeader}>
                                <View style={Style.headerText}>
                                    {
                                        backButton && <View style={Style.backIcon}>
                                            <TouchableHighlight onPress={() => onBack && onBack()} underlayColor={Colors.tertiary} >
                                                <Icon name="arrow-left" type='mdi' sm />
                                            </TouchableHighlight>
                                        </View>
                                    }
                                </View>
                                <View style={Style.modalIcon}>
                                    <TouchableHighlight onPress={() => setVisible(false)} underlayColor={Colors.tertiary} >
                                        <Icon name="close" sm />
                                    </TouchableHighlight>
                                </View>
                            </View>
                            {children}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default BottomSheet;