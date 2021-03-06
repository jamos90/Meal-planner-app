import React from 'react';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector } from 'react-redux'

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)

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