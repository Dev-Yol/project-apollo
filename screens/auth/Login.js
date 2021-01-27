import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { Input, HeaderLogo, Text, Button, Container, Row, Spacer, BottomImage, Modal, Icon } from 'components'
import { DefaultStyles, Metrics, Colors } from '@constants'
import { LinearGradient } from 'expo-linear-gradient'
import api from 'utils/api'
import styles from './styles'
const checkValues = (username, password) => username !== '' && password !== '';

const Login = props => {
    const state = useSelector(state=>state)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState({
        status: false,
        message: ''
    })
    const validate = () => {
        setIsValid(checkValues(username, password))
    }
    const navigate = (route) => {
        props.navigation.navigate(route)
    }
    const submit = async () => {
        return navigate('step1')
        setLoading(true)
        let res = await api.post('/login', {
            credentials: {
                username,
                password
            }
        })
        setLoading(false)
        setModal(true)
        let _err = {
            status: res.error,
            message: res.message
        }
        // if (res.error) {
        //     setErr({
        //         status: res.error,
        //         message: res.message
        //     })
        // } else {
        //     setErr({
        //         statu
        //     })
        // }
        setErr(_err)
    }
    useEffect(() => {
        validate()
        return () => {
        }
    }, [username, password])
    return (
        <>
            <LinearGradient
                colors={[Colors.accent, Colors.primary, Colors.dark, Colors.dark]}
                style={styles.screen}
            />
            <Spacer sm />
            <Container style={{
                backgroundColor: 'transparent',
                zIndex: 100
            }}>
                <View style={styles.logo}>
                    <HeaderLogo style={{
                        height: 150,
                    }} />
                </View>
                <Modal {...{ visible: modal, setVisible: setModal, title: err.status ? 'Error' : 'Message' }} >
                    <ScrollView contentContainerStyle={styles.centered} >
                        <Icon {
                            ...{
                                name: err.status ? 'close-circle-outline' : 'happy-outline',
                                jumbo: true
                            }
                        } />
                        <Text mute center b lg>{
                            err.status ? err.message : 'Welcome !'
                        }</Text>
                    </ScrollView>
                </Modal>
                <View style={styles.container}>
                    <Text center b xl>Welcome!</Text>
                    <Text center md >Please login your account</Text>
                </View>
                <Spacer sm />
                <View style={DefaultStyles.screen}>
                    <Input
                        {...{
                            value: username || null,
                            setValue: setUsername,
                            label: 'Username',
                            placeholder: 'Input username',
                            disabled: loading,
                            validate: () => validate(),
                            icon: {
                                colored: true,
                                name: 'person-circle-outline',
                            }
                        }} />
                    <Spacer sm />
                    <Input {...{
                        value: password || null,
                        setValue: setPassword,
                        validate: () => validate(),
                        disabled: loading,
                        icon: {
                            name: 'key',
                            colored: true,
                        },
                        secureTextEntry: true,
                        label: 'Password',
                        placeholder: 'Input password'
                    }} />
                    <View style={styles.container}>
                        <Button md light  {...{
                            disabled: (!isValid) || loading,
                            title: "Login",
                            rounded: true,
                            loading,
                            textColor: !isValid ? Colors.accent : Colors.dark,
                            onPress: submit
                        }} />
                    </View>
                    <Spacer sm />
                    <Row c>
                        <View>
                            <Text>Don't have an account?</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigate('RegisterScreen')}>
                            <Text style={DefaultStyles.textTitle}>{'\t'}Register here</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row c>
                        <TouchableOpacity>
                            <Text style={DefaultStyles.textTitle}>{'\t'}Forgot Password</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </Container>
            <BottomImage />
        </>
    )
}

export default Login
