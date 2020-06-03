import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Menu from '../screens/Menu';
import Details from '../screens/Details';
import CategoryScreen from '../screens/CategoryScreen';
import Filter from '../screens/Filter';
import Order from '../screens/Order';
import Favourites from '../screens/Favourites';




const MealsNavigation = createStackNavigator({
    Menu: Menu,
    Deatails: Details,
    CategoryScreen: CategoryScreen,
    Favourites: Favourites,
    Filter: Filter,
    Order: Order

}, {
    initialRouteKey: Menu,
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#304ffe',
            borderTopColor: '#0026ca'

        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
    }
});


//favbar bottom

const FavBar = createStackNavigator({
    Favourites: Favourites,
    Menu: Menu,
}, {
    initialRouteKey: Menu,
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#304ffe',
            borderTopColor: '#0026ca'

        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
    }
});



// bottom navbar
const tabScreen = {
    Home: {
        screen: MealsNavigation, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={24} color='white' />
            }

        }
    },
    Fav: {
        screen: FavBar, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star-outline" size={24} color='white' />
            }

        },

    }

}

const BottomNavigator = createMaterialBottomTabNavigator(
    tabScreen, {
    activeColor: 'white',
    shifting: true,
    barStyle: { backgroundColor: '#304ffe' },
}

);



export default createAppContainer(BottomNavigator);