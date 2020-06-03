import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Favourites = props => {
    return (
        <View style={style.container}>
            <Text>
                Hello Favourites
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

export default Favourites;

