import React from 'react';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return(
        <MealList listData={favMeals} navigation={props.navigation}></MealList>
    );
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName={'ios-menu'} onPress={()=> navData.navigation.toggleDrawer()}></Item>
        </HeaderButtons>

    }

};


export default FavoritesScreen