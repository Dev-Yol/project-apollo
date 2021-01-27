
import React, { forwardRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { HelperText } from "react-native-paper";
import { Colors, Metrics } from '@constants'

import { Icon } from 'components'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
    },
    icon: {
        justifyContent: 'center',
        marginRight: Metrics.md
    },
    rightIcon: {
        justifyContent: 'center',
        marginRight: Metrics.sm
    },
    inputContainer: {
        height: Metrics.xxl,
        backgroundColor: Colors.white,
        borderWidth: StyleSheet.hairlineWidth + 0.2,
        borderRadius: Metrics.xl,
        marginBottom: Metrics.sm,
        fontSize: Metrics.font.md,
        width: '100%',
        fontWeight: '100',
        paddingHorizontal: Metrics.lg,
    }
});
export default forwardRef((props, ref) => {
    let { value, error, icon, readOnly = false, maxLength, disabled, type, setValue, validate, placeholder, secureTextEntry = false, dense, rightContent, style, validator = false } = props;
    let inc = dense ? 0 : 10;
    let variantStyles = {
        borderColor: error ? Colors.danger : Colors.primary,
        height: Metrics.xxl + inc,
        color: error ? Colors.danger : Colors.dark,
        paddingHorizontal: dense ? Metrics.md : Metrics.lg
    }
    return (
        <View>
            <View style={{ ...styles.container, ...styles.inputContainer, ...variantStyles, ...style }}>
                <View style={styles.icon}>
                    <Icon
                        {...icon}
                    />
                </View>
                <TextInput
                    {...props}
                    ref={ref}
                    style={{ ...styles.input }}
                    value={value}
                    maxLength={readOnly ? value.length : maxLength}
                    keyboardType={type}
                    onSubmitEditing={validate}
                    editable={!disabled}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    onChangeText={setValue}
                    selectionColor={Colors.primary}
                    underlineColorAndroid="transparent"
                />
                {rightContent}
            </View>
            {
                validator?.status &&
                <HelperText type={validator?.type || 'error'} visible={validator?.status} style={{
                    color: (validator?.type === 'error' || !validator?.type) ? Colors.danger : Colors.gray
                }}>
                    {validator?.message}
                </HelperText>
            }

        </View>
    );
})