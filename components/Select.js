import React, { useState, useRef, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Icon, Input, FlatList, Text, ScrollView } from './'

import { Metrics, Colors } from '@constants'

export default ({ value, data = [], onSelect, label, style = { width: '100%' } }) => {
    const ref = useRef();
    const [query, setQuery] = useState('');
    const [filteredList, setFilteredList] = useState(data)
    useEffect(() => {
        if (data.length) {
            setFilteredList(data.filter(el => el.title?.toLowerCase().includes(query.toLocaleLowerCase())))
        }
    }, [query])
    return (
        <View style={style}>
            <Input
                {...{
                    dense: true,
                    ref,
                    value: query || null,
                    setValue: setQuery,
                    style: {
                        borderRadius: Metrics.sm
                    },
                    icon: {
                        type: 'mdi',
                        name: 'magnify',
                        colored: true,
                        sm: true
                    },
                    rightContent: query.length ? <TouchableOpacity
                        onPress={() => setQuery('')}
                        style={{
                            justifyContent: 'center',
                            marginLeft: Metrics.sm
                        }}>
                        <Icon
                            {... {
                                name: 'close',
                                colored: true,
                                // sm: true
                            }}
                        /></TouchableOpacity> : <View></View>,
                    placeholder: `Search ${label}`
                }} />
            <FlatList data={filteredList} query={query} onSelect={onSelect} value={value} />
        </View >
    )
}
