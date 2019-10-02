import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createTabsNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator}  from 'react-navigation-material-bottom-tabs'


import Colors from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavouritesScreen';


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoriesMeals: {
        screen: CategoriesMealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

createStackNavigator({
    Favorites: {
        screen: FavoritesScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
})

const tabScreenConfig =  {

    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {activeColor: 'white', shifting: true})  : createBottomTabNavigator  ({
    tabScreenConfig,
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }    
});

export default createAppContainer(MealsFavTabNavigator);