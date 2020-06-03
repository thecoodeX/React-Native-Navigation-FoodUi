import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Filter = props => {
    return (
        <View style={style.container}>
            <Text>
                Hello Filter
            </Text>

        </View>

    );

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default Filter;

