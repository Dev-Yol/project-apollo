import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { Input, HeaderLogo, Text, Button, Container, Row, Spacer, BottomImage } from 'components'
import { DefaultStyles, Colors } from '@constants'
import { LinearGradient } from 'expo-linear-gradient'
import api from 'utils/api'
import styles from '../styles'


const checkValues = (username, password, cPassword) => username !== '' && password !== '' && cPassword == password;
const Register = props => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const validate = () => {
        setIsValid(checkValues(username, password, cPassword))
    }
    const navigate = (route) => {
        props.navigation.push(route)
    }
    const submit = async () => {
        return navigate('Step1Screen')
    }
    useEffect(() => {
        return () => {
        }
    }, [])
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
                    <HeaderLogo />
                </View>
                <View style={styles.container}>
                    <Text center b xl>Welcome to CN-Ternal</Text>
                    <Text center md >Tap "next" to continue</Text>
                </View>
                <Spacer sm />
                <View style={DefaultStyles.screen}>
                    <View style={styles.container}>
                        <Button md light {...{
                            // disabled: !isValid,
                            title: "Next",
                            rounded: true,
                            loading: false,
                            color: Colors.white,
                            textColor: !isValid ? Colors.accent : Colors.dark,
                            onPress: submit
                        }} />
                    </View>
                    <Spacer md />
                    <Row c>
                        <View>
                            <Text>Already have an account?</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigate('LoginScreen')}>
                            <Text style={DefaultStyles.textTitle}>{'\t'}Login here</Text>
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

export default Register
