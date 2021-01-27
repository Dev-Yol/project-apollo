import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Keyboard } from 'react-native'
import { Select, Text, Spacer, Button } from 'components'
import { fetchCities } from 'services/locations'
import { Colors } from '@constants'
const ProvinceForm = (props) => {
    const data = useSelector(state => state).signUpReducer.provinces;
    return (
        <View>
            <Text center b xl mute>Select Province</Text>
            <Spacer md />
            <Select onSelect={async (e) => {
                props.setProvince(e);
                props.validate();
                let res = await fetchCities(e.id, props.dispatch);
                if (!res.error) {
                    props.setStep(val => ++val)
                } else {
                    alert('something went wrong.')
                }
                Keyboard.dismiss()
            }}
                value={props.province} data={data} dense={true} label='Province'
            />
            <Spacer md />
        </View>)
}

const CityForm = (props) => {
    const data = useSelector(state => state);
    return (<View>
        <Text center b xl mute>Select City</Text>
        <Spacer md />
        <Select onSelect={(e) => {
            props.setCity(e)
            props.setZipCode(e.zipcode || null)
            props.validate()
            props.setVisible(false)
            Keyboard.dismiss()
        }} value={props.city} data={data.signUpReducer.cities} dense label='City' />
    </View>)
}


export default props => {
    const dispatch = useDispatch()

    const {
        city,
        step,
        setStep,
        province,
        setCity,
        setProvince,
        validate,
        setVisible,
        setZipCode, } = props

    const renderForm = () => {

        switch (step) {
            case 1:
                return <ProvinceForm {...{
                    setProvince,
                    dispatch,
                    setStep,
                    province,
                    validate,
                }} />
            case 2:
                return <CityForm {...{
                    city,
                    dispatch,
                    setCity,
                    province,
                    setVisible,
                    validate,
                    setZipCode,
                }} />
            default:
                return <ProvinceForm {...{
                    setProvince,
                    dispatch,
                    setStep,
                    province,
                    validate,
                }} />
        }
    }

    return (
        <View style={{ width: '90%', flex: 1 }}>
            <View style={{
                paddingBottom: 10
            }}>
                {renderForm()}
            </View>
        </View>
    )
}
