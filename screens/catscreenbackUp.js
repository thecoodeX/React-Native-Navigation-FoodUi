import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, } from 'react-native';
import Card from '../components/Card';
import { MELES } from '../data/dummy-data';


const catbkp = props => {
    console.log(props);
    let Item = props.navigation.getParam('item');
    const ItemId = Item.id;
    const MealItem = MELES.filter(meal => meal.categoryIds.indexOf(ItemId) >= 0);

    return (
        <View style={style.container}>
            <Card style={style.card}>
                <View style={style.v1}>
                    <Image
                        style={style.Imagestyle}
                        source={{ uri: Item.imgUrl }}
                    >

                    </Image>
                </View>
            </Card>

            <View style={style.v2}>
                <Text style={style.t1}>
                    {Item.title}
                </Text>
            </View>
            <View style={style.v3}>
                <View style={style.buttonContiner}>
                    <Button title="+" />


                </View>
                <View style={style.buttonContiner}>
                    <Button title="-" />


                </View>

            </View>

            <View style={style.v3}>
                <View style={style.buttonContiner2}>
                    <Button title="Add To Cart" />


                </View>


            </View>
        </View>

    );

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10

    },
    card: {
        width: '100%',
    }, v1: {
        height: 200,
        overflow: 'hidden',
        borderRadius: 10
    },
    Imagestyle: {
        height: '100%',
        width: '100%',

    },
    v2: {
        padding: 10
    },
    t1: {
        fontSize: 30,
        fontWeight: 'bold',

    },
    v3: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',

    },
    buttonContiner: {
        width: 50
    }, buttonContiner2: {
        width: 150,
        marginTop: 30
    }




});

export default catbkp;

