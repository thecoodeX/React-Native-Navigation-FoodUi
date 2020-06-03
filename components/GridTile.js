import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Card from './Card';

const GridTile = props => {
    return <Card style={style.card}>
        <TouchableOpacity onPress={props.onSelect}
            style={style.touch1}

        >
            <ImageBackground style={style.imageBackground}
                source={{ uri: props.imgUrl }}
            >


                <View style={style.v1}>
                    <Text style={style.t1}>
                        {props.title}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity >

    </Card >

}

const style = StyleSheet.create({


    card: {
        flex: 1,
        width: Dimensions.get('window').width / 2,
        margin: 10,
        overflow: 'hidden'


    },

    v1: {
        flex: 1,
        height: 100,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'


    },
    t1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageBackground: {
        flex: 1,
        height: '100%',
        width: '100%',


    }
});

export default GridTile;