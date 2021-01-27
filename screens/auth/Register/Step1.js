import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { CardButton, Icon, Text, Spacer, Button, ScrollView } from 'components'
import { Metrics, Colors, DefaultStyles } from '@constants'

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: Metrics.md,
    },
    col: {
        alignSelf: 'center'
    },
    buttonContainer: {
        paddingHorizontal: Metrics.md
    }

})
export default props => {
    const [userType, setUserType] = useState()
    const [menu, setMenu] = useState([
        {
            icon: 'school',
            text: 'Learner',
            value: 'learner',
            active: false
        },
        {
            icon: 'teach',
            text: 'Teacher',
            value: 'teacher',
            active: false
        }
    ])

    const navigate = (route) => {
        return props.navigation.navigate(route, { userType })
    }
    const updateState = (i) => {
        setMenu(prevState => prevState.map((el, idx) => {
            el.active = i === idx;
            return el;
        }))
        setUserType(menu[i].value)
    }
    return (
        <ScrollView >
            <View>
                <Text mute center b xl>Choose your account type</Text>
            </View>
            <Spacer md />
            <View style={styles.row}>
                {
                    menu.map(({ icon, text, route, active }, i) => {
                        return (
                            <CardButton active={active} key={i} onPress={() => updateState(i)}>
                                <Icon color={active ? Colors.white : undefined} name={icon} lg type="mdi" />
                                <Spacer sm />
                                <Text center md b style={{
                                    color: active ? Colors.white : Colors.darkGray
                                }}>{text}</Text>
                            </CardButton>
                        )
                    })
                }
            </View>
            <Spacer md />
            <View style={styles.buttonContainer}>
                <Button dark md  {...{
                    disabled: !userType,
                    title: "Next",
                    rounded: true,
                    color: 'transparent',
                    onPress: () => { navigate('Step2Screen') }
                    // textColor: !isValid ? Colors.accent : Colors.dark,
                    // onPress: submit
                }} />
            </View>
        </ScrollView>
    )
}
