import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import Card from '../components/Card';



const Details = props => {

    let [price, newPrice] = useState(0);







    let Item = props.navigation.getParam('item');
    return (
        <View style={style.container}>
            <Card style={style.card}>
                <View style={style.v1}>
                    <Image style={style.img}
                        source={{ uri: Item.imageUrl }}
                    >

                    </Image>
                </View>
            </Card>

            <View>
                <Text style={style.t1}>
                    {Item.title}
                </Text>
            </View>

            <View style={style.buttonContainer}>

                <View style={style.button}>
                    <Button title="-"
                        onPress={() => newPrice(price--)}

                    />
                </View>
                <Text style={style.t1}>
                    {price}
                </Text>

                <View style={style.button}>
                    <Button title="+"
                        onPress={() => newPrice(price++)}

                    />
                </View>



            </View>
            <View >

                <View >
                    <Button title="Add To Cart"

                        onPress={() => { props.navigation.navigate('Order') }}

                    />
                </View>


            </View>

        </View>





    );

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: 'flex-start',
    },


    card: {

        height: 300,
        marginVertical: 10,
        overflow: 'hidden',

    },
    v1: {
        flex: 1,
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',


    },
    img: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    t1: {

        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    touch1: {
        height: '100%',
        width: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    button: {
        width: 100,
    },


});

export default Details;

