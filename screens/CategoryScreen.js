import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import Card from '../components/Card';
import { MEALS } from '../data/dummy-data';
import { AppLoading } from 'expo';
import CategoryTile from '../components/CategoryTile';


const CategoryScreen = props => {

    let Item = props.navigation.getParam('item');
    const ItemId = Item.id;
    console.log(ItemId);
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(ItemId) >= 0
    );


    const RenderMealItem = (itemdata) => {

        return <CategoryTile
            imgUrl={itemdata.item.imageUrl}
            title={itemdata.item.title}
            onSelect={() => { props.navigation.navigate('Deatails', { item: itemdata.item }) }}
        >


        </CategoryTile>
    }



    return (
        <View style={style.container}>

            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={RenderMealItem}

            />
        </View>

    );

}

const style = StyleSheet.create({

    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',



    },

    t1: {
        // fontSize: 20,
        // fontWeight: 'bold'
    },
    flatList: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }



});

export default CategoryScreen;

