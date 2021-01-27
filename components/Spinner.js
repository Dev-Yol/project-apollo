import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "@constants";

export default ({ sm, lg }) => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={sm ? 'small' : lg ? 'large' : undefined} color={Colors.danger} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
