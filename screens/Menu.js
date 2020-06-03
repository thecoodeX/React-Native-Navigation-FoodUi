import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import GridTile from '../components/GridTile';



const Menu = props => {


    const RenderItem = (itemData) => {
        const imgUri = itemData.item.imgUrl;

        return <GridTile
            imgUrl={imgUri}
            title={itemData.item.title}
            onSelect={() => { props.navigation.navigate('CategoryScreen', { item: itemData.item }) }}

        />

    }
    return (
        <View style={style.container}>
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                keyExtractor={(item, index) => item.id}
                renderItem={RenderItem}

            />
        </View>

    );

}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },


});

export default Menu;

