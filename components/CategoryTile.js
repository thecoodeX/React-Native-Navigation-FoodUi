import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Button } from 'react-native';
import Card from './Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryTile = props => {
    return <View style={style.v}>

        <Card style={style.card}>
            <TouchableOpacity
               onPress={props.onSelect}
                style={style.touch1}
            >
                <View style={style.v1}>
                    <ImageBackground style={style.imageBackground}
                        source={{ uri: props.imgUrl }}
                    >
                        <View style={style.v1}>
                            <Text style={style.t1}>
                                {props.title}
                            </Text>
                        </View>

                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </Card>

    </View>


}

const style = StyleSheet.create({
    v: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',

    },
    card: {
        flex: 1,
        height: 150,
        marginVertical: 10,
        overflow: 'hidden',

    },
    v1: {
        flex: 1,
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'

    },
    imageBackground: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    t1: {

        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    touch1: {
        height: '100%',
        width: '100%'
    }

});

export default CategoryTile;