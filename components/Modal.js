import React from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Metrics, Colors, DefaultStyles } from '@constants';
import { Divider, Icon } from "components";

export default ({ visible, setVisible, onClose, children, fade, title, confirm, style }) => {
    return (
        <View style={{...styles.centeredView}}>
            <Modal
                animationType={fade ? 'fade' : 'slide'}
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    onClose && onclose()
                }}
            >
                <View style={styles.centeredView}>
                    <View style={{ ...styles.modalView, ...style }}>
                        <View style={styles.modalHeader}>
                            <View style={styles.headerText}>
                                <TouchableHighlight style={styles.modalTitle} >
                                    <Text style={{ ...DefaultStyles.textTitle, ...styles.textTitle }}>{title}</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.modalIcon}>
                                <TouchableHighlight onPress={() => setVisible(false)} underlayColor={Colors.tertiary} >
                                    <Icon name="close" sm />
                                </TouchableHighlight>
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.modalBody}>
                            {children}
                        </View>

                        {
                            confirm && <>
                                <Divider />
                            </>
                        }
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: Metrics.sm,
        width: '85%',
        height: 300,
        minHeight: 300,
        maxHeight: '90%',
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    modalTitle: {
        alignSelf: 'flex-start',
    },
    headerText: {
        width: '92%'
    },
    textTitle: {
        fontSize: Metrics.font.lg,
        color: Colors.darkGray,
        fontWeight: '700'
    },
    modalBody: {
        alignItems: 'center',
        padding: Metrics.lg,
        marginBottom: Metrics.md,
        height: '90%'
    }

});