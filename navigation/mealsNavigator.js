import { createStackNavigator} from 'react-navigation-stack';
import { createTabsNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

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

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator
    },
    Favorites: {
        screen: FavoritesScreen
    }
});

export default createAppContainer(MealsFavTabNavigator);