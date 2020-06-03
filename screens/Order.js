import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Order = props => {
    return <View style={style.container}>
        <Button
            title="place Your Order"
            onPress={() => props.navigation.popToTop()}
        />
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Order;