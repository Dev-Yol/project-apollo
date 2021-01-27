import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem, Text } from './'


export default (props) => {

    const renderItem = ({ item }) => (
        <ListItem value={props.value} item={item} onPress={props.onSelect} />
    );
    const memoizedValue = useMemo(() => renderItem, [props.data]);
    return (
        <FlatList
            ListEmptyComponent={<Text center b xl mute>No Data</Text>}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            keyExtractor={(item, index) => item.id.toString()}
            // initialNumToRender={10}
            renderItem={memoizedValue}
        />
    );
}



