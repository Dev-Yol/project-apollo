import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet} from 'react-native';
import { Metrics, Colors } from '@constants'

const _Button = ({ light, dark, color, disabled, rounded, textColor = Colors.white, title, onPress, icon, loading, mode = "contained", lg = false, md = false }) => {
    const styles = StyleSheet.create({
        button: {
            paddingVertical: lg ? Metrics.md : md ? Metrics.rg : Metrics.sm,
        },
        container: {
            borderRadius: rounded ? Metrics.xl : Metrics.sm
        },
    })

    const chooseTextColor = () => {
        let _color = light ? Colors.danger : dark ? Colors.white : textColor
        if (disabled) {
            _color = dark ? Colors.secondary : Colors.accent
        }
        return _color;
    }
    return (
        <Button
            theme={
                {
                    roundness: Metrics.xxl,
                }
            }
            // mode="contained"
            color={light ? Colors.white : dark ? Colors.primary : color}
            labelStyle={{
                color: chooseTextColor()
            }}
            disabled={disabled}
            style={styles.container}
            contentStyle={styles.button}
            {...{ icon, mode, onPress, loading }}>
            {title}
        </Button>
    )
}
export default _Button;