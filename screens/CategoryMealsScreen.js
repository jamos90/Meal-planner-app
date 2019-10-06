import React from 'react';
import { StyleSheet, View, Text, Button, FlatList} from 'react-native';
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data';

import MealList from '../components/MealList';



const CategoriesMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = availableMeals.filter((meal)=>{
        return meal.categoryIds.indexOf(catId) !== -1
    });

    return(
       <MealList listData={displayedMeals} navigation={props.navigation}></MealList>
    );
};

CategoriesMealScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listStyle: {
        width: '100%'
    }
});

export default CategoriesMealScreen