import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDeatailScreen';

createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoriesMeals: {
        screen: CategoriesMealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
})